"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { Users, ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

interface Member {
  name: string;
  role: string;
  dept: string;
  bio: string;
  bgColor: string;
  textColor: string;
  image: string;
  linkedinUrl: string;
  stickers: string[];
  stickerPositions: string[];
}

export default function SobreNos() {
  const [currentStep, setCurrentStep] = useState(0);

  const paginate = (direction: number) => {
    setCurrentStep((prev) => {
      const nextStep = prev + direction;

      if (nextStep < 0) {
        return trajectorySteps.length - 1;
      }

      if (nextStep >= trajectorySteps.length) {
        return 0;
      }

      return nextStep;
    });
  };

  const stackVariants: Variants = {
    enter: {
      zIndex: 0,
      y: 40,
      scale: 0.85,
      opacity: 0,
      rotate: -10,
    },
    center: {
      zIndex: 1,
      y: 0,
      scale: 1,
      opacity: 1,
      rotate: -2,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
      }
    },
    exit: {
      zIndex: 0,
      x: 300,         // Desliza bem para a direita
      y: -100,        // E um pouco para cima
      rotate: 25,     // Gira como se estivesse sendo puxada pelo canto
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] // Ease out suave
      }
    }
  };

  const teamMembers = [
    {
      name: "Sabrina Lima",
      role: "Coordenação Geral",
      dept: "Coordenação Geral",
      bio: "Sou formada em Marketing pela USP e acredito no poder da educação para transformar vidas. Amo ler suspenses, fazer crochê e estar com amigos e família.",
      bgColor: "#F5F0FF",
      textColor: "#4A3B69",
      image: "/static/team/sabrina.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sabrinacruzlima",
      stickers: ["/static/stickers/4.png", "/static/stickers/36.png", "/static/stickers/22.png"],
      stickerPositions: [
        "bottom-[40px] left-[20px] rotate-[-12deg]",
        "bottom-[115px] right-[25px] rotate-[15deg]",
        "bottom-[35px] right-[75px] rotate-[5deg]"
      ]
    },
    {
      name: "Gustavo Sá",
      role: "Product Designer. Tecnologia",
      dept: "Tecnologia",
      bio: "Everything is design.",
      bgColor: "#EBF2FE",
      textColor: "#041F4D",
      image: "/static/team/gustavo.jpg",
      linkedinUrl: "",
      stickers: ["/static/stickers/29.png", "/static/stickers/34.png", "/static/stickers/14.png"],
      stickerPositions: [
        "bottom-[50px] left-[35px] rotate-[-8deg]",
        "bottom-[110px] right-[15px] rotate-[12deg]",
        "bottom-[30px] right-[60px] rotate-[22deg]"
      ]
    },
    {
      name: "Maitê",
      role: "Líder de Marketing",
      dept: "Marketing",
      bio: "Faço Marketing na USP e me apaixonei pelo projeto, muito feliz em tocar isso e fazer o ensino ser mais acessível.",
      bgColor: "#FFEEFB",
      textColor: "#DB0B14",
      image: "/static/team/maite.jpg",
      linkedinUrl: "https://www.linkedin.com/in/maite-alves-974467303/",
      stickers: ["/static/stickers/20.png"],
      stickerPositions: [
        "bottom-[45px] right-[40px] rotate-[10deg]"
      ]
    },
    {
      name: "Fernando",
      role: "Líder Impacto e Parcerias",
      dept: "Parcerias & Impacto",
      bio: "Estudante no 5° semestre de Gestão de Políticas Públicas, gosto muito de comunicação e aproveitar cada oportunidade de impacto.",
      bgColor: "#E5F3EC",
      textColor: "#004700",
      image: "/static/team/fernando.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/fernandomarcello",
      stickers: ["/static/stickers/12.png", "/static/stickers/34.png", "/static/stickers/31.png"],
      stickerPositions: [
        "bottom-[35px] left-[25px] rotate-[-15deg]",
        "bottom-[120px] right-[30px] rotate-[8deg]",
        "bottom-[40px] right-[80px] rotate-[18deg]"
      ]
    },
    {
      name: "Paulo Henrique",
      role: "Líder de Tecnologia",
      dept: "Tecnologia",
      bio: "Mais do que qualquer coisa, acredito que tecnologia deva ser uma ferramenta para mudar mundo para algo melhor.",
      bgColor: "#FFF9E6",
      textColor: "#856404",
      image: "/static/team/paulo.jpg",
      linkedinUrl: "https://www.linkedin.com/in/paulo-henrique-alves-rodrigues-447057237/",
      stickers: [
        "/static/stickers/21.png",
        "/static/stickers/21.png",
        "/static/stickers/21.png",
        "/static/stickers/21.png"
      ],
      stickerPositions: [
        "bottom-[45px] left-[15px] rotate-[-10deg]",
        "bottom-[115px] right-[20px] rotate-[15deg]",
        "bottom-[30px] right-[70px] rotate-[5deg]",
        "bottom-[100px] left-[35px] rotate-[-18deg]"
      ]
    },
    {
      name: "Tiago",
      role: "Analista de Tecnologia",
      dept: "Tecnologia",
      bio: "Entusiasta por tecnologia, educação. Movido pela vontade de construir soluções que melhorem a vida das pessoas.",
      bgColor: "#F5F0FF",
      textColor: "#4A3B69",
      image: "/static/team/tiago.jpg",
      linkedinUrl: "https://www.linkedin.com/in/tiago-s-almeida/",
      stickers: [
        "/static/stickers/10.png",
        "/static/stickers/19.png",
        "/static/stickers/25.png"
      ],
      stickerPositions: [
        "bottom-[30px] left-[30px] rotate-[-12deg]",
        "bottom-[105px] right-[25px] rotate-[15deg]",
        "bottom-[45px] right-[65px] rotate-[8deg]"
      ]
    },
    {
      name: "Ivan",
      role: "Analista de Tecnologia",
      dept: "Tecnologia",
      bio: "Sou recifense, apaixonado por cinema, música e tecnologia, e estudante de Sistemas de Informação na Universidade de São Paulo. Acredito que a educação de qualidade transforma a sociedade, e que a tecnologia é essencial para democratizar seu acesso.",
      bgColor: "#EBF2FE",
      textColor: "#041F4D",
      image: "/static/team/ivan.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/ivanlucasnogueira/",
      stickers: [
        "/static/stickers/4.png",
        "/static/stickers/36.png",
        "/static/stickers/22.png"
      ],
      stickerPositions: [
        "bottom-[40px] left-[20px] rotate-[-15deg]",
        "bottom-[120px] right-[35px] rotate-[10deg]",
        "bottom-[35px] right-[85px] rotate-[5deg]"
      ]
    },
    {
      name: "Eloísa",
      role: "Membro",
      dept: "Time",
      bio: "Informações em breve...",
      bgColor: "#E5F3EC",
      textColor: "#004700",
      image: "",
      linkedinUrl: "https://www.linkedin.com/in/eloisa-antero-guisse-0891a424a/",
      stickers: [],
      stickerPositions: []
    }
  ];

  function TeamMemberCard({ member }: { member: Member }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
      }
    }, []);

    return (
      <div
        className="relative h-[500px] rounded-[2rem] overflow-hidden cursor-default group shadow-sm hover:shadow-xl transition-all duration-500 p-4"
        style={{ backgroundColor: member.bgColor }}
        onMouseEnter={isTouchDevice ? undefined : () => setIsOpen(true)}
        onMouseLeave={isTouchDevice ? undefined : () => setIsOpen(false)}
        onClick={() => {
          if (isTouchDevice) {
            setIsOpen((prev) => !prev);
          }
        }}
      >
        {/* Card Base (Foto e Nome) - Agora com separação clara */}
        <div className="relative h-full w-full bg-white rounded-[1.5rem] overflow-hidden shadow-inner flex flex-col">
          {/* Área da Foto: ocupa o espaço disponível acima do nome */}
          <div className="flex-1 bg-gray-50 group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center 50%" }} // <--- AQUI você controla o enquadramento (ex: focar mais no topo)
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Users className="w-20 h-20 text-gray-200" />
              </div>
            )}
          </div>

          {/* Área do Nome: Fundo sólido, sem sobrepor a foto */}
          <div className="p-6 bg-white border-t border-gray-100">
            <h4 className="font-bold text-lg text-gray-900">{member.name}</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">{member.role}</p>
          </div>
        </div>

        {/* Card Overlay (Sobe ao clicar/passar o mouse) */}
        <motion.div
          initial={{ y: "100%", boxShadow: "0 0px 0px rgba(0,0,0,0)" }}
          animate={{
            y: isOpen ? "0%" : "100%",
            boxShadow: isOpen ? "0 -15px 40px rgba(0,0,0,0.12)" : "0 0px 0px rgba(0,0,0,0)"
          }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="absolute top-[10%] inset-x-0 bottom-0 p-8 flex flex-col justify-start border-t border-white/40 rounded-t-[2.5rem] z-20 overflow-hidden"
          style={{
            backgroundColor: member.bgColor,
            borderLeft: `1px solid ${member.textColor}15`,
            borderRight: `1px solid ${member.textColor}15`,
          }}
        >
          <div className="mt-2 overflow-y-auto max-h-[70%] pr-2 z-10">
            <p
              className="text-[18px] sm:text-[23px] leading-relaxed"
              style={{
                fontFamily: '"Bradley Hand", cursive',
                color: member.textColor,
                fontWeight: 400,
                letterSpacing: '0.02em'
              }}
            >
              {member.bio}
            </p>
          </div>

          {/* Stickers Espalhados (Dinâmicos por membro, garantindo sem sobrepor texto) */}
          <div className="absolute inset-0 pointer-events-none z-20">
             {member.stickers?.map((sticker: string, sIdx: number) => {
                const pos = member.stickerPositions?.[sIdx] || "bottom-14 right-3 rotate-[10deg]";
                return (
                  <div key={sIdx} className={`absolute w-8 h-8 sm:w-12 sm:h-12 filter drop-shadow-md opacity-90 transition-transform duration-300 ${pos}`}>
                    <Image 
                      src={sticker} 
                      alt="sticker" 
                      width={48} 
                      height={48} 
                      priority
                      className="object-contain" 
                      unoptimized 
                    />
                  </div>
                );
             })}
          </div>
            {member.linkedinUrl && (
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex justify-center gap-6 z-20">
              <Link 
                href={member.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-60"
                style={{ color: member.textColor }}
                aria-label="LinkedIn"
              >
                <Linkedin size={32} /> 
              </Link>
            </div>
          )}
          <button
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[0.3em] opacity-30 z-20"
            style={{ color: member.textColor }}
          >
            {isTouchDevice
              ? (isOpen ? "Toque para fechar" : "Toque para abrir")
              : (isOpen ? "Tirar o mouse para fechar" : "Passar o mouse para abrir")}
          </button>
        </motion.div>
      </div>
    );
  }

  const trajectorySteps = [
    {
      year: "2024",
      title: "O início: TCC e o Plano de Negócio",
      bgColor: "#F6EBE8", // Cor original
      content: (
        <>
          <p className="mb-4">
            A nasceu como Trabalho de Conclusão de Curso da fundadora Sabrina Lima, em conjunto com Cauã Dias, sob orientação da Prof. Dra. Tania Christopoulos, no curso de Marketing da USP.
          </p>
          <p className="mb-4">
            O projeto teve como objetivo desenvolver um modelo de negócio capaz de democratizar a preparação para o vestibular, tornando-a mais acessível para estudantes de baixa renda.
          </p>
          <p className="mb-4">
            Durante essa fase, foram conduzidas pesquisas qualitativas e quantitativas com estudantes e responsáveis financeiros, permitindo identificar desafios reais enfrentados na preparação para o vestibular e validar as primeiras hipóteses da startup.
          </p>
          <p>
            Esses estudos deram origem aos pilares estratégicos da Leterizza: acessibilidade, eficiência e impacto social por meio da educação.
          </p>
        </>
      )
    },
    {
      year: "2025",
      title: "Da ideia ao MVP",
      bgColor: "#E5F3EC", // Verde menta suave
      content: (
        <>
          <p className="mb-4">
            Em 2025, a deu os primeiros passos fora do papel e iniciou o desenvolvimento do seu MVP (Produto Mínimo Viável), transformando o plano de negócio em uma solução prática para estudantes vestibulandos.
          </p>
          <p className="mb-4">
            Nesse período, a Leterizza também participou de iniciativas voltadas para inovação e empreendedorismo, como o , programa do Instituto TIM voltado à transformação de TCCs em startups, e do , fortalecendo sua visão de negócio e sua conexão com o ecossistema empreendedor universitário.
          </p>
          <p>
            Além disso, foram iniciadas ações de recrutamento de estudantes e colaboradores para formar os primeiros times de marketing, branding, CRM e validação da startup.
          </p>
        </>
      )
    },
    {
      year: "2026",
      title: "Expansão, validação e comunidade",
      bgColor: "#E5F3EC", // Verde menta suave
      content: (
        <>
          <p className="mb-4">
            Em 2026, a está consolidando sua fase de validação por meio da ampliação dos testes da plataforma e do fortalecimento da sua comunidade de estudantes.
          </p>
          <p className="mb-4">
            Segue expandindo sua atuação no ecossistema de inovação e empreendedorismo, participando de programas, eventos e iniciativas voltadas ao desenvolvimento de startups de impacto social e educação.
          </p>
        </>
      )
    }
  ];

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
                {/* Avatar <Image src="..." fill alt="..." /> */}
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
        <section className="py-20 px-6 max-w-7xl mx-auto" id="trajetoria">
          <div className="bg-gradient-to-br from-[#F5F0FF] to-[#E6D4FF] rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-start gap-12 border border-purple-100 shadow-sm relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

            {/* Lado Esquerdo - Textos */}
            <div className="flex-1 text-center lg:text-left z-10 pt-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6 inline-block relative">
                Nossa trajetória
                <svg className="absolute -bottom-3 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </h2>
              <p className="text-[#4A3B69] text-lg md:text-xl font-medium mt-4 max-w-sm mx-auto lg:mx-0">
                Cada passo da Leterizza é uma prova de que o sonho é possível.
              </p>
            </div>

            {/* Lado Direito - Cards e Slider */}
            <div className="flex-1 w-full max-w-lg relative z-10 flex flex-col mt-10 lg:mt-0">

              <div className="relative w-full">

                <div className="absolute inset-0 bg-[#E5F3EC] rounded-2xl transform rotate-[-7deg] border border-green-100 shadow-sm origin-bottom-left"></div>
                <div className="absolute inset-0 bg-white rounded-2xl transform rotate-[5deg] border border-gray-100 shadow-sm origin-bottom-right"></div>

                <div className="relative w-full z-10 grid" style={{ gridTemplateAreas: "'cardArea'" }}>
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={currentStep}
                      variants={stackVariants}
                      initial="enter"
                      animate="center"
                      className="rounded-2xl p-8 md:p-10 shadow-lg border border-[#F0DCD7] ring-4 ring-inset ring-white w-full h-full flex flex-col transform-gpu origin-bottom"
                      style={{ 
                        gridArea: 'cardArea',
                        backgroundColor: trajectorySteps[currentStep].bgColor 
                      }}
                    >
                      <div className="bg-[#2B2B2B] w-10 h-10 rounded-md flex items-center justify-center mb-6 shrink-0">
                        <GraduationCap className="text-white w-6 h-6" />
                      </div>

                      <span className="text-gray-600 font-bold text-sm mb-2 block">
                        {trajectorySteps[currentStep].year}
                      </span>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {trajectorySteps[currentStep].title}
                      </h3>

                      <div className="text-gray-700 text-sm md:text-base leading-relaxed pb-8">
                        {trajectorySteps[currentStep].content}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Botões de Navegação */}
              <div className="flex justify-end gap-3 mt-8 z-20 relative">
                <button
                  onClick={() => paginate(-1)}
                  className="w-10 h-10 rounded-full bg-[#8B3DFF] text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                  aria-label="Passo anterior"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-10 h-10 rounded-full bg-[#8B3DFF] text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                  aria-label="Próximo passo"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* --- NOSSA EQUIPE (ADAPTADA) --- */}
        <section className="py-20 px-6 mb-20 max-w-7xl mx-auto" id="equipe">
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
            {teamMembers.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}