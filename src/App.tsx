import Header from "./components/layout/Header/Header";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { language, changeLanguage } = useLanguage();

  return (
    <>
      <Header currentLanguage={language} onChangeLanguage={changeLanguage} />

      <main style={{ paddingTop: "100px" }}>
        <h1>TradeOps Bridge</h1>
      </main>
    </>
  );
}

export default App;
