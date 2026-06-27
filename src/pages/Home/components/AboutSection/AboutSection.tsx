import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import { aboutContent } from "../../../../data/homeContent";
import type { Language } from "../../../../types/language.type";
import "./AboutSection.css";

type AboutSectionProps = {
  currentLanguage: Language;
};

function AboutSection({ currentLanguage }: AboutSectionProps) {
  const content = aboutContent[currentLanguage];

  return (
    <section id="about" className="about-section">
      <div className="about-section__grid">
        <div className="about-section__content">
          <SectionLabel>{content.label}</SectionLabel>

          <h2 className="about-section__title">{content.title}</h2>

          <p className="about-section__description">{content.description}</p>

          <ul className="about-section__list">
            {content.items.map((item) => (
              <li key={item} className="about-section__item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-section__visual" aria-hidden="true">
          <div className="about-section__card">
            <span>Italy</span>
            <strong>TradeOps Bridge</strong>
            <span>Angola</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
