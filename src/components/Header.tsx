"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? 'pt-2 md:pt-4 px-4 md:px-8' : 'pt-4 md:pt-8 px-4 sm:px-8 lg:px-12'
      }`}
    >
      <div 
      
        className={`w-full max-w-7xl rounded-full transition-all duration-500 flex items-center justify-between ${
          isScrolled
            ? 'bg-primary-900 py-1 md:py-3 px-4 md:px-6 shadow-lg shadow-primary-900/20 border border-primary-800 backdrop-blur-md' 
            : 'bg-transparent py-2 px-2 border-transparent shadow-none'
        }`}
      >
    
        <div className="flex items-center">
          <div 
            className="relative items-center w-auto flex transition-all duration-500"
          >
          
            <Image 
              src="/static/logoHorizontal.png"
              alt="Logo Leterizza"
              width={130}
              height={40} 
              className={`object-contain object-left transition-opacity duration-500 w-[100px] md:w-[130px] h-auto ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
          
            <Image 
              src="/static/Logo_Leterizza_Branco.png"
              alt="Logo Leterizza"
              fill
              className={`object-contain object-left transition-opacity duration-500 ${
                isScrolled ? 'visible' : 'invisible'
              }`}
              priority
            />
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-base font-bold">
          <a href="#" className={`transition-colors duration-300 ${
            isScrolled ? 'text-primary-100 hover:text-white' : 'text-neutral-950 hover:text-primary-500'
          }`}>Sobre nós</a>
          <a href="#" className={`transition-colors duration-300 ${
            isScrolled ? 'text-primary-100 hover:text-white' : 'text-neutral-950 hover:text-primary-500'
          }`}>Funcionalidades</a>
          <a href="#" className={`transition-colors duration-300 ${
            isScrolled ? 'text-primary-100 hover:text-white' : 'text-neutral-950 hover:text-primary-500'
          }`}>Planos</a>
          <a href="#" className={`transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-primary-600'
          }`}>Contatos</a>
        </nav>
        
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className={`text-base font-bold transition-colors duration-300 ${
            isScrolled ? 'text-white hover:text-primary-200' : 'text-neutral-950 hover:text-primary-600'
          }`}>
            Entrar
          </a>
          <a href="#" className={`text-base font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5 ${
            isScrolled 
              ? 'bg-white text-primary-900 hover:bg-neutral-100 shadow-white/10' 
              : 'bg-primary-500 text-white hover:bg-primary-600 shadow-primary-200'
          }`}>
            Cadastre-se
          </a>
        </div>
        
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleMobileMenu}
            className={`p-2 transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-neutral-950'
            }`}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
          
            {isMobileMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-primary-950 p-8 z-60 shadow-2xl transition-transform duration-500 transform lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <Image 
              src="/static/Logo_Leterizza_Branco.png" 
              alt="Logo Leterizza"
              width={24} 
              height={24}
              className="object-contain"
            />
            <button onClick={toggleMobileMenu} className="text-white p-2">
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg font-bold text-primary-100 mb-auto">
            <a href="#" onClick={toggleMobileMenu} className="hover:text-white">Sobre nós</a>
            <a href="#" onClick={toggleMobileMenu} className="hover:text-white">Funcionalidades</a>
            <a href="#" onClick={toggleMobileMenu} className="hover:text-white">Planos</a>
            <a href="#" onClick={toggleMobileMenu} className="hover:text-white">Contatos</a>
          </nav>

          <div className="flex flex-col gap-4 mt-12 pt-8 border-t border-primary-800">
            <a href="#" onClick={toggleMobileMenu} className="text-lg font-bold text-white hover:text-primary-200 text-center py-3">
              Entrar
            </a>
            <a href="#" onClick={toggleMobileMenu} className="text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-sm bg-white text-primary-900 hover:bg-neutral-100 text-center">
              Cadastre-se
            </a>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          onClick={toggleMobileMenu}
         
          className="fixed inset-0 bg-black/50 z-55 lg:hidden backdrop-blur-sm"
          aria-hidden="true"
        />
      )}
    </header>
  );
}