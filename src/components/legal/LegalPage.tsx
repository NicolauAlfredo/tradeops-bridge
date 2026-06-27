import type { ReactNode } from "react";
import "./LegalLayout.css";

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main className="legal-layout">
      <div className="legal-layout__container">
        <header className="legal-layout__header">
          <h1 className="legal-layout__title">{title}</h1>

          <p className="legal-layout__updated">Last updated: {lastUpdated}</p>
        </header>

        <div className="legal-layout__content">{children}</div>
      </div>
    </main>
  );
}

export default LegalLayout;
