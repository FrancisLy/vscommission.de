import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTASection({
  title = "Bereit, Ihr Wachstum zu beschleunigen?",
  description = "Schließen Sie sich über 500 Marken und 12.000 Publishern an, die mit VSCommission erfolgreich im DACH-Raum arbeiten. Starten Sie noch heute.",
  primaryCTA = { label: "Jetzt starten", href: "/fuer-werbetreibende" },
  secondaryCTA = { label: "Demo anfordern", href: "/kontakt" },
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-primary-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent-200">
              Kostenlos beraten lassen
            </span>
          </div>

          <h2 className="text-display-lg lg:text-display-xl font-bold text-white mb-6">
            {title}
          </h2>

          <p className="text-lg lg:text-xl text-primary-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to={primaryCTA.href} size="lg" variant="primary">
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to={secondaryCTA.href} size="lg" variant="white">
              {secondaryCTA.label}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 pt-12 border-t border-primary-800">
            {[
              "Keine Einrichtungsgebühr",
              "Persönliche Beratung",
              "DSGVO-konform",
              "24/7 Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-primary-200">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
