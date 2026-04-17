import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { services } from "@/utils/data";
// import { useCarrouselModalStore } from "@/stores/CarrouselmodalStore";
import {
  CarrouselOfExternalLinksInterface,
  // CarrouselOfExternalLinksInterface,
  ServiceInterface,
} from "@/utils/interfaces";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ServiceFooterLinksSection from "../Sections/ServiceFooterLinksSection";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useCarrouselModalStore } from "@/stores/carrousel-modal-store";

export default function ServicePage() {
  const carrouselModalStore = useCarrouselModalStore();

  const { sid } = useParams();

  const [currentService, setCurrentService] = useState<ServiceInterface | null>(
    null
  );

  const getData = () => {
    const service = services.filter(
      (service: ServiceInterface) => service.slug === sid
    );

    setCurrentService(service[0]);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  if (!sid) return <div>No se encontró la página</div>;

  if (!currentService) return <div>No se encontró la página</div>;

  return (
    <main className="py-12">
      <div className="grid gap-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center gap-2">
            <h1 className="text-left text-4xl font-bold leading-relaxed">
              {currentService.title}
            </h1>
          </div>

          <div className="flex flex-col items-center justify-end gap-4 lg:flex-row">
            {currentService.partnerLogo && (
              <a
                href={currentService.parternExternalLink}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-125"
              >
                <img src={currentService.partnerLogo} />
              </a>
            )}
            <div className="flex gap-4 py-4">
              <NavLink
                to={`/servicios/${currentService.previousLink}`}
                className={
                  "overflow-hidden rounded-full bg-[#F5F5F5] shadow-md"
                }
              >
                <ChevronLeft className="h-8 w-8 text-[#04375E]" />
              </NavLink>
              <NavLink
                to={`/servicios/${currentService.nextLink}`}
                className={
                  "overflow-hidden rounded-full bg-[#F5F5F5] shadow-md"
                }
              >
                <ChevronRight className="h-8 w-8 text-[#04375E]" />
              </NavLink>
            </div>
          </div>
        </div>

        {currentService.description && (
          <p className="max-w-2xl pb-4 text-left text-base font-normal lg:text-lg">
            {currentService.description}
          </p>
        )}

        <div className="grid gap-4 lg:grid-cols-3">
          {currentService.products &&
            currentService.products.map((product, index) => (
              <Card
                className="flex h-full flex-col justify-between border-none shadow-none"
                key={index}
              >
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={product.image}
                      className="h-96 w-full rounded-2xl object-cover object-center"
                    />
                    {product.buttonExternalLink &&
                      !product.carrouselOfExternalLinks && (
                        <a
                          href={product.buttonExternalLink}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-0 left-0 z-10 m-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3EB0F2] shadow-md"
                        >
                          <Plus className="h-8 w-8" />
                        </a>
                      )}
                    {product.carrouselOfExternalLinks &&
                      !product.buttonExternalLink && (
                        <div
                          onClick={() =>
                            carrouselModalStore.openModal(
                              product.carrouselOfExternalLinks as CarrouselOfExternalLinksInterface[]
                            )
                          }
                          className="absolute bottom-0 left-0 z-10 m-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-[#3EB0F2] shadow-md"
                        >
                          <Plus className="h-8 w-8" />
                        </div>
                      )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-left text-3xl font-medium text-[#3EB0F2] lg:h-32">
                      {product.title}
                    </CardTitle>
                    <CardDescription
                      dangerouslySetInnerHTML={{ __html: product.description }}
                      className="text-left text-sm leading-tight text-black"
                    ></CardDescription>
                  </CardHeader>
                </div>

                {product.cta && (
                  <CardFooter>
                    <a
                      className="border-b border-b-[#00B4E9] font-bold text-[#00B4E9]"
                      href={product.cta.externalLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.cta.title}
                    </a>
                  </CardFooter>
                )}
              </Card>
            ))}
        </div>

        {/* {currentService.additionalExternalLink && (
          <a
            href={currentService.additionalExternalLink}
            target="_blank"
            rel="noreferrer"
            className="w-fit border-b border-b-[#00B4E9] font-bold text-[#00B4E9]"
          >
            Solicita cotización
          </a>
        )} */}

        {currentService.footerLinks && (
          <ServiceFooterLinksSection links={currentService.footerLinks} />
        )}
      </div>
    </main>
  );
}
