import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import { teamContent } from "../../../../data/homeContent";
import type { Language } from "../../../../types/language.type";
import { teamMembers } from "../../../../data/team";

import "./TeamSection.css";
import { getPublicAssetPath } from "../../../../utils/getPublicAssetPath";

type TeamSectionProps = {
  currentLanguage: Language;
};

function TeamSection({ currentLanguage }: TeamSectionProps) {
  const content = teamContent[currentLanguage];

  return (
    <section id="team" className="team-section">
      <div className="team-section__top">
        <div>
          <SectionLabel>{content.label}</SectionLabel>
          <h2 className="team-section__title">{content.title}</h2>
        </div>

        <p className="team-section__description">{content.description}</p>
      </div>

      <div className="team-section__grid">
        {teamMembers.map((member) => (
          <article key={member.id} className="team-section__card">
            <div className="team-section__avatar" aria-label={member.imageAlt}>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-section__image-link"
                aria-label={member.name}
              >
                <img
                  src={getPublicAssetPath(member.image)}
                  alt={member.imageAlt}
                  className="team-section__image"
                />
              </a>
            </div>

            <div className="team-section__info">
              <span className="team-section__role">
                {member.role[currentLanguage]}
              </span>

              <h3 className="team-section__name">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.name}
                </a>
              </h3>

              <p className="team-section__text">
                {member.summary[currentLanguage]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
