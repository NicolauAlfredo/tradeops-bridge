import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import Home from "../pages/Home/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
