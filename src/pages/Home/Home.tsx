import { useOutletContext } from "react-router-dom";

import type { RouterContext } from "../../types/router.type";

import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TeamSection from "./components/TeamSection/TeamSection";
import VisionSection from "./components/VisionSection/VisionSection";

function Home() {
  const { currentLanguage } = useOutletContext<RouterContext>();

  return (
    <main>
      <HeroSection currentLanguage={currentLanguage} />
      <AboutSection currentLanguage={currentLanguage} />
      <ServicesSection currentLanguage={currentLanguage} />
      <VisionSection currentLanguage={currentLanguage} />
      <TeamSection currentLanguage={currentLanguage} />
      <ContactSection currentLanguage={currentLanguage} />
    </main>
  );
}

export default Home;
