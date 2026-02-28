import { HistoryItem, ToolType } from '../types';

const STORAGE_KEY = 'bizcreator_history';

export const historyService = {
  save: (item: Omit<HistoryItem, 'id' | 'timestamp'>): HistoryItem => {
    const history = historyService.getAll();
    const newItem: HistoryItem = {
      ...item,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };
    
    const updatedHistory = [newItem, ...history].slice(0, 50); // Keep last 50 items
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    return newItem;
  },

  getAll: (): HistoryItem[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  },

  getByType: (type: ToolType): HistoryItem[] => {
    return historyService.getAll().filter(item => item.type === type);
  },

  delete: (id: string): void => {
    const history = historyService.getAll();
    const updatedHistory = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  },

  clear: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
