import { ourMarketContent } from "../data/siteContent";

export default function OurMarketPage() {
  return (
    <div>
      <h1>Our Market</h1>

      <section id="coral-gables">
        <h2>{ourMarketContent.coralGables.title}</h2>
        {ourMarketContent.coralGables.description.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section>
        <h2>{ourMarketContent.internationalTrade.title}</h2>
        {ourMarketContent.internationalTrade.description
          .split("\n\n")
          .map((p, i) => (
            <p key={i}>{p}</p>
          ))}
      </section>

      <section id="south-florida">
        <h2>{ourMarketContent.southFloridaOffer.title}</h2>
        {ourMarketContent.southFloridaOffer.description
          .split("\n\n")
          .map((p, i) => (
            <p key={i}>{p}</p>
          ))}
      </section>

      <section>
        <h2>{ourMarketContent.economicFocus.title}</h2>
        <p>{ourMarketContent.economicFocus.description}</p>
        <ul>
          {ourMarketContent.rentalStats.map((stat, i) => (
            <li key={i}>{stat}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
