import type { Language } from "../../types/language.type";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection/HeroSection";

type HomeProps = {
  currentLanguage: Language;
};

function Home({ currentLanguage }: HomeProps) {
  return (
    <main>
      <HeroSection currentLanguage={currentLanguage} />
      <AboutSection currentLanguage={currentLanguage} />
    </main>
  );
}

export default Home;
