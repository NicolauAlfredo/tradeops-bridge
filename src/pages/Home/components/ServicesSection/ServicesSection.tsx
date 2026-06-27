import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import type { Language } from "../../../../types/language.type";
import "./ServicesSection.css";

type ServicesSectionProps = {
  currentLanguage: Language;
};

const servicesContent = {
  it: {
    label: "Servizi",
    title:
      "Supportiamo l’ingresso nel mercato con dati, relazioni e operazioni.",
    description:
      "La nostra attività combina intelligence di mercato, sviluppo commerciale e supporto operativo per ridurre incertezza e tempi di ingresso.",
    services: [
      {
        icon: "📊",
        title: "Market Intelligence",
        description:
          "Raccolta, strutturazione e analisi di dati pubblici e locali sul settore agricolo angolano.",
      },
      {
        icon: "🤝",
        title: "Business Matching",
        description:
          "Connessione con aziende, cooperative, distributori, istituzioni e partner locali qualificati.",
      },
      {
        icon: "⚙️",
        title: "Operational Support",
        description:
          "Supporto pratico nella validazione del mercato, nelle trattative e nella fase di ingresso operativo.",
      },
    ],
  },
  pt: {
    label: "Serviços",
    title: "Apoiamos a entrada no mercado com dados, relações e operações.",
    description:
      "A nossa atividade combina inteligência de mercado, desenvolvimento comercial e suporte operacional para reduzir incerteza e tempo de entrada.",
    services: [
      {
        icon: "📊",
        title: "Inteligência de Mercado",
        description:
          "Recolha, estruturação e análise de dados públicos e locais sobre o setor agrícola angolano.",
      },
      {
        icon: "🤝",
        title: "Business Matching",
        description:
          "Ligação com empresas, cooperativas, distribuidores, instituições e parceiros locais qualificados.",
      },
      {
        icon: "⚙️",
        title: "Suporte Operacional",
        description:
          "Apoio prático na validação do mercado, nas negociações e na fase de entrada operacional.",
      },
    ],
  },
  en: {
    label: "Services",
    title:
      "We support market entry through data, relationships and operations.",
    description:
      "Our work combines market intelligence, business development and operational support to reduce uncertainty and time to market.",
    services: [
      {
        icon: "📊",
        title: "Market Intelligence",
        description:
          "Collection, structuring and analysis of public and local data about Angola’s agricultural sector.",
      },
      {
        icon: "🤝",
        title: "Business Matching",
        description:
          "Connection with companies, cooperatives, distributors, institutions and qualified local partners.",
      },
      {
        icon: "⚙️",
        title: "Operational Support",
        description:
          "Practical support during market validation, negotiations and operational market entry.",
      },
    ],
  },
};

function ServicesSection({ currentLanguage }: ServicesSectionProps) {
  const content = servicesContent[currentLanguage];

  return (
    <section id="services" className="services-section">
      <div className="services-section__top">
        <div>
          <SectionLabel>{content.label}</SectionLabel>
          <h2 className="services-section__title">{content.title}</h2>
        </div>

        <p className="services-section__description">{content.description}</p>
      </div>

      <div className="services-section__cards">
        {content.services.map((service) => (
          <article key={service.title} className="services-section__card">
            <div className="services-section__icon" aria-hidden="true">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
