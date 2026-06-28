import { platformStats } from "@/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsBar() {
  return (
    <section className="relative py-20 bg-primary-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent-300 mb-3">
            Zahlen & Fakten
          </span>
          <h2 className="text-display-md font-bold text-white">
            Vertrauen, das sich in Zahlen ausdrückt
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {platformStats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              dark
            />
          ))}
        </div>
      </div>
    </section>
  );
}
