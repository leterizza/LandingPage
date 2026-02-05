import { Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white py-12 px-6 md:px-12 border-t border-primary-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-1">
          <div className="font-bold text-2xl flex items-center gap-2 mb-4">
            <Image src="/static/Logotipo_Leterizza_Branco.png" alt="Logo Leterizza" width={40} height={40} />
            LETERIZZA
          </div>
          <p className="text-primary-100 text-sm mb-6">
            Materiais educacionais de qualidade para seu sucesso no vestibular.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 text-primary-300 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-primary-300 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 text-primary-300 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-4 text-white">Menu</h4>
          <ul className="space-y-2 text-sm text-primary-200">
            <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Planos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-bold mb-4 text-white">Contato</h4>
          <p className="text-sm text-primary-200 mb-2">contato@leterizza.com.br</p>
        </div>
      </div>

      <div className="border-t border-primary-900 mt-12 pt-6 text-center text-xs text-primary-400">
        © 2026 Leterizza. Todos os direitos reservados.
      </div>
    </footer>
  );
}