import SectionLabel from "../../../../components/ui/SectionLabel/SectionLabel";
import type { Language } from "../../../../types/language.type";
import "./TeamSection.css";

type TeamSectionProps = {
  currentLanguage: Language;
};

const teamContent = {
  it: {
    label: "Team",
    title:
      "Un team orientato a strategia, tecnologia e operazioni sul territorio.",
    description:
      "La forza di TradeOps Bridge nasce dall’unione tra competenze digitali, visione commerciale e conoscenza diretta del contesto Angola–Italia.",
    members: [
      {
        role: "Founder & Technology",
        name: "Nicolau Alfredo",
        description:
          "Sviluppo software, automazione, dati e architettura tecnica della piattaforma.",
      },
      {
        role: "Market Operations",
        name: "Local Partners",
        description:
          "Supporto nella raccolta di informazioni, validazione locale e relazioni operative.",
      },
      {
        role: "Business Development",
        name: "Strategic Network",
        description:
          "Connessione con aziende, investitori, operatori agricoli e partner commerciali.",
      },
    ],
  },
  pt: {
    label: "Equipa",
    title:
      "Uma equipa orientada para estratégia, tecnologia e operações no terreno.",
    description:
      "A força da TradeOps Bridge nasce da união entre competências digitais, visão comercial e conhecimento direto do contexto Angola–Itália.",
    members: [
      {
        role: "Founder & Technology",
        name: "Nicolau Alfredo",
        description:
          "Desenvolvimento de software, automação, dados e arquitetura técnica da plataforma.",
      },
      {
        role: "Operações de Mercado",
        name: "Parceiros Locais",
        description:
          "Suporte na recolha de informação, validação local e relações operacionais.",
      },
      {
        role: "Desenvolvimento Comercial",
        name: "Rede Estratégica",
        description:
          "Ligação com empresas, investidores, operadores agrícolas e parceiros comerciais.",
      },
    ],
  },
  en: {
    label: "Team",
    title: "A team focused on strategy, technology and field operations.",
    description:
      "TradeOps Bridge combines digital expertise, commercial vision and direct knowledge of the Angola–Italy context.",
    members: [
      {
        role: "Founder & Technology",
        name: "Nicolau Alfredo",
        description:
          "Software development, automation, data and technical platform architecture.",
      },
      {
        role: "Market Operations",
        name: "Local Partners",
        description:
          "Support with information gathering, local validation and operational relationships.",
      },
      {
        role: "Business Development",
        name: "Strategic Network",
        description:
          "Connection with companies, investors, agricultural operators and commercial partners.",
      },
    ],
  },
};

function TeamSection({ currentLanguage }: TeamSectionProps) {
  const content = teamContent[currentLanguage];

  return (
    <section id="team" className="team-section">
      <div className="team-section__top">
        <div>
          <SectionLabel>{content.label}</SectionLabel>
          <h2 className="team-section__title">{content.title}</h2>
        </div>

        <p className="team-section__description">{content.description}</p>
      </div>

      <div className="team-section__grid">
        {content.members.map((member) => (
          <article key={member.name} className="team-section__card">
            <div className="team-section__avatar" aria-hidden="true">
              {member.name.charAt(0)}
            </div>

            <div className="team-section__info">
              <span className="team-section__role">{member.role}</span>
              <h3 className="team-section__name">{member.name}</h3>
              <p className="team-section__text">{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
