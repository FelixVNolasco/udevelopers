import { EPIFeaturesSectionInterface } from "@/utils/interfaces";
import CarouselComponent from "../ui/CarouselComponent";
import { CarouselItem } from "../ui/carousel";

export default function EPIFeaturesSection({
  archievementsSection,
}: {
  archievementsSection: EPIFeaturesSectionInterface;
}) {
  return (
    <div id="informacion" className="grid items-center justify-center justify-items-center gap-6 bg-[#F5F5F5] px-4 py-12 lg:gap-12 lg:px-0 lg:py-24 xl:gap-20"> 
      <h3 className="text-2xl font-bold text-[#00B4E9] lg:max-w-4xl lg:text-4xl">
        {archievementsSection.title}
      </h3>
      <CarouselComponent>
        {archievementsSection.achievements.map((achivement, index) => (
          <CarouselItem
            className="basis-full lg:basis-1/3 lg:pl-12"
            key={index}
          >
            <div className="">
              <div className="grid aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#00B4E93D] shadow-md">
                <img src={achivement.icon} className="h-44 w-44" />
              </div>
              <div className="flex flex-col gap-6 px-6 py-10 text-center lg:gap-12">
                <h3 className="bg-gradient-to-t from-[#F5F5F5] to-[#D9E0E8] bg-clip-text text-4xl font-bold">
                  {achivement.title}
                </h3>
                <p className="text-base">{achivement.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselComponent>
    </div>
  );
}
