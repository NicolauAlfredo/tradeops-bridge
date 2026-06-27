import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { useLanguage } from "./hooks/useLanguage";
import Home from "./pages/Home/Home";

function App() {
  const { language, changeLanguage } = useLanguage();

  return (
    <>
      <Header currentLanguage={language} onChangeLanguage={changeLanguage} />
      <Home currentLanguage={language} />
      <Footer currentLanguage={language} />
    </>
  );
}

export default App;
