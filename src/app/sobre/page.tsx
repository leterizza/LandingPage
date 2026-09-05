import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Linkedin } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  bio: string;
  bgColor: string;
  textColor: string;
  image: string;
  linkedinUrl: string;
}

const teamMembers: Member[] = [
  {
    name: "Sabrina Lima",
    role: "Coordenação Geral",
    bio: "Sou formada em Marketing pela USP e acredito no poder da educação para transformar vidas. Amo ler suspenses, fazer crochê e estar com amigos e família.",
    bgColor: "#F5F0FF",
    textColor: "#4A3B69",
    image: "/static/team/sabrina.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sabrinacruzlima",
  },
  {
    name: "Maitê",
    role: "Líder de Marketing",
    bio: "Faço Marketing na USP e me apaixonei pelo projeto, muito feliz em tocar isso e fazer o ensino ser mais acessível.",
    bgColor: "#FFEEFB",
    textColor: "#DB0B14",
    image: "/static/team/maite.jpg",
    linkedinUrl: "https://www.linkedin.com/in/maite-alves-974467303/",
  },
  {
    name: "Fernando",
    role: "Líder Impacto e Parcerias",
    bio: "Estudante no 5° semestre de Gestão de Políticas Públicas, gosto muito de comunicação e aproveitar cada oportunidade de impacto.",
    bgColor: "#E5F3EC",
    textColor: "#004700",
    image: "/static/team/fernando.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/fernandomarcello",
  },
  {
    name: "Paulo Henrique",
    role: "Líder de Tecnologia",
    bio: "Mais do que qualquer coisa, acredito que tecnologia deva ser uma ferramenta para mudar o mundo para algo melhor.",
    bgColor: "#FFF9E6",
    textColor: "#856404",
    image: "/static/team/paulo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/paulo-henrique-alves-rodrigues-447057237/",
  },
  {
    name: "Tiago",
    role: "Analista de Tecnologia",
    bio: "Entusiasta por tecnologia e educação. Movido pela vontade de construir soluções que melhorem a vida das pessoas.",
    bgColor: "#F5F0FF",
    textColor: "#4A3B69",
    image: "/static/team/tiago.jpg",
    linkedinUrl: "https://www.linkedin.com/in/tiago-s-almeida/",
  },
  {
    name: "Ivan",
    role: "Analista de Tecnologia",
    bio: "Sou recifense, apaixonado por cinema, música e tecnologia, e estudante de Sistemas de Informação na USP. Acredito que a educação de qualidade transforma a sociedade.",
    bgColor: "#EBF2FE",
    textColor: "#041F4D",
    image: "/static/team/ivan.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/ivanlucasnogueira/",
  },
];

function TeamMemberCard({ member }: { member: Member }) {
  return (
    <div
      className="relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ backgroundColor: member.bgColor }}
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          style={{ objectPosition: "center 50%" }}
        />
      </div>
      <div className="p-6 pb-8 flex flex-col gap-3">
        <div>
          <h4 className="font-bold text-lg text-gray-900">{member.name}</h4>
          <p className="text-xs text-gray-500 uppercase tracking-widest">{member.role}</p>
        </div>
        <p
          className="font-[family-name:var(--font-caveat)] text-[19px] leading-[1.3]"
          style={{ color: member.textColor }}
        >
          {member.bio}
        </p>
        {member.linkedinUrl && (
          <Link
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit transition-opacity hover:opacity-60"
            style={{ color: member.textColor }}
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin size={20} />
          </Link>
        )}
      </div>
    </div>
  );
}

