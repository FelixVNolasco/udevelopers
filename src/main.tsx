import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import About from "./components/pages/About.tsx";
import WebsiteLayout from "./components/WebsiteLayout.tsx";
import ServicesPage from "./components/pages/ServicesPage.tsx";
import ServicePage from "./components/pages/ServicePage.tsx";
import { Contact } from "lucide-react";
import ScrollToTop from "./components/ui/ScrollToTop.tsx";
import BlogPage from "./components/pages/BlogPage.tsx";
import ArticlePage from "./components/pages/ArticlePage.tsx";
import { HelmetProvider } from "react-helmet-async";
import DynamicMeta from "./components/DynamicMeta.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <DynamicMeta />
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route index element={<App />} />
            <Route path="nosotros" element={<About />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="servicios">
              <Route index element={<ServicesPage />} />
              <Route path=":sid" element={<ServicePage />} />
            </Route>
            <Route path="blog">
              <Route index element={<BlogPage />} />
              <Route path=":slug" element={<ArticlePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
