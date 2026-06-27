import type { Language } from "../../types/language.type";
import HeroSection from "./components/HeroSection/HeroSection";

type HomeProps = {
  currentLanguage: Language;
};

function Home({ currentLanguage }: HomeProps) {
  return (
    <main>
      <HeroSection currentLanguage={currentLanguage} />
    </main>
  );
}

export default Home;
