import { languages } from "../../../data/translations";
import type { Language } from "../../../types/language.type";

import "./LanguageSwitcher.css";

type LanguageSwitcherProps = {
  currentLanguage: Language;
  onChangeLanguage: (language: Language) => void;
};

function LanguageSwitcher({
  currentLanguage,
  onChangeLanguage,
}: LanguageSwitcherProps) {
  return (
    <div className="language-switcher">
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          className={`language-switcher__button ${
            currentLanguage === language.code
              ? "language-switcher__button--active"
              : ""
          }`}
          onClick={() => onChangeLanguage(language.code)}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
