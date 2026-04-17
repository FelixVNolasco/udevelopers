import { CompaniesSectionInterface } from "@/utils/interfaces";
import { Button } from "../ui/button";
import CarouselComponent from "../ui/CarouselComponent";
import { CarouselItem } from "../ui/carousel";
import { NavLink } from "react-router";

export default function CompaniesSecion({
  companiesSection,
}: {
  companiesSection: CompaniesSectionInterface;
}) {
  return (
    <div
      id="companias"
      className="grid gap-1 pb-12 text-2xl font-bold lg:pb-24 lg:text-4xl"
    >
      <h3 className="py-12 text-[#0044C1] lg:py-24">
        {companiesSection.title}
      </h3>

      <div className="min-w-full lg:hidden">
        <CarouselComponent>
          {companiesSection.services.map((company) => (
            <CarouselItem className="max-w-full basis-full" key={company.title}>
              <div className="grid items-center gap-4">
                <div
                  className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl`}
                >
                  <img src={company.logo} className="relative z-20" />
                  <img
                    src={company.image}
                    className="absolute left-0 top-0 z-10 h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-20" />
                </div>
                <div className="flex w-full flex-col">
                  <h3 className="text-left text-xl text-[#0044C1] lg:text-2xl">
                    {company.title}
                  </h3>
                  <p className="h-32 pb-4 text-left text-2xl font-bold lg:text-4xl">
                    {company.subtitle}
                  </p>
                  {company.cta.path !== "/epi" && (
                    <a href={company.cta.path} target="_blank" rel="noreferrer">
                      <Button
                        className="h-14 rounded-full bg-[#2A60C1] text-xl"
                        size={"lg"}
                        variant={"default"}
                      >
                        {company.cta.title}
                      </Button>
                    </a>
                  )}
                  {company.cta.path === "/epi" && (
                    <NavLink to={company.cta.path}>
                      <Button
                        className="h-14 rounded-full bg-[#2A60C1] text-xl"
                        size={"lg"}
                        variant={"default"}
                      >
                        {company.cta.title}
                      </Button>
                    </NavLink>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselComponent>
      </div>

      {companiesSection.services.map((company, index) => (
        <div
          key={company.title}
          className="hidden items-center gap-4 lg:grid lg:grid-cols-2 lg:gap-0"
        >
          <div
            className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            <img src={company.logo} className="relative z-20" />
            <img
              src={company.image}
              className="absolute left-0 top-0 z-10 h-full w-full object-cover object-center"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-20" />
          </div>
          <div
            key={index}
            className={`flex flex-col px-12 ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
          >
            <div className="flex h-full flex-col items-start justify-start gap-2">
              <h3 className="text-left text-2xl text-[#0044C1]">
                {company.title}
              </h3>
              <p className="pb-4 text-left text-4xl font-bold lg:max-w-lg">
                {company.subtitle}
              </p>
              <div
                className="pb-4 text-left text-lg font-normal"
                dangerouslySetInnerHTML={{ __html: company.description }}
              />

              {company.cta.path !== "/epi" && (
                <a href={company.cta.path} target="_blank" rel="noreferrer">
                  <Button
                    className="h-14 rounded-full bg-[#2A60C1] text-xl"
                    size={"lg"}
                    variant={"default"}
                  >
                    {company.cta.title}
                  </Button>
                </a>
              )}
              {company.cta.path === "/epi" && (
                <NavLink to={company.cta.path}>
                  <Button
                    className="h-14 rounded-full bg-[#2A60C1] text-xl"
                    size={"lg"}
                    variant={"default"}
                  >
                    {company.cta.title}
                  </Button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
