// Resilient image registry with local paths and reliable high-resolution CDN fallbacks
export interface ImageAsset {
  src: string;
  fallback: string;
  alt: string;
  category?: 'fachada' | 'interiores' | 'lazer' | 'plantas';
  title?: string;
  subtitle?: string;
}

export const SITE_IMAGES = {
  hero: {
    src: '/images/hero.jpg',
    fallback: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    alt: 'Fachada arquitetônica contemporânea do Horizonte Prime Residences ao entardecer'
  },
  living: {
    src: '/images/living.jpg',
    fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Living ampliado integrado à varanda gourmet com acabamentos em madeira nobre'
  },
  pool: {
    src: '/images/pool.jpg',
    fallback: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Piscina de borda infinita climatizada no 32º andar com solarium'
  },
  suite: {
    src: '/images/suite.jpg',
    fallback: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Suíte master com closet amplo e vista panorâmica para a copa das árvores'
  },
  facadeDay: {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    alt: 'Fachada do edifício residencial de alto padrão em dia ensolarado'
  },
  gym: {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Fitness Center equipado com aparelhos LifeFitness profissionais'
  },
  gourmet: {
    src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Espaço gourmet com bancada em ilha, adega e churrasqueira'
  },
  lounge: {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Lobby social e hall privativo com pé-direito duplo'
  },
  coworking: {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    alt: 'Coworking e sala de reuniões executiva'
  }
};

export const GALLERY_ITEMS: ImageAsset[] = [
  {
    src: '/images/hero.jpg',
    fallback: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    alt: 'Torre residencial contemporânea ao pôr do sol',
    category: 'fachada',
    title: 'Fachada & Hall de Entrada',
    subtitle: 'Arquitetura moderna com vidros até o piso e iluminação cênica'
  },
  {
    src: '/images/living.jpg',
    fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Living integrado com varanda gourmet',
    category: 'interiores',
    title: 'Living Integrado & Varanda',
    subtitle: 'Ambientes sociais contínuos com churrasqueira a carvão'
  },
  {
    src: '/images/pool.jpg',
    fallback: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Piscina no rooftop no 32º andar',
    category: 'lazer',
    title: 'Sky Pool no 32º Andar',
    subtitle: 'Borda infinita aquecida com vista panorâmica da cidade'
  },
  {
    src: '/images/suite.jpg',
    fallback: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Suíte master com closet',
    category: 'interiores',
    title: 'Suíte Master Privativa',
    subtitle: 'Closet senhor e senhora com persianas blackout motorizadas'
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Fitness Center LifeFitness',
    category: 'lazer',
    title: 'Fitness Center Completo',
    subtitle: 'Equipamentos profissionais de cardio, musculação e pilates'
  },
  {
    src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    fallback: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Espaço gourmet para recepções',
    category: 'lazer',
    title: 'Espaço Gourmet & Adega',
    subtitle: 'Equipado para recepções gastronômicas com até 30 convidados'
  }
];

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrl: string
) => {
  const target = e.currentTarget;
  if (target.src !== fallbackUrl) {
    target.src = fallbackUrl;
  }
};
