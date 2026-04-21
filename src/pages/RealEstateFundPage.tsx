import { Link } from "react-router-dom";
import { realEstateFundContent } from "../data/siteContent";
import PageBanner from "../components/PageBanner";

export default function RealEstateFundPage() {
  return (
    <div className="mb-16">
      <PageBanner title={realEstateFundContent.title} />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <section id="real-estate-fund-500" className="mb-12">
          <h2 className="text-xl text-[#335264] font-semibold mb-4">
            {realEstateFundContent.opportunity.title}
          </h2>
          {realEstateFundContent.opportunity.description
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

        <section id="contactus">
          <h2 className="text-xl text-[#335264] font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-sm text-[#555] leading-relaxed">
            For more information about our Real Estate Fund, please{" "}
            <Link to="/contact-us" className="text-[#335264] underline">
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
