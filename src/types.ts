export type ToolType = 
  | "brand-name" 
  | "slogan" 
  | "product-description" 
  | "instagram-bio" 
  | "business-idea" 
  | "crypto-name" 
  | "online-store-name";

export interface HistoryItem {
  id: string;
  type: ToolType;
  input: string;
  result: string;
  timestamp: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  type: any; // ToolType from gemini.ts
  seoText: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  tools: Tool[];
  tips: string[];
  faqs: { q: string; a: string }[];
}
