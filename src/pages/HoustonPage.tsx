import { houstonContent } from "../data/siteContent";
import MarketCityLayout from "../components/MarketCityLayout";

export default function HoustonPage() {
  return (
    <MarketCityLayout
      data={houstonContent}
      cityImage="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1200&q=80"
    />
  );
}