const trajectorySteps: {
  year: string;
  title: string;
  dark?: boolean;
  content: React.ReactNode;
}[] = [
  {
    year: "2024",
    title: "O início: TCC e o Plano de Negócio",
    content: (
      <>
        <p>
          A Leterizza nasceu como Trabalho de Conclusão de Curso da fundadora Sabrina Lima, em conjunto com Cauã
          Dias, sob orientação da Profa. Dra. Tania Christopoulos, no curso de Marketing da USP.
        </p>
        <p>
          Pesquisas com estudantes e responsáveis financeiros permitiram identificar os desafios reais da
          preparação para o vestibular e deram origem aos pilares da Leterizza: acessibilidade, eficiência e
          impacto social.
        </p>
      </>
    ),
  },
  {
    year: "2025",
    title: "Da ideia ao MVP",
    content: (
      <>
        <p>
          Em 2025, a Leterizza deu os primeiros passos fora do papel e iniciou o desenvolvimento do seu MVP
          (Produto Mínimo Viável), transformando o plano de negócio em uma solução prática para estudantes
          vestibulandos.
        </p>
        <p>
          Também foram iniciadas ações de recrutamento de estudantes e colaboradores para formar os primeiros
          times de marketing, branding, CRM e validação da startup.
        </p>
      </>
    ),
  },
  {
    year: "2026 · agora",
    title: "Validação e comunidade",
    dark: true,
    content: (
      <>
        <p>
          A Leterizza está consolidando sua fase de validação por meio da ampliação dos testes da plataforma e do
          fortalecimento da sua comunidade de estudantes.
        </p>
        <p>
          Segue expandindo sua atuação no ecossistema de inovação e empreendedorismo, participando de programas e
          iniciativas voltadas ao desenvolvimento de startups de impacto social e educação.
        </p>
      </>
    ),
  },
];

