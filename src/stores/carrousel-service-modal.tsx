import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ShrijeeLogo from "@/assets/img/logo/Shrijee Group Logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarrouselModalStore } from "./carrousel-modal-store";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";

export const CarouselServiceModal = () => {
  const selectedServiceCarrousel = useCarrouselModalStore(
    (state) => state.selectedServiceCarrousel
  );
  const isOpen = useCarrouselModalStore((state) => state.isOpen);
  const onClose = useCarrouselModalStore((state) => state.closeModal);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl overflow-hidden">
        <DialogHeader>
          <div className="flex w-full max-w-fit flex-col justify-between gap-4 lg:flex-row lg:items-center">
            {selectedServiceCarrousel && (
              <DialogTitle>Equipamiento Completo para Ingenios</DialogTitle>
            )}
            {selectedServiceCarrousel && (
              <DialogDescription>
                {selectedServiceCarrousel[0].description}
              </DialogDescription>
            )}
            <img src={ShrijeeLogo} width={160} />
          </div>
        </DialogHeader>

        {selectedServiceCarrousel && (
          <Carousel className="relative w-full min-w-0">
            <CarouselContent className="basis-1/2">
              {selectedServiceCarrousel?.map((item) => (
                <CarouselItem
                  key={item.title}
                  className="md:basis-1/2 lg:basis-1/2"
                >
                  <Card>
                    <img
                      src={item.image}
                      className="h-64 w-full object-scale-down object-center"
                      alt={item.title}
                    />
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                      <a
                        href={item.externalLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className="w-full">Ver Folleto</Button>
                      </a>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-0" />
            <CarouselNext className="-right-0" />
          </Carousel>
        )}
      </DialogContent>
    </Dialog>
  );
};
