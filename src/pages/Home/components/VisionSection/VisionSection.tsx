import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import type { Language } from "../../../../types/language.type";
import "./VisionSection.css";

type VisionSectionProps = {
  currentLanguage: Language;
};

const visionContent = {
  it: {
    label: "Visione",
    title:
      "Costruire infrastruttura di intelligence per il settore agricolo angolano.",
    quote:
      "La nostra visione è trasformare dati frammentati, relazioni locali e opportunità di mercato in una piattaforma operativa utile per aziende, investitori e operatori agricoli.",
    tags: ["Dati", "Agritech", "Angola", "Italia"],
  },
  pt: {
    label: "Visão",
    title:
      "Construir infraestrutura de inteligência para o setor agrícola angolano.",
    quote:
      "A nossa visão é transformar dados fragmentados, relações locais e oportunidades de mercado numa plataforma operacional útil para empresas, investidores e operadores agrícolas.",
    tags: ["Dados", "Agritech", "Angola", "Itália"],
  },
  en: {
    label: "Vision",
    title:
      "Building market intelligence infrastructure for Angola’s agricultural sector.",
    quote:
      "Our vision is to transform fragmented data, local relationships and market opportunities into an operational platform for companies, investors and agricultural operators.",
    tags: ["Data", "Agritech", "Angola", "Italy"],
  },
};

function VisionSection({ currentLanguage }: VisionSectionProps) {
  const content = visionContent[currentLanguage];

  return (
    <section id="vision" className="vision-section">
      <div className="vision-section__grid">
        <div className="vision-section__visual" aria-hidden="true">
          <div className="vision-section__map-card">
            <span>Italia</span>
            <div className="vision-section__line" />
            <span>Angola</span>
          </div>
        </div>

        <div className="vision-section__content">
          <SectionLabel>{content.label}</SectionLabel>

          <h2 className="vision-section__title">{content.title}</h2>

          <blockquote className="vision-section__quote">
            {content.quote}
          </blockquote>

          <div className="vision-section__tags">
            {content.tags.map((tag) => (
              <span key={tag} className="vision-section__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
