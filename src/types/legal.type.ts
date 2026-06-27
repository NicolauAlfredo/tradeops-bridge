import type { Language } from "./language.type";

export type LegalSection = {
  title: Record<Language, string>;
  content: Record<Language, string[]>;
};

export type LegalDocument = {
  lastUpdated: string;
  sections: LegalSection[];
};
