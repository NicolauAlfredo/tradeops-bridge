import { navigationItems } from "../../../data/navigation";
import type { Language } from "../../../types/language.type";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

type HeaderProps = {
  currentLanguage: Language;
  onChangeLanguage: (language: Language) => void;
};

function Header({ currentLanguage, onChangeLanguage }: HeaderProps) {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Main navigation">
        <a href="#home" className="header__logo">
          TradeOps Bridge
        </a>

        <ul className="header__links">
          {navigationItems.map((item) => (
            <li key={item.id} className="header__item">
              <a href={item.href} className="header__link">
                {item.label[currentLanguage]}
              </a>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onChangeLanguage={onChangeLanguage}
          />

          <a href="#contact" className="header__cta">
            {currentLanguage === "it"
              ? "Contattaci"
              : currentLanguage === "pt"
                ? "Contactar"
                : "Contact us"}
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
