import { useState, type FormEvent } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <div>
      <h1>Newsletter</h1>
      <p>
        Subscribe to our newsletter to stay updated on the latest investment
        opportunities, market insights, and project updates from United
        Developers.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newsletter-email">Email Address</label>
          <br />
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
