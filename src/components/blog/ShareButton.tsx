"use client"

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
}

export function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Confira este artigo no blog da Leterizza: ${title}`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Erro ao compartilhar:', err);
      }
    } else {
      // Fallback: Copiar para área de transferência
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Erro ao copiar link:', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="text-purple-500 hover:text-purple-700 text-xs font-bold mt-1 flex items-center gap-1 ml-auto transition-colors group relative"
    >
      {copied ? (
        <>
          <Check size={12} className="text-green-500" /> 
          <span className="text-green-500">Link copiado!</span>
        </>
      ) : (
        <>
          <Share2 size={12} className="group-hover:scale-110 transition-transform" /> 
          Compartilhar
        </>
      )}
    </button>
  );
}
