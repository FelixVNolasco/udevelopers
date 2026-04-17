import { homeContent } from "../data/siteContent";

const partners = [
  "CDMX HOMES",
  "ENGEL & VÖLKERS",
  "T.A. BUILDERS",
  "Bellin & Pratt Architects, LLC",
  "Marcus & Millichap",
  "LGC BUILDERS",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-[#335264] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-wider uppercase leading-tight">
            VALUE CREATION FROM
            <br />
            REAL ESTATE DEVELOPMENT
          </h1>
        </div>
        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* About + Team Section */}
      <section className="grid md:grid-cols-2" id="real-estate">
        {/* Left: About (dark teal) */}
        <div className="bg-[#335264] text-white p-12 md:p-16">
          <div className="text-7xl font-light text-[#8eaab8] leading-none mb-12 tracking-wider">
            DD
          </div>
          {homeContent.about.description.split("\n\n").map((p, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 text-[#cfdde4]">
              {p}
            </p>
          ))}
        </div>

        {/* Right: Team (light gray) */}
        <div className="bg-[#d9d9d9] p-12 md:p-16">
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
      </section>

      {/* Advisors / Alliances Section */}
      <section className="grid md:grid-cols-2" id="advisors-alliances">
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
        <div className="bg-[#d9d9d9] p-12 md:p-16 flex flex-col items-center justify-center">
          <div className="bg-[#335264] w-full p-4 mb-6" />
          <div className="grid grid-cols-2 gap-8 w-full">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center text-center"
              >
                <p className="text-[#335264] font-semibold text-sm tracking-wide">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
