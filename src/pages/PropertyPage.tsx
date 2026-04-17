import { useParams, Link } from "react-router-dom";
import { propertiesData } from "../data/siteContent";

export default function PropertyPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = propertiesData.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl text-[#335264] font-bold mb-4">
          Property Not Found
        </h1>
        <p className="text-[#555] mb-8">
          The property you are looking for does not exist.
        </p>
        <Link to="/" className="text-[#335264] underline">
          Go back to homepage
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Page header bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-[#335264] text-lg font-bold tracking-wider uppercase">
            {property.title}
          </h1>
        </div>
      </div>

      {/* Two-column layout */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Left: Description */}
        <div>
          <h2 className="text-2xl text-[#335264] font-light tracking-wider mb-8">
            {property.subtitle}
          </h2>
          {property.description.split("\n\n").map((p, i) => (
            <p key={i} className="text-sm text-[#555] leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {property.highlights && (
            <div className="mt-8">
              <h3 className="text-sm text-[#335264] font-semibold mb-3 uppercase tracking-wider">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {property.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-[#555] flex items-start gap-2">
                    <span className="text-[#335264] mt-0.5">▪</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: Details card */}
        <div>
          <div className="bg-[#335264] p-10 md:p-12">
            <h2 className="text-white text-3xl font-light mb-8">
              {property.title}
            </h2>
            <div className="space-y-3">
              {Object.entries(property.details).map(([key, value]) => (
                <div key={key}>
                  <span className="text-white/60 text-xs uppercase tracking-wider">
                    {key}:
                  </span>
                  <p className="text-white text-sm mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
