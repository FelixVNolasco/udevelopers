import { useState, type FormEvent } from "react";
import PageBanner from "../components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="mb-16">
      <PageBanner
        title="Newsletter"
        subtitle="Stay updated on the latest investment opportunities, market insights, and project updates."
      />
      <div className="max-w-md mx-auto px-6 py-16">
        {submitted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Thank you!
            </h3>
            <p className="text-sm text-green-700 mb-4">
              You have been subscribed to our newsletter.
            </p>
            <Button
              variant="outline"
              onClick={() => setSubmitted(false)}
              className="border-green-300 text-green-800 hover:bg-green-100"
            >
              Subscribe another email
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label
              htmlFor="newsletter-email"
              className="text-sm font-medium text-[#335264]"
            >
              Email Address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
            <Button
              type="submit"
              className="w-full bg-[#335264] hover:bg-[#2a4453]"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
