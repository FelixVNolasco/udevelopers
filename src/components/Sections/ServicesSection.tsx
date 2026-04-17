import { services } from "@/utils/data";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { NavLink } from "react-router";
import CarouselComponent from "../ui/CarouselComponent";
import { CarouselItem } from "../ui/carousel";

export default function ServicesSection() {
  return (
    <div id="servicios" className="grid items-center justify-center gap-6 py-20 lg:gap-16 xl:gap-20">
      <h3 className="text-center text-2xl font-bold text-[#00B4E9] lg:text-4xl">
        Equipos y servicios de proceso e ingeniería
      </h3>

      <div className="min-w-full lg:hidden">
        <CarouselComponent>
          {services.map((service, index) => (
            <CarouselItem className="max-w-full basis-full" key={index}>
              <NavLink key={index} to={`/servicios/${service.slug}`}>
                <Card className="bg-[#F5F5F5] lg:basis-1/3">
                  <img
                    src={service.image}
                    className="h-64 w-full object-cover object-center"
                  />
                  <CardHeader>
                    <CardTitle className="max-w-xs text-xl font-medium leading-normal text-[#00B4E9] lg:text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </NavLink>
            </CarouselItem>
          ))}
        </CarouselComponent>
      </div>

      <div className="hidden gap-4 lg:grid lg:grid-cols-3">
        {services.map((service) => (
          <NavLink key={service.slug} to={`/servicios/${service.slug}`}>
            <Card className="bg-[#F5F5F5]">
              <img
                src={service.image}
                className="h-64 w-full object-cover object-center"
              />
              <CardHeader>
                <CardTitle className="max-w-xs text-2xl font-medium leading-normal text-[#00B4E9]">
                  {service.title}
                </CardTitle>
              </CardHeader>
            </Card>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
