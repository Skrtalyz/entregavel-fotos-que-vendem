
import React, { useState } from 'react';
import { LIBRARY_DATA, CATEGORIES } from '../constants';

const Library: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredData = selectedCategory 
    ? LIBRARY_DATA.filter(item => item.category === selectedCategory)
    : LIBRARY_DATA;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Helper to assign emojis based on category or content
  const getEmoji = (category: string) => {
    switch (category) {
      case "Batons e maquiagem": return "💄";
      case "Vestidos e roupas femininas": return "👗";
      case "Perfumes": return "✨";
      case "Chinelo e calçados": return "👡";
      case "Bolsas e acessórios": return "👜";
      case "Cosméticos e skincare": return "🧴";
      default: return "🛍️";
    }
  };

  return (
    <section id="biblioteca" className="py-24 bg-white border-y border-rose-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter italic">Biblioteca Pronta</h2>
          <div className="w-20 h-2 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Modelos prontos para você copiar e usar nos nichos mais lucrativos do mercado feminino.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${!selectedCategory ? 'bg-black border-black text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-rose-300'}`}
          >
            Todos
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${selectedCategory === cat ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-rose-300'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border-2 border-gray-100 hover:border-rose-600 transition-all duration-500 group flex flex-col">
              <div className="relative h-40 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                <span className="text-7xl group-hover:scale-125 transition-transform duration-500 drop-shadow-sm">
                  {getEmoji(item.category)}
                </span>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-black text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight">{item.name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed flex-grow">{item.description}</p>
                
                <div className="bg-rose-50/50 rounded-2xl p-4 text-[11px] font-bold text-gray-700 italic mb-6 border-l-4 border-rose-600 line-clamp-2">
                  "{item.prompt}"
                </div>

                <button
                  onClick={() => handleCopy(item.prompt, idx)}
                  className="w-full py-4 rounded-xl bg-black text-white hover:bg-rose-600 transition-all duration-300 text-xs font-black uppercase tracking-widest"
                >
                  {copiedIndex === idx ? 'Copiado!' : 'Copiar Prompt'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
