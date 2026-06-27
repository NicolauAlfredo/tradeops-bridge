import type { Language } from "../types/language.type";

type LocalizedText = Record<Language, string>;

export type TeamMember = {
  id: string;
  name: string;
  role: LocalizedText;
  summary: LocalizedText;
  responsibilities: LocalizedText[];
  longTermVision?: LocalizedText;
  companyPosition?: LocalizedText;
  linkedinTitle?: string;
  image: string;
  linkedin: string;
  imageAlt: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "giorgio-de-oliveira",
    name: "Giorgio De Oliveira",
    image: "assets/images/team/giorgio-de-oliveira.jpg",
    linkedin: "https://www.linkedin.com/in/giorgiodeoliveira/",
    role: {
      it: "Co-Founder & Strategic Advisor",
      pt: "Co-Founder & Strategic Advisor",
      en: "Co-Founder & Strategic Advisor",
    },
    summary: {
      it: "Responsabile della visione strategica, della validazione dell’opportunità di mercato e dello sviluppo istituzionale.",
      pt: "Responsável pela visão estratégica, validação da oportunidade de mercado e desenvolvimento institucional.",
      en: "Responsible for strategic vision, market opportunity validation and institutional development.",
    },
    responsibilities: [
      {
        it: "Definizione della visione strategica",
        pt: "Definição da visão estratégica",
        en: "Definition of strategic vision",
      },
      {
        it: "Validazione dell’opportunità nel settore agricolo angolano",
        pt: "Validação da oportunidade no setor agrícola angolano",
        en: "Validation of the opportunity in Angola’s agricultural sector",
      },
      {
        it: "Sviluppo di partnership e posizionamento istituzionale",
        pt: "Desenvolvimento de parcerias e posicionamento institucional",
        en: "Partnership development and institutional positioning",
      },
    ],
    longTermVision: {
      it: "Sviluppare TradeOps Bridge come infrastruttura di intelligence di mercato per il settore agricolo angolano.",
      pt: "Desenvolver a TradeOps Bridge como infraestrutura de inteligência de mercado para o setor agrícola angolano.",
      en: "Develop TradeOps Bridge as a market intelligence infrastructure for Angola’s agricultural sector.",
    },
    companyPosition: {
      it: "Socio e cofondatore, partecipa alle decisioni strategiche.",
      pt: "Sócio e cofundador, participa das decisões estratégicas.",
      en: "Partner and co-founder, involved in strategic decisions.",
    },
    linkedinTitle: "Co-Founder & Strategic Advisor @ TradeOps Bridge",
    imageAlt: "Giorgio De Oliveira",
  },
  {
    id: "nicolau-alfredo",
    name: "Nicolau Alfredo",
    image: "assets/images/team/nicolau-alfredo.png",
    linkedin: "https://www.linkedin.com/in/nicolaualfredo/",
    role: {
      it: "CTO & Co-Founder",
      pt: "CTO & Co-Founder",
      en: "CTO & Co-Founder",
    },
    summary: {
      it: "Responsabile dell’intera area tecnica del progetto. Gestisce lo sviluppo del sito, del database e dell’infrastruttura tecnologica.",
      pt: "Responsável por toda a área técnica do projeto. Gerencia o desenvolvimento do site, da base de dados e da infraestrutura tecnológica.",
      en: "Responsible for the entire technical area of the project. Manages the website, database and technology infrastructure.",
    },
    responsibilities: [
      {
        it: "Sviluppo full stack con React e Spring Boot",
        pt: "Desenvolvimento full stack com React e Spring Boot",
        en: "Full stack development with React and Spring Boot",
      },
      {
        it: "Gestione ed evoluzione del database",
        pt: "Gestão e evolução da base de dados",
        en: "Database management and evolution",
      },
      {
        it: "Creazione di report automatici di mercato",
        pt: "Criação de relatórios automáticos de mercado",
        en: "Creation of automated market reports",
      },
    ],
    longTermVision: {
      it: "Costruire una piattaforma robusta che integri dati di mercato, report intelligenti e una presenza digitale solida.",
      pt: "Construir uma plataforma robusta que integre dados de mercado, relatórios inteligentes e uma presença digital sólida.",
      en: "Build a robust platform integrating market data, intelligent reports and a solid digital presence.",
    },
    companyPosition: {
      it: "Socio e fondatore dell’area tecnica.",
      pt: "Sócio e fundador da área técnica.",
      en: "Partner and founder of the technical area.",
    },
    linkedinTitle: "CTO & Co-Founder @ TradeOps Bridge",
    imageAlt: "Nicolau Alfredo",
  },
  {
    id: "sasha-rodrigues",
    name: "Sasha Rodrigues",
    image: "assets/images/team/sasha-rodrigues.jpg",
    linkedin: "#",
    role: {
      it: "Technical Lead & Partner",
      pt: "Technical Lead & Partner",
      en: "Technical Lead & Partner",
    },
    summary: {
      it: "Porta competenza tecnica e operativa nel mercato angolano, contribuendo all’integrazione delle soluzioni agritech nel contesto locale.",
      pt: "Traz competência técnica e operacional no mercado angolano, contribuindo para integrar soluções agritech no contexto local.",
      en: "Brings technical and operational expertise in the Angolan market, helping integrate agritech solutions into the local context.",
    },
    responsibilities: [
      {
        it: "Supporto tecnico-operativo in Angola",
        pt: "Suporte técnico-operacional em Angola",
        en: "Technical and operational support in Angola",
      },
      {
        it: "Validazione locale delle soluzioni",
        pt: "Validação local das soluções",
        en: "Local validation of solutions",
      },
      {
        it: "Connessione tra tecnologia e bisogni reali del mercato",
        pt: "Ligação entre tecnologia e necessidades reais do mercado",
        en: "Connection between technology and real market needs",
      },
    ],
    imageAlt: "Sasha Rodrigues",
  },
  {
    id: "agroconsultoria-ag",
    name: "AgroConsultoria AG",
    image: "assets/images/team/agroconsultoria-ag.jpg",
    linkedin: "#",
    role: {
      it: "Field Data Specialist & Partner",
      pt: "Field Data Specialist & Partner",
      en: "Field Data Specialist & Partner",
    },
    summary: {
      it: "Partner operativo per la raccolta di dati primari nelle province agricole, con metodologie digitali e validazione sul campo.",
      pt: "Parceiro operacional para recolha de dados primários nas províncias agrícolas, com metodologias digitais e validação no terreno.",
      en: "Operational partner for primary data collection in agricultural provinces, using digital methodologies and field validation.",
    },
    responsibilities: [
      {
        it: "Raccolta di dati primari sul campo",
        pt: "Recolha de dados primários no terreno",
        en: "Primary field data collection",
      },
      {
        it: "Validazione di informazioni agricole locali",
        pt: "Validação de informações agrícolas locais",
        en: "Validation of local agricultural information",
      },
      {
        it: "Supporto metodologico nei dati territoriali",
        pt: "Suporte metodológico em dados territoriais",
        en: "Methodological support for territorial data",
      },
    ],
    imageAlt: "AgroConsultoria AG",
  },
  {
    id: "nixon-cange",
    name: "Nixon F. Cange",
    image: "assets/images/team/nixon-cange.jpg",
    linkedin: "https://www.linkedin.com/in/nixon-fontoura-cange-agronomo/",
    role: {
      it: "Business Development Angola",
      pt: "Business Development Angola",
      en: "Business Development Angola",
    },
    summary: {
      it: "Partner commerciale a Luanda, focalizzato su prospezione locale, qualificazione di opportunità e relazioni istituzionali.",
      pt: "Parceiro comercial em Luanda, focado em prospeção local, qualificação de oportunidades e relações institucionais.",
      en: "Commercial partner in Luanda, focused on local prospecting, opportunity qualification and institutional relationships.",
    },
    responsibilities: [
      {
        it: "Prospezione commerciale locale",
        pt: "Prospecção comercial local",
        en: "Local commercial prospecting",
      },
      {
        it: "Qualificazione di prospect e opportunità",
        pt: "Qualificação de prospects e oportunidades",
        en: "Prospect and opportunity qualification",
      },
      {
        it: "Relazioni commerciali e istituzionali in Angola",
        pt: "Relações comerciais e institucionais em Angola",
        en: "Commercial and institutional relationships in Angola",
      },
    ],
    imageAlt: "Nixon F. Cange",
  },
];
