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
