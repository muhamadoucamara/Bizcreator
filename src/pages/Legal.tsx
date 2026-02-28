import React from 'react';
import { Link } from 'react-router-dom';

export const LegalPage: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold text-indigo-950">{title}</h1>
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
        {content.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="pt-8 border-t border-slate-100">
        <Link to="/" className="text-emerald-600 font-bold hover:underline">Volver al inicio</Link>
      </div>
    </div>
  );
};

export const PrivacyPolicy = () => (
  <LegalPage 
    title="Política de Privacidad" 
    content={`En BizCreator, valoramos tu privacidad. Esta política explica cómo manejamos tu información.
    1. Recopilación de Datos: No almacenamos los inputs que introduces en nuestras herramientas de IA.
    2. Cookies: Utilizamos cookies técnicas para mejorar la navegación.
    3. Terceros: Utilizamos Google AdSense para mostrar publicidad, que puede utilizar cookies para personalizar anuncios.`}
  />
);

export const CookiePolicy = () => (
  <LegalPage 
    title="Política de Cookies" 
    content={`BizCreator utiliza cookies para asegurar que obtengas la mejor experiencia en nuestro sitio web.
    ¿Qué son las cookies? Son pequeños archivos de texto que se guardan en tu dispositivo.
    Cookies de publicidad: Google AdSense utiliza cookies para servir anuncios basados en tus visitas anteriores.`}
  />
);

export const TermsConditions = () => (
  <LegalPage 
    title="Términos y Condiciones" 
    content={`Al usar BizCreator, aceptas los siguientes términos:
    1. Uso Gratuito: Nuestras herramientas son gratuitas para uso personal y comercial.
    2. Responsabilidad: No nos hacemos responsables de los resultados generados por la IA. El usuario debe validar la disponibilidad legal de nombres y marcas.
    3. Propiedad Intelectual: El código del sitio es propiedad de BizCreator.`}
  />
);

export const AboutUs = () => (
  <div className="max-w-4xl mx-auto py-12 space-y-12">
    <section className="text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-indigo-950">Sobre BizCreator</h1>
      <p className="text-xl text-slate-600 leading-relaxed">
        Nacimos con una misión clara: democratizar el acceso a herramientas de branding profesional utilizando la potencia de la inteligencia artificial.
      </p>
    </section>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <img src="https://picsum.photos/seed/team/600/400" className="rounded-[40px] shadow-xl" alt="Nuestro equipo" referrerPolicy="no-referrer" />
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-indigo-950">Nuestra Visión</h2>
        <p className="text-slate-600 leading-relaxed">
          Creemos que el presupuesto no debería ser una barrera para la creatividad. BizCreator es el compañero ideal para el emprendedor que está empezando y necesita resultados profesionales sin costes prohibitivos.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="text-2xl font-bold text-emerald-600">+10k</p>
            <p className="text-xs text-slate-500 font-bold uppercase">Usuarios</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="text-2xl font-bold text-indigo-600">50k</p>
            <p className="text-xs text-slate-500 font-bold uppercase">Generaciones</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
