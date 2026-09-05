import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LandingPageForm } from '@/components/forms/LandingPageForm';
import { ImageOff, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Leterizza | Preparação Gratuita e Gamificada para Vestibulares",
  description: "Prepare-se para o ENEM e outros vestibulares sem gastar uma fortuna! A Leterizza é a plataforma gratuita que democratiza o acesso ao ensino superior.",
};

// Prazo final da fase de inscrições — data única, usada em todos os textos do
// site que fazem referência a ela (selo do hero, jornada, CTA final, etc).
const PRAZO_INSCRICOES = "13 de setembro";

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-primary-450">
      {children}
      <svg
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        fill="none"
        className="absolute left-0 -bottom-1.5 w-full h-3 text-secondary-650"
      >
        <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex gap-2.5 items-start text-[15.5px] font-medium text-neutral-900">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="shrink-0 mt-[3px] text-primary-450">
        <path d="M4 12.5l5 5L20 6.5" />
      </svg>
      {children}
    </span>
  );
}

// Placeholder para os prints da plataforma que ainda não vieram no material de
// design (uploads/pasted-*.png e public/static/let.png não estavam no zip
// recebido) — substituir pelas imagens reais assim que chegarem.
function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 text-center bg-gradient-to-br from-primary-650 to-primary-775 text-primary-200 p-6 ${className}`}>
      <ImageOff className="w-6 h-6 opacity-70" />
      <span className="text-[11px] font-medium opacity-80 leading-snug">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 overflow-x-hidden pb-[76px] lg:pb-0">
      <Header />

      <main>
        {/* --- HERO: título + formulário na primeira dobra --- */}
        <section className="px-6 md:px-12 pt-9 pb-14 md:pb-16" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F4FF 100%)' }}>
          <div
            className="max-w-[1180px] mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-14 lg:gap-y-8 lg:items-start lg:[grid-template-areas:'text_form'_'media_form']"
          >

            {/* Bloco de texto — título + contexto (1º no mobile e no desktop) */}
            <div className="flex flex-col gap-5 lg:[grid-area:text]">
              <span className="self-start inline-flex items-center gap-2 bg-primary-50 text-primary-600 border border-primary-100 text-[13px] font-bold uppercase tracking-wide px-[18px] py-[9px] rounded-full">
                Inscrições abertas até {PRAZO_INSCRICOES}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[54px] leading-[1.08] font-extrabold tracking-tight text-neutral-900 text-balance">
                Um plano de estudos que <Highlight>caiba na sua vida</Highlight>
              </h1>

              <p className="text-lg md:text-[19px] leading-[1.65] text-neutral-600 max-w-[480px] text-pretty">
                Você diz quanto tempo tem por dia, a gente diz o que estudar hoje e acompanha o seu progresso até a prova.
              </p>
              <p className="text-base md:text-[17px] leading-[1.65] text-neutral-600 max-w-[480px] text-pretty">
                Estamos criando a primeira turma para testar a plataforma e ajudar a construir uma preparação para o vestibular mais acessível.
              </p>
            </div>

            {/* Formulário — 2º no mobile (antes dos benefícios/mockup), coluna direita no desktop */}
            <div id="formulario" className="bg-white border border-[#EDE4FB] rounded-[32px] p-6 md:p-[34px] shadow-[0_20px_50px_rgba(46,16,101,0.12)] flex flex-col gap-3.5 scroll-mt-24 lg:[grid-area:form] lg:self-center">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-[23px] leading-tight font-extrabold text-primary-775">
                  Inscreva-se para ser um dos primeiros usuários
                </h2>
                <p className="text-[13.5px] leading-[1.55] text-neutral-600">
                  Esta inscrição não cria uma conta: você entra na lista da fase de validação e recebe por e-mail as orientações de acesso para quando a plataforma for lançada.
                </p>
              </div>
              <LandingPageForm />
            </div>

            {/* Benefícios + mockup — 3º no mobile, continuação da coluna esquerda no desktop */}
            <div className="flex flex-col gap-5 lg:[grid-area:media]">
              <div className="flex flex-col gap-3">
                <CheckItem>Cronograma automático, refeito quando você atrasa</CheckItem>
                <CheckItem>Simulados agendados e gráficos de evolução</CheckItem>
                <CheckItem>Gratuito durante esta fase, sem cartão de crédito</CheckItem>
              </div>

              {/* Mockup pequeno da plataforma (notebook + celular) */}
              <div className="flex items-end gap-0 max-w-[440px]">
                <div className="flex-1 min-w-0">
                  <div className="bg-[#2B2B33] rounded-t-[9px] rounded-b-[3px] p-[6px] pb-[7px] shadow-[0_12px_26px_rgba(46,16,101,0.16)]">
                    <div className="relative rounded-[4px] overflow-hidden bg-white aspect-[16/10]">
                      <Image src="/static/04-dashboard-hero.png" alt="Painel da plataforma (computador)" fill sizes="(max-width: 768px) 90vw, 354px" className="object-cover object-top" />
                    </div>
                  </div>
                  <div className="relative h-2 -mx-[13px] rounded-b-[7px]" style={{ background: 'linear-gradient(180deg,#E7E7ED 0%,#BCBCC7 100%)' }}>
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-[#A9A9B4] rounded-b-[4px]" />
                  </div>
                </div>
                <div className="w-[86px] shrink-0 -ml-[30px] -mb-[9px] relative z-10">
                  <div className="bg-[#2B2B33] rounded-2xl p-1 shadow-[0_14px_28px_rgba(46,16,101,0.24)]">
                    <div className="relative rounded-[13px] overflow-hidden bg-primary-550 aspect-[9/19]">
                      <Image src="/static/07-login.png" alt="App no celular" fill sizes="86px" className="object-cover" />
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[30px] h-[3px] rounded-full bg-white/55" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- O QUE TRAVA O SEU ESTUDO --- */}
        <section className="bg-white px-6 md:px-12 py-16 md:py-[76px]">
          <div className="max-w-[1080px] mx-auto flex flex-col gap-11">
            <div className="flex flex-col gap-3 max-w-[640px]">
              <h2 className="text-3xl md:text-[40px] leading-[1.12] font-extrabold text-primary-775 tracking-tight">
                O que trava o seu estudo, e o que a gente faz sobre isso
              </h2>
              <p className="text-lg leading-[1.6] text-neutral-600">
                Conteúdo não falta. Falta organização, constância e alguém mostrando o progresso.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  dor: '"Não sei por onde começar"',
                  titulo: 'Monta o cronograma por você',
                  texto: 'Contado em semanas até a prova, a partir do seu tempo real.',
                },
                {
                  dor: '"Começo animado e paro na terceira semana"',
                  titulo: 'Refaz o plano quando você atrasa',
                  texto: 'Sem culpa e sem recomeçar do zero — o plano se ajusta a você.',
                },
                {
                  dor: '"Não sei se estou evoluindo"',
                  titulo: 'Mostra o progresso em gráfico',
                  texto: 'Simulados agendados, acertos por matéria e horas de estudo.',
                },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] items-stretch gap-4 md:gap-0">
                  <div className="bg-primary-50 rounded-3xl p-[30px] flex flex-col gap-2.5">
                    <span className="font-[family-name:var(--font-caveat)] text-2xl text-primary-400">o que você sente</span>
                    <h3 className="text-xl font-bold text-primary-650">{item.dor}</h3>
                  </div>
                  <div className="flex items-center justify-center text-primary-200 rotate-90 md:rotate-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                  <div className="bg-primary-550 rounded-3xl p-[30px] text-white flex flex-col gap-2.5">
                    <span className="font-[family-name:var(--font-caveat)] text-2xl text-secondary-650">o que a Leterizza faz</span>
                    <h3 className="text-xl font-bold">{item.titulo}</h3>
                    <p className="text-[15px] leading-[1.55] text-primary-100">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- POR DENTRO DA PLATAFORMA --- */}
        <section className="px-6 md:px-12 pb-16 md:pb-[76px]">
          <div className="max-w-[1180px] mx-auto bg-primary-650 rounded-[32px] md:rounded-[44px] p-8 md:p-14 relative overflow-hidden flex flex-col gap-2">
            <div className="absolute -bottom-40 -left-28 w-[460px] h-[460px] rounded-full bg-primary-450 blur-[130px] opacity-50 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3.5 max-w-[720px] mb-4">
              <span className="font-[family-name:var(--font-caveat)] text-2xl md:text-[26px] text-secondary-650">por dentro da plataforma</span>
              <h2 className="text-3xl md:text-[38px] leading-[1.14] font-extrabold text-white tracking-tight">
                É isso que os primeiros usuários vão testar
              </h2>
              <p className="text-base md:text-[17px] leading-[1.6] text-primary-200 max-w-[600px]">
                Do questionário inicial ao acompanhamento do desempenho, tudo na mesma tela, sem PDF perdido no grupo do WhatsApp.
              </p>
            </div>

            {[
              { n: 1, titulo: 'Você responde oito perguntas', texto: 'Objetivo, rotina e tempo disponível por dia. É daí que sai o seu plano.', label: 'Onboarding — "Qual é o seu objetivo?"', img: '/static/02-onboarding.png' },
              { n: 2, titulo: 'A plataforma monta o cronograma', texto: 'Semana a semana até a prova, com os dias ativos marcados e a ordem que faz sentido para você.', label: 'Painel — cronograma da semana', img: '/static/04-dashboard.png' },
              { n: 3, titulo: 'Você acompanha o desempenho', texto: 'Questões feitas, acertos, horas de estudo e evolução por matéria.', label: 'Painel — desempenho geral', img: '/static/09-desempenho.png' },
            ].map((step) => (
              <div key={step.n} className="relative z-10 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-9 items-center py-8 border-t border-white/15">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-[34px] h-[34px] rounded-full bg-secondary-650 text-primary-650 text-base font-extrabold inline-flex items-center justify-center shrink-0">{step.n}</span>
                    <span className="text-[13px] font-bold uppercase tracking-wide text-primary-200">Passo {step.n}</span>
                  </div>
                  <h3 className="text-2xl leading-tight font-bold text-white">{step.titulo}</h3>
                  <p className="text-[15.5px] leading-[1.6] text-primary-200">{step.texto}</p>
                </div>
                <div className="relative rounded-[20px] overflow-hidden bg-primary-775 shadow-[0_18px_44px_rgba(0,0,0,0.28)] aspect-video">
                  <Image src={step.img} alt={step.label} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover object-top" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- JORNADA (o que acontece depois que você se inscreve) --- */}
        <section className="px-6 md:px-12 pb-16 md:pb-[76px]">
          <div className="max-w-[1180px] mx-auto bg-primary-50 rounded-[32px] md:rounded-[44px] p-8 md:p-[52px] flex flex-col gap-8">
            <div className="flex flex-col gap-2.5 max-w-[680px]">
              <span className="font-[family-name:var(--font-caveat)] text-2xl md:text-[26px] text-primary-450">como funciona a partir daqui</span>
              <h2 className="text-2xl md:text-[34px] leading-[1.15] font-extrabold text-primary-775">
                O que acontece depois que você se inscreve
              </h2>
              <p className="text-[15px] md:text-[16.5px] leading-[1.6] text-[#4A3B69]">
                As inscrições vão até {PRAZO_INSCRICOES}. O acesso à plataforma é liberado por etapas ao longo da fase de validação — e, enquanto isso, você já faz parte.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { n: 1, titulo: 'Você se inscreve', texto: 'Um minuto de formulário, até ' + PRAZO_INSCRICOES + '. Sem cartão, sem mensalidade nesta fase.' },
                { n: 2, titulo: 'Entra na comunidade', texto: 'Nosso grupo no WhatsApp, gratuito, aberto no mesmo dia.' },
                { n: 3, titulo: 'Acompanha a Let', texto: 'Datas, inscrições, lembretes e dicas de estudo direto no celular.' },
                { n: 4, titulo: 'Recebe o convite para testar', texto: 'Chega por e-mail, com as orientações de como usar a plataforma.', dark: true },
              ].map((card) => (
                <div
                  key={card.n}
                  className={`rounded-[26px] p-7 flex flex-col gap-2.5 ${card.dark ? 'bg-primary-650 text-white' : 'bg-white'}`}
                >
                  <div className="font-[family-name:var(--font-caveat)] text-[44px] font-bold leading-none text-secondary-650">{card.n}</div>
                  <h3 className={`text-lg font-bold ${card.dark ? 'text-white' : 'text-primary-775'}`}>{card.titulo}</h3>
                  <p className={`text-[14.5px] leading-[1.55] ${card.dark ? 'text-primary-200' : 'text-neutral-600'}`}>{card.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- COMUNIDADE NO WHATSAPP --- */}
        <section id="comunidade" className="px-6 md:px-12 pb-16 md:pb-[76px] scroll-mt-24">
          <div className="max-w-[1180px] mx-auto bg-warm-bg border border-warm-border rounded-[32px] md:rounded-[44px] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">

            <div className="flex flex-col gap-5">
              <span className="self-start inline-flex items-center gap-2.5 bg-white border border-[#E8DCC0] px-4 py-[9px] rounded-full text-[13px] font-bold text-warm-text-strong">
                <span className="w-5 h-5 rounded-full bg-[#25D366] inline-flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3 h-3 text-white" fill="white" strokeWidth={0} />
                </span>
                Comunidade no WhatsApp · gratuita e aberta
              </span>

              <h2 className="text-2xl md:text-[38px] leading-[1.14] font-extrabold text-warm-text-strong tracking-tight">
                Uma comunidade de gente que está na mesma que você
              </h2>

              <p className="text-base md:text-[17.5px] leading-[1.65] text-warm-text max-w-[540px] text-pretty">
                Assim que se inscreve, você entra no nosso grupo no WhatsApp, um espaço para trocar experiências com outros vestibulandos e tirar dúvidas com universitários que já passaram por isso. A <strong>Let</strong> caminha junto, avisando o que ninguém pode perder.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'entre estudantes', texto: 'Troca de experiências, rotina, escolha de curso e desabafo de quem está estudando agora.' },
                  { label: 'com universitários', texto: 'Dúvidas respondidas por quem já passou, do conteúdo à vida na universidade.' },
                  { label: 'avisos da Let', texto: 'Datas, inscrições de vestibulares, lembretes e novidades da plataforma.' },
                  { label: 'conteúdo de estudo', texto: 'Dicas de organização, técnicas de memorização e repertório para a redação.' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-bold uppercase tracking-wide text-warm-text-label">{item.label}</span>
                    <span className="text-[15px] leading-[1.55] text-warm-text-strong">{item.texto}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 flex-wrap pt-1">
                <Link href="/#formulario" className="bg-warm-text-strong text-white text-base font-bold px-[34px] py-[17px] rounded-full hover:opacity-90 transition-opacity">
                  Entrar na comunidade
                </Link>
                <span className="font-[family-name:var(--font-caveat)] text-xl text-warm-text-label">é só se inscrever que o link chega</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-end gap-5 min-w-0">
              <div className="flex-[0_1_200px] max-w-[200px] min-w-0 flex flex-col items-center gap-1.5">
                <div className="relative w-full aspect-square rounded-full overflow-hidden bg-primary-100">
                  <Image src="/static/let.png" alt="Let, a assistente da Leterizza" fill sizes="200px" className="object-cover" />
                </div>
                <span className="font-[family-name:var(--font-caveat)] text-2xl text-warm-text-label text-center">oi, eu sou a Let</span>
              </div>

              <div className="flex-[1_1_260px] max-w-[290px] min-w-0 bg-white rounded-[32px] p-5 shadow-[0_18px_44px_rgba(93,73,32,0.14)] flex flex-col gap-3">
                <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-100">
                  <span className="w-[34px] h-[34px] rounded-full bg-primary-450 text-white inline-flex items-center justify-center font-extrabold text-sm shrink-0">L</span>
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-neutral-900">Comunidade Leterizza</div>
                    <div className="text-[11.5px] text-neutral-400">vestibulandos, universitários e a Let</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-primary-450 pl-0.5">Let · Leterizza</span>
                  <div className="bg-primary-50 rounded-2xl rounded-bl-[4px] px-3.5 py-3 text-[13.5px] leading-[1.5] text-primary-650">
                    Bom dia, gente! Deixei aqui a lista de datas importantes dos vestibulares até dezembro 📌
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-blue-600 pl-0.5">Bia · 3º EM</span>
                  <div className="bg-blue-50 rounded-2xl rounded-bl-[4px] px-3.5 py-3 text-[13.5px] leading-[1.5] text-blue-800">
                    gente, como vocês estudam redação sem ninguém pra corrigir? tô travada
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[11px] font-bold text-green-800 pr-0.5">Rafa · Eng. USP</span>
                  <div className="bg-[#E5F3EC] rounded-2xl rounded-br-[4px] px-3.5 py-3 text-[13.5px] leading-[1.5] text-green-950">
                    eu trocava redação com uma amiga toda semana. se quiser eu leio a sua e comento 🙌
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- DEPOIMENTOS + MISSÃO --- */}
        <section className="bg-[#F8F4FF] px-6 md:px-12 py-16 md:py-[76px]">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 items-stretch">
            <div className="bg-white rounded-[32px] p-8 md:p-11 flex flex-col gap-7 shadow-[0_12px_32px_rgba(46,16,101,0.08)]">
              <p className="text-xl md:text-2xl leading-[1.55] font-medium text-primary-775 text-pretty">
                &ldquo;O cronograma ajuda demais, porque muitos não conseguem montar um por conta própria ou pagar alguém que faça. E ser gratuito torna acessível para muita gente, que é o mais importante.&rdquo;
              </p>
              <div className="flex items-center gap-3.5 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-450 flex items-center justify-center font-extrabold">A</div>
                <div className="text-[15px] leading-tight">
                  <div className="font-bold text-neutral-900">Estudante do 3º EM</div>
                  <div className="text-primary-450 font-semibold">cursinho popular · já testou a plataforma</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-[28px] p-[30px] flex-1 flex flex-col gap-3.5">
                <p className="text-base leading-[1.6] text-[#4A3B69]">&ldquo;É um cursinho dentro de um site gratuito. Isso é sensacional.&rdquo;</p>
                <span className="text-[13px] font-semibold text-primary-450 mt-auto">Estudante de cursinho popular</span>
              </div>
              <div className="bg-primary-650 rounded-[28px] p-[30px] flex-1 flex flex-col gap-3">
                <span className="font-[family-name:var(--font-caveat)] text-2xl text-secondary-650">nossa missão</span>
                <p className="text-base leading-[1.6] text-primary-100">
                  Democratizar o acesso à educação, ensinando a estudar de forma estratégica, independentemente da condição financeira.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="bg-white px-6 md:px-12 py-16 md:py-[76px]">
          <div className="max-w-[1180px] mx-auto bg-primary-550 rounded-[32px] md:rounded-[48px] p-8 md:p-16 relative overflow-hidden text-center flex flex-col items-center gap-5">
            <div className="absolute -top-36 -right-16 w-[400px] h-[400px] rounded-full bg-secondary-650 blur-[110px] opacity-35 pointer-events-none" />
            <span className="relative z-10 font-[family-name:var(--font-caveat)] text-2xl md:text-[28px] text-secondary-650">a educação transforma vidas</span>
            <h2 className="relative z-10 text-3xl md:text-[44px] leading-[1.12] font-extrabold text-white max-w-[760px] text-balance">
              Entre cedo na plataforma que quer tornar o vestibular mais acessível
            </h2>
            <p className="relative z-10 text-base md:text-lg leading-[1.6] text-primary-100 max-w-[560px]">
              Inscreva-se para ser um dos primeiros a testar, ajude a construir o produto com os seus feedbacks e entre hoje na comunidade da Let.
            </p>
            <Link href="/#formulario" className="relative z-10 bg-white text-primary-650 text-base md:text-[17px] font-bold px-9 md:px-[46px] py-[19px] rounded-full hover:bg-primary-50 transition-colors">
              Quero ser um dos primeiros
            </Link>
            <span className="relative z-10 text-sm text-primary-200">Inscrições até {PRAZO_INSCRICOES} · sem cartão de crédito</span>
          </div>
        </section>

      </main>

      <Footer />

      {/* Barra fixa mobile */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/[0.96] backdrop-blur-[10px] border-t border-[#EDE4FB] flex items-center justify-between gap-3 px-4 pt-3"
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      >
        <span className="text-xs font-semibold text-primary-775 leading-tight">
          Inscrições até {PRAZO_INSCRICOES}<br />
          <span className="text-neutral-500 font-normal">gratuito nesta fase</span>
        </span>
        <Link href="/#formulario" className="shrink-0 bg-primary-450 text-white text-sm font-bold px-6 py-3 rounded-full">
          Quero me inscrever
        </Link>
      </div>
    </div>
  );
}
