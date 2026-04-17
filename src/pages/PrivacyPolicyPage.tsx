import { privacyPolicyContent } from "../data/siteContent";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <h1>{privacyPolicyContent.title}</h1>
      <p>
        <em>Last updated: {privacyPolicyContent.lastUpdated}</em>
      </p>
      {privacyPolicyContent.content.split("\n\n").map((paragraph, i) => {
        if (
          paragraph === paragraph.trim() &&
          !paragraph.includes(".") &&
          paragraph.length < 80
        ) {
          return <h2 key={i}>{paragraph}</h2>;
        }
        return <p key={i}>{paragraph}</p>;
      })}
    </div>
  );
}
