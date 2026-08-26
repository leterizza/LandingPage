#!/usr/bin/env node
// PreToolUse hook (matcher: Write|Edit) -- trava minima e deliberada.
// Escopo decidido: skill de edicao de site pode fazer mudancas GRANDES,
// so nao pode tocar (1) configuracao de versionamento (git/CI) ou
// (2) segredos/credenciais. "Nao deixar pesado e com erros" fica com a
// skill testar antes de fechar, nao e um bloqueio de arquivo.

const DENY_SEGMENTS = [
  ".git/",
  ".github/",
  ".claude/settings.json",
  ".claude/settings.local.json",
  ".claude/hooks/",
];

const DENY_FILENAME_PATTERNS = [
  /^\.gitignore$/,
  /^\.env/, // .env, .env.local, .env.production...
];

function normalize(p) {
  return p.replace(/\\/g, "/").toLowerCase();
}

let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  // Sem process.exit() explicito -- no Windows, console.log pra pipe pode
  // ser assincrono, e exit() logo depois corta a escrita antes do flush.
  let input;
  try {
    input = JSON.parse(raw || "{}");
  } catch {
    return;
  }

  const filePath = input?.tool_input?.file_path;
  if (!filePath) return;

  const norm = normalize(filePath);
  const basename = norm.split("/").pop() || "";

  const hitSegment = DENY_SEGMENTS.find((seg) => norm.includes("/" + seg) || norm.startsWith(seg));
  const hitFilename = DENY_FILENAME_PATTERNS.find((re) => re.test(basename));

  if (hitSegment || hitFilename) {
    const motivo = hitSegment
      ? `Caminho dentro de '${hitSegment}' — configuração de versionamento/CI ou deste próprio sistema de skill.`
      : `'${basename}' é segredo/config sensível (variáveis de ambiente ou .gitignore), não conteúdo do site.`;
    console.log(
      JSON.stringify({
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "deny",
          permissionDecisionReason:
            `Bloqueado: ${motivo} Isso está fora do escopo desta skill mesmo pra mudanças grandes — peça pra um desenvolvedor.`,
        },
      })
    );
  }
});
