
import React, { useState } from 'react';
import { PromptForm } from '../types';
import { GoogleGenAI } from "@google/genai";

interface GeneratorProps {
  onPromptGenerated: (prompt: string) => void;
}

const Generator: React.FC<GeneratorProps> = ({ onPromptGenerated }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<PromptForm>({
    productType: '',
    style: '',
    scenario: '',
    colors: '',
    photoType: '',
    mood: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const apiKey = process.env.API_KEY;
    const fallbackPrompt = `Foto profissional de ${formData.productType}, estilo ${formData.style}, cenário ${formData.scenario}, em tons de ${formData.colors}, tipo ${formData.photoType}, clima ${formData.mood}. Imagem comercial de alta qualidade, 8k, foco nítido.`;

    if (!apiKey) {
      console.warn("API_KEY não encontrada. Usando gerador estático.");
      onPromptGenerated(fallbackPrompt);
      setLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const promptText = `
        Aja como um especialista em fotografia publicitária de produtos.
        Crie um prompt detalhado para uma IA geradora de imagens baseado nestas informações:
        - Produto: ${formData.productType}
        - Estilo: ${formData.style}
        - Cenário: ${formData.scenario}
        - Cores: ${formData.colors}
        - Tipo de Foto: ${formData.photoType}
        - Clima: ${formData.mood}
        
        O prompt deve ser profissional, em português, focado em alta qualidade e realismo comercial.
        Retorne APENAS o texto do prompt final.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptText
      });

      onPromptGenerated(response.text || fallbackPrompt);
    } catch (error) {
      console.error("Erro na API Gemini:", error);
      onPromptGenerated(fallbackPrompt);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-rose-500 focus:ring-0 transition-all duration-300 outline-none font-medium bg-gray-50/50";

  return (
    <div id="gerador" className="bg-white rounded-[2rem] shadow-2xl shadow-rose-100/40 p-10 border border-rose-50 max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-black mb-10 text-black flex items-center gap-3 uppercase tracking-tight">
        <span className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center text-lg">📸</span>
        Configurar minha imagem
      </h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Tipo de produto</label>
          <input required type="text" name="productType" placeholder="Ex: Perfume Francês" className={inputClasses} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Estilo Visual</label>
          <select required name="style" className={inputClasses} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Luxuoso">Luxuoso</option>
            <option value="Minimalista">Minimalista</option>
            <option value="Delicado">Delicado</option>
            <option value="Moderno">Moderno</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Cenário</label>
          <input required type="text" name="scenario" placeholder="Ex: Fundo de mármore" className={inputClasses} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Cores</label>
          <input required type="text" name="colors" placeholder="Ex: Vermelho e Dourado" className={inputClasses} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Tipo de Foto</label>
          <select required name="photoType" className={inputClasses} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Produto centralizado">Produto centralizado</option>
            <option value="Close-up (detalhe)">Close-up (detalhe)</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Clima</label>
          <select required name="mood" className={inputClasses} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Sofisticado">Sofisticado</option>
            <option value="Radiante">Radiante</option>
            <option value="Sóbrio">Sóbrio</option>
          </select>
        </div>

        <div className="md:col-span-2 pt-6">
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-rose-600 hover:bg-black text-white font-black py-5 rounded-2xl shadow-xl shadow-rose-200 hover:shadow-gray-200 transition-all duration-500 flex items-center justify-center gap-3 uppercase tracking-widest disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Criando Magia...
              </span>
            ) : 'Gerar Prompt Agora'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Generator;
