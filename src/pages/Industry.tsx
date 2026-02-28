import React from 'react';
import { useParams } from 'react-router-dom';
import { AITool } from '../components/AITool';
import { AdSlot } from '../components/AdSlot';
import { CheckCircle2, Lightbulb, HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const industryData: Record<string, any> = {
  'ropa': {
    name: "Industria de la Ropa",
    metaTitle: "Generador de Nombres para Marcas de Ropa e IA de Moda | BizCreator",
    metaDescription: "Crea tu marca de ropa con IA. Genera nombres creativos, descripciones de prendas y slogans para moda urbana, sostenible y de lujo en segundos.",
    intro: "Lanzar una marca de moda requiere una identidad visual y verbal fuerte. Desde el nombre de la colección hasta la descripción de cada prenda, cada palabra cuenta para transmitir estilo y exclusividad.",
    tools: [
      { title: "Nombres para Marcas de Ropa", type: "brand-name", placeholder: "Ej: Ropa urbana sostenible para jóvenes...", description: "Genera nombres que suenen a tendencia y estilo." },
      { title: "Descripciones de Prendas", type: "product-description", placeholder: "Ej: Camiseta de algodón orgánico con bordado...", description: "Escribe fichas de producto que enamoren a tus clientes." }
    ],
    tips: [
      "Define tu nicho: ¿es lujo, urbano, deportivo o sostenible?",
      "Usa adjetivos sensoriales en tus descripciones.",
      "Asegúrate de que el nombre sea fácil de bordar o imprimir en etiquetas."
    ],
    faqs: [
      { q: "¿Cómo elijo un nombre para mi marca de ropa?", a: "Busca algo que evoque la emoción que quieres que sientan tus clientes al vestir tus prendas." },
      { q: "¿Es importante el SEO en moda?", a: "Sí, términos como 'algodón orgánico' o 'estilo oversized' ayudan a que te encuentren en Google." }
    ]
  },
  'restaurantes': {
    name: "Restaurantes y Gastronomía",
    metaTitle: "Nombres para Restaurantes y Slogans Gastronómicos con IA | BizCreator",
    metaDescription: "Encuentra el nombre perfecto para tu restaurante, cafetería o bar. Genera slogans pegajosos y conceptos gastronómicos únicos con nuestra IA gratuita.",
    intro: "En el mundo de la comida, el nombre y el concepto lo son todo. Un buen nombre abre el apetito y un buen slogan cierra la reserva.",
    tools: [
      { title: "Nombres para Restaurantes", type: "brand-name", placeholder: "Ej: Restaurante de comida fusión mexicana-japonesa...", description: "Encuentra el nombre que se convierta en el lugar de moda." },
      { title: "Slogans Gastronómicos", type: "slogan", placeholder: "Ej: Pizzería artesanal con horno de leña...", description: "Frases que invitan a probar tu menú." }
    ],
    tips: [
      "El nombre debe ser fácil de recordar para las recomendaciones boca a boca.",
      "Destaca tu ingrediente estrella o técnica especial.",
      "Considera la ubicación si es un factor clave."
    ],
    faqs: [
      { q: "¿Qué hace que un nombre de restaurante sea bueno?", a: "Que sea corto, evocador y que no se confunda con la competencia local." }
    ]
  },
  'tiendas-online': {
    name: "Tiendas Online (E-commerce)",
    metaTitle: "Generador de Nombres para Tiendas Online y E-commerce con IA | BizCreator",
    metaDescription: "Lanza tu tienda online con éxito. Genera nombres de marca, descripciones de productos SEO y slogans para Shopify, WooCommerce y más.",
    intro: "Tu tienda online es tu escaparate al mundo. Necesitas nombres que generen confianza y descripciones que cierren ventas sin necesidad de un vendedor físico.",
    tools: [
      { title: "Nombres para E-commerce", type: "online-store-name", placeholder: "Ej: Tienda de gadgets tecnológicos para el hogar...", description: "Nombres optimizados para dominios .com" },
      { title: "Descripciones de Producto SEO", type: "product-description", placeholder: "Ej: Humidificador ultrasónico con luces LED...", description: "Convierte clics en ventas." }
    ],
    tips: [
      "Verifica la disponibilidad del dominio antes de decidirte.",
      "Usa palabras clave de intención de compra.",
      "Mantenlo simple y profesional."
    ],
    faqs: [
      { q: "¿Cómo mejorar la conversión de mi tienda?", a: "Con descripciones claras que resuelvan las dudas del cliente antes de que las tenga." }
    ]
  },
  'criptomonedas': {
    name: "Criptomonedas y Web3",
    metaTitle: "Generador de Nombres para Criptomonedas y Proyectos Web3 | BizCreator",
    metaDescription: "Crea el branding de tu proyecto blockchain. Genera nombres futuristas para tokens, DAOs y protocolos DeFi con inteligencia artificial avanzada.",
    intro: "En el ecosistema cripto, la innovación y la tecnología deben reflejarse en el branding. Nombres futuristas que inspiren seguridad y visión de futuro.",
    tools: [
      { title: "Nombres para Proyectos Cripto", type: "crypto-name", placeholder: "Ej: Protocolo de préstamos descentralizados en Solana...", description: "Nombres que suenan a la próxima gran revolución." },
      { title: "Slogans para Web3", type: "slogan", placeholder: "Ej: Wallet multichain con seguridad biométrica...", description: "Comunica tu propuesta tecnológica." }
    ],
    tips: [
      "Evita nombres demasiado largos o difíciles de deletrear.",
      "Usa prefijos o sufijos que denoten tecnología (Bit, Chain, Block, Nexus).",
      "Asegúrate de que el nombre funcione bien como ticker (ej: BTC, ETH)."
    ],
    faqs: [
      { q: "¿Por qué es importante el nombre en un token?", a: "Crea la primera capa de confianza y reconocimiento en una comunidad muy competitiva." }
    ]
  },
  'dropshipping': {
    name: "Dropshipping",
    metaTitle: "Herramientas de IA para Dropshipping: Nombres y Descripciones | BizCreator",
    metaDescription: "Acelera tu negocio de dropshipping. Genera nombres de tienda versátiles y descripciones de productos virales que convierten visitantes en clientes.",
    intro: "El éxito en dropshipping depende de encontrar productos ganadores y presentarlos de forma irresistible. La velocidad es clave.",
    tools: [
      { title: "Nombres para Tiendas de Dropshipping", type: "online-store-name", placeholder: "Ej: Tienda generalista de productos virales de TikTok...", description: "Nombres versátiles para diferentes nichos." },
      { title: "Descripciones Persuasivas", type: "product-description", placeholder: "Ej: Corrector de postura ajustable invisible...", description: "Enfócate en los beneficios y la urgencia." }
    ],
    tips: [
      "No te compliques con el nombre, elige algo que suene a 'solución'.",
      "Crea descripciones que ataquen los puntos de dolor del cliente.",
      "Usa un lenguaje directo y orientado a la acción."
    ],
    faqs: [
      { q: "¿Qué nombre poner a una tienda de dropshipping?", a: "Algo que sea lo suficientemente amplio para pivotar de producto si es necesario." }
    ]
  }
};

export const IndustryPage: React.FC = () => {
  const { slug } = useParams();
  const data = industryData[slug || ''];

  React.useEffect(() => {
    if (data) {
      document.title = data.metaTitle || `${data.name} | BizCreator`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.metaDescription || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = data.metaDescription || '';
        document.head.appendChild(meta);
      }
    }
  }, [data]);

  if (!data) return <div className="text-center py-20">Industria no encontrada.</div>;

  return (
    <div className="space-y-16">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-950 mb-6">{data.name}</h1>
        <p className="text-xl text-slate-600 leading-relaxed">{data.intro}</p>
      </section>

      <AdSlot position="middle" />

      <section className="space-y-12">
        {data.tools.map((tool: any) => (
          <AITool 
            key={tool.title}
            title={tool.title}
            description={tool.description}
            placeholder={tool.placeholder}
            type={tool.type}
            seoText={`Optimizado para ${data.name}. Genera resultados específicos para este sector.`}
          />
        ))}
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-950 mb-6 flex items-center gap-2">
            <Lightbulb className="text-emerald-500" /> Consejos Prácticos
          </h2>
          <ul className="space-y-4">
            {data.tips.map((tip: string, i: number) => (
              <li key={i} className="flex gap-3 text-slate-600">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-950 mb-6 flex items-center gap-2">
            <HelpCircle className="text-indigo-500" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {data.faqs.map((faq: any, i: number) => (
              <div key={i}>
                <h3 className="font-bold text-indigo-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
