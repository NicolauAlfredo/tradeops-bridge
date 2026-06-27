import LanguageSwitcher from "./components/ui/LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div style={{ padding: "40px", background: "#0d1b3e" }}>
      <LanguageSwitcher
        currentLanguage={language}
        onChangeLanguage={changeLanguage}
      />
    </div>
  );
}

export default App;
