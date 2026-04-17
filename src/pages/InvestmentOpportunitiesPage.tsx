import { investmentOpportunitiesContent } from "../data/siteContent";

export default function InvestmentOpportunitiesPage() {
  return (
    <div>
      <h1>{investmentOpportunitiesContent.title}</h1>

      {investmentOpportunitiesContent.projects.map((project) => (
        <section key={project.title} id={project.title.toLowerCase().replace(/\s+/g, "-")}>
          <h2>{project.title}</h2>
          {project.description.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}

      <section>
        <h2>Investment Timeline</h2>
        <ol>
          {investmentOpportunitiesContent.timeline.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section id="land-inventory">
        <h2>{investmentOpportunitiesContent.landInventory.title}</h2>
        <p>{investmentOpportunitiesContent.landInventory.description}</p>
      </section>
    </div>
  );
}
