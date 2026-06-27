import Button from "../../../../components/ui/Button/Button";
import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import type { Language } from "../../../../types/language.type";
import "./ContactSection.css";

type ContactSectionProps = {
  currentLanguage: Language;
};

const contactContent = {
  it: {
    label: "Contatti",
    title: "Vuoi esplorare opportunità agritech tra Italia e Angola?",
    description:
      "Parliamo del tuo progetto, del mercato che vuoi raggiungere e di come TradeOps Bridge può supportare l’ingresso operativo.",
    emailLabel: "Email",
    phoneLabel: "Telefono",
    locationLabel: "Area operativa",
    location: "Italia · Angola",
    cta: "Scrivici",
  },
  pt: {
    label: "Contactos",
    title: "Queres explorar oportunidades agritech entre Itália e Angola?",
    description:
      "Vamos falar do teu projeto, do mercado que queres alcançar e de como a TradeOps Bridge pode apoiar a entrada operacional.",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    locationLabel: "Área operacional",
    location: "Itália · Angola",
    cta: "Enviar mensagem",
  },
  en: {
    label: "Contact",
    title:
      "Do you want to explore agritech opportunities between Italy and Angola?",
    description:
      "Let’s talk about your project, the market you want to reach and how TradeOps Bridge can support operational market entry.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Operational area",
    location: "Italy · Angola",
    cta: "Contact us",
  },
};

function ContactSection({ currentLanguage }: ContactSectionProps) {
  const content = contactContent[currentLanguage];

  return (
    <section id="contact" className="contact-section">
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
