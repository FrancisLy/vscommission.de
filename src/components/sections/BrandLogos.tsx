import { brands } from "@/data/brands";

export function BrandLogos() {
  // Duplicate for seamless marquee
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent-600 mb-2">
            Vertraut von führenden Marken
          </span>
          <h2 className="text-2xl font-bold text-primary">
            Über 500 Marken setzen auf VSCommission
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-12 lg:gap-16 w-max">
          {marqueeBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center min-w-[160px] h-16 group"
            >
              <span
                className="text-2xl lg:text-3xl font-bold font-heading transition-all duration-300 opacity-50 group-hover:opacity-100"
                style={{ color: brand.color }}
              >
                {brand.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
