import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import { visionContent } from "../../../../data/homeContent";
import type { Language } from "../../../../types/language.type";
import { getPublicAssetPath } from "../../../../utils/getPublicAssetPath";
import "./VisionSection.css";

type VisionSectionProps = {
  currentLanguage: Language;
};

function VisionSection({ currentLanguage }: VisionSectionProps) {
  const content = visionContent[currentLanguage];

  return (
    <section id="vision" className="page-section vision-section">
      <div className="vision-section__grid">
        <div className="vision-section__visual">
          <img
            src={getPublicAssetPath(
              "assets/images/vision/market-intelligence.png",
            )}
            alt="TradeOps Bridge market intelligence platform"
            className="vision-section__image"
          />
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
