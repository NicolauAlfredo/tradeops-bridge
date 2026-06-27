import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <h1>TradeOps Bridge</h1>
      <p>Current language: {language}</p>

      <button onClick={() => changeLanguage("it")}>IT</button>
      <button onClick={() => changeLanguage("pt")}>PT</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}

export default App;
