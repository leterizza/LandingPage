"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, AlertCircle, Heart } from "lucide-react";
import { IDADE_MINIMA, aplicarMascaraData, calcularIdade, lerDataNascimento, paraIso } from "@/lib/idade";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LSCPzmku0yjENNcwEcg2eY";

// Nomes internos das propriedades de contato no HubSpot. Se o nome interno criado
// lá for diferente do que está aqui, ajuste só este bloco.
const CAMPOS_HUBSPOT = {
  nascimento: "date_of_birth",
  novidades: "consentimento_novidades",
  novidadesDataHora: "consentimento_novidades_data_hora",
  novidadesVersaoTexto: "consentimento_novidades_versao_texto",
};

// Texto exato mostrado ao lado do checkbox. Ao mudar o texto, mude também a versão:
// é ela que fica gravada no contato como prova do que a pessoa aceitou.
const TEXTO_NOVIDADES = "Quero receber novidades e conteúdos da Leterizza.";
const VERSAO_TEXTO_NOVIDADES = "novidades-2026-09-v1";

// Envio mais rápido que isso, com o formulário recém-aberto, é de robô.
const TEMPO_MINIMO_MS = 2000;

const inputClass = "w-full bg-[#FAFAFA] border border-[#E6E6E6] rounded-[14px] px-[13px] py-[13px] text-sm focus:ring-2 focus:ring-primary-450 focus:border-primary-450 outline-none transition-all";
const labelClass = "block text-[11px] font-bold mb-1.5 text-primary-775 ml-0.5 uppercase tracking-wide";
const legalTextClass = "text-xs leading-relaxed text-neutral-700";
const legalLinkClass = "font-semibold text-primary-600 underline";

type Status = "idle" | "loading" | "success" | "error" | "underage";

