import { Link } from "react-router-dom";
import { realEstateFundContent } from "../data/siteContent";

export default function RealEstateFundPage() {
  return (
    <div>
      <h1>{realEstateFundContent.title}</h1>

      <section id="real-estate-fund-500">
        <h2>{realEstateFundContent.opportunity.title}</h2>
        {realEstateFundContent.opportunity.description
          .split("\n\n")
          .map((p, i) => (
            <p key={i}>{p}</p>
          ))}
      </section>

      <section id="contactus">
        <h2>Contact Us</h2>
        <p>
          For more information about our Real Estate Fund, please{" "}
          <Link to="/contact-us">contact us</Link>.
        </p>
      </section>
    </div>
  );
}
