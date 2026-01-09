
import React, { useState } from 'react';

interface ResultProps {
  prompt: string;
}

const Result: React.FC<ResultProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!prompt) return null;

  return (
    <div className="max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-white border-4 border-rose-600 rounded-[2.5rem] p-10 relative shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-black uppercase tracking-tighter italic">Seu Prompt de Ouro</h3>
          <div className="w-12 h-1 bg-rose-600"></div>
        </div>
        
        <div className="bg-rose-50 rounded-2xl p-8 text-black leading-relaxed mb-8 font-semibold text-lg border border-rose-100">
          {prompt}
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full md:w-auto bg-black hover:bg-rose-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
        >
          {copied ? 'Copiado com Sucesso!' : 'Copiar para o Gerador'}
        </button>
      </div>
    </div>
  );
};

export default Result;
