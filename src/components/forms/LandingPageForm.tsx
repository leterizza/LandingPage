"use client"

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LSCPzmku0yjENNcwEcg2eY";

export function LandingPageForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // HubSpot Config
    const portalId = "50515665";
    const formGuid = "8d6decc9-3378-4094-b3ce-394f71ee50c4";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "firstname",       value: data.firstname },
            { name: "lastname",        value: data.lastname },
            { name: "email",           value: data.email },
            { name: "tipo_de_escola",  value: data.instituicao },
            { name: "emque_ano_voce_esta", value: data.ano },
          ],
          // Consentimentos LGPD — estrutura obrigatória do HubSpot
          legalConsentOptions: {
            consent: {
              // "Eu concordo em armazenar e processar meus dados pessoais"
              consentToProcess: !!data.dados_pessoais,
              text: "Eu concordo em permitir que a Leterizza armazene e processe meus dados pessoais.",
              communications: [
                {
                  // "Eu concordo em receber outras comunicações da Leterizza"
                  // ⚠️ ATENÇÃO: Substitua o número abaixo pelo ID real do tipo de assinatura.
                  // Encontre em: HubSpot → Configurações → Marketing → Email → Tipos de Assinatura
                  subscriptionTypeId: 999,
                  value: !!data.comunicacoes,
                  text: "Eu concordo em receber outras comunicações da Leterizza.",
                }
              ]
            }
          },
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const errorData = await response.json();
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
      </div>
    );
  }

  const inputClass = "w-full bg-[#FAFAFA] border border-[#E6E6E6] rounded-[14px] px-[13px] py-[13px] text-sm focus:ring-2 focus:ring-primary-450 focus:border-primary-450 outline-none transition-all";
  const labelClass = "block text-[11px] font-bold mb-1.5 text-primary-775 ml-0.5 uppercase tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left w-full">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Nome</label>
          <input required name="firstname" type="text" placeholder="Seu nome" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Sobrenome</label>
          <input required name="lastname" type="text" placeholder="Seu sobrenome" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>E-mail</label>
        <input required name="email" type="email" placeholder="seu@email.com" className={inputClass} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Você estuda em</label>
          <select required name="instituicao" className={`${inputClass} text-gray-600 font-medium`}>
              <option value="">Selecione</option>
              <option value="Escola Pública">Escola Pública</option>
              <option value="Particular">Particular</option>
              <option value="Já terminei o ensino médio">Já terminei o ensino médio</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Qual ano</label>
          <select required name="ano" className={`${inputClass} text-gray-600 font-medium`}>
              <option value="">Selecione</option>
              <option value="1º EM">1º EM</option>
              <option value="2º EM">2º EM</option>
              <option value="3º EM">3º EM</option>
              <option value="Já me formei no EM">Já me formei no EM</option>
              <option value="Cursinho pré-vestibular">Cursinho pré-vestibular</option>
          </select>
        </div>
      </div>

      <div className="space-y-2.5 pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer group">
              <input type="checkbox" name="comunicacoes" className="mt-0.5 w-[17px] h-[17px] rounded-[5px] text-primary-450 focus:ring-primary-450 border-gray-300 cursor-pointer shrink-0" />
              <span className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                  Eu concordo em receber outras comunicações da Leterizza.
              </span>
          </label>
          <label className="flex items-start gap-2.5 cursor-pointer group">
              <input required type="checkbox" name="dados_pessoais" className="mt-0.5 w-[17px] h-[17px] rounded-[5px] text-primary-450 focus:ring-primary-450 border-gray-300 cursor-pointer shrink-0" />
              <span className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                  Eu concordo que a Leterizza armazene e processe meus dados pessoais.*
              </span>
          </label>
      </div>

      <p className="text-[10.5px] text-gray-400 leading-relaxed py-1 border-t border-gray-100 pt-3">
        A Leterizza tem o compromisso de proteger e respeitar sua privacidade, e usará suas informações apenas para administrar sua inscrição e a fase de testes. Você pode cancelar o recebimento quando quiser. Veja os{' '}
        <Link href="/termos" className="text-primary-450 font-semibold hover:underline">Termos de uso</Link>{' '}
        e a{' '}
        <Link href="/privacidade" className="text-primary-450 font-semibold hover:underline">Política de privacidade</Link>.
      </p>

      {status === "error" && (
        <div className="bg-red-50 text-red-600 text-xs font-bold p-3 rounded-lg flex items-center gap-2 border border-red-100">
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
    </form>
  );
}
