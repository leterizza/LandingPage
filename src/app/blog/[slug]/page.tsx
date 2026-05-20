import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { ShareButton } from '@/components/blog/ShareButton';
import { RecentPostsCarousel } from '@/components/blog/RecentPostsCarousel';

interface Post {
  title: string;
  excerpt: string;
  author: { name: string; role: string; image: any };
  publishedAt: string;
  mainImage: any;
  body: any;
  slug: { current: string };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post: Post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      excerpt,
      mainImage
    }
  `, { slug });

  if (!post) {
    return {
      title: "Artigo não encontrado | Leterizza",
    };
  }

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).url() : undefined;

  return {
    title: `${post.title} | Leterizza`,
    description: post.excerpt || "Confira este conteúdo completo no blog da Leterizza.",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Busca o post atual
  const post: Post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      excerpt,
      author->{ name, role, image },
      publishedAt,
      mainImage,
      body,
      slug
    }
  `, { slug });

  if (!post) {
    notFound();
  }

  // Busca artigos recentes (exceto o atual) com dados completos para o carrossel
  const recentPostsRaw = await client.fetch(`
    *[_type == "post" && slug.current != $slug] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      author->{ name }
    }
  `, { slug });

  // Pré-resolve as URLs das imagens no servidor
  const recentPosts = recentPostsRaw.map((p: any) => ({
    ...p,
    imageUrl: p.mainImage ? urlForImage(p.mainImage).url() : null,
  }));

  // Busca links para anterior/próximo (simplificado por data)
  const [prevPost, nextPost] = await Promise.all([
    client.fetch(`*[_type == "post" && publishedAt < $date] | order(publishedAt desc)[0] { title, "slug": slug.current }`, { date: post.publishedAt }),
    client.fetch(`*[_type == "post" && publishedAt > $date] | order(publishedAt asc)[0] { title, "slug": slug.current }`, { date: post.publishedAt }),
  ]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />

      <main className="flex-1 w-full pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          
          {/* Breadcrumbs */}
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold mb-8 uppercase tracking-wide">
            <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </div>

          {/* Título e Subtítulo */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          {/* Bloco do Autor e Data */}
          <div className="flex items-center justify-between border-y border-gray-100 py-6 mb-10">
            <div className="flex items-center gap-4">
              {post.author?.image ? (
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-purple-100 shadow-md">
                   <Image src={urlForImage(post.author.image).url()} alt={post.author.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-md font-bold text-lg">
                  <span>{post.author?.name?.charAt(0) || 'L'}</span>
                </div>
              )}
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">{post.author?.name || 'Equipe Leterizza'}</p>
                <p className="text-xs text-gray-500 font-medium">{post.author?.role || 'Especialista'}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 font-medium">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : 'Recentemente'}</p>
              <ShareButton title={post.title} />
            </div>
          </div>

          {/* Imagem de Capa */}
          <div className="w-full aspect-video bg-[#F4F6F8] rounded-3xl mb-10 flex items-center justify-center relative overflow-hidden border border-gray-100 shadow-sm">
             {post.mainImage ? (
                <Image src={urlForImage(post.mainImage).url()} alt={post.title} fill className="object-cover" />
             ) : (
                <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 text-center relative z-10">
                  <div className="text-xs text-gray-400 font-bold mb-4 flex items-center justify-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-gray-100"></span> Desempenho Leterizza
                  </div>
                  <div className="text-5xl font-black text-yellow-500 mb-2">850 XP</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Estudante Dedicado</div>
                </div>
             )}
          </div>

          {/* Corpo do Texto (Portable Text) */}
          <div className="max-w-none text-black leading-relaxed" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
            <PortableText 
              value={post.body} 
              components={{
                block: {
                  h2: ({children}) => <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-10 mb-4 tracking-tight">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3 tracking-tight">{children}</h3>,
                  normal: ({children}) => <p className="text-[18px] leading-[24px] mb-4 text-black font-normal">{children}</p>,
                },
                list: {
                  bullet: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2 text-[18px] leading-[24px] text-black ml-4">{children}</ul>,
                },
                marks: {
                  strong: ({children}) => <strong className="font-bold text-black">{children}</strong>,
                  link: ({children, value}) => (
                    <a href={value?.href} className="text-[#8B3DFF] underline decoration-1 underline-offset-4 font-bold hover:text-purple-800 transition-colors">
                      {children}
                    </a>
                  ),
                }
              }} 
            />
          </div>

        </article>

        {/* NAVEGAÇÃO DE ARTIGOS */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="flex-1 w-full bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6 flex flex-col items-start border border-gray-100 group">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1 group-hover:text-purple-500 transition-colors">
                  <ArrowLeft size={14} /> Artigo Anterior
                </span>
                <span className="font-bold text-gray-900 line-clamp-2">{prevPost.title}</span>
              </Link>
            ) : <div className="flex-1"></div>}
            
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="flex-1 w-full bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6 flex flex-col items-end text-right border border-gray-100 group">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1 group-hover:text-purple-500 transition-colors">
                  Próximo Artigo <ArrowRight size={14} />
                </span>
                <span className="font-bold text-gray-900 line-clamp-2">{nextPost.title}</span>
              </Link>
            ) : <div className="flex-1"></div>}
          </div>
        </div>

        {/* ARTIGOS RECENTES - Carrossel */}
        <RecentPostsCarousel posts={recentPosts} />

      </main>

      <Footer />
    </div>
  );
}
