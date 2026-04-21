import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

export default function CookiesPage() {
  return (
    <div className="mb-16">
      <PageBanner title="Cookies Policy" />
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-4">
        <p className="text-sm text-[#555] leading-relaxed">
          Cookies are files with small amount of data, which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          web site and stored on your computer's hard drive.
        </p>
        <p className="text-sm text-[#555] leading-relaxed">
          Like many sites, we use "cookies" to collect information. You can
          instruct your browser to refuse all cookies or to indicate when a
          cookie is being sent. However, if you do not accept cookies, you may
          not be able to use some portions of our Site.
        </p>
        <p className="text-sm text-[#555] leading-relaxed">
          For more details, please refer to our{" "}
          <Link to="/privacy-policy" className="text-[#335264] underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
