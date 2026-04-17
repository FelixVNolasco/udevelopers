import { mexicoCityContent } from "../data/siteContent";
import MarketCityLayout from "../components/MarketCityLayout";

export default function MexicoCityPage() {
  return (
    <MarketCityLayout
      data={mexicoCityContent}
      cityImage="https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1200&q=80"
    />
  );
}
