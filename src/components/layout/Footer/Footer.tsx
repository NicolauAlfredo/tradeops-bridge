import { Link } from "react-router-dom";
import type { Language } from "../../../types/language.type";
import "./Footer.css";

type FooterProps = {
  currentLanguage: Language;
};

const footerContent = {
  it: {
    copy: "TradeOps Bridge. Gateway operativo agritech Italia–Angola.",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    contacts: "Contatti",
  },
  pt: {
    copy: "TradeOps Bridge. Gateway operacional agritech Itália–Angola.",
    privacy: "Política de Privacidade",
    cookies: "Política de Cookies",
    contacts: "Contactos",
  },
  en: {
    copy: "TradeOps Bridge. Italy–Angola agritech operational gateway.",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    contacts: "Contact",
  },
};

function Footer({ currentLanguage }: FooterProps) {
  const content = footerContent[currentLanguage];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Link to="/" className="footer__brand">
        TradeOps Bridge
      </Link>

      <p className="footer__copy">
        © {currentYear} {content.copy}
      </p>

      <div className="footer__links">
        <a href="#contact">{content.contacts}</a>

        <Link to="/privacy-policy">{content.privacy}</Link>

        <Link to="/cookie-policy">{content.cookies}</Link>
      </div>
    </footer>
  );
}

export default Footer;
