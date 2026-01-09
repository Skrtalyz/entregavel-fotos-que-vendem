
import { LibraryItem } from './types';

export const CATEGORIES = [
  "Batons e maquiagem",
  "Vestidos e roupas femininas",
  "Perfumes",
  "Chinelo e calçados",
  "Bolsas e acessórios",
  "Cosméticos e skincare"
];

export const LIBRARY_DATA: LibraryItem[] = [
  {
    category: "Batons e maquiagem",
    name: "Batom Editorial Luxo",
    description: "Ideal para destacar a cor e textura do batom.",
    specs: "Produto no centro, fundo clean, iluminação suave, estilo editorial.",
    prompt: "Foto profissional de um batom feminino, posicionado no centro da imagem, com fundo claro e elegante, iluminação suave e aparência premium. Estilo editorial, cores delicadas, imagem realista, foco em venda e valorização do produto.",
    image: "https://picsum.photos/seed/lipstick/400/300"
  },
  {
    category: "Vestidos e roupas femininas",
    name: "Vestido Lifestyle",
    description: "Mostra o caimento da peça em um ambiente real.",
    specs: "Lifestyle, ambiente iluminado, cores suaves, clima moderno.",
    prompt: "Foto profissional de um vestido feminino elegante em um cabide de madeira minimalista, cenário de quarto iluminado com luz solar suave, estilo clean, cores neutras e suaves, alta resolução, foco nos detalhes do tecido e acabamento.",
    image: "https://picsum.photos/seed/dress/400/300"
  },
  {
    category: "Perfumes",
    name: "Perfume Minimalista",
    description: "Transmite sofisticação e fragrância premium.",
    specs: "Produto centralizado, reflexos suaves, fundo neutro, clima sofisticado.",
    prompt: "Foto profissional de um frasco de perfume sofisticado, posicionado sobre uma base de mármore, iluminação lateral dramática criando reflexos suaves, fundo neutro minimalista, estilo premium, imagem realista de alta qualidade.",
    image: "https://picsum.photos/seed/perfume/400/300"
  },
  {
    category: "Bolsas e acessórios",
    name: "Bolsa em Close-up",
    description: "Foco nos detalhes e qualidade do material.",
    specs: "Close-up, iluminação de estúdio, estilo comercial, foco nítido.",
    prompt: "Foto profissional de uma bolsa de couro feminina, close-up focado na textura e costuras, iluminação de estúdio difusa sem sombras pesadas, fundo off-white, estilo comercial limpo, alta definição.",
    image: "https://picsum.photos/seed/bag/400/300"
  }
];
