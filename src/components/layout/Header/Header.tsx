import { useState } from "react";
import { navigationItems } from "../../../data/navigation";
import type { Language } from "../../../types/language.type";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

type HeaderProps = {
  currentLanguage: Language;
  onChangeLanguage: (language: Language) => void;
};

function Header({ currentLanguage, onChangeLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  const contactLabel =
    currentLanguage === "it"
      ? "Contattaci"
      : currentLanguage === "pt"
        ? "Contactar"
        : "Contact us";

  return (
    <header className="header">
      <nav className="header__nav" aria-label="Main navigation">
        <a href="#home" className="header__logo" onClick={handleCloseMenu}>
          TradeOps Bridge
        </a>

        <ul className="header__links">
          {navigationItems.map((item) => (
            <li key={item.id}>
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

          <button
            type="button"
            className="header__menu-button"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu--open" : ""}`}
      >
        <ul className="header__mobile-links">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="header__mobile-link"
                onClick={handleCloseMenu}
              >
                {item.label[currentLanguage]}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="header__mobile-cta"
          onClick={handleCloseMenu}
        >
          {contactLabel}
        </a>
      </div>
    </header>
  );
}

export default Header;
