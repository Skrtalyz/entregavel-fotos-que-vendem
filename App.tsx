
import React, { useState } from 'react';
import Header from './components/Header';
import Generator from './components/Generator';
import Result from './components/Result';
import Library from './components/Library';

const App: React.FC = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);

  const handlePromptGenerated = (prompt: string) => {
    setGeneratedPrompt(prompt);
    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-custom-gradient">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold italic">FV</div>
          <span className="font-extrabold text-black tracking-tight text-xl uppercase">Fotos que Vendem</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-600 uppercase tracking-wider">
          <a href="#gerador" className="hover:text-rose-600 transition">Gerador</a>
          <a href="#biblioteca" className="hover:text-rose-600 transition">Biblioteca</a>
          <a href="#" className="text-rose-600">Juliana Martins</a>
        </div>
      </nav>

      <main>
        <Header />
        
        <div className="px-4 pb-20">
          <Generator onPromptGenerated={handlePromptGenerated} />
          {generatedPrompt && <Result prompt={generatedPrompt} />}
        </div>

        <Library />

        <section className="py-20 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">Dúvidas Frequentes</h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl border border-rose-50 shadow-sm">
              <h4 className="font-bold text-black mb-2">Onde uso esse prompt?</h4>
              <p className="text-gray-600 text-sm">Você pode usar em ferramentas de IA como Midjourney, DALL-E (ChatGPT Plus), Leonardo.ai ou Adobe Firefly.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-rose-50 shadow-sm">
              <h4 className="font-bold text-black mb-2">As fotos parecem reais?</h4>
              <p className="text-gray-600 text-sm">Sim! Os prompts utilizam parâmetros técnicos de iluminação e composição para garantir realismo comercial.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2">
            <div className="w-6 h-6 bg-rose-600 rounded flex items-center justify-center text-white font-bold italic text-xs">FV</div>
            <span className="font-bold tracking-tight uppercase">Fotos que Vendem</span>
          </div>
          <p className="text-gray-400 text-sm max-w-md mb-8">
            Empoderando mulheres empreendedoras através da inteligência artificial aplicada ao visual de produtos.
          </p>
          <div className="w-24 h-1 bg-rose-600 mb-8"></div>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
            Criado por Juliana Martins &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      <a 
        href="#gerador" 
        className="fixed bottom-6 right-6 bg-rose-600 text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all duration-300 z-50 md:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </a>
    </div>
  );
};

export default App;
