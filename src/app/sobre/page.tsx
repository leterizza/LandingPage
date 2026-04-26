"use client";

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Users, ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function SobreNos() {
  const [currentStep, setCurrentStep] = useState(0);

  const paginate = (direction: number) => {
      setCurrentStep((prev) => {
        let nextStep = prev + direction;
        
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
      zIndex: 2,      
      y: -150,      
      x: 50,          
      opacity: 0,
      rotate: 5,      
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const teamMembers = [
    { name: "Sabrina Lima", role: "Fundadora e Coordenadora Geral", dept: "Coordenação Geral" },
    { name: "Gustavo Sá", role: "UX/UI Designer", dept: "Tecnologia" },
    { name: "Fernando", role: "Relacionamento Institucional", dept: "Parcerias & Impacto" },
    { name: "Eduardo Araújo", role: "Desenvolvedor Full Stack", dept: "Tecnologia" },
    { name: "Maitê", role: "Estratégia e Pesquisa", dept: "Marketing" },
    { name: "Eduardo Araújo", role: "Desenvolvedor Front-End", dept: "Tecnologia" },
    { name: "Manuelle", role: "Conteúdo e Social Media", dept: "Marketing" },
    { name: "Paulo Henrique", role: "Desenvolvedor Full Stack", dept: "Tecnologia" }
  ];

  const trajectorySteps = [
    {
      year: "2024",
      title: "O início: TCC e o Plano de Negócio",
      content: (
        <>
          <p className="mb-4">
            A Leterizza nasceu como o Trabalho de Conclusão de Curso da fundadora, Sabrina Lima em conjunto com Cauã Dias, no curso de Marketing da USP.
          </p>
          <p>
            O TCC teve como objetivo criar um modelo de negócio que democratizasse a preparação para o vestibular, atendendo principalmente estudantes de baixa renda. Foram conduzidas pesquisas qualitativas e quantitativas com estudantes e responsáveis, que moldaram a base do projeto.
          </p>
        </>
      )
    },
    {
      year: "2024",
      title: "Validação e Pré-incubação",
      content: (
        <>
          <p className="mb-4">
            Após a aprovação com excelência do TCC, decidimos tirar a ideia do papel e iniciar a fase de testes reais com os alunos.
          </p>
          <p>
            Entramos em fase de pré-incubação para estruturar a startup, desenvolver a plataforma tecnológica e consolidar nosso propósito de impacto social na educação.
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
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Democratizando o acesso à educação para transformar o futuro de milhares de estudantes.
            </p>

            {/* Imagem Hero / Glow */}
            <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] bg-purple-50 rounded-3xl relative border border-purple-100 shadow-[0_0_60px_rgba(139,61,255,0.15)] flex items-center justify-center overflow-hidden">
              <span className="text-purple-300 font-bold tracking-widest uppercase">Imagem da Equipe / Projeto</span>
            </div>
          </div>
        </section>

        {/* --- NOSSA HISTÓRIA --- */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-start text-left">
            <div className="inline-block bg-purple-100 text-[#8B3DFF] px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
              Nossa história
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
              "Desejamos que a Leterizza alcance quem mais precisa e seja um lembrete de que a educação não pode ser um privilégio reservado a poucos, mas um direito que precisa chegar a todos."
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
                  <path d="M2 8C25 2 75 2 98 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
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
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </h2>
              <p className="text-[#4A3B69] text-lg md:text-xl font-medium mt-4 max-w-sm mx-auto lg:mx-0">
                Cada passo da Leterizza é uma prova de que o sonho é possível.
              </p>
            </div>

            {/* Lado Direito - Cards e Slider */}
            <div className="flex-1 w-full max-w-lg relative z-10 flex flex-col mt-10 lg:mt-0">
          
              <div className="relative w-full">
                
                <div className="absolute inset-0 bg-[#E5F3EC] rounded-2xl transform rotate-[-4deg] border border-green-100 shadow-sm origin-bottom-left"></div>
                <div className="absolute inset-0 bg-white rounded-2xl transform rotate-[3deg] border border-gray-100 shadow-sm origin-bottom-right"></div>
                
                <div className="relative w-full z-10 grid" style={{ gridTemplateAreas: "'cardArea'" }}>
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={currentStep}
                      variants={stackVariants}
                      initial="enter"
                      animate="center"m 
                      style={{ gridArea: 'cardArea' }}
                      className="bg-[#F6EBE8] rounded-2xl p-8 md:p-10 shadow-lg border border-[#F0DCD7] ring-4 ring-inset ring-white w-full min-h-[380px] flex flex-col transform-gpu origin-bottom"
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
              <Users className="w-3 h-3"/> Nosso time
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
              Quem faz a Leterizza <span className="text-[#2E1065] relative inline-block">acontecer
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-2 max-w-2xl leading-relaxed">
              Um time jovem, criativo e apaixonado por impacto social.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative p-6 group-hover:border-purple-200 transition-colors group-hover:shadow-md">
                
                {/* Placeholder da Foto da Equipe */}
                <div className="w-full aspect-square bg-gray-50 rounded-2xl mb-4 overflow-hidden relative border border-gray-100">
                  {/* <Image src={`/static/equipe/${idx}.jpg`} fill className="object-cover" alt={member.name} /> */}
                </div>
                
                {/* Informações do Membro */}
                <div className="flex-1 flex flex-col pr-12 relative text-left"> 
                  <p className="text-gray-900 text-sm font-semibold mt-1">{member.name}</p>
                  <p className="text-gray-600 text-xs mt-1">{member.role}</p>
                  <p className="text-purple-500 text-[10px] mt-1 uppercase font-bold">{member.dept}</p>
                </div>

              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}