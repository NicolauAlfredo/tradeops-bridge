import type { Language } from "../types/language.type";

export type NavigationItem = {
  id: string;
  label: Record<Language, string>;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  {
    id: "about",
    href: "#about",
    label: {
      it: "Chi siamo",
      pt: "Quem somos",
      en: "About",
    },
  },
  {
    id: "services",
    href: "#services",
    label: {
      it: "Servizi",
      pt: "Serviços",
      en: "Services",
    },
  },
  {
    id: "vision",
    href: "#vision",
    label: {
      it: "Visione",
      pt: "Visão",
      en: "Vision",
    },
  },
  {
    id: "team",
    href: "#team",
    label: {
      it: "Team",
      pt: "Equipa",
      en: "Team",
    },
  },
  {
    id: "contact",
    href: "#contact",
    label: {
      it: "Contatti",
      pt: "Contactos",
      en: "Contact",
    },
  },
];
