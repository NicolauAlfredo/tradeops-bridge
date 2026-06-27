import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import type { Language } from "../../../../types/language.type";
import "./AboutSection.css";

type AboutSectionProps = {
  currentLanguage: Language;
};

const aboutContent = {
  it: {
    label: "Chi siamo",
    title:
      "Un ponte operativo tra agritech italiana e mercato agricolo angolano.",
    description:
      "TradeOps Bridge aiuta aziende, investitori e operatori agritech a entrare nel mercato angolano con una strategia concreta, dati affidabili e supporto operativo locale.",
    items: [
      "Analisi del mercato agricolo angolano",
      "Supporto all’ingresso commerciale",
      "Connessione con partner locali",
    ],
  },
  pt: {
    label: "Quem somos",
    title:
      "Uma ponte operacional entre o agritech italiano e o mercado agrícola angolano.",
    description:
      "A TradeOps Bridge ajuda empresas, investidores e operadores agritech a entrar no mercado angolano com estratégia concreta, dados fiáveis e suporte operacional local.",
    items: [
      "Análise do mercado agrícola angolano",
      "Suporte à entrada comercial",
      "Ligação com parceiros locais",
    ],
  },
  en: {
    label: "About us",
    title:
      "An operational bridge between Italian agritech and Angola’s agricultural market.",
    description:
      "TradeOps Bridge helps agritech companies, investors and operators enter the Angolan market with concrete strategy, reliable data and local operational support.",
    items: [
      "Angolan agricultural market analysis",
      "Commercial entry support",
      "Connection with local partners",
    ],
  },
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
