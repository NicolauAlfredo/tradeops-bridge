import Button from "../../../../components/ui/Button/Button";
import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import { contactContent } from "../../../../data/homeContent";
import type { Language } from "../../../../types/language.type";
import "./ContactSection.css";

type ContactSectionProps = {
  currentLanguage: Language;
};

function ContactSection({ currentLanguage }: ContactSectionProps) {
  const content = contactContent[currentLanguage];

  return (
    <section id="contact" className="page-section contact-section">
      <div className="contact-section__content">
        <SectionLabel>{content.label}</SectionLabel>

        <h2 className="contact-section__title">{content.title}</h2>

        <p className="contact-section__description">{content.description}</p>

        <div className="contact-section__cards">
          <a
            href="mailto:info@tradeopsbridge.com"
            className="contact-section__card"
          >
            <span className="contact-section__type">{content.emailLabel}</span>
            <strong>info@tradeopsbridge.com</strong>
          </a>

          <a href="tel:+390000000000" className="contact-section__card">
            <span className="contact-section__type">{content.phoneLabel}</span>
            <strong>+39 000 000 0000</strong>
          </a>

          <div className="contact-section__card">
            <span className="contact-section__type">
              {content.locationLabel}
            </span>
            <strong>{content.location}</strong>
          </div>
        </div>

        <Button href="mailto:info@tradeopsbridge.com">{content.cta}</Button>
      </div>
    </section>
  );
}

export default ContactSection;
