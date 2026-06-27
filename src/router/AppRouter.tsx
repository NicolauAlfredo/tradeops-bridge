import { BrowserRouter, Route, Routes } from "react-router-dom";

import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import App from "../App";
import { Home } from "lucide-react";

function AppRouter() {
  return (
    <BrowserRouter basename="/tradeops-bridge">
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
