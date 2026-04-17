import { miamiContent } from "../data/siteContent";
import MarketCityLayout from "../components/MarketCityLayout";

export default function MiamiPage() {
  return (
    <MarketCityLayout
      data={miamiContent}
      cityImage="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80"
    />
  );
}
