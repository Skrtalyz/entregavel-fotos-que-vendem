
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-32 pb-16 px-4 text-center max-w-5xl mx-auto">
      <div className="inline-block px-5 py-2 mb-8 text-[10px] font-black tracking-[0.2em] text-white uppercase bg-rose-600 rounded-full">
        Inteligência para Negócios
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-[0.95] tracking-tighter">
        FOTOS QUE <span className="text-rose-600">VENDEM</span> MAIS
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-medium leading-tight">
        A ferramenta definitiva para mulheres que desejam imagens profissionais sem depender de fotógrafos ou estúdios caros.
      </p>
      <div className="w-16 h-1 bg-black mx-auto"></div>
    </header>
  );
};

export default Header;
