import SugarPlant from "@/assets/img/bg/sugar-plant-banner9 1.png";

export default function EPIHeroSection() {
  return (
    <section id="inicio" className="flex h-[500px] flex-col items-end bg-gradient-to-b from-[#4188DC] to-[#00B4E9] md:flex-row lg:h-[600px]">
      <div className="h-full md:w-1/2">
        <img
          src={SugarPlant}
          alt="Industrial plant"
          className="h-full w-full object-cover object-center shadow-lg"
        />
      </div>
      <div className="w-full space-y-4 px-4 py-6 text-center text-white md:mt-0 md:w-1/2 md:px-12 md:pl-12 md:text-left lg:space-y-0 lg:py-12">
        <h2 className="text-3xl font-semibold md:text-5xl lg:text-6xl xl:mb-12 xl:text-7xl">
          25 años <br /> de liderazgo
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl"> 
          en México con equipos <br /> instalados en todos <br /> los ingenios del país
        </p>
      </div>
    </section>
  );
}
