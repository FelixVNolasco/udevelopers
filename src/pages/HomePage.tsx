import { useCallback, useEffect, useState } from "react";
import { homeContent } from "../data/siteContent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel";

import marcusMillichapLogo from "../../public/images/branding/marcusmillichaplogobw.png";
import bpLogo from "../../public/images/branding/BP-logo-sansserif.png";
import evLogo from "../../public/images/partners/EV-white.png";
import lcgBuildersLogo from "../../public/images/partners/LCG-Builders.png";
import taBuildersLogo from "../../public/images/partners/T.A.-builders.png";
import cdmxHomesLogo from "../../public/images/mexico-city/CDMX-Homes.png";


const alliancesList = [

  cdmxHomesLogo,
  evLogo,
  taBuildersLogo,
  marcusMillichapLogo,
  lcgBuildersLogo,
  bpLogo,
];

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
    title: "VALUE CREATION FROM\nREAL ESTATE DEVELOPMENT",
  },
  {
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1920&q=80",
    title: "INVESTING IN\nSOUTH FLORIDA",
  },
  // {
  //   image: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1920&q=80",
  //   title: "BUILDING VALUE IN\nHOUSTON, TEXAS",
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1920&q=80",
  //   title: "EXPANDING INTO\nMEXICO CITY",
  // },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    title: "REAL ESTATE\nINVESTMENT OPPORTUNITIES",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80",
    title: "NEXT PROJECT\nOPPORTUNITIES",
  },
];

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);

    // Autoplay
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api, onSelect]);

  return (
    <div className="mb-12">
      {/* Hero Carousel */}
      <section className="relative">
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {heroSlides.map((slide, i) => (
              <CarouselItem key={i} className="pl-0 relative">
                <div className="relative h-[70vh] min-h-[500px] bg-[#335264] flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url('${slide.image}')` }}
                  />
                  <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-3xl md:text-5xl font-light tracking-wider uppercase leading-tight whitespace-pre-line">
                      {slide.title}
                    </h1>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"
                }`}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About + Team Section */}
      <div id="real-estate">
      {/* Mobile: simple stacked layout */}
      <section className="md:hidden">
        <div className="bg-[#335264] text-white p-10">
          <img src="/images/branding/dd-white.png" alt="UDevelopers Logo" className="h-14 w-auto mb-10" />
          {homeContent.about.description.split("\n\n").map((p, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 text-white">
              {p}
            </p>
          ))}
        </div>
        <div className="bg-[#d9d9d9] p-10">
          <h2 className="text-2xl text-[#335264] font-light mb-6">
            United Developers Team
          </h2>
          <p className="text-sm text-[#555] mb-4">
            {homeContent.team.description}
          </p>
          <ul className="space-y-2">
            {homeContent.team.specializations.map((spec) => (
              <li key={spec} className="text-sm text-[#335264]">
                - {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Desktop / Tablet: offset asymmetric layout */}
      <section className="hidden md:block relative max-w-[1080px] mx-auto">
        {/* Background image strip */}
        <div
          className="absolute top-0 right-0 w-1/2 h-[220px] bg-cover bg-center opacity-30"          
        />
        <div className="relative grid grid-cols-2">
          {/* Left: About (dark teal) – full height */}
          <div className="bg-[#335264] text-white px-16 pt-16 pb-20 row-span-full">
            <img src="/images/branding/dd-white.png" alt="UDevelopers Logo" className="h-20 w-auto mb-16" />
            {homeContent.about.description.split("\n\n").map((p, i) => (
              <p key={i} className="text-sm leading-relaxed mb-4 text-white">
                {p}
              </p>
            ))}
          </div>

          {/* Right: spacer top then Team panel */}
          <div className="flex flex-col lg:w-11/12">
            {/* Spacer to offset the right column downward */}
            <div className="h-[220px]" />
            {/* Team (light gray) */}
            <div className="bg-[#d9d9d9] px-14 py-14 flex-1">
              <h2 className="text-2xl text-[#335264] font-light mb-8">
                United Developers Team
              </h2>
              <p className="text-sm text-[#555] mb-4">
                {homeContent.team.description}
              </p>
              <ul className="space-y-2">
                {homeContent.team.specializations.map((spec) => (
                  <li key={spec} className="text-sm text-[#335264]">
                    - {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom teal bar */}
        
      </section>
      </div>

      {/* Advisors / Alliances Section */}
      <section className="grid md:grid-cols-2 max-w-[1080px] mx-auto" id="advisors-alliances">
        {/* Left: Text */}
        <div className="bg-white p-12 md:p-16">
          <h2 className="text-xl text-[#335264] font-semibold mb-6">
            Advisors / Alliances
          </h2>
          {homeContent.advisors.description.split("\n\n").map((p, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 text-[#555]">
              {p}
            </p>
          ))}
        </div>

        {/* Right: Partners grid (dark bg) */}
        <div className="bg-[#335264] p-6 flex flex-col items-center justify-center lg:w-11/12">

          <div className="grid grid-cols-1 gap-8 w-full">
            {
              alliancesList.map((alliance, index) => (
                <img src={alliance} alt="Alliance Logo" className={`w-[200px]  ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} key={index} />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
