import { propertiesContent } from "../data/siteContent";
import PageBanner from "../components/PageBanner";
import ProjectGallery from "../components/ProjectGallery";

function DetailSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-[#555] flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-[#335264] rounded-full shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <div className="mb-16">
      <PageBanner title={propertiesContent.title} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-24">
        {propertiesContent.projects.map((project) => (
          <section key={project.id} id={project.id}>
            {/* Gallery + Info overlay */}
            <div className="relative">
              <ProjectGallery
                images={project.images}
                title={project.title}
              />

              {/* Teal info overlay */}
              <div className="relative md:absolute md:bottom-0 md:right-0 md:w-[58%] bg-[#335264] text-white p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold italic mb-4">
                  {project.title}
                </h2>
                <p className="text-xs uppercase tracking-widest text-white/70 mb-3">
                  {project.location}
                </p>
                <div className="text-sm leading-relaxed space-y-1.5">
                  {project.description
                    .split("\n")
                    .filter(Boolean)
                    .map((line, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-white shrink-0" />
                        <span>{line}</span>
                      </p>
                    ))}
                </div>
              </div>
            </div>

            {/* Additional details below gallery */}
            <div className="mt-8 max-w-4xl space-y-6">
              {project.details && (
                <>
                  <div>
                    <h3 className="text-sm text-[#335264] font-semibold uppercase tracking-wider mb-2">
                      Executive Summary
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      {project.details.executiveSummary}
                    </p>
                  </div>
                  <DetailSection
                    title="Project Specs"
                    items={project.details.specs}
                  />
                  <DetailSection
                    title="Key Financial Metrics"
                    items={project.details.financials}
                  />
                  <DetailSection
                    title="Project Highlights"
                    items={project.details.highlights}
                  />
                </>
              )}

              {project.highlights && (
                <DetailSection
                  title="Property Highlights"
                  items={project.highlights}
                />
              )}

              {"locationAdvantages" in project &&
                project.locationAdvantages && (
                  <DetailSection
                    title="Location Advantages"
                    items={project.locationAdvantages as string[]}
                  />
                )}

              {"amenities" in project && project.amenities && (
                <DetailSection
                  title="Community Amenities"
                  items={project.amenities as string[]}
                />
              )}

              {"investmentHighlights" in project &&
                project.investmentHighlights && (
                  <DetailSection
                    title="Key Investment Highlights"
                    items={project.investmentHighlights as string[]}
                  />
                )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
