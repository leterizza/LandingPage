import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  CheckCircle2, Star, ShieldCheck, 
  DollarSign, Users, LayoutDashboard, 
  Gamepad2, BookOpen, Lock, Bell, Zap, Trophy
} from 'lucide-react';
import { LandingPageForm } from '@/components/forms/LandingPageForm';

export const metadata: Metadata = {
  title: "Leterizza | Preparação Gratuita e Gamificada para Vestibulares",
  description: "Prepare-se para o ENEM e outros vestibulares sem gastar uma fortuna! A Leterizza é a plataforma gratuita que democratiza o acesso ao ensino superior.",
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 overflow-x-hidden">
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-40 md:pt-52 pb-20 px-6 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto relative w-full">
            
            {/* Grupo de Post-its da Esquerda (1, 2, 3) */}
            <div className="absolute top-[10px] md:top-2 left-[-60px] sm:left-[-40px] xl:left-[15px] block z-0 w-[140px] sm:w-[180px] lg:w-[240px] h-[300px] lg:h-[400px] select-none pointer-events-none">
              {/* Post-it 1 */}
              <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rotate-[-13deg] filter drop-shadow-sm">
                <Image
                  src="/static/postit/nota1.png"
                  alt="Post-it sobre química"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-11">
                  <p style={{ fontFamily: 'var(--font-caveat), "Bradley Hand", cursive' }} className="text-[#4A3B69] font-bold text-[11px] sm:text-[15px] lg:text-[19px] xl:text-[21px] text-center leading-none tracking-wide">
                    estudar quimica orgânica
                  </p>
                </div>
              </div>

              {/* Post-it 2 */}
              <div className="absolute top-[60px] left-[25px] sm:top-[80px] sm:left-[35px] lg:top-[105px] lg:left-[45px] w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rotate-[5deg] filter drop-shadow-sm">
                <Image
                  src="/static/postit/nota2.png"
                  alt="Post-it sobre botânica"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-11">
                  <p style={{ fontFamily: 'var(--font-caveat), "Bradley Hand", cursive' }} className="text-[#374151] font-bold text-[9px] sm:text-[13px] lg:text-[15px] xl:text-[17px] text-center leading-tight tracking-wide">
                    Tirar dúvidas com o professor sobre botânica
                  </p>
                </div>
              </div>

              {/* Post-it 3 */}
              <div className="absolute top-[120px] left-[0px] sm:top-[160px] sm:left-[0px] lg:top-[210px] lg:left-[0px] w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rotate-[-10deg] filter drop-shadow-sm">
                <Image
                  src="/static/postit/nota3.png"
                  alt="Post-it sobre matemática"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-11">
                  <p style={{ fontFamily: 'var(--font-caveat), "Bradley Hand", cursive' }} className="text-[#1E3A8A] font-bold text-[10px] sm:text-[14px] lg:text-[16px] xl:text-[18px] text-center leading-snug tracking-wide">
                    Fazer exercícios da lista de matemática
                  </p>
                </div>
              </div>
            </div>
            
            {/* Grupo de Post-its da Direita (4, 5, 6) */}
            <div className="absolute top-36 md:top-48 right-[-60px] sm:right-[-40px] xl:right-[35px] block z-0 w-[150px] sm:w-[190px] lg:w-[260px] h-[300px] lg:h-[400px] select-none pointer-events-none">
              {/* Post-it 4 */}
              <div className="absolute top-0 right-[10px] sm:right-[12px] lg:right-[15px] w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rotate-[3deg] filter drop-shadow-sm">
                <Image
                  src="/static/postit/nota4.png"
                  alt="Post-it sobre química"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-11">
                  <p style={{ fontFamily: 'var(--font-caveat), "Bradley Hand", cursive' }} className="text-[#713F12] font-bold text-[11px] sm:text-[15px] lg:text-[19px] xl:text-[21px] text-center leading-none tracking-wide">
                    Estudar química orgânica
                  </p>
                </div>
              </div>

              {/* Post-it 5 */}
              <div className="absolute top-[60px] right-[25px] sm:top-[80px] sm:right-[35px] lg:top-[105px] lg:right-[45px] w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rotate-[-6deg] filter drop-shadow-sm z-10">
                <Image
                  src="/static/postit/nota5.png"
                  alt="Post-it sobre matemática"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-11">
                  <p style={{ fontFamily: 'var(--font-caveat), "Bradley Hand", cursive' }} className="text-[#9D174D] font-bold text-[10px] sm:text-[14px] lg:text-[17px] xl:text-[19px] text-center leading-snug tracking-wide">
                    Fazer exercícios da lista de matemática
                  </p>
                </div>
              </div>

              {/* Post-it 6 */}
              <div className="absolute top-[120px] right-[0px] sm:top-[160px] sm:right-[0px] lg:top-[210px] lg:right-[0px] w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rotate-[8deg] filter drop-shadow-sm">
                <Image
                  src="/static/postit/nota6.png"
                  alt="Post-it sobre botânica"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-11">
                  <p style={{ fontFamily: 'var(--font-caveat), "Bradley Hand", cursive' }} className="text-[#064E3B] font-bold text-[9px] sm:text-[13px] lg:text-[15px] xl:text-[17px] text-center leading-tight tracking-wide">
                    Tirar dúvidas com o professor sobre botânica
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#FFF9F0] text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-yellow-200">
                    <span>💡</span> Ganhe acesso GRÁTIS à demo e ajude a construir a plataforma!
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
                    Passar no <span className="text-[#8B3DFF] relative inline-block">
                        vestibular
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                          <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </span><br/> sem gastar uma fortuna?
                </h1>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                    A Leterizza é a plataforma que torna a preparação para o vestibular acessível e eficiente.
                </p>

                <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto justify-center">
                    <input 
                        type="email" 
                        placeholder="Digite o seu melhor e-mail" 
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-white px-6 py-4 rounded-full w-full border border-gray-200 shadow-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                    <button className="bg-[#8B3DFF] text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-200 whitespace-nowrap">
                        Quero testar GRÁTIS
                    </button>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 text-sm text-green-600 font-bold">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Sem cartão de crédito</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Acesso imediato</span>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center pt-10 max-w-2xl mx-auto">
                    <div>
                        <div className="flex justify-center text-yellow-400 mb-2 gap-1">
                            <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-extrabold text-gray-900">100%</div>
                        <p className="text-sm font-medium text-gray-500">Gratuito</p>
                    </div>
                    <div>
                        <div className="text-2xl font-extrabold text-gray-900">24/7</div>
                        <p className="text-sm font-medium text-gray-500">Acesso total</p>
                    </div>
                </div>
            </div>

          </div>
        </section>

        {/* --- PROBLEMA --- */}
        <section className="bg-[#F5F0FF] py-16 px-6 mx-4 mb-20 rounded-[2.5rem] max-w-6xl md:mx-auto">
            <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-[#8B3DFF] border border-purple-200 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4"/> O problema que você enfrenta
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E1065] mb-4 tracking-tight">
                    Preparação para o vestibular está cada vez <span className="text-[#8B3DFF] relative inline-block">
                        mais inacessível
                    </span>
                </h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    Sabemos que você quer passar no vestibular, mas os obstáculos parecem intransponíveis.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="bg-[#6D28D9] rounded-2xl p-6 text-white shadow-lg">
                        <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                            <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Cursinhos caros demais</h3>
                        <p className="text-purple-100 text-sm">Preparação de qualidade não deveria custar milhares de reais.</p>
                    </div>
                    <div className="bg-[#6D28D9] rounded-2xl p-6 text-white shadow-lg">
                        <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                            <Users className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Estudar sozinho é difícil</h3>
                        <p className="text-purple-100 text-sm">Falta de motivação e apoio durante a jornada de estudos.</p>
                    </div>
                    <div className="bg-[#6D28D9] rounded-2xl p-6 text-white shadow-lg">
                        <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                            <LayoutDashboard className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Material desorganizado</h3>
                        <p className="text-purple-100 text-sm">Difícil saber por onde começar e o que priorizar nos estudos.</p>
                    </div>
                </div>
            </div>
        </section>
       
        {/* --- MIDDLE CTA --- */}
        <section className="px-4 py-8 mb-12">
            <div className="max-w-5xl mx-auto flex flex-col justify-center bg-[#3B1968] rounded-[2rem] md:rounded-[6rem] px-8 md:px-16 py-10 md:py-14 relative overflow-hidden shadow-xl text-left">
                
                <div className="absolute top-1/2 right-[-10%] w-80 h-80 md:w-96 md:h-96 bg-[#EAB308] rounded-full blur-[90px] md:blur-[110px] opacity-40 pointer-events-none -translate-y-1/2"></div>
                
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                        A educação transforma vidas.
                    </h2>
                    <p className="text-purple-100/90 text-sm md:text-base mb-6 md:mb-8 font-medium">
                        Faça parte da plataforma que vai democratizar o acesso ao ensino superior no Brasil
                    </p>
                    
                    <button className="bg-[#8B3DFF] text-white px-8 py-3.5 rounded-full font-bold transition-all hover:bg-purple-600 shadow-lg w-full sm:w-auto">
                        Quero testar GRÁTIS
                    </button>
                </div>
            </div>
        </section>
     
        {/* --- FUNCIONALIDADES --- */}
        <section className="py-20 px-6 max-w-6xl mx-auto" id="funcionalidades">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-[#8B3DFF] px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                    <Zap className="w-4 h-4"/> O que oferecemos
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Conheça a plataforma <span className="text-[#8B3DFF]">Leterizza</span>
                </h2>
                <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                    A plataforma educacional que democratiza o acesso ao vestibular através de gamificação e tecnologia.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">          
                <div className="bg-[#F0F4F8] rounded-[2rem] p-8 min-h-[400px] flex items-center justify-center relative shadow-sm overflow-hidden">
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-72 text-center relative z-10">
                        <div className="text-xs text-gray-500 font-bold mb-4">O que fizemos por você hoje</div>
                        <div className="text-4xl font-extrabold text-yellow-500 mb-2">850 XP</div>
                        <div className="text-xs font-bold text-gray-400">Nível 5 - Estudante Dedicado</div>
                    </div>
                </div>
    
                <div className="space-y-8">
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-[#8B3DFF] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Gamepad2 className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Gamificação que motiva</h3>
                            <p className="text-gray-500 text-sm">Ganhe XP estudando e troque por descontos reais.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 text-[#8B3DFF] flex items-center justify-center shrink-0">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Comunidade ativa</h3>
                            <p className="text-gray-500 text-sm">Conecte-se com milhares de estudantes na mesma jornada.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 text-[#8B3DFF] flex items-center justify-center shrink-0">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Conteúdo estruturado</h3>
                            <p className="text-gray-500 text-sm">Cronograma personalizado baseado no seu perfil.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 text-[#8B3DFF] flex items-center justify-center shrink-0">
                            <Lock className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Acesso gratuito</h3>
                            <p className="text-gray-500 text-sm">Comece agora sem pagar nada e estude no seu ritmo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
        {/* --- MISSÃO (Fundo Bege) --- */}
        <section className="bg-[#FEFAED] py-20 px-6 my-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3D2C1D] mb-6 relative z-10">Nossa missão</h2>
                <p className="text-lg md:text-xl text-[#5C4D3C] font-medium leading-relaxed relative z-10">
                    A Leterizza nasceu para democratizar o acesso à educação e tornar a preparação para o vestibular acessível a todos. Queremos que cada estudante tenha a chance de realizar seu sonho de entrar na universidade pública, independentemente de sua condição financeira.
                </p>
            </div>
        </section>
 
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                 <div className="inline-flex items-center gap-2 bg-purple-100 text-[#8B3DFF] px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                    <Star className="w-4 h-4"/> Benefícios exclusivos
                </div>
                 <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    O que você ganha ao se cadastrar <span className="text-[#8B3DFF] relative inline-block">
                        AGORA
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                          <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </span>
                 </h2>
                 <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                    Aproveite esta oportunidade única de fazer parte da construção da Leterizza.
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] p-10 rounded-[2rem] text-white shadow-lg overflow-hidden relative">
                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm"><Zap className="w-6 h-6"/></div>
                    <h3 className="font-extrabold text-2xl mb-3 relative z-10">Acesso GRÁTIS à demo</h3>
                    <p className="text-purple-100 text-lg relative z-10">Teste todas as funcionalidades da plataforma sem custo algum.</p>
                </div>
          
                <div className="bg-gradient-to-r from-[#6D28D9] via-[#9D4EDD] to-[#D4A373] p-10 rounded-[2rem] text-white shadow-lg overflow-hidden relative">
                     <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm"><Trophy className="w-6 h-6"/></div>
                    <h3 className="font-extrabold text-2xl mb-3 relative z-10">Seja um pioneiro</h3>
                    <p className="text-purple-100 text-lg relative z-10">Faça parte do grupo seleto de primeiros usuários e ganhe benefícios exclusivos.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-purple-200 rounded-2xl p-6 bg-white">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-[#8B3DFF] mb-4">
                        <BookOpen className="w-5 h-5"/>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Conteúdos exclusivos</h4>
                    <p className="text-sm text-gray-600">Receba dicas de estudos, técnicas de memorização e estratégias infalíveis.</p>
                </div>
                <div className="border border-purple-200 rounded-2xl p-6 bg-white">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-[#8B3DFF] mb-4">
                        <Users className="w-5 h-5"/>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Influencie o produto</h4>
                    <p className="text-sm text-gray-600">Seus feedbacks moldarão a plataforma perfeita para estudantes como você.</p>
                </div>
                <div className="border border-purple-200 rounded-2xl p-6 bg-white">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-[#8B3DFF] mb-4">
                        <Bell className="w-5 h-5"/>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Atualizações em primeira mão</h4>
                    <p className="text-sm text-gray-600">Fique por dentro de novos recursos incríveis antes de todo mundo.</p>
                </div>
            </div>
        </section>
     
        {/* --- PROVA SOCIAL --- */}
        <section className="bg-[#FEFAED] py-24 px-6 border-y border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                         Prova Social
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#3D2C1D] tracking-tight mt-2">
                        Veja o que nossos usuários <span className="relative inline-block">
                            dizem
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M2 8C25 2 75 2 98 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </h2>
                    <p className="text-[#5C4D3C] mt-6 text-lg">Estudantes reais, resultados reais</p>
                </div>
             
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center mb-16">
                    <div>
                        <div className="text-4xl font-black text-gray-900">500+</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Estudantes testando</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-gray-900">4.9/5</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Avaliação média</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-gray-900">95%</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Recomendam</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-gray-900">100%</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Gratuito</div>
                    </div>
                </div>
            
                <div className="grid md:grid-cols-3 gap-6">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex text-yellow-400 mb-4 gap-1">
                                <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
                            </div>
                            <p className="text-sm text-gray-700 mb-6 leading-relaxed font-medium">
                                &ldquo;Finalmente uma plataforma que entende as dificuldades de quem não pode pagar cursinho caro. Estou amando testar cada funcionalidade!&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-[#8B3DFF] font-bold">
                                    L
                                </div>
                                <div>
                                    <div className="font-extrabold text-gray-900 text-sm">Lucas M.</div>
                                    <div className="text-xs text-gray-500">Estudante de Medicina</div>
                                </div>
                            </div>
                        </div>
                     ))}
                </div>
            </div>
        </section>

        {/* --- BOTTOM FORM CTA --- */}
        <section className="py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto bg-[#6D28D9] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 text-white flex flex-col lg:flex-row gap-10 lg:gap-20 items-center shadow-xl relative overflow-hidden">
                
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

                <div className="flex-1 relative z-10 text-center lg:text-left">
                     <div className="inline-flex items-center gap-2 bg-white text-[#2E1065] px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide">
                        <Zap className="w-4 h-4"/> Não perca tempo
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Pronto para <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">transformar</span><br/> seus estudos?
                    </h2>
                    <p className="text-purple-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                        Cadastre-se AGORA e ganhe acesso gratuito à versão de testes da Leterizza.
                    </p>
                    <ul className="space-y-3 text-sm font-semibold inline-block text-left">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-300"/> Sem cartão de crédito</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-300"/> Cancele quando quiser</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-300"/> 100% gratuito</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-300"/> Dados seguros e protegidos</li>
                    </ul>
                </div>

                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl w-full max-w-md lg:max-w-lg text-gray-900 shadow-2xl relative z-10 mt-4 md:mt-0 min-h-[400px] flex flex-col justify-center">
                    <LandingPageForm />
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}