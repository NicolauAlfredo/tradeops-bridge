import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import { servicesContent } from "../../../../data/homeContent";
import type { Language } from "../../../../types/language.type";
import "./ServicesSection.css";

type ServicesSectionProps = {
  currentLanguage: Language;
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
        {content.services.map((service) => {
          const Icon = service.icon;

          return (
            <article key={service.title} className="services-section__card">
              <div className="services-section__icon" aria-hidden="true">
                <Icon
                  className="services-section__icon-svg"
                  strokeWidth={1.8}
                />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
