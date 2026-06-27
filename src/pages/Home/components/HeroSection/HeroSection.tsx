import type { Language } from "../../../../types/language.type";
import Button from "../../../../components/ui/Button/Button";
import { heroContent } from "../../../../data/homeContent";

import "./HeroSection.css";

type HeroSectionProps = {
  currentLanguage: Language;
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
