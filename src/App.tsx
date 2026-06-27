import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { language, changeLanguage } = useLanguage();

  return (
    <>
      <Header currentLanguage={language} onChangeLanguage={changeLanguage} />

      <Outlet
        context={{
          currentLanguage: language,
        }}
      />

      <Footer currentLanguage={language} />
    </>
  );
}

export default App;