export default function SobreNos() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 overflow-x-hidden">
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-40 md:pt-52 pb-20 px-6 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
              Sobre a <span className="text-[#8B3DFF] relative inline-block">
                Leterizza
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Democratizando o acesso à educação para transformar o futuro de milhares de estudantes.
            </p>

            {/* Vídeo Manifesto (Placeholder) */}
            <div className="w-full max-w-3xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-3xl relative border border-purple-100 shadow-[0_0_60px_rgba(139,61,255,0.15)] hover:shadow-[0_0_80px_rgba(139,61,255,0.25)]"
                src="https://www.youtube.com/embed/RW3VCi_MtjI"
                title="YouTube video player">
              </iframe>
            </div>
          </div>
        </section>

        {/* --- NOSSA HISTÓRIA --- */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-start text-left">
            {/* Título "Quem somos" com parábola amarela */}
            <div className="flex flex-col items-start mb-8">
              {/* Caixa do título: 237px largura, texto centralizado dentro */}
              <div style={{ width: '237px' }}>
                <h4
                  style={{
                    fontFamily: '"Bradley Hand", cursive',
                    fontSize: '40px',
                    lineHeight: '56px',
                    fontWeight: 400,
                    color: '#000000',
                    textAlign: 'center',
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    width: '237px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Quem somos
                </h4>
                {/* Imagem da Parábola: 219x14, 3px abaixo do texto */}
                <div style={{ marginTop: '3px', width: '219px', height: '14px', marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
                  {/* Caminho atualizado conforme o arquivo salvo em public/static */}
                  <Image
                    src="/static/parabola.png.png"
                    alt="Detalhe amarelo"
                    width={219}
                    height={14}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6 leading-tight tracking-tight">
              A Leterizza nasceu do sonho de tornar a educação acessível a todos.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Somos uma edtech que busca facilitar o caminho de estudantes de baixa renda até o ensino superior, oferecendo ferramentas de estudo acessíveis, orientação e apoio contínuo.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              O projeto começou como um TCC de plano de negócio dentro da Universidade de São Paulo (USP) e hoje está evoluindo como uma startup em fase de pré-incubação, unindo propósito, tecnologia e impacto social.
            </p>
          </div>
        </section>

        {/* --- CITAÇÃO (QUOTE BANNER) --- */}
        <section className="px-4 py-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#8B3DFF] to-[#6D28D9] rounded-[2.5rem] p-10 md:p-16 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-400 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-10 leading-relaxed z-10">
              &ldquo;Desejamos que a Leterizza alcance quem mais precisa e seja um lembrete de que a educação não pode ser um privilégio reservado a poucos, mas um direito que precisa chegar a todos.&rdquo;
            </p>

            <div className="flex items-center gap-4 z-10">
              <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/50 overflow-hidden relative shadow-md flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold">SL</span>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm md:text-base">Sabrina Lima</p>
                <p className="text-purple-200 text-xs md:text-sm font-medium">Fundadora e Coordenadora Geral</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- NOSSO PROPÓSITO --- */}
        <section className="py-20 px-6 max-w-6xl mx-auto" id="proposito">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
              Nosso <span className="text-[#8B3DFF] relative inline-block">propósito
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2 8C25 2 75 2 98 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col">
            {/* Missão */}
            <div className="flex flex-col md:flex-row items-start md:items-center py-8 border-b border-gray-200 gap-4 md:gap-16">
              <h3 className="text-2xl text-gray-900 w-32 shrink-0 font-handwriting" style={{ fontFamily: 'cursive' }}>
                Missão
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Tornar a preparação para o vestibular acessível e inclusiva, oferecendo recursos educacionais de qualidade a estudantes de baixa renda.
              </p>
            </div>

            {/* Visão */}
            <div className="flex flex-col md:flex-row items-start md:items-center py-8 border-b border-gray-200 gap-4 md:gap-16">
              <h3 className="text-2xl text-gray-900 w-32 shrink-0 font-handwriting" style={{ fontFamily: 'cursive' }}>
                Visão
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Ser a principal plataforma de apoio à jornada do vestibulando de baixa renda no Brasil, reconhecida por unir tecnologia, propósito e impacto social.
              </p>
            </div>

            {/* Valores */}
            <div className="flex flex-col md:flex-row items-start md:items-center py-8 gap-4 md:gap-16">
              <h3 className="text-2xl text-gray-900 w-32 shrink-0 font-handwriting" style={{ fontFamily: 'cursive' }}>
                Valores
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Educação como instrumento de transformação • Acessibilidade e empatia • Colaboração e propósito compartilhado • Transparência e responsabilidade social • Inovação com impacto real.
              </p>
            </div>
          </div>
        </section>

        {/* --- NOSSA TRAJETÓRIA --- */}
        <section className="py-20 px-6" id="trajetoria">
          <div className="max-w-6xl mx-auto bg-warm-bg rounded-[2rem] p-8 md:p-16 flex flex-col gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-775 mb-3 inline-block relative">
                Nossa trajetória
                <svg className="absolute -bottom-3 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </h2>
              <p className="text-warm-text text-lg md:text-xl font-medium max-w-xl mx-auto md:mx-0">
                Cada passo da Leterizza é uma prova de que o sonho é possível.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trajectorySteps.map((step) => (
                <div
                  key={step.year}
                  className={`rounded-[28px] p-8 flex flex-col gap-3 ${step.dark ? 'bg-primary-650 text-white' : 'bg-white'}`}
                >
                  <span
                    className={`text-[15px] font-bold tracking-[0.08em] ${step.dark ? 'text-secondary-650' : 'text-warm-text-label'}`}
                  >
                    {step.year}
                  </span>
                  <h3 className={`text-xl font-bold leading-tight ${step.dark ? 'text-white' : 'text-neutral-900'}`}>
                    {step.title}
                  </h3>
                  <div
                    className={`text-[15.5px] leading-[1.6] flex flex-col gap-3 ${step.dark ? 'text-primary-100' : 'text-neutral-600'}`}
                  >
                    {step.content}
                  </div>
                  {step.dark && (
                    <p className="font-[family-name:var(--font-caveat)] text-xl text-secondary-650 mt-1">
                      inscrições até 13 de setembro
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NOSSA EQUIPE --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto" id="equipe">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
              <Users className="w-3 h-3" /> Nosso time
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
              Quem faz a Leterizza <span className="text-[#2E1065] relative inline-block">acontecer
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="px-6 pb-20">
          <div
            className="max-w-6xl mx-auto rounded-[48px] p-10 md:p-14 relative overflow-hidden grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center"
            style={{ background: 'linear-gradient(100deg,#6D28D9 0%,#8B3DFF 55%,#9E4ECF 100%)' }}
          >
            <div className="absolute -top-36 -right-16 w-[400px] h-[400px] rounded-full bg-secondary-650 blur-[110px] opacity-30 pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-4">
              <h2 className="text-3xl md:text-[38px] leading-[1.14] font-extrabold text-white">
                Quer construir a Leterizza com a gente?
              </h2>
              <p className="text-[17.5px] leading-[1.6] text-primary-100 max-w-lg">
                Estamos selecionando os primeiros estudantes para testar a plataforma e dar feedback. As
                inscrições vão até 13 de setembro.
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-start gap-3.5">
              <Link
                href="/#formulario"
                className="bg-white text-primary-650 text-base font-bold px-9 py-[18px] rounded-full hover:bg-primary-50 transition-colors"
              >
                Quero me inscrever
              </Link>
              <Link
                href="/#comunidade"
                className="text-white text-[15px] font-semibold underline decoration-secondary-650 decoration-2 underline-offset-4"
              >
                Entrar na comunidade no WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
