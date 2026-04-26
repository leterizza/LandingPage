import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Image 
              src="/static/logoHorizontal_Branco.png" 
              alt="Logo Leterizza" 
              width={160} 
              height={45}
              className="object-contain h-auto"
            />
            
            <p className="text-primary-100 text-base leading-relaxed max-w-md">
              Materiais educacionais de qualidade para seu sucesso no vestibular.
            </p>
            
            <div className="flex flex-col gap-3 mt-2">
              <a href="mailto:ola@leterizza.com.br" className="flex items-center gap-3 text-primary-100 hover:text-white transition-colors">
                <Mail size={20} />
                <span>contato@leterizza.com.br</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2">Links rápidos</h3>
            <Link href="/" className="text-primary-100 hover:text-white transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="text-primary-100 hover:text-white transition-colors">
              Sobre nós
            </Link>
            <Link href="#funcionalidades" className="text-primary-100 hover:text-white transition-colors">
              Funcionalidades
            </Link>
            <Link href="#planos" className="text-primary-100 hover:text-white transition-colors">
              Planos
            </Link>
            <Link href="/contato" className="text-primary-100 hover:text-white transition-colors">
              Contato
            </Link>
          </div>


          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2">Legal</h3>
            <Link href="/termos" className="text-primary-100 hover:text-white transition-colors">
              Termos de uso
            </Link>
            <Link href="/privacidade" className="text-primary-100 hover:text-white transition-colors">
              Política de privacidade
            </Link>
          </div>

        </div>

        <div className="w-full border-t border-primary-800 mt-12 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          
          <div className="text-sm text-primary-200 text-center md:text-left">
            © {new Date().getFullYear()} Leterizza. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-6">
            <Link href="#" className="text-primary-300 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-primary-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-primary-300 hover:text-white transition-colors" aria-label="YouTube">
              <Youtube size={24} />
            </Link>
          </div>

        </div>
        
      </div>
    </footer>
  );
}