import type { Language } from "../../../../types/language.type";
import Button from "../../../../components/ui/Button/Button";

import "./HeroSection.css";

type HeroSectionProps = {
  currentLanguage: Language;
};

const heroContent = {
  it: {
    title: "Il Gateway Agritech Italia–Angola",
    highlight: "Italia–Angola",
    description:
      "Connettiamo aziende italiane del settore agritech al mercato agricolo angolano attraverso operazioni, dati e relazioni locali.",
    primaryAction: "Parla con noi",
    secondaryAction: "Scopri i servizi",
    stats: [
      { value: "2", label: "Mercati connessi" },
      { value: "3", label: "Aree operative" },
      { value: "1", label: "Bridge strategico" },
    ],
  },
  pt: {
    title: "O Gateway Agritech Itália–Angola",
    highlight: "Itália–Angola",
    description:
      "Conectamos empresas italianas do setor agritech ao mercado agrícola angolano através de operações, dados e relações locais.",
    primaryAction: "Falar connosco",
    secondaryAction: "Ver serviços",
    stats: [
      { value: "2", label: "Mercados conectados" },
      { value: "3", label: "Áreas operacionais" },
      { value: "1", label: "Bridge estratégico" },
    ],
  },
  en: {
    title: "The Italy–Angola Agritech Gateway",
    highlight: "Italy–Angola",
    description:
      "We connect Italian agritech companies to the Angolan agricultural market through operations, data and local relationships.",
    primaryAction: "Talk to us",
    secondaryAction: "Explore services",
    stats: [
      { value: "2", label: "Connected markets" },
      { value: "3", label: "Operational areas" },
      { value: "1", label: "Strategic bridge" },
    ],
  },
};

function HeroSection({ currentLanguage }: HeroSectionProps) {
  const content = heroContent[currentLanguage];

  return (
    <section id="home" className="hero-section">
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">TradeOps Bridge</p>

        <h1 className="hero-section__title">
          {content.title.replace(content.highlight, "")}
          <em>{content.highlight}</em>
        </h1>

        <p className="hero-section__description">{content.description}</p>

        <div className="hero-section__actions">
          <Button href="#contact">{content.primaryAction}</Button>

          <Button href="#services" variant="outline">
            {content.secondaryAction}
          </Button>
        </div>

        <div className="hero-section__stats">
          {content.stats.map((stat) => (
            <div key={stat.label} className="hero-section__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
