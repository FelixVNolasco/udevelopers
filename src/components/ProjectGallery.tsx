import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length]
  );

  const next = useCallback(
    () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length]
  );

  if (images.length === 0) {
    return (
      <div className="w-full aspect-[16/10] bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-sm italic">
          Images coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900">
      <img
        src={images[current]}
        alt={`${title} - ${current + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 flex items-center justify-center transition"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 flex items-center justify-center transition"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
