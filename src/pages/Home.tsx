import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Shield, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Home: React.FC = () => {
  const testimonials = [
    { name: "Carlos Ruiz", role: "Fundador de TechFlow", text: "BizCreator me ahorró semanas de trabajo. El generador de nombres me dio la idea perfecta en 5 segundos." },
    { name: "Elena Gómez", role: "Dueña de Boutique Chic", text: "Las descripciones de productos son increíbles. Mis ventas en Instagram han subido un 30% desde que las uso." },
    { name: "Mark Thompson", role: "Crypto Developer", text: "El generador de nombres para cripto es muy innovador. Encontré un nombre que suena futurista y profesional." },
    { name: "Sofía Lara", role: "Dropshipper Pro", text: "La velocidad para lanzar nuevas tiendas es clave. BizCreator es mi herramienta secreta para el éxito." },
    { name: "Javier Montes", role: "Restaurante El Sabor", text: "El generador de slogans nos ayudó a definir nuestra marca. ¡A los clientes les encanta nuestra nueva frase!" }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 rounded-l-[100px] hidden lg:block" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
              <Zap size={16} />
              <span>IA de última generación</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-950 leading-[1.1] tracking-tight">
              Crea tu negocio en minutos con <span className="text-emerald-500">inteligencia artificial</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Genera nombres, slogans, ideas y descripciones profesionales en segundos. La plataforma definitiva para emprendedores modernos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/herramientas" className="px-8 py-4 bg-indigo-900 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-2xl shadow-indigo-900/20 flex items-center justify-center gap-2">
                Empieza Gratis <ArrowRight size={20} />
              </Link>
              <Link to="/blog" className="px-8 py-4 bg-white text-indigo-900 border-2 border-indigo-100 rounded-2xl font-bold text-lg hover:border-indigo-900 transition-all flex items-center justify-center">
                Ver Tutoriales
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                <span className="text-indigo-950 font-bold">+10,000</span> emprendedores ya confían en nosotros
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100">
              <div className="space-y-6">
                <div className="h-12 w-full bg-slate-50 rounded-xl animate-pulse" />
                <div className="h-32 w-full bg-slate-50 rounded-xl animate-pulse" />
                <div className="h-12 w-full bg-emerald-500 rounded-xl" />
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-slate-100 rounded-full" />
                  <div className="h-4 w-1/2 bg-slate-100 rounded-full" />
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-indigo-950 mb-6">¿Por qué elegir BizCreator?</h2>
          <p className="text-lg text-slate-600">Diseñamos herramientas que eliminan la fricción al lanzar tu próximo gran proyecto.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="text-emerald-500" />, title: "Velocidad Extrema", desc: "Lo que antes tomaba días de brainstorming, ahora toma segundos con nuestra IA." },
            { icon: <Shield className="text-indigo-500" />, title: "Calidad Profesional", desc: "Resultados validados por algoritmos entrenados en marketing y branding." },
            { icon: <Star className="text-amber-500" />, title: "100% Gratuito", desc: "Acceso ilimitado a nuestras herramientas básicas para que nada te detenga." }
          ].map((benefit, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-indigo-950 rounded-[60px] p-12 md:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Cómo funciona en 3 pasos</h2>
            <p className="text-indigo-200 text-lg">Lanzar tu marca nunca fue tan sencillo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Elige tu Herramienta", desc: "Selecciona entre generadores de nombres, slogans o ideas de negocio." },
              { step: "02", title: "Describe tu Visión", desc: "Introduce unas pocas palabras clave sobre lo que quieres crear." },
              { step: "03", title: "Lanza tu Marca", desc: "Copia los mejores resultados y empieza a construir tu imperio." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <span className="text-8xl font-black text-white/5 absolute -top-12 -left-4">{item.step}</span>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" /> {item.title}
                </h3>
                <p className="text-indigo-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-indigo-950 mb-6">Lo que dicen nuestros usuarios</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-700 relative">
              <Star className="text-amber-400 absolute top-8 right-8" size={20} fill="currentColor" />
              <p className="mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 not-italic">
                <img src={`https://picsum.photos/seed/${t.name}/100/100`} className="w-12 h-12 rounded-full" alt={t.name} referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-indigo-950">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-emerald-500 rounded-[60px] text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Listo para dar el primer paso?</h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Únete a miles de emprendedores que están transformando sus ideas en realidades con BizCreator.</p>
        <Link to="/herramientas" className="px-12 py-5 bg-indigo-950 text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-indigo-950 transition-all shadow-2xl">
          Empieza Gratis Ahora
        </Link>
      </section>
    </div>
  );
};
