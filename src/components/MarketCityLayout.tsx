import {
  Plane,
  Landmark,
  GraduationCap,
  TrainFront,
  Ship,
  Stethoscope,
  Fuel,
  Zap,
  Rocket,
  Home,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  plane: <Plane size={48} className="text-[#335264]" />,
  landmark: <Landmark size={48} className="text-[#335264]" />,
  "graduation-cap": <GraduationCap size={48} className="text-[#335264]" />,
  "train-front": <TrainFront size={48} className="text-[#335264]" />,
  ship: <Ship size={48} className="text-[#335264]" />,
  stethoscope: <Stethoscope size={48} className="text-[#335264]" />,
  fuel: <Fuel size={48} className="text-[#335264]" />,
  zap: <Zap size={48} className="text-[#335264]" />,
  rocket: <Rocket size={48} className="text-[#335264]" />,
  home: <Home size={48} className="text-[#335264]" />,
  users: <Users size={48} className="text-[#335264]" />,
};

interface CityData {
  title: string;
  intro: { title: string; description: string };
  internationalTrade: { title: string; description: string };
  offer: { title: string; description: string };
  outlook: {
    title: string;
    cards: { icon: string; title: string; description: string }[];
  };
  mainStatistics: { title: string; stats: string[] };
  economicFocus: {
    title: string;
    description: string;
    stats: { icon: string; label: string; value: string }[];
  };
  cityImage?: string;
}

interface Props {
  data: CityData;
  cityImage?: string;
}

export default function MarketCityLayout({ data, cityImage }: Props) {
  return (
    <div>
      {/* Page header bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-[#335264] text-lg font-bold tracking-wider uppercase">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-[#335264] text-2xl font-light tracking-wider mb-8">
          {data.intro.title}
        </h2>
        {data.intro.description.split("\n\n").map((p, i) => (
          <p key={i} className="text-sm text-[#555] leading-relaxed mb-4">
            {p}
          </p>
        ))}
      </section>

      {/* City Image */}
      {cityImage && (
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <img
            src={cityImage}
            alt={data.title}
            className="w-full h-[350px] object-cover"
          />
        </section>
      )}

      {/* International Trade & Entertainment */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="md:ml-auto md:max-w-xl">
            <h2 className="text-[#335264] text-xl font-bold tracking-wider uppercase mb-6">
              {data.internationalTrade.title}
            </h2>
            <p className="text-sm text-[#555] leading-relaxed">
              {data.internationalTrade.description}
            </p>
          </div>
        </div>
      </section>

      {/* Offer + Outlook */}
      <section className="bg-[#ececec]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {/* Offer - left */}
          <div>
            <h2 className="text-[#335264] text-xl font-bold tracking-wider uppercase mb-6">
              {data.offer.title}
            </h2>
            {data.offer.description.split("\n\n").map((p, i) => (
              <p key={i} className="text-sm text-[#555] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>

          {/* Outlook - right */}
          <div>
            <h2 className="text-[#335264] text-xl font-bold tracking-wider uppercase mb-6">
              {data.outlook.title}
            </h2>
            <div className="border border-[#335264] p-6">
              <div className="grid grid-cols-2 gap-6">
                {data.outlook.cards.map((card) => (
                  <div key={card.title} className="text-center">
                    <div className="flex justify-center mb-3">
                      {iconMap[card.icon] || (
                        <Home size={48} className="text-[#335264]" />
                      )}
                    </div>
                    <h3 className="text-[#335264] text-lg font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#666] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Statistics */}
      <section className="bg-[#335264] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {cityImage && (
              <img
                src={cityImage}
                alt={`${data.title} landscape`}
                className="w-full h-[300px] object-cover"
              />
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-wider uppercase mb-6">
              {data.mainStatistics.title}
            </h2>
            <ul className="space-y-4">
              {data.mainStatistics.stats.map((stat, i) => (
                <li key={i} className="text-sm leading-relaxed text-[#cfdde4]">
                  - {stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Economic Focus */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {/* Left: icons list */}
          <div className="bg-[#f0f0f0] p-10">
            <h2 className="text-[#335264] text-xl font-bold tracking-wider uppercase mb-4">
              {data.economicFocus.title}
            </h2>
            <p className="text-sm text-[#555] mb-8">
              {data.economicFocus.description}
            </p>
            <div className="space-y-8">
              {data.economicFocus.stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    {iconMap[stat.icon] || (
                      <Landmark size={48} className="text-[#335264]" />
                    )}
                  </div>
                  <p className="text-sm text-[#335264] leading-relaxed">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div>
            {cityImage && (
              <img
                src={cityImage}
                alt={`${data.title} aerial`}
                className="w-full h-full object-cover min-h-[400px]"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
