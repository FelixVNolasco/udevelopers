import ASRLOGO from "@/assets/img/brand/asr-logo.png";
import GAMSA from "@/assets/img/brand/gamsa.png";
import INGENIOCARMEN from "@/assets/img/brand/Ingenio el Carmen.png";
import INGENIOMOLINIO from "@/assets/img/brand/ingenio_el_molino.png";
import INGENIOSANTOS from "@/assets/img/brand/logo-ct-ingeniossantos.png";
import GAT from "@/assets/img/brand/logoGAT.png";
import PANTALEON from "@/assets/img/brand/Logo-Pantaleon.png";
import ZORONGO from "@/assets/img/brand/MOTZORONGO 1.png";
import PIASA from "@/assets/img/brand/piasa.png";
import PORRES from "@/assets/img/brand/porres.png";
import ZUCARMEX from "@/assets/img/brand/zucarmex.png";
import CarouselComponent from "../ui/CarouselComponent";
import { CarouselItem } from "../ui/carousel";

export default function OurClientsSection() {
  const clients = [
    {
      title: "Ingenio el Carmen",
      image: INGENIOCARMEN,
    },
    {
      title: "PIASA",
      image: PIASA,
    },
    {
      title: "ZUCARMEX",
      image: ZUCARMEX,
    },
    {
      title: "Pantaleón",
      image: PANTALEON,
    },
    {
      title: "ASR",
      image: ASRLOGO,
    },
    {
      title: "Ingenio Santos",
      image: INGENIOSANTOS,
    },
    {
      title: "GAMSA",
      image: GAMSA,
    },
    {
      title: "GAT",
      image: GAT,
    },
    {
      title: "PORRES",
      image: PORRES,
    },
    {
      title: "MOTZORONGO",
      image: ZORONGO,
    },
    {
      title: "Ingenio el Molinio",
      image: INGENIOMOLINIO,
    },
  ];
  return (
    <div id="clientes" className="grid items-center gap-6 lg:gap-12">
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-12">
        <h2 className="max-w-xl text-left text-2xl font-bold text-[#3EB0F2] lg:text-4xl">
          Algunos de nuestros clientes
        </h2>

        <div className="lg:hidden">
          <CarouselComponent>
            {clients.map((client) => (
              <CarouselItem
                key={client.title}
                className="flex items-center justify-center"
              >
                <img src={client.image} className="" />
              </CarouselItem>
            ))}
          </CarouselComponent>
        </div>

        <div className="hidden items-center justify-center gap-4 lg:grid lg:grid-cols-5">
          {clients.map((client) => (
            <img key={client.title} src={client.image} className="" />
          ))}
        </div>
      </div>
    </div>
  );
}
