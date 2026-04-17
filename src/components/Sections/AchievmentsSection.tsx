import { AchievementsSectionInterface } from "@/utils/interfaces";
import CarouselComponent from "../ui/CarouselComponent";
import { CarouselItem } from "../ui/carousel";

export default function AchievmentsSection({
  archievementsSection,
}: {
  archievementsSection: AchievementsSectionInterface;
}) {
  return (
    <div
      id="mision"
      className="grid items-center justify-center justify-items-center gap-12 bg-[#F5F5F5] px-4 py-12 lg:px-0 lg:py-24"
    >
      <h3 className="text-2xl font-bold lg:max-w-4xl lg:text-4xl">
        {archievementsSection.title}
      </h3>
      <CarouselComponent>
        {archievementsSection.achievements.map((achivement, index) => (
          <CarouselItem className="basis-full lg:basis-1/4" key={index}>
            <div className="grid aspect-square overflow-hidden rounded-2xl bg-[#0044C1] shadow-md">
              <div className="flex flex-col gap-2 px-6 py-14">
                <h3 className="bg-gradient-to-r from-[#B8D1EF] to-[#4188DC] bg-clip-text text-left text-7xl text-transparent">
                  {achivement.title}
                </h3>
                <p className="text-left text-xl text-[#B8D1EF]">
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