export function LandingPageForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [erroNascimento, setErroNascimento] = useState("");
  const abertoEm = useRef(0);

  useEffect(() => {
    abertoEm.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setErroNascimento("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    // Robô: campo escondido preenchido ou envio rápido demais. Finge sucesso e não envia nada.
    if (data.xk_referencia || Date.now() - abertoEm.current < TEMPO_MINIMO_MS) {
      setStatus("success");
      return;
    }

    const nascimento = lerDataNascimento(String(data.nascimento ?? ""));
    if (!nascimento) {
      setErroNascimento("Confira a data de nascimento. Use o formato dd/mm/aaaa.");
      return;
    }

    // Menor de idade: nada é enviado. Os dados só existiram na tela e somem quando o formulário sai dela.
    if (calcularIdade(nascimento) < IDADE_MINIMA) {
      setStatus("underage");
      return;
    }

    setStatus("loading");

    // HubSpot Config
    const portalId = "50515665";
    const formGuid = "8d6decc9-3378-4094-b3ce-394f71ee50c4";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const aceitaNovidades = !!data.novidades;
    const fields = [
      { name: "firstname", value: String(data.firstname ?? "").trim() },
      { name: "email", value: String(data.email ?? "").trim() },
      { name: CAMPOS_HUBSPOT.nascimento, value: paraIso(nascimento) },
      { name: "tipo_de_escola", value: String(data.instituicao ?? "") },
      { name: "emque_ano_voce_esta", value: String(data.ano ?? "") },
      { name: CAMPOS_HUBSPOT.novidades, value: aceitaNovidades ? "true" : "false" },
    ];
    if (aceitaNovidades) {
      fields.push(
        { name: CAMPOS_HUBSPOT.novidadesDataHora, value: new Date().toISOString() },
        { name: CAMPOS_HUBSPOT.novidadesVersaoTexto, value: VERSAO_TEXTO_NOVIDADES },
      );
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Sem legalConsentOptions: não há checkbox de "processar dados" (a lista de espera
        // se apoia no art. 7º, V da LGPD). O aceite de novidades vai nos campos acima.
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const errorData = await response.json().catch(() => null);
        console.error("HubSpot Error:", errorData);
        setStatus("error");
        setErrorMessage("Erro ao enviar. Verifique seus dados e tente novamente.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[360px] border border-green-100 shadow-inner">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-extrabold text-green-900 mb-3">Tudo certo!</h3>
        <p className="text-green-700 font-medium leading-relaxed mb-6">
          Você entrou na lista da fase de validação. Entre agora mesmo na nossa comunidade no WhatsApp e fique de olho no seu e-mail para os próximos passos.
        </p>
        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-base px-6 py-4 rounded-[16px] hover:bg-[#1ebe5a] transition-colors shadow-[0_10px_24px_rgba(37,211,102,0.35)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20z" /></svg>
          Entrar na comunidade no WhatsApp
        </a>
        <p className="mt-4 max-w-xs text-xs leading-relaxed text-green-900">
          É uma comunidade no WhatsApp; seu número pode ficar visível para os outros participantes.
        </p>
      </div>
    );
  }

  if (status === "underage") {
    return (
      <div role="status" className="bg-primary-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[360px] border border-primary-100">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 text-primary-450 shadow-md">
          <Heart className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-extrabold text-primary-775 mb-3 text-balance">
          A Leterizza é para maiores de {IDADE_MINIMA} anos por enquanto.
        </h3>
        <p className="text-neutral-700 font-medium leading-relaxed">Obrigado pelo interesse!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left w-full">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="lp-nome" className={labelClass}>Nome</label>
          <input id="lp-nome" required name="firstname" type="text" autoComplete="given-name" placeholder="Seu nome" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lp-nascimento" className={labelClass}>Data de nascimento</label>
          <input
            id="lp-nascimento"
            required
            name="nascimento"
            type="text"
            inputMode="numeric"
            maxLength={10}
            placeholder="dd/mm/aaaa"
            aria-invalid={erroNascimento ? true : undefined}
            aria-describedby={erroNascimento ? "lp-nascimento-erro" : undefined}
            onChange={(e) => { e.target.value = aplicarMascaraData(e.target.value); }}
            className={inputClass}
          />
        </div>
      </div>

      {erroNascimento && (
        <p id="lp-nascimento-erro" role="alert" className="-mt-2 text-xs font-semibold text-red-700">
          {erroNascimento}
        </p>
      )}

      <div>
        <label htmlFor="lp-email" className={labelClass}>E-mail</label>
        <input id="lp-email" required name="email" type="email" autoComplete="email" placeholder="seu@email.com" className={inputClass} />
      </div>

      <div className="grid grid-cols-2 items-end gap-3">
        <div>
          <label htmlFor="lp-instituicao" className={labelClass}>Você estuda em</label>
          <select id="lp-instituicao" required name="instituicao" className={`${inputClass} text-gray-600 font-medium`}>
              <option value="">Selecione</option>
              <option value="Escola Pública">Escola Pública</option>
              <option value="Particular">Particular</option>
              <option value="Já terminei o ensino médio">Já terminei o ensino médio</option>
          </select>
        </div>
        <div>
          <label htmlFor="lp-ano" className={labelClass}>Em que ano você está?</label>
          <select id="lp-ano" required name="ano" className={`${inputClass} text-gray-600 font-medium`}>
              <option value="">Selecione</option>
              <option value="1º EM">1º EM</option>
              <option value="2º EM">2º EM</option>
              <option value="3º EM">3º EM</option>
              <option value="Já me formei no EM">Já me formei no EM</option>
              <option value="Cursinho pré-vestibular">Cursinho pré-vestibular</option>
          </select>
        </div>
      </div>

      <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer group">
              <input type="checkbox" name="novidades" className="mt-0.5 w-[17px] h-[17px] rounded-[5px] text-primary-450 focus:ring-primary-450 border-gray-300 cursor-pointer shrink-0" />
              <span className="text-xs text-neutral-700 leading-relaxed group-hover:text-neutral-800 transition-colors">
                  {TEXTO_NOVIDADES}
              </span>
          </label>
      </div>

      {/* Isca para robôs: fora da tela, sem foco, escondido de leitores de tela */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Não preencha este campo
          <input type="text" name="xk_referencia" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className={`${legalTextClass} border-t border-gray-100 pt-3`}>
        Pedimos esses dados para criar sua experiência de estudo e entender o perfil de quem usa a Leterizza. Não vendemos seus dados e não usamos para publicidade. Você pode pedir a exclusão a qualquer momento em{' '}
        <a href="mailto:contato@leterizza.com.br" className={legalLinkClass}>contato@leterizza.com.br</a>.
      </p>

      {status === "error" && (
        <div role="alert" className="bg-red-50 text-red-700 text-xs font-bold p-3 rounded-lg flex items-center gap-2 border border-red-100">
            <AlertCircle className="w-4 h-4 shrink-0" /> {errorMessage}
        </div>
      )}

      <button disabled={status === "loading"} type="submit" className="w-full bg-primary-450 text-white font-bold text-[17px] py-[18px] rounded-[18px] hover:bg-primary-550 transition-colors shadow-[0_10px_24px_rgba(139,61,255,0.3)] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
          {status === "loading" ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
          ) : (
              "Quero ser um dos primeiros"
          )}
      </button>

      <p className="text-center font-[family-name:var(--font-caveat)] text-xl text-primary-450 !mt-2">
        e já entrar na comunidade hoje
      </p>

      <p className={`${legalTextClass} text-center`}>
        Ao enviar, você declara que leu os{' '}
        <Link href="/termos" target="_blank" rel="noopener noreferrer" className={legalLinkClass}>
          Termos de Uso<span className="sr-only"> (abre em nova aba)</span>
        </Link>{' '}
        e a{' '}
        <Link href="/privacidade" target="_blank" rel="noopener noreferrer" className={legalLinkClass}>
          Política de Privacidade<span className="sr-only"> (abre em nova aba)</span>
        </Link>.
      </p>
    </form>
  );
}
