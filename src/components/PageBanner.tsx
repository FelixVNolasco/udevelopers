interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="bg-[#335264] text-white py-20 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-white/80 max-w-lg mx-auto">{subtitle}</p>
      )}
    </section>
  );
}
