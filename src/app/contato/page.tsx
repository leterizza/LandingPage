import { Mail, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// --- COMPONENTE AUXILIAR PARA OS CAMPOS DO FORMULÁRIO ---
function FormField({ label, id, placeholder, type = 'text' }: { label: string, id: string, placeholder: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-neutral-950 text-sm md:text-base font-bold">
        {label}
      </label>
      <input 
        type={type} 
        id={id} 
        name={id}
        placeholder={placeholder}
        className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm md:text-base font-normal rounded-full px-5 py-3 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
      />
    </div>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function ContatoPage() {
  const formFields = [
    { label: "Nome completo", id: "nome", placeholder: "Digite o seu nome completo" },
    { label: "E-mail para contato", id: "email", placeholder: "Digite o seu e-mail", type: 'email' },
    { label: "Telefone/WhatsApp (opcional)", id: "telefone", placeholder: "Digite o seu telefone", type: 'tel' },
    { label: "Você é:", id: "perfil", placeholder: "Ex: Estudante, Educador..." },
    { label: "Cidade e estado", id: "localizacao", placeholder: "Sua cidade e estado" },
    { label: "Como conheceu a Leterizza?", id: "origem", placeholder: "Nos conte como nos achou" },
    { label: "Qual o motivo do seu contato", id: "motivo", placeholder: "Assunto do contato" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 font-sans flex flex-col">
      <Header />

      <main className="flex-1 w-full flex flex-col pt-32 pb-20">
        
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 mb-20 md:mb-32">
          
          <div className="bg-primary-900 rounded-[32px] md:rounded-[40px] relative overflow-hidden flex flex-col lg:flex-row shadow-xl">
           
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-secondary-400 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

           
            <div className="flex-1 p-8 md:p-12 lg:p-16 text-white z-10 flex flex-col justify-center">
              <div className="bg-white text-primary-900 w-fit px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 mb-8 shadow-sm">
                <Mail size={16} />
                Contato
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Fale com a {' '}
                <span className="relative inline-block whitespace-nowrap text-white">
                  Leterizza
                  <svg className="absolute left-0 -bottom-2 w-full h-3 text-secondary-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              
              <div className="text-primary-50 text-base md:text-lg font-normal space-y-6 max-w-lg mb-10 leading-relaxed">
                <p>Queremos ouvir você! Seja para tirar dúvidas, propor parcerias ou compartilhar ideias, seu contato é muito importante para nós.</p>
                <p>A Leterizza é feita por pessoas e para pessoas. Se você é estudante, educador, responsável, parceiro ou quer se juntar à nossa missão de democratizar o acesso à educação, este é o lugar certo.</p>
              </div>
              
              <p className="text-white text-base md:text-lg font-bold mt-auto max-w-md">
                Preencha o formulário e conte pra gente como podemos te ajudar.
              </p>
            </div>

          
            <div className="flex-1 p-4 md:p-8 lg:p-12 z-10 flex flex-col justify-center lg:items-end">
              <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-lg">
                
                <form className="flex flex-col gap-5">
                
                  {formFields.map((field) => (
                    <FormField key={field.id} {...field} />
                  ))}

                
                  <div className="flex flex-col gap-2">
                    <label htmlFor="mensagem" className="text-neutral-950 text-sm md:text-base font-bold">
                      Mensagem detalhada
                    </label>
                    <textarea 
                      id="mensagem" 
                      name="mensagem"
                      placeholder="Escreva sua mensagem aqui"
                      rows={4}
                      className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm md:text-base font-normal rounded-2xl px-5 py-4 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none transition-colors"
                    />
                  </div>

                 
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="novidades" className="text-neutral-950 text-sm md:text-base font-bold">
                      Você gostaria de receber novidades e conteúdos da Leterizza?
                    </label>
                    <input 
                      type="text" 
                      id="novidades" 
                      name="novidades"
                      placeholder="Sim ou Não"
                      className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm md:text-base font-normal rounded-full px-5 py-3 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors mb-2"
                    />
                    <p className="text-neutral-500 text-xs md:text-sm font-normal text-center px-4 leading-relaxed">
                      Ao se cadastrar, você concorda em receber e-mails sobre a Leterizza. Você pode cancelar a qualquer momento.
                    </p>
                  </div>

                 
                  <button type="submit" className="mt-4 bg-primary-500 text-white text-base md:text-lg font-bold w-full py-4 rounded-full hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-primary-200">
                    Enviar
                  </button>
                </form>

              </div>
            </div>
          </div>
        </section>

    
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-neutral-950 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Outros canais de contato
          </h2>
          <p className="text-neutral-600 text-base md:text-lg font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
            Se preferir, você também pode entrar em contato conosco por outros meios:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           
            <div className="bg-primary-50 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-md border border-primary-100">
              <div className="bg-primary-900 text-white p-4 rounded-full">
                <Mail size={24} />
              </div>
              <h3 className="text-primary-900 text-lg font-bold">E-mail</h3>
              <a href="mailto:contato@leterizza.com.br" className="text-primary-600 text-base font-normal hover:text-primary-800 transition-colors">
                contato@leterizza.com.br
              </a>
            </div>

            <div className="bg-primary-50 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-md border border-primary-100">
              <div className="bg-primary-900 text-white p-4 rounded-full">
                <Instagram size={24} />
              </div>
              <h3 className="text-primary-900 text-lg font-bold">Instagram</h3>
              <a href="https://instagram.com/leterizza" className="text-primary-600 text-base font-normal hover:text-primary-800 transition-colors">
                @leterizza
              </a>
            </div>

            <div className="bg-primary-50 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-md border border-primary-100">
              <div className="bg-primary-900 text-white p-4 rounded-full">
                <Linkedin size={24} />
              </div>
              <h3 className="text-primary-900 text-lg font-bold">LinkedIn</h3>
              <a href="#" className="text-primary-600 text-base font-normal hover:text-primary-800 transition-colors">
                Leterizza
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}