import EPIAchievmentsSection from "../Sections/EPIAchievmentsSection";
import EPIHeroSection from "../Sections/EPIHeroSection";
import {
  EPIAchievementsSection,
  epiEquiposcompanySchema,
  EPIFeaturesSectionData,
} from "../../utils/data";
import EPIAboutSection from "../Sections/EPIAboutSection";
import EPIFeaturesSection from "../Sections/EPIFeaturesSection";
import ServicesSection from "../Sections/ServicesSection";
import NewsSection from "../Sections/NewsSection";
import OurClientsSection from "../Sections/OurClientsSection";
import StructuredData from "../StructuredData";

function EPI() {
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

export default EPI;
