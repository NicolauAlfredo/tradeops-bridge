export type TeamMember = {
  id: string;
  name: string;
  role: string;
  summary: string;
  responsibilities: string[];
  longTermVision?: string;
  companyPosition?: string;
  linkedinTitle?: string;
  imageAlt: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "giorgio-de-oliveira",
    name: "Giorgio De Oliveira",
    role: "Co-Founder & Strategic Advisor",
    summary:
      "Responsável pela visão estratégica, validação da oportunidade de mercado e desenvolvimento institucional da TradeOps Bridge.",
    responsibilities: [
      "Definição da visão estratégica do projeto",
      "Validação da oportunidade no setor agrícola angolano",
      "Apoio no posicionamento institucional da empresa",
      "Identificação de oportunidades comerciais e parcerias",
      "Alinhamento entre objetivos de negócio e execução operacional",
    ],
    longTermVision:
      "Desenvolver a TradeOps Bridge como uma infraestrutura de inteligência de mercado para empresas, investidores e operadores interessados no setor agrícola angolano.",
    companyPosition:
      "Sócio e cofundador, participando nas decisões estratégicas e na evolução comercial do projeto.",
    linkedinTitle: "Co-Founder & Strategic Advisor @ TradeOps Bridge",
    imageAlt: "Giorgio De Oliveira",
  },
  {
    id: "nicolau-alfredo",
    name: "Nicolau Alfredo",
    role: "CTO & Co-Founder",
    summary:
      "Responsável por toda a área técnica do projeto. Gerencia o desenvolvimento do site, da base de dados e da infraestrutura tecnológica.",
    responsibilities: [
      "Desenvolvimento full stack do site com React e Spring Boot",
      "Projeto, gestão e evolução da base de dados com MySQL/PostgreSQL",
      "Criação de relatórios automáticos com dados do mercado angolano",
      "Definição da arquitetura técnica e das ferramentas do projeto",
      "Coordenação da equipe técnica quando houver",
      "Alinhamento técnico com os objetivos de negócio",
    ],
    longTermVision:
      "Construir uma plataforma robusta que integre dados de mercado, relatórios inteligentes e uma presença digital sólida para a TradeOps Bridge.",
    companyPosition:
      "Sócio e fundador da área técnica, participando do crescimento do projeto e das decisões estratégicas.",
    linkedinTitle: "CTO & Co-Founder @ TradeOps Bridge",
    imageAlt: "Nicolau Alfredo",
  },
  {
    id: "sasha-rodrigues",
    name: "Sasha Rodrigues",
    role: "Technical Lead & Partner",
    summary:
      "Expertise técnica e operacional no mercado angolano. Integra soluções agritech italianas nas realidades locais.",
    responsibilities: [
      "Apoio técnico-operacional no mercado angolano",
      "Integração de soluções agritech com necessidades locais",
      "Validação prática de oportunidades no terreno",
    ],
    imageAlt: "Sasha Rodrigues",
  },
  {
    id: "agroconsultoria-ag",
    name: "AgroConsultoria AG",
    role: "Field Data Specialist & Partner",
    summary:
      "Parceiro operacional para recolha de dados primários nas províncias agrícolas, com metodologia KoboCollect e triangulação por satélite.",
    responsibilities: [
      "Recolha de dados primários no terreno",
      "Validação de informação agrícola por província",
      "Apoio metodológico em dados de campo",
    ],
    imageAlt: "AgroConsultoria AG",
  },
  {
    id: "nixon-cange",
    name: "Nixon F. Cange",
    role: "Business Development Angola",
    summary:
      "Parceiro comercial em Luanda. Prospeção local, qualificação de prospects e relações institucionais em Angola.",
    responsibilities: [
      "Prospeção comercial local",
      "Qualificação de prospects",
      "Relações institucionais e comerciais em Angola",
    ],
    imageAlt: "Nixon F. Cange",
  },
];
