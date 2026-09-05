"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getDesktopLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? 'text-primary-450'
      : 'text-neutral-900 hover:text-primary-450';
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive ? 'text-primary-450' : 'text-neutral-900 hover:text-primary-450';
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/[0.92] backdrop-blur-[10px] border-b border-[#F0EAF9]">
        <div className="relative max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          <Link href="/" className="shrink-0">
            <Image
              src="/static/logoHorizontal.png"
              alt="Logo Leterizza"
              width={130}
              height={32}
              className="object-contain object-left w-[100px] md:w-[130px] h-auto"
              priority
            />
          </Link>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-9 text-[15px] font-semibold">
            <Link href="/" className={`nav ${getDesktopLinkClass('/')}`}>
              Início
            </Link>
            <Link href="/sobre" className={`nav ${getDesktopLinkClass('/sobre')}`}>
              Sobre nós
            </Link>
            <Link href="/contato" className={`nav ${getDesktopLinkClass('/contato')}`}>
              Contato
            </Link>
            <span className="text-neutral-300 cursor-not-allowed select-none" title="Em breve">
              Blog
            </span>
          </nav>

          <Link
            href="/#formulario"
            className="hidden lg:inline-flex bg-primary-450 text-white text-[15px] font-semibold px-6 py-[11px] rounded-full hover:bg-primary-550 transition-colors shrink-0"
          >
            Quero me inscrever
          </Link>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-neutral-900"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div
            onClick={toggleMobileMenu}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 z-[100] w-[85%] max-w-sm bg-white p-8 shadow-2xl overflow-y-auto">
            <div className="flex flex-col min-h-full">
              <div className="flex items-center justify-between mb-12">
                <Image
                  src="/static/logoHorizontal.png"
                  alt="Logo Leterizza"
                  width={110}
                  height={28}
                  className="object-contain w-[110px] h-auto"
                />
                <button onClick={toggleMobileMenu} className="text-neutral-900 p-2" aria-label="Fechar menu">
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg font-bold mb-auto">
                <Link href="/" onClick={toggleMobileMenu} className={getMobileLinkClass('/')}>
                  Início
                </Link>
                <Link href="/sobre" onClick={toggleMobileMenu} className={getMobileLinkClass('/sobre')}>
                  Sobre nós
                </Link>
                <Link href="/contato" onClick={toggleMobileMenu} className={getMobileLinkClass('/contato')}>
                  Contato
                </Link>
                <span className="text-neutral-300 select-none" title="Em breve">
                  Blog
                </span>
              </nav>

              <div className="flex flex-col gap-4 mt-12 pt-8 border-t border-neutral-100">
                <Link
                  href="/#formulario"
                  onClick={toggleMobileMenu}
                  className="text-base font-bold px-8 py-4 rounded-full bg-primary-450 text-white hover:bg-primary-550 transition-colors text-center"
                >
                  Quero me inscrever
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
