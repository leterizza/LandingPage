"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface RecentPost {
  title: string;
  slug: string;
  excerpt: string;
  mainImage: unknown;
  author: { name: string } | null;
  imageUrl: string | null;
}

interface RecentPostsCarouselProps {
  posts: RecentPost[];
}

const CARDS_VISIBLE = 3;

export function RecentPostsCarousel({ posts }: RecentPostsCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  if (!posts || posts.length === 0) return null;

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + CARDS_VISIBLE < posts.length;

  const visiblePosts = posts.slice(startIndex, startIndex + CARDS_VISIBLE);

  return (
    <section
      className="py-10 mt-8 border-t border-gray-100"
      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header: título esquerda, "Ver todos" direita */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            Artigos Recentes
          </h3>
          <Link
            href="/blog"
            className="text-[#8B3DFF] font-bold text-sm hover:text-purple-800 transition-colors flex items-center gap-1"
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>

        {/* Carrossel: seta esquerda | cards | seta direita */}
        <div className="flex items-center gap-3">

          {/* Seta Esquerda */}
          <button
            onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
            disabled={!canGoBack}
            aria-label="Artigo anterior"
            className={`shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all
              ${canGoBack
                ? 'border-[#8B3DFF] text-[#8B3DFF] hover:bg-[#8B3DFF] hover:text-white cursor-pointer'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
          >
            <ArrowLeft size={16} />
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            {visiblePosts.map((post, idx) => (
              <Link
                href={`/blog/${post.slug}`}
                key={`${post.slug}-${startIndex}-${idx}`}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all hover:border-purple-200 group flex flex-col"
              >
                {/* Imagem compacta */}
                <div className="w-full aspect-video bg-purple-50 relative overflow-hidden">
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-purple-200 text-[10px] font-bold uppercase">Sem imagem</span>
                    </div>
                  )}
                </div>

                {/* Conteúdo compacto */}
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#8B3DFF] transition-colors line-clamp-2 mb-1 leading-snug">
                    {post.title}
                  </h4>
                  {post.excerpt && (
                    <p className="text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  {post.author?.name && (
                    <p className="mt-auto text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      {post.author.name}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Seta Direita */}
          <button
            onClick={() => setStartIndex((i) => Math.min(posts.length - CARDS_VISIBLE, i + 1))}
            disabled={!canGoForward}
            aria-label="Próximo artigo"
            className={`shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all
              ${canGoForward
                ? 'border-[#8B3DFF] text-[#8B3DFF] hover:bg-[#8B3DFF] hover:text-white cursor-pointer'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
          >
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </section>
  );
}
