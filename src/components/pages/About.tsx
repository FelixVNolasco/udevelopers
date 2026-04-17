import { abousSection } from "@/utils/data";
import HomeAboutSection from "../Sections/HomeAboutSection";

function About() {
  return (
    <main>
      <HomeAboutSection abousSection={abousSection} />
    </main>
  );
}

export default About;
