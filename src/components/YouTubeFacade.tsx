"use client"

import { useState } from "react";
import { Play } from "lucide-react";

const playerClass =
  "w-full aspect-video rounded-3xl relative border border-purple-100 shadow-[0_0_60px_rgba(139,61,255,0.15)] hover:shadow-[0_0_80px_rgba(139,61,255,0.25)]";

// O YouTube só é carregado quando a pessoa clica em reproduzir. Enquanto isso, a página
// não faz nenhuma requisição ao Google nem grava cookie.
export function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [ativo, setAtivo] = useState(false);

  if (ativo) {
    return (
      <iframe
        className={playerClass}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setAtivo(true)}
      aria-label={`Reproduzir vídeo: ${title}`}
      className={`${playerClass} group overflow-hidden flex flex-col items-center justify-center gap-4 text-white`}
      style={{ background: "linear-gradient(135deg, #2E1065 0%, #631896 100%)" }}
    >
      <span className="w-20 h-20 rounded-full bg-white text-primary-450 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
        <Play className="w-9 h-9 ml-1" fill="currentColor" />
      </span>
      <span className="text-lg md:text-2xl font-extrabold">{title}</span>
      <span className="max-w-sm px-6 text-xs leading-relaxed text-primary-100">
        Ao reproduzir, o vídeo é carregado do YouTube (modo de privacidade aprimorado).
      </span>
    </button>
  );
}
