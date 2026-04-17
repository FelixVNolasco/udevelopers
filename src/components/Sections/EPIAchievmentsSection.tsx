import { AchievementsSectionInterface } from "@/utils/interfaces";
import CarouselComponent from "../ui/CarouselComponent";
import { CarouselItem } from "../ui/carousel";

export default function EPIAchievmentsSection({
  archievementsSection,
}: {
  archievementsSection: AchievementsSectionInterface;
}) {
  return (
    <div className="grid items-center justify-center justify-items-center gap-6 bg-[#F5F5F5] px-4 py-12 lg:gap-12 lg:px-0 lg:py-24 xl:gap-20">
      <h3 className="text-2xl font-bold lg:max-w-4xl lg:text-4xl">
        {archievementsSection.title}
      </h3>
      <CarouselComponent>
        {archievementsSection.achievements.map((achivement, index) => (
          <CarouselItem className="basis-full lg:basis-1/4" key={index}>
            <div className="grid aspect-square overflow-hidden rounded-2xl bg-[#00B4E9] shadow-md">
              <div className="flex flex-col gap-2 px-6 py-10">
                <h3 className="bg-gradient-to-r bg-clip-text text-left text-8xl text-transparent text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  {achivement.title}
                </h3>
                <p className="text-left text-xl text-white lg:text-base xl:text-lg 2xl:text-xl">
                  {achivement.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselComponent>
    </div>
  );
}
