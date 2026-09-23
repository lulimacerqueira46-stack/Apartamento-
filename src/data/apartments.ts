export const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSddko6svSi-zep8oOPQVR480XQDHxIDNUtE2Kze2TfV_Bo9mA/viewform?usp=publish-editor";

export interface Typology {
  id: string;
  name: string;
  area: number; // m²
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpots: number;
  startingPrice: number;
  description: string;
  tags: string[];
  features: string[];
  floorplanType: string;
  idealFor: string;
}

export const TYPOLOGIES: Typology[] = [
  {
    id: "studio-prime",
    name: "Studio & 1 Suíte Executive",
    area: 58,
    bedrooms: 1,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 1,
    startingPrice: 685000,
    description: "Ambientes inteligentes e integrados com varanda panorâmica, acabamentos em madeira nobre e lavabo social. Máxima sofisticação em metragens dinâmicas.",
    tags: ["Pronto para morar ou rentabilizar", "Vista livre", "Lavabo privativo"],
    features: [
      "Varanda gourmet com ponto elétrico e bancada de quartzo",
      "Fechadura biométrica e automação de iluminação",
      "Suíte com persiana motorizada blackout",
      "Ponto para recarga de veículo elétrico na vaga",
      "Infraestrutura completa para ar-condicionado multi-split"
    ],
    floorplanType: "Compacto de Luxo",
    idealFor: "Jovens profissionais, executivos e investidores com alto rendimento de locação"
  },
  {
    id: "planta-conforto",
    name: "Residência Conforto 2 Suítes",
    area: 88,
    bedrooms: 2,
    suites: 2,
    bathrooms: 3,
    parkingSpots: 2,
    startingPrice: 980000,
    description: "Equilíbrio perfeito entre amplitude e funcionalidade. Living com pé-direito generoso, varanda com churrasqueira a carvão e duas amplas suítes plenas.",
    tags: ["2 Suítes Plenas", "Churrasqueira a Carvão", "2 Vagas Demarcadas"],
    features: [
      "Varanda gourmet integrada de 18m² com duto de exaustão silencioso",
      "Cozinha em conceito aberto com ilha gourmet em mármore",
      "Suíte master com amplo espaço para closet senhor e senhora",
      "Lavabo independente para visitas",
      "Isolamento acústico nas lajes e tubulações hidráulicas"
    ],
    floorplanType: "Família Contemporânea",
    idealFor: "Casais que valorizam conforto, privacidade e recepção de amigos"
  },
  {
    id: "grand-family",
    name: "Grand Family 3 Suítes",
    area: 142,
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parkingSpots: 2,
    startingPrice: 1590000,
    description: "Planta nobre com hall privativo com elevador codificado, terraço com vista 270 graus, home office dedicado e circulação íntima totalmente independente.",
    tags: ["Hall Social Privativo", "Home Office", "Vista Panorâmica 270°"],
    features: [
      "Hall privativo com acesso biométrico exclusivo por unidade",
      "Living amplo para 3 ambientes integrados à varanda lounge",
      "Suíte master com closet walk-in e banheiro com cuba dupla",
      "Área de serviço separada com despensa e banheiro de serviço",
      "Depósito privativo individual no subsolo"
    ],
    floorplanType: "Alto Padrão Familiar",
    idealFor: "Famílias em busca de espaço de casa com toda a segurança de um condomínio resort"
  },
  {
    id: "penthouse-sky",
    name: "Sky Penthouse Duplex",
    area: 210,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    parkingSpots: 3,
    startingPrice: 2450000,
    description: "A joia da torre. Pavimento superior com spa privativo aquecido, solarium descoberto e espaço gourmet exclusivo sobre a silhueta da cidade.",
    tags: ["Spa Privativo", "3 Vagas Soltas", "Pé-direito Duplo no Living"],
    features: [
      "Piscina/Spa aquecido privativo no rooftop com deck em cumaru",
      "Living com pé-direito duplo de 5,80 metros com esquadrias termoacústicas",
      "4 suítes completas com acabamentos personalizáveis pela construtora",
      "Cozinha de apoio no piso superior para recepções intimistas",
      "3 vagas soltas e demarcadas com tomada ultrarrápida para VE"
    ],
    floorplanType: "Cobertura Exclusiva",
    idealFor: "Compradores exigentes que desejam o mais alto patamar de exclusividade e lazer particular"
  }
];

export interface Amenity {
  category: "Lazer & Spa" | "Conveniência" | "Saúde & Esportes" | "Segurança & Tecnologia";
  title: string;
  description: string;
}

