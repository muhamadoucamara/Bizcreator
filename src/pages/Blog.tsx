import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: "Cómo crear una marca desde cero en 2026",
    excerpt: "Descubre los pasos fundamentales para construir una identidad de marca sólida en la era de la inteligencia artificial.",
    date: "28 Feb, 2026",
    author: "Equipo BizCreator",
    image: "https://picsum.photos/seed/brand/800/600",
    slug: "crear-marca-desde-cero"
  },
  {
    id: '2',
    title: "Cómo elegir el mejor nombre para tu negocio",
    excerpt: "El nombre es el activo más importante de tu empresa. Aprende las técnicas psicológicas para elegir uno ganador.",
    date: "25 Feb, 2026",
    author: "Ana Martínez",
    image: "https://picsum.photos/seed/name/800/600",
    slug: "elegir-nombre-negocio"
  },
  {
    id: '3',
    title: "Cómo vender en dropshipping en 2026",
    excerpt: "El dropshipping ha evolucionado. Te mostramos las estrategias que están funcionando hoy para escalar tu tienda.",
    date: "22 Feb, 2026",
    author: "Juan Pérez",
    image: "https://picsum.photos/seed/drop/800/600",
    slug: "vender-dropshipping-2026"
  },
  {
    id: '4',
    title: "Cómo lanzar una criptomoneda con éxito",
    excerpt: "Guía completa sobre tokenomics, comunidad y branding para tu próximo proyecto blockchain.",
    date: "20 Feb, 2026",
    author: "Crypto Expert",
    image: "https://picsum.photos/seed/crypto/800/600",
    slug: "lanzar-criptomoneda"
  },
  {
    id: '5',
    title: "Cómo crear una tienda online rentable",
    excerpt: "Desde la elección de plataforma hasta la optimización de checkout. Todo lo que necesitas saber.",
    date: "18 Feb, 2026",
    author: "Ecommerce Pro",
    image: "https://picsum.photos/seed/shop/800/600",
    slug: "tienda-online-rentable"
  },
  {
    id: '6',
    title: "La importancia del SEO en las descripciones de producto",
    excerpt: "No escribas solo para humanos, escribe también para Google. Mejora tu posicionamiento hoy mismo.",
    date: "15 Feb, 2026",
    author: "SEO Specialist",
    image: "https://picsum.photos/seed/seo/800/600",
    slug: "seo-descripciones-producto"
  },
  {
    id: '7',
    title: "Marketing en Instagram para emprendedores",
    excerpt: "Domina el algoritmo y convierte tus seguidores en clientes leales con contenido de valor.",
    date: "12 Feb, 2026",
    author: "Social Media Manager",
    image: "https://picsum.photos/seed/insta/800/600",
    slug: "marketing-instagram"
  },
  {
    id: '8',
    title: "5 Nichos de negocio rentables para este año",
    excerpt: "Analizamos las tendencias del mercado para traerte las mejores oportunidades de emprendimiento.",
    date: "10 Feb, 2026",
    author: "Market Analyst",
    image: "https://picsum.photos/seed/niche/800/600",
    slug: "nichos-rentables"
  },
  {
    id: '9',
    title: "Cómo redactar slogans que vendan",
    excerpt: "El arte de la síntesis publicitaria. Aprende a crear frases que resuman tu marca perfectamente.",
    date: "08 Feb, 2026",
    author: "Copywriter Senior",
    image: "https://picsum.photos/seed/slogan/800/600",
    slug: "redactar-slogans"
  },
  {
    id: '10',
    title: "Guía de branding para restaurantes modernos",
    excerpt: "En la gastronomía, la imagen es tan importante como el sabor. Crea una experiencia completa.",
    date: "05 Feb, 2026",
    author: "Chef & Consultant",
    image: "https://picsum.photos/seed/food/800/600",
    slug: "branding-restaurantes"
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-950 mb-6">Blog para Emprendedores</h1>
        <p className="text-lg text-slate-600">Aprende a lanzar y escalar tu negocio con nuestras guías expertas y consejos de IA.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              <h2 className="text-xl font-bold text-indigo-950 group-hover:text-emerald-600 transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:gap-3 transition-all">
                Leer más <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
