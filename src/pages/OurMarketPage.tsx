import { ourMarketContent } from "../data/siteContent";
import PageBanner from "../components/PageBanner";

export default function OurMarketPage() {
  return (
    <div className="mb-16">
      <PageBanner title="Our Market" />

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        <section id="coral-gables">
          <h2 className="text-xl text-[#335264] font-semibold mb-4">
            {ourMarketContent.coralGables.title}
          </h2>
          {ourMarketContent.coralGables.description
            .split("\n\n")
            .map((p, i) => (
              <p
                key={i}
                className="text-sm text-[#555] leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
        </section>

        <section>
          <h2 className="text-xl text-[#335264] font-semibold mb-4">
            {ourMarketContent.internationalTrade.title}
          </h2>
          {ourMarketContent.internationalTrade.description
            .split("\n\n")
            .map((p, i) => (
              <p
                key={i}
                className="text-sm text-[#555] leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
        </section>

        <section id="south-florida">
          <h2 className="text-xl text-[#335264] font-semibold mb-4">
            {ourMarketContent.southFloridaOffer.title}
          </h2>
          {ourMarketContent.southFloridaOffer.description
            .split("\n\n")
            .map((p, i) => (
              <p
                key={i}
                className="text-sm text-[#555] leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
        </section>

        <section>
          <h2 className="text-xl text-[#335264] font-semibold mb-4">
            {ourMarketContent.economicFocus.title}
          </h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            {ourMarketContent.economicFocus.description}
          </p>
          <ul className="space-y-2">
            {ourMarketContent.rentalStats.map((stat, i) => (
              <li key={i} className="text-sm text-[#335264]">
                - {stat}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