export const AMENITIES: Amenity[] = [
  {
    category: "Lazer & Spa",
    title: "Sky Pool no 32º Andar",
    description: "Piscina de borda infinita climatizada com vista ininterrupta para a silhueta urbana e deck molhado para banho de sol."
  },
  {
    category: "Lazer & Spa",
    title: "Espaço Gourmet & Adega",
    description: "Ambiente assinado por renomados arquitetos com adega climatizada para rótulos exclusivos e churrasqueira de alta precisão."
  },
  {
    category: "Saúde & Esportes",
    title: "Fitness Center LifeFitness",
    description: "Academia completa com equipamentos profissionais de cardio e musculação, estúdio de pilates e espaço funcional."
  },
  {
    category: "Saúde & Esportes",
    title: "Spa com Sauna & Hidromassagem",
    description: "Área de relaxamento completa com sauna seca, sauna úmida, hidromassagem terapêutica e salas privativas para massagem."
  },
  {
    category: "Conveniência",
    title: "Coworking Executivo & Meeting Room",
    description: "Estações de trabalho silenciosas com internet dedicada ultrarrápida e sala de reuniões equipada para videoconferências."
  },
  {
    category: "Conveniência",
    title: "Mini Market 24h Autônomo",
    description: "Conveniência dentro do condomínio com produtos frescos, bebidas e mercearia fina com pagamento digital autônomo."
  },
  {
    category: "Segurança & Tecnologia",
    title: "Portaria Blindada & Controle Facial",
    description: "Guarita com vidro nível III-A, clausura dupla de pedestres e veículos, e monitoramento por câmeras com inteligência analítica."
  },
  {
    category: "Segurança & Tecnologia",
    title: "Vagas com Carregador Elétrico",
    description: "Infraestrutura com medição individual de energia para recarga de veículos elétricos e híbridos em todos os pavimentos de garagem."
  }
];

export interface Landmark {
  category: "Lazer & Natureza" | "Gastronomia" | "Educação & Saúde" | "Acessos";
  title: string;
  distance: string;
  detail: string;
}

export const LANDMARKS: Landmark[] = [
  {
    category: "Lazer & Natureza",
    title: "Parque Central & Lago das Palmeiras",
    distance: "2 min a pé",
    detail: "Área verde de 180.000m² com ciclovia, pistas de cooper arborizadas e quadras esportivas."
  },
  {
    category: "Gastronomia",
    title: "Polo Gastronômico Jardins",
    distance: "4 min de carro",
    detail: "Mais de 15 restaurantes estrelados, bistrôs franceses, empórios orgânicos e adegas boutique."
  },
  {
    category: "Educação & Saúde",
    title: "Colégio Internacional & Hospital Albert",
    distance: "5 min de carro",
    detail: "Instituições de ensino bilíngue de ponta e centros médicos de referência com heliponto."
  },
  {
    category: "Acessos",
    title: "Shopping Iguatemi & Eixo Corporativo",
    distance: "6 min de carro",
    detail: "Acesso rápido e sem cruzamentos às principais vias expressas e ao centro financeiro."
  }
];

export const FAQS = [
  {
    question: "Como funciona o fluxo de pagamento durante o período de obras?",
    answer: "Durante a construção, você investe de 30% a 40% do valor total dividido em parcelas mensais, semestrais e anuais com correção pelo INCC. O saldo remanescente (60% a 70%) é quitado apenas na entrega das chaves, podendo ser financiado em até 420 meses pelo banco de sua preferência ou pago à vista."
  },
  {
    question: "Posso utilizar meu FGTS na aquisição do apartamento?",
    answer: "Sim! O saldo do FGTS pode ser utilizado como parte da entrada ou amortização do saldo devedor na etapa de financiamento bancário para as unidades enquadradas nas regras vigentes do SFH."
  },
  {
    question: "É possível personalizar as plantas e os acabamentos?",
    answer: "Com certeza. No programa 'Personalize Horizonte', nossos clientes têm acompanhamento com os arquitetos da construtora para alterar disposições de paredes (dentro dos limites estruturais), escolher padrões de piso, louças, metais e pontos adicionais de iluminação e climatização antes do acabamento final."
  },
  {
    question: "Qual é a garantia jurídica e de entrega do empreendimento?",
    answer: "O empreendimento conta com Patrimônio de Afetação registrado em cartório (segregação contábil irrevogável garantida pela Lei 10.931/04), seguro de término de obra e solidez de uma construtora com 28 anos de mercado e 100% das obras entregues no prazo contratual com certificação PBQP-H Nível A."
  },
  {
    question: "Como posso agendar uma visita ao apartamento decorado?",
    answer: "Basta clicar no botão 'Tenho Interesse' e preencher seus dados de contato no formulário. Nossa equipe de consultores especializados entrará em contato em menos de 10 minutos para reservar um horário exclusivo no espaço de atendimento com maquete e decorado."
  }
];
