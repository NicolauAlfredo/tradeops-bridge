import { useState } from "react";
import type { Language } from "../types/language.type";

export function useLanguage(defaultLanguage: Language = "it") {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
  }

  return {
    language,
    changeLanguage,
  };
}
