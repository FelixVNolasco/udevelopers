import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { propertiesData } from "../data/siteContent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel";

export default function PropertyPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = propertiesData.find((p) => p.slug === slug);

  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  if (!property) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl text-[#335264] font-bold mb-4">
          Property Not Found
        </h1>
        <p className="text-[#555] mb-8">
          The property you are looking for does not exist.
        </p>
        <Link to="/" className="text-[#335264] underline">
          Go back to homepage
        </Link>
      </div>
    );
  }

  const otherProperties = propertiesData.filter((p) => p.slug !== slug);

  return (
    <div className="mb-16">
      {/* Hero Gallery */}
      <section className="relative">
        <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
          <CarouselContent className="ml-0">
            {property.images.map((img, i) => (
              <CarouselItem key={i} className="pl-0">
                <div className="relative h-[55vh] min-h-[400px] md:h-[70vh] bg-[#1a2e3a]">
                  <img
                    src={img}
                    alt={`${property.title} - ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Prev / Next arrows */}
        {count > 1 && (
          <>
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white w-10 h-10 flex items-center justify-center shadow transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} className="text-[#335264]" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white w-10 h-10 flex items-center justify-center shadow transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={22} className="text-[#335264]" />
            </button>
          </>
        )}

        {/* Property title overlay (bottom-right) */}
        <div className="absolute bottom-0 right-0 z-10 bg-[#335264]/95 px-10 py-8 md:px-14 md:py-10 max-w-sm md:max-w-md">
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            {property.title}
          </h1>
        </div>
      </section>

      {/* Two-column layout: Description + Details */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Left: Description */}
        <div>
          <h2 className="text-2xl text-[#335264] font-light tracking-wider mb-8">
            {property.subtitle}
          </h2>
          {property.description.split("\n\n").map((p, i) => (
            <p key={i} className="text-sm text-[#555] leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {property.highlights && (
            <div className="mt-8">
              <h3 className="text-sm text-[#335264] font-semibold mb-3 uppercase tracking-wider">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {property.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#555] flex items-start gap-2"
                  >
                    <span className="text-[#335264] mt-0.5">▪</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: Details card */}
        <div>
          <div className="bg-[#335264] p-10 md:p-12">
            <h2 className="text-white text-3xl font-light mb-8">
              {property.title}
            </h2>
            <div className="space-y-3">
              {Object.entries(property.details).map(([key, value]) => (
                <div key={key}>
                  <span className="text-white/60 text-xs uppercase tracking-wider">
                    {key}:
                  </span>
                  <p className="text-white text-sm mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Properties */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl text-[#335264] font-light tracking-wider mb-10 text-center">
          Other Properties
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {otherProperties.map((p) => (
            <Link
              key={p.slug}
              to={`/properties/${p.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#e5e5e5]">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#335264]/50 flex items-center justify-center">
                    <Plus size={20} className="text-[#335264]" />
                  </div>
                </div>
              </div>
              <h3 className="text-center text-lg text-[#335264] font-semibold mt-4">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
