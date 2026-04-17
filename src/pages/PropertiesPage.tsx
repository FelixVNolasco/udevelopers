import { propertiesContent } from "../data/siteContent";

export default function PropertiesPage() {
  return (
    <div>
      <h1>{propertiesContent.title}</h1>

      {propertiesContent.projects.map((project) => (
        <section key={project.id} id={project.id}>
          <h2>{project.title}</h2>
          <p>
            <strong>Location:</strong> {project.location}
          </p>
          {project.description.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}

          {project.details && (
            <div>
              <h3>Executive Summary</h3>
              <p>{project.details.executiveSummary}</p>

              <h3>Project Specs</h3>
              <ul>
                {project.details.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              <h3>Key Financial Metrics</h3>
              <ul>
                {project.details.financials.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h3>Project Highlights</h3>
              <ul>
                {project.details.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {project.highlights && (
            <div>
              <h3>Property Highlights</h3>
              <ul>
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {"locationAdvantages" in project && project.locationAdvantages && (
            <div>
              <h3>Location Advantages</h3>
              <ul>
                {(project.locationAdvantages as string[]).map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {"amenities" in project && project.amenities && (
            <div>
              <h3>Community Amenities</h3>
              <ul>
                {(project.amenities as string[]).map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {"investmentHighlights" in project &&
            project.investmentHighlights && (
              <div>
                <h3>Key Investment Highlights</h3>
                <ul>
                  {(project.investmentHighlights as string[]).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
        </section>
      ))}
    </div>
  );
}
