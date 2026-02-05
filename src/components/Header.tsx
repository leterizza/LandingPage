import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full bg-neutral-50 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50  border-neutral-100">
      <div className="flex items-center gap-2">
        <Image src="/static/Logotipo_Leterizza.png" alt="Logo Leterizza" width={40} height={40} />
        <div className="font-bold text-2xl flex items-center gap-1 text-primary-950">
          LETERIZZA
        </div>
      </div>

      <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
        <Link href="#sobre" className="hover:text-primary-600 transition-colors">Sobre nós</Link>
        <Link href="#funcionalidades" className="hover:text-primary-600 transition-colors">Funcionalidades</Link>
        <Link href="#planos" className="hover:text-primary-600 transition-colors">Planos</Link>
        <Link href="#contato" className="hover:text-primary-600 transition-colors">Contato</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/login" className="hidden md:block text-sm font-medium text-neutral-600 hover:text-primary-600">
          Login
        </Link>
        <Link 
          href="/cadastro" 
          className="bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors shadow-md shadow-primary-200"
        >
          Fazer cadastro
        </Link>
        <button className="md:hidden text-neutral-600">
          <Menu />
        </button>
      </div>
    </header>
  );
}