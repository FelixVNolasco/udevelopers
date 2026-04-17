import { HeroSectionInterface } from "@/utils/interfaces";

export default function HeroSection({
  heroSection,
}: {
  heroSection: HeroSectionInterface;
}) {
  return (
    <div
      id="inicio"
      className="relative flex h-[500px] items-center justify-center lg:h-[600px] lg:items-start lg:justify-start"
    >
      <h1 className="relative z-20 text-4xl text-white lg:max-w-md lg:p-12 lg:text-7xl">
        {heroSection.title}
      </h1>
      <img
        src={heroSection.image}
        className="absolute left-0 top-0 z-10 h-full w-full object-cover object-center"
      ></img>
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-20" />
    </div>
  );
}
