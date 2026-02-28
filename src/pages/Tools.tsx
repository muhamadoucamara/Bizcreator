import React from 'react';
import { AITool } from '../components/AITool';

export const Tools: React.FC = () => {
  const tools = [
    {
      title: "Generador de Nombres de Marca",
      description: "Encuentra el nombre perfecto que capture la esencia de tu negocio y resuene con tu audiencia.",
      placeholder: "Ej: Una agencia de marketing digital enfocada en sostenibilidad...",
      type: "brand-name" as const,
      seoText: "El nombre de tu marca es la primera impresión que dejas. Un buen nombre debe ser **memorable**, **fácil de pronunciar** y **reflejar tus valores**. Nuestra IA analiza tendencias de mercado para ofrecerte opciones únicas."
    },
    {
      title: "Generador de Slogans",
      description: "Crea frases impactantes que se queden grabadas en la mente de tus clientes.",
      placeholder: "Ej: Una tienda de café artesanal de especialidad...",
      type: "slogan" as const,
      seoText: "Un slogan efectivo resume tu propuesta de valor en pocas palabras. Ayuda a diferenciarte de la competencia y construye **lealtad de marca** a largo plazo."
    },
    {
      title: "Descripciones de Productos",
      description: "Convierte visitantes en compradores con descripciones persuasivas y optimizadas para buscadores.",
      placeholder: "Ej: Reloj inteligente con monitor de sueño y GPS...",
      type: "product-description" as const,
      seoText: "Las descripciones de productos no solo deben informar, sino **vender**. Usar palabras clave relevantes mejora tu **SEO** y ayuda a los clientes a entender los beneficios reales de tu producto."
    },
    {
      title: "Biografía para Instagram",
      description: "Optimiza tu perfil social para atraer más seguidores y clientes potenciales.",
      placeholder: "Ej: Coach de fitness online para principiantes...",
      type: "instagram-bio" as const,
      seoText: "Tu bio de Instagram es tu tarjeta de presentación digital. Tienes pocos caracteres para convencer a alguien de seguirte. Debe ser **clara**, **concisa** y tener un **llamado a la acción**."
    },
    {
      title: "Generador de Ideas de Negocio",
      description: "¿Buscas inspiración? Deja que nuestra IA te sugiera nichos rentables y modelos de negocio innovadores.",
      placeholder: "Ej: Tecnología, educación, mascotas...",
      type: "business-idea" as const,
      seoText: "La validación de ideas es crucial. Una buena idea de negocio resuelve un problema real en un mercado con demanda. Usa estas sugerencias como punto de partida para tu **investigación de mercado**."
    },
    {
      title: "Nombres para Tiendas Online",
      description: "Encuentra el nombre comercial perfecto para tu e-commerce o tienda de dropshipping.",
      placeholder: "Ej: Tienda de accesorios para mascotas de diseño...",
      type: "online-store-name" as const,
      seoText: "El nombre de tu tienda online debe ser **corto**, **fácil de escribir** y **disponible como dominio**. Un buen nombre ayuda a generar confianza inmediata en el comprador digital."
    },
    {
      title: "Nombres para Criptomonedas",
      description: "Genera nombres futuristas y tecnológicos para tus proyectos de tokens, DAOs o protocolos Web3.",
      placeholder: "Ej: Protocolo de finanzas descentralizadas enfocado en privacidad...",
      type: "crypto-name" as const,
      seoText: "En el mundo Web3, el nombre debe transmitir **innovación** y **seguridad**. Usar términos que evoquen tecnología blockchain ayuda a posicionar tu proyecto en la comunidad cripto."
    }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-950 mb-6">Nuestras Herramientas</h1>
        <p className="text-lg text-slate-600">Potencia tu emprendimiento con el poder de la inteligencia artificial. Gratis, rápido y profesional.</p>
      </div>

      <div className="space-y-20">
        {tools.map((tool, idx) => (
          <React.Fragment key={tool.type}>
            <AITool {...tool} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
