import { propertiesContent } from "../data/siteContent";
import PageBanner from "../components/PageBanner";

export default function PropertiesPage() {
  return (
    <div className="mb-16">
      <PageBanner title={propertiesContent.title} />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        {propertiesContent.projects.map((project) => (
          <section
            key={project.id}
            id={project.id}
            className="border-b border-gray-200 pb-12 last:border-b-0"
          >
            <h2 className="text-xl text-[#335264] font-semibold mb-1">
              {project.title}
            </h2>
            <p className="text-xs text-[#999] uppercase tracking-wider mb-4">
              {project.location}
            </p>
            {project.description.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-sm text-[#555] leading-relaxed mb-2"
              >
                {line}
              </p>
            ))}

            {project.details && (
              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                    Executive Summary
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed">
                    {project.details.executiveSummary}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                    Project Specs
                  </h3>
                  <ul className="space-y-1">
                    {project.details.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-[#555]">
                        - {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                    Key Financial Metrics
                  </h3>
                  <ul className="space-y-1">
                    {project.details.financials.map((f, i) => (
                      <li key={i} className="text-sm text-[#555]">
                        - {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                    Project Highlights
                  </h3>
                  <ul className="space-y-1">
                    {project.details.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-[#555]">
                        - {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {project.highlights && (
              <div className="mt-6">
                <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                  Property Highlights
                </h3>
                <ul className="space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-[#555]">
                      - {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {"locationAdvantages" in project && project.locationAdvantages && (
              <div className="mt-6">
                <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                  Location Advantages
                </h3>
                <ul className="space-y-1">
                  {(project.locationAdvantages as string[]).map((a, i) => (
                    <li key={i} className="text-sm text-[#555]">
                      - {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {"amenities" in project && project.amenities && (
              <div className="mt-6">
                <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                  Community Amenities
                </h3>
                <ul className="space-y-1">
                  {(project.amenities as string[]).map((a, i) => (
                    <li key={i} className="text-sm text-[#555]">
                      - {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {"investmentHighlights" in project &&
              project.investmentHighlights && (
                <div className="mt-6">
                  <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                    Key Investment Highlights
                  </h3>
                  <ul className="space-y-1">
                    {(project.investmentHighlights as string[]).map((h, i) => (
                      <li key={i} className="text-sm text-[#555]">
                        - {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </section>
        ))}
      </div>
    </div>
  );
}
