import {
  EPIAchievementsSection,
  epiEquiposcompanySchema,
  EPIFeaturesSectionData,
} from "./utils/data";
import "./App.css";
import StructuredData from "./components/StructuredData";
import EPIHeroSection from "./components/Sections/EPIHeroSection";
import EPIAchievmentsSection from "./components/Sections/EPIAchievmentsSection";
import EPIAboutSection from "./components/Sections/EPIAboutSection";
import EPIFeaturesSection from "./components/Sections/EPIFeaturesSection";
import ServicesSection from "./components/Sections/ServicesSection";
import NewsSection from "./components/Sections/NewsSection";
import OurClientsSection from "./components/Sections/OurClientsSection";

function App() {
  return (
    <main className="grid gap-12">
      <div>
        <EPIHeroSection />
        <EPIAchievmentsSection archievementsSection={EPIAchievementsSection} />
      </div>
      <EPIAboutSection />
      <EPIFeaturesSection archievementsSection={EPIFeaturesSectionData} />
      <ServicesSection />
      <NewsSection />
      <OurClientsSection />
      <StructuredData data={epiEquiposcompanySchema} />
    </main>
  );
}

export default App;
