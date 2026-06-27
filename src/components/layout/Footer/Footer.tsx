import type { Language } from "../../../types/language.type";
import "./Footer.css";

type FooterProps = {
  currentLanguage: Language;
};

const footerContent = {
  it: {
    copy: "TradeOps Bridge. Gateway operativo agritech Italia–Angola.",
    privacy: "Privacy",
    contacts: "Contatti",
  },
  pt: {
    copy: "TradeOps Bridge. Gateway operacional agritech Itália–Angola.",
    privacy: "Privacidade",
    contacts: "Contactos",
  },
  en: {
    copy: "TradeOps Bridge. Italy–Angola agritech operational gateway.",
    privacy: "Privacy",
    contacts: "Contact",
  },
};

function Footer({ currentLanguage }: FooterProps) {
  const content = footerContent[currentLanguage];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="#home" className="footer__brand">
        TradeOps Bridge
      </a>

      <p className="footer__copy">
        © {currentYear} {content.copy}
      </p>

      <div className="footer__links">
        <a href="#contact">{content.contacts}</a>
        <a href="#privacy">{content.privacy}</a>
      </div>
    </footer>
  );
}

export default Footer;
