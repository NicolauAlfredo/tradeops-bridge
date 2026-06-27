import { useOutletContext } from "react-router-dom";

import LegalLayout from "../../components/legal/LegalPage";
import { cookiePolicy } from "../../data/cookiePolicy";

import type { RouterContext } from "../../types/router.type";

function CookiePolicy() {
  const { currentLanguage } = useOutletContext<RouterContext>();

  return (
    <LegalLayout title="Privacy Policy" lastUpdated={cookiePolicy.lastUpdated}>
      {cookiePolicy.sections.map((section) => (
        <section key={section.title.en}>
          <h2>{section.title[currentLanguage]}</h2>

          {section.content[currentLanguage].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </LegalLayout>
  );
}

export default CookiePolicy;
