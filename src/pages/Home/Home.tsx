import type { Language } from "../../types/language.type";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TeamSection from "./components/TeamSection/TeamSection";
import VisionSection from "./components/VisionSection/VisionSection";

type HomeProps = {
  currentLanguage: Language;
};

function Home({ currentLanguage }: HomeProps) {
  return (
    <main>
      <HeroSection currentLanguage={currentLanguage} />
      <AboutSection currentLanguage={currentLanguage} />
      <ServicesSection currentLanguage={currentLanguage} />
      <VisionSection currentLanguage={currentLanguage} />
      <TeamSection currentLanguage={currentLanguage} />
    </main>
  );
}

export default Home;
