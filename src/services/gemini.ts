import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export type ToolType = 
  | "brand-name" 
  | "slogan" 
  | "product-description" 
  | "instagram-bio" 
  | "business-idea" 
  | "crypto-name" 
  | "online-store-name";

const prompts: Record<ToolType, (input: string) => string> = {
  "brand-name": (input) => `Genera 10 nombres creativos y profesionales para una marca basada en: ${input}. Responde solo con la lista de nombres.`,
  "slogan": (input) => `Genera 10 slogans pegajosos y profesionales para un negocio de: ${input}. Responde solo con la lista de slogans.`,
  "product-description": (input) => `Escribe una descripción de producto persuasiva y optimizada para SEO para: ${input}.`,
  "instagram-bio": (input) => `Crea 5 opciones de biografía de Instagram optimizadas para un perfil de: ${input}. Incluye emojis.`,
  "business-idea": (input) => `Genera 5 ideas de negocio innovadoras y rentables relacionadas con: ${input}. Explica brevemente cada una.`,
  "crypto-name": (input) => `Genera 10 nombres futuristas y tecnológicos para un proyecto de criptomonedas basado en: ${input}.`,
  "online-store-name": (input) => `Genera 10 nombres atractivos y fáciles de recordar para una tienda online de: ${input}.`,
};

export async function generateContent(type: ToolType, input: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ parts: [{ text: prompts[type](input) }] }],
    });
    return response.text || "No se pudo generar el contenido.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error al conectar con la IA. Por favor, intenta de nuevo.";
  }
}
