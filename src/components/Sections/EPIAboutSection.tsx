import thisisengineering from "@/assets/img/bg/thisisengineering-zIL_CiC-bT0-unsplash 1.png";

export default function EPIAboutSection() {
  return (
    <section id="nosotros" className="flex flex-col items-center bg-white px-4 py-12 md:flex-row md:px-12 lg:px-24">
      <div className="md:w-1/2">
        <img
          src={thisisengineering}
          alt="Engineer reviewing plans"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-8 text-center text-black md:mt-0 md:w-1/2 md:pl-12 md:text-left">
        <h2 className="mb-6 text-3xl font-bold text-[#00B4E9] md:text-4xl lg:mb-12">
          ¿Quienes somos?
        </h2>
        <p className="mb-4 text-lg">
          Fundada en 1999 por ingenieros mexicanos entrenados en Alemania, EPI
          tiene como objetivo principal satisfacer las necesidades de la
          industria azucarera mexicana, ofreciendo equipos, ingeniería y
          servicios de alta calidad con la tecnología más avanzada a nivel
          mundial.
        </p>
        <p className="text-lg">
          Nos hemos esmerado en servicio y atención personalizada a clientes en
          visitas a los ingenios y sus corporativos. Adicional a los equipos de
          proceso, se cuenta con representaciones para suministro de Plantas
          Azucareras Llave en Mano (EPC), Refinerías de Azúcar y Plantas de
          Alcohol; así como de máquinas de empaque de azúcar, equipos de
          laboratorio, transportadores, silos e ingeniería de almacenamiento y
          transporte.
        </p>
      </div>
    </section>
  );
}
