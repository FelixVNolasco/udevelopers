import { miamiContent } from "../data/siteContent";
import second from '../../public/images/miami/miami-3.jpg'
import MiamiPageLayout from "@/components/MiamiPageLayout";

export default function MiamiPage() {
  return (
    <MiamiPageLayout
      data={miamiContent}
      cityImage={second}
    />
  );
}
