import { privacyPolicyContent } from "../data/siteContent";
import PageBanner from "../components/PageBanner";

export default function PrivacyPolicyPage() {
  return (
    <div className="mb-16">
      <PageBanner title={privacyPolicyContent.title} />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs text-[#999] mb-6">
          Last updated: {privacyPolicyContent.lastUpdated}
        </p>
        {privacyPolicyContent.content.split("\n\n").map((paragraph, i) => {
          if (
            paragraph === paragraph.trim() &&
            !paragraph.includes(".") &&
            paragraph.length < 80
          ) {
            return (
              <h2
                key={i}
                className="text-lg text-[#335264] font-semibold mt-8 mb-3"
              >
                {paragraph}
              </h2>
            );
          }
          return (
            <p key={i} className="text-sm text-[#555] leading-relaxed mb-4">
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}
