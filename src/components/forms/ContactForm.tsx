"use client"

import { useState } from 'react';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

// Componente para campos de texto simples
function FormField({ label, id, placeholder, type = 'text', required = false }: {
  label: string; id: string; placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
      />
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const portalId = '50515665';
  const formGuid = '2e00e5ca-e03d-4606-a01f-0cf7ad2609b6';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'firstname',    value: data.get('nome') || '' },
            { name: 'sobrenome',    value: data.get('sobrenome') || '' },
            { name: 'email',        value: data.get('email') || '' },
            { name: 'message',      value: data.get('mensagem') || '' },
            { name: 'coloque_seu_linkedin__caso_tenha_', value: data.get('linkedin') || '' },
            { name: 'qual_e_o_seu_interesse_', value: data.get('interesse') || '' },
          ],
          legalConsentOptions: {
            consent: {
              consentToProcess: !!data.get('dados_pessoais'),
              text: 'Eu concordo em permitir que a Leterizza armazene e processe meus dados pessoais.',
              communications: [
                {
                  subscriptionTypeId: 999, // ID real de assinatura de marketing
                  value: !!data.get('comunicacoes'),
                  text: 'Eu concordo em receber outras comunicações da Leterizza.',
                }
              ]
            }
          },
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { raw: errorText };
        }
        console.error("HubSpot Submission Error (Detalhado):", JSON.stringify(errorData, null, 2));
        setErrorMessage(errorData?.errors?.[0]?.message || errorData?.message || 'Erro ao enviar dados. Verifique o console ou tente novamente.');
        setStatus('error');
      }
    } catch (err) {
      console.error("Connection error during form submission:", err);
      setErrorMessage('Falha na conexão. Verifique sua internet e tente novamente.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center w-full max-w-lg min-h-[450px] border border-green-100 shadow-inner">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-extrabold text-green-900 mb-3 leading-tight">Mensagem enviada!</h3>
        <p className="text-green-700 font-medium text-lg leading-relaxed max-w-md">
          Agradecemos o contato. Nossa equipe vai analisar sua mensagem e retornar o mais breve possível.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 font-bold text-[#8B3DFF] text-sm tracking-wide bg-white px-6 py-3 rounded-xl border border-purple-200 hover:bg-purple-50 transition-all shadow-sm"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const opcoesInteresse = [
    "Quero participar do time",
    "Sou estudante e quero saber mais",
    "Sou investidor/parceiro",
    "Represento uma escola/instituição",
    "Outro"
  ];

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl w-full max-w-lg text-gray-900 shadow-2xl border border-gray-100 relative z-10 flex flex-col justify-center">
      <form className="space-y-4 sm:space-y-5 text-left w-full" onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Nome" id="nome" placeholder="Seu primeiro nome" required />
          <FormField label="Sobrenome" id="sobrenome" placeholder="Seu sobrenome" required />
        </div>

        <FormField label="E-mail" id="email" placeholder="Digite seu e-mail" type="email" required />
        <FormField label="LinkedIn (opcional)" id="linkedin" placeholder="Coloque seu LinkedIn (caso tenha)" />

        {/* Motivo do Contato / Interesse (Bolinhas/Rádio) */}
        <div className="pt-1">
          <label className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">
            Qual o motivo do seu contato? <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-2.5 mt-2 bg-gray-50/70 p-4 rounded-xl border border-gray-100">
            {opcoesInteresse.map((opcao) => (
              <label key={opcao} className="flex items-center gap-3 cursor-pointer group leading-snug">
                <input
                  required
                  type="radio"
                  name="interesse"
                  value={opcao}
                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 cursor-pointer shrink-0"
                />
                <span className="text-xs text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                  {opcao}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="mensagem" className="block text-xs font-extrabold mb-1 text-[#2E1065] ml-1 uppercase">
            Escreva sua mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            id="mensagem"
            name="mensagem"
            placeholder="Conte um pouco mais sobre o motivo do seu contato..."
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 resize-none transition-all outline-none"
          />
        </div>

        {/* Termos de Privacidade e Consentimento LGPD */}
        <div className="space-y-3 pt-3 border-t border-gray-100 text-left mt-2">
          <p className="text-xs text-gray-500 leading-relaxed font-normal">
            A Leterizza tem o compromisso de proteger e respeitar sua privacidade e nós usaremos suas informações pessoais somente para administrar sua conta e fornecer os produtos e serviços que você nos solicitou.
          </p>
          
          <label className="flex items-start gap-3 cursor-pointer group bg-gray-50/50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
            <input type="checkbox" name="comunicacoes" className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 cursor-pointer shrink-0" />
            <span className="text-xs text-gray-600 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
              Eu concordo em receber outras comunicações da Leterizza.
            </span>
          </label>

          <p className="text-xs text-gray-500 leading-relaxed font-normal pt-1">
            Para fornecer o conteúdo solicitado, precisamos armazenar e processar seus dados pessoais. Se você consentir com o armazenamento dos seus dados pessoais para essa finalidade, marque a caixa de seleção abaixo.
          </p>

          <label className="flex items-start gap-3 cursor-pointer group bg-gray-50/50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
            <input required type="checkbox" name="dados_pessoais" className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 cursor-pointer shrink-0" />
            <span className="text-xs text-gray-600 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
              Eu concordo em permitir que a Leterizza armazene e processe meus dados pessoais.*
            </span>
          </label>

          <p className="text-[10px] text-gray-400 leading-relaxed py-1 border-t border-gray-100 mt-4 pt-4">
            Você pode cancelar o recebimento dessas comunicações quando quiser. Para obter mais informações sobre esse cancelamento, nossas práticas de privacidade e nosso compromisso em proteger e respeitar sua privacidade, confira nossa Política de Privacidade.
          </p>
        </div>

        {/* Erro */}
        {status === 'error' && (
          <div className="bg-red-50 text-red-600 text-xs font-bold p-3.5 rounded-xl flex items-center gap-2 border border-red-100">
            <AlertCircle className="w-4 h-4 shrink-0" /> {errorMessage}
          </div>
        )}

        {/* Botão */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#8B3DFF] text-white font-extrabold text-base py-4 rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Enviando dados...</>
          ) : (
            'Enviar mensagem'
          )}
        </button>
      </form>
    </div>
  );
}
