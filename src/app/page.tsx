import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionLabel, ProblemCard, BenefitCard } from '@/components/ui/SectionComponents';
import { 
  CheckCircle2, Star, ShieldCheck, Clock, 
  DollarSign, Users, LayoutDashboard, 
  Gamepad2, BookOpen, Lock, Bell, Zap, Trophy 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-20 pb-32 px-6 text-center overflow-hidden">
            {/* Decorative Sticky Notes (Simulated with absolute divs) */}
            <div className="absolute top-20 left-[10%] hidden lg:block rotate-[-6deg] bg-pink-100 p-4 rounded shadow-md w-40 text-xs text-pink-800 font-handwriting">
               Estudar química orgânica...
            </div>
            <div className="absolute top-40 right-[15%] hidden lg:block rotate-[12deg] bg-green-100 p-4 rounded shadow-md w-40 text-xs text-green-800 font-handwriting">
               Tirar dúvidas com o professor sobre botânica
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold mb-6">
                    Ganhe acesso GRÁTIS à demo e ajude a construir a melhor plataforma de estudos do Brasil!
                </div>
                <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
                    Passar no <span className="text-[#8B3DFF]">vestibular</span>  sem gastar uma fortuna?
                </h1>
                <p className="text-gray-600 text-1xl/normal mb-8 max-w-2xl mx-auto line-heigh">
                    A Leterizza é a plataforma que torna a preparação para o vestibular acessível, eficiente e colaborativa.
                </p>

                {/* Email Input */}
                <div className="flex flex-col md:flex-row gap-2">
                    <input 
                        type="email" 
                        placeholder="Digite o seu melhor e-mail" 
                        className="flex-1 outline-none text-gray-600 placeholder-gray-400 bg-white px-6 py-3 rounded-full w-full border border-neutral-600 md:max-w-lg mx-auto flex items-center pl-6"
                    />
                    <button className="bg-[#8B3DFF] text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition">
                        Quero testar GRÁTIS
                    </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex justify-center items-center gap-6 mt-6 text-xs text-green-700 font-medium">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Sem cartão de crédito</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Acesso imediato</span>
                </div>

                <div className="mt-12 flex justify-center gap-12 text-center border-t border-gray-100 pt-8 max-w-2xl mx-auto">
                    <div>
                        <div className="flex justify-center text-yellow-400 mb-1">
                            <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
                        </div>
                        <p className="text-xs font-bold text-gray-900">Avaliação 5 estrelas</p>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-gray-900">100%</div>
                        <p className="text-xs text-gray-500">Gratuito</p>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <p className="text-xs text-gray-500">Acesso total</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- PROBLEM SECTION --- */}
        <section className="bg-primary-50 py-4 px-6 mx-4 mb-4 rounded-2xl">
            <div className="max-w-6xl mx-auto text-center">
                <SectionLabel text="O problema que você enfrenta" icon={<ShieldCheck className="w-4 h-4"/>} />
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-4">
                    Preparação para o vestibular está cada vez mais inacessível
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Sabemos que você quer passar no vestibular, mas os obstáculos parecem intransponíveis.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <ProblemCard 
                        icon={<DollarSign />}
                        title="Cursinhos caros demais"
                        description="Preparação de qualidade não deveria custar milhares de reais."
                    />
                    <ProblemCard 
                        icon={<Users />}
                        title="Estudar sozinho é difícil"
                        description="Falta de motivação e apoio durante a jornada de estudos."
                    />
                    <ProblemCard 
                        icon={<LayoutDashboard />}
                        title="Material desorganizado"
                        description="Difícil saber por onde começar e o que priorizar."
                    />
                </div>
            </div>
        </section>

        {/* --- BANNER TRANSFORM --- */}
        <section className="px-4 py-4">
            <div className="max-w-6xl mx-auto flex flex-col bg-[#2E1065] rounded-3xl p-6 md:p-20 relative overflow-hidden">
                
                <h2 className="text-2xl text-left md:text-4xl font-bold text-white mb-1">
                    A educação transforma vidas.
                </h2>
                <p className="text-purple-200 mb-4">
                    Faça parte da plataforma que vai democratizar o acesso ao ensino superior no Brasil.
                </p>
                <button className="bg-[#8B3DFF] hover:bg-purple-600 text-white px-8 py-3 rounded-full font-bold transition-colors relative z-10">
                    Quero testar GRÁTIS
                </button>
            </div>
        </section>

        {/* --- FEATURES (Gamification) --- */}
        <section className="py-12 px-6" id="funcionalidades">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                   <SectionLabel text="O que oferecemos" icon={<Zap className="w-4 h-4"/>} />
                   <h2 className="text-3xl font-bold text-gray-900 mt-4">Conheça a plataforma <span className="text-purple-600">Leterizza</span></h2>
                   <p className="text-gray-500 mt-2">A plataforma educacional que democratiza o acesso ao vestibular através de gamificação e tecnologia.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Mockup UI */}
                    <div className="bg-blue-50 rounded-3xl p-8 min-h-[400px] flex items-center justify-center relative">
                        {/* Simulated UI Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl w-64 text-center">
                            <div className="text-xs text-gray-400 uppercase font-bold mb-2">Seu desempenho hoje</div>
                            <div className="text-5xl font-extrabold text-yellow-500 mb-2">850 XP</div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 w-3/4"></div>
                            </div>
                            <div className="mt-2 text-xs font-bold text-gray-900">Nível 5 - Estudante Dedicado</div>
                        </div>
                    </div>

                    {/* Right: List */}
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0">
                                <Gamepad2 />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Gamificação que motiva</h3>
                                <p className="text-gray-500 text-sm">Ganhe XP estudando e troque por descontos reais de até 30%.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                <Users />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Comunidade ativa</h3>
                                <p className="text-gray-500 text-sm">Conecte-se com milhares de estudantes na mesma jornada.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                <BookOpen />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Conteúdo estruturado</h3>
                                <p className="text-gray-500 text-sm">Cronograma personalizado baseado no seu perfil e objetivos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                <Lock />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Acesso gratuito</h3>
                                <p className="text-gray-500 text-sm">Comece agora sem pagar nada e estude no seu ritmo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- MISSION --- */}
        <section className="bg-[#FFF9F0] py-20 px-6 my-20">
            <div className="max-w-4xl mx-auto mx-20 text-center">
                <h2 className="text-3xl font-bold text-[#3D2C1D] mb-6 font-serif">Nossa missão</h2>
                <p className="text-lg text-[#5C4D3C] font-medium leading-relaxed">
                    A Leterizza nasceu para democratizar o acesso à educação e tornar a preparação para o vestibular acessível a todos. Queremos que cada estudante tenha a chance de realizar seu sonho de entrar na universidade pública, independentemente de sua condição financeira.
                </p>
            </div>
        </section>

        {/* --- BENEFITS GRID --- */}
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                     <SectionLabel text="Benefícios exclusivos" icon={<Star className="w-4 h-4"/>} />
                     <h2 className="text-3xl font-bold mt-4">O que você ganha ao se cadastrar <span className="text-purple-600 border-b-4 border-purple-300">AGORA</span></h2>
                     <p className="text-gray-500 mt-2">Aproveite esta oportunidade única de fazer parte da construção da Leterizza.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-orange-400 p-8 rounded-2xl text-white">
                        <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4"><Zap className="w-5 h-5"/></div>
                        <h3 className="font-bold text-xl mb-2">Acesso GRÁTIS à demo</h3>
                        <p className="text-sm opacity-90">Teste todas as funcionalidades da plataforma sem custo algum.</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-700 to-pink-600 p-8 rounded-2xl text-white">
                         <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-4"><Trophy className="w-5 h-5"/></div>
                        <h3 className="font-bold text-xl mb-2">Seja um pioneiro</h3>
                        <p className="text-sm opacity-90">Faça parte do grupo seleto de primeiros usuários e ganhe benefícios exclusivos.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <BenefitCard 
                        icon={<BookOpen />} 
                        title="Conteúdos exclusivos" 
                        description="Receba dicas de estudos, técnicas de memorização e estratégias." 
                    />
                    <BenefitCard 
                        icon={<Users />} 
                        title="Influencie o produto" 
                        description="Seus feedbacks moldarão a plataforma perfeita para estudantes." 
                    />
                    <BenefitCard 
                        icon={<Bell />} 
                        title="Atualizações em primeira mão" 
                        description="Fique por dentro de novos recursos antes de todo mundo." 
                    />
                </div>
            </div>
        </section>

        {/* --- SOCIAL PROOF --- */}
        <section className="bg-[#FEFAED] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-white text-gray-700">
                         Prova Social
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">O que os estudantes que testaram<br/> acharam</h2>
                    <p className="text-gray-500 mt-2 text-sm">Estudantes reais, resultados reais</p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center mb-16">
                    <div>
                        <div className="text-3xl font-bold text-gray-900">500+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Estudantes testando</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Avaliação média</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900">95%</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Recomendam</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900">100%</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Gratuito</div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex text-yellow-400 mb-4 gap-1">
                                <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
                            </div>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                "Finalmente uma plataforma que entende as dificuldades de quem não pode pagar cursinho caro. Estou amando testar!"
                            </p>
                            <div>
                                <div className="font-bold text-sm text-gray-900">Lucas M.</div>
                                <div className="text-xs text-gray-500">Estudante de Medicina</div>
                            </div>
                        </div>
                     ))}
                </div>
            </div>
        </section>

        {/* --- FINAL FORM --- */}
        <section className="py-20 px-6 mb-12">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#8B3DFF] to-[#6D28D9] rounded-[2.5rem] p-6 md:p-12 text-white flex flex-col md:flex-row gap-12 items-center shadow-2xl">
                
                {/* Text Side */}
                <div className="flex-1">
                     <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold mb-6">
                        <Users className="w-3 h-3"/> Prova Social
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Pronto para <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">transformar</span><br/> seus estudos?
                    </h2>
                    <p className="text-purple-100 mb-8">
                        Cadastre-se AGORA e ganhe acesso gratuito à demo da Leterizza.
                    </p>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-300"/> Sem cartão de crédito</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-300"/> Cancele quando quiser</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-300"/> 100% gratuito</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-300"/> Dados seguros e protegidos</li>
                    </ul>
                </div>

                {/* Form Side */}
                <div className="bg-white p-8 rounded-3xl w-full md:w-[450px] text-gray-900 shadow-xl">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold mb-1 ml-1">Nome completo</label>
                            <input type="text" placeholder="Digite seu nome completo" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-1 ml-1">Seu melhor e-mail</label>
                            <input type="email" placeholder="Digite seu nome e-mail" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-1 ml-1">Nível acadêmico</label>
                            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none text-gray-500">
                                <option>Selecione o seu nível acadêmico</option>
                                <option>Ensino Médio</option>
                                <option>Pré-Vestibular</option>
                            </select>
                        </div>
                        
                        <p className="text-[10px] text-gray-400 leading-tight py-2">
                            Ao se cadastrar, você concorda em receber e-mails sobre a Leterizza. Você pode cancelar a qualquer momento.
                        </p>

                        <button type="submit" className="w-full bg-[#8B3DFF] text-white font-bold py-3 rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
                            Quero testar GRÁTIS agora!
                        </button>
                    </form>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}