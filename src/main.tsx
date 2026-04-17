import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import OurMarketPage from "./pages/OurMarketPage";
import MiamiPage from "./pages/MiamiPage";
import HoustonPage from "./pages/HoustonPage";
import MexicoCityPage from "./pages/MexicoCityPage";
import InvestmentOpportunitiesPage from "./pages/InvestmentOpportunitiesPage";
import PropertiesPage from "./pages/PropertiesPage";
import RealEstateFundPage from "./pages/RealEstateFundPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiesPage from "./pages/CookiesPage";
import NewsletterPage from "./pages/NewsletterPage";
import PropertyPage from "./pages/PropertyPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="our-market" element={<OurMarketPage />} />
          <Route path="miami" element={<MiamiPage />} />
          <Route path="houston" element={<HoustonPage />} />
          <Route path="mexico-city" element={<MexicoCityPage />} />
          <Route
            path="investment-opportunities"
            element={<InvestmentOpportunitiesPage />}
          />
          <Route
            path="next-projects-opportunities"
            element={<PropertiesPage />}
          />
          <Route path="real-estate-fund" element={<RealEstateFundPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="properties/:slug" element={<PropertyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
