export const IDADE_MINIMA = 16;

export interface DataNascimento {
  dia: number;
  mes: number;
  ano: number;
}

// Aplica a máscara dd/mm/aaaa enquanto a pessoa digita. Se o navegador
// preencher automaticamente em formato ISO (aaaa-mm-dd), converte antes.
export function aplicarMascaraData(valor: string): string {
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor);
  const digitos = (iso ? `${iso[3]}${iso[2]}${iso[1]}` : valor.replace(/\D/g, '')).slice(0, 8);
  if (digitos.length <= 2) return digitos;
  if (digitos.length <= 4) return `${digitos.slice(0, 2)}/${digitos.slice(2)}`;
  return `${digitos.slice(0, 2)}/${digitos.slice(2, 4)}/${digitos.slice(4)}`;
}

// Lê "dd/mm/aaaa". Devolve null se não for uma data real, for futura ou anterior a 1900.
export function lerDataNascimento(texto: string, hoje: Date = new Date()): DataNascimento | null {
  const partes = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(texto.trim());
  if (!partes) return null;

  const dia = Number(partes[1]);
  const mes = Number(partes[2]);
  const ano = Number(partes[3]);
  if (ano < 1900) return null;

  const data = new Date(ano, mes - 1, dia);
  const existe = data.getFullYear() === ano && data.getMonth() === mes - 1 && data.getDate() === dia;
  if (!existe || data > hoje) return null;

  return { dia, mes, ano };
}

export function calcularIdade({ dia, mes, ano }: DataNascimento, hoje: Date = new Date()): number {
  const mesAtual = hoje.getMonth() + 1;
  const jaFezAniversario = mesAtual > mes || (mesAtual === mes && hoje.getDate() >= dia);
  return hoje.getFullYear() - ano - (jaFezAniversario ? 0 : 1);
}

export function paraIso({ dia, mes, ano }: DataNascimento): string {
  return `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
}
