import React from 'react';
import { Sparkles, Copy, Check, Loader2, History, Trash2, Clock } from 'lucide-react';
import { generateContent, ToolType } from '../services/gemini';
import { historyService } from '../services/history';
import { HistoryItem } from '../types';
import ReactMarkdown from 'react-markdown';

interface AIToolProps {
  title: string;
  description: string;
  placeholder: string;
  type: ToolType;
  seoText: string;
}

export const AITool: React.FC<AIToolProps> = ({ title, description, placeholder, type, seoText }) => {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [history, setHistory] = React.useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = React.useState(false);

  React.useEffect(() => {
    setHistory(historyService.getByType(type));
  }, [type]);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const res = await generateContent(type, input);
    setResult(res);
    setLoading(false);
    
    const newItem = historyService.save({ type, input, result: res });
    setHistory(prev => [newItem, ...prev].slice(0, 50));
  };

  const handleDeleteHistory = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    historyService.delete(id);
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const handleSelectHistory = (item: HistoryItem) => {
    setInput(item.input);
    setResult(item.result);
    setShowHistory(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden" id={`tool-${type}`}>
      <div className="p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-950 mb-4">{title}</h2>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all resize-none text-slate-700"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="w-full py-4 bg-indigo-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-indigo-900/10"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Sparkles size={20} />
            )}
            {loading ? 'Generando...' : 'Generar con IA'}
          </button>

          {history.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
              >
                <History size={16} />
                {showHistory ? 'Ocultar historial' : `Ver historial (${history.length})`}
              </button>
            </div>
          )}

          {showHistory && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Generaciones Recientes</h4>
              <div className="max-h-64 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {history.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectHistory(item)}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-indigo-200 hover:bg-white cursor-pointer transition-all group relative"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-700 truncate mb-1">{item.input}</p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400">
                          <Clock size={10} />
                          {new Date(item.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleDeleteHistory(item.id, e)}
                        className="p-1.5 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        title="Eliminar del historial"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div className="mt-10 p-8 bg-emerald-50 rounded-2xl border border-emerald-100 relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-sm border border-emerald-200 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all"
                title="Copiar resultado"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
              <div className="prose prose-emerald max-w-none text-emerald-900">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-slate-50 p-8 md:p-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Por qué es importante</h3>
          <div className="text-slate-600 text-sm leading-relaxed prose-sm">
            <ReactMarkdown>{seoText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
