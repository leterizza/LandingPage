import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, User } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

// Tipagem para os posts do Sanity
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  author: { name: string; image: unknown };
  mainImage: unknown;
  publishedAt: string;
}

export default async function BlogPage() {
  // Busca os posts reais do Sanity
  const posts: Post[] = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author->{ name, image },
      mainImage,
      publishedAt
    }
  `);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
      <Header />

      <main className="flex-1 w-full pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 mb-20 text-left">
          <h1 className="text-6xl md:text-7xl font-bold text-[#2E1065] mb-4 tracking-tighter">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl font-medium leading-relaxed">
            Dicas, novidades e metodologias para ajudar você a alcançar seus objetivos acadêmicos com a Leterizza
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  href={`/blog/${post.slug.current}`} 
                  key={post._id} 
                  className="flex flex-col group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all hover:border-purple-200"
                >
                  <div className="w-full aspect-video bg-purple-50 relative overflow-hidden flex items-center justify-center">
                    {post.mainImage ? (
                      <Image 
                        src={urlForImage(post.mainImage).url()} 
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <span className="text-purple-300 font-bold tracking-widest uppercase text-xs">Sem Imagem</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B3DFF] transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <User size={12} className="text-purple-400" />
                        <span>{post.author?.name || 'Equipe Leterizza'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} />
                        <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : 'Recentemente'}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">Nenhum artigo publicado ainda. <br/> Acesse o /studio para criar seu primeiro post!</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

