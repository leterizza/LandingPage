"use client"

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

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
      <div className="bg-green-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px] border border-green-100 shadow-inner">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-extrabold text-green-900 mb-3">Tudo certo!</h3>
        <p className="text-green-700 font-medium text-lg leading-relaxed">
          Seus dados foram enviados com sucesso. Fique de olho no seu e-mail para as próximas novidades da Leterizza.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left w-full">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">Nome</label>
          <input required name="firstname" type="text" placeholder="Seu nome" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">Sobrenome</label>
          <input required name="lastname" type="text" placeholder="Seu sobrenome" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all" />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">E-mail</label>
        <input required name="email" type="email" placeholder="Digite seu e-mail" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all" />
      </div>

      <div>
        <label className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">Você estuda em:</label>
        <select required name="instituicao" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none text-gray-600 transition-all font-medium">
            <option value="">Selecione uma opção</option>
            <option value="Escola Pública">Escola Pública</option>
            <option value="Particular">Particular</option>
            <option value="Já terminei o ensino médio">Já terminei o ensino médio</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">Em que ano você está?</label>
        <select required name="ano" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none text-gray-600 transition-all font-medium">
            <option value="">Selecione o seu ano</option>
            <option value="1º EM">1º EM</option>
            <option value="2º EM">2º EM</option>
            <option value="3º EM">3º EM</option>
            <option value="Já me formei no EM">Já me formei no EM</option>
            <option value="Cursinho pré-vestibular">Cursinho pré-vestibular</option>
        </select>
      </div>
      
      <div className="space-y-3 pt-3">
          <label className="flex items-start gap-3 cursor-pointer group bg-gray-50/50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
              <input type="checkbox" name="comunicacoes" className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 cursor-pointer" />
              <span className="text-xs text-gray-600 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
                  Eu concordo em receber outras comunicações da Leterizza.
              </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group bg-gray-50/50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
              <input required type="checkbox" name="dados_pessoais" className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 cursor-pointer" />
              <span className="text-xs text-gray-600 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
                  Eu concordo em permitir que a Leterizza armazene e processe meus dados pessoais.*
              </span>
          </label>
      </div>

      <p className="text-[10px] text-gray-400 leading-relaxed py-1 border-t border-gray-100 mt-4 pt-4">
        A Leterizza tem o compromisso de proteger e respeitar sua privacidade e nós usaremos suas informações pessoais somente para administrar sua conta e fornecer os produtos e serviços que você nos solicitou. Você pode cancelar o recebimento dessas comunicações quando quiser.
      </p>

      {status === "error" && (
        <div className="bg-red-50 text-red-600 text-xs font-bold p-3 rounded-lg flex items-center gap-2 border border-red-100">
            <AlertCircle className="w-4 h-4 shrink-0" /> {errorMessage}
        </div>
      )}

      <button disabled={status === "loading"} type="submit" className="w-full bg-[#8B3DFF] text-white font-extrabold text-base py-4 rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
          {status === "loading" ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Enviando dados...</>
          ) : (
              "Enviar"
          )}
      </button>
    </form>
  );
}
