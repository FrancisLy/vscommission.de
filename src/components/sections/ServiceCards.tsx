import { ArrowRight, Store, Users, BarChart3 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: Store,
    title: "Für Werbetreibende",
    description:
      "Erreichen Sie neue Kunden im gesamten DACH-Raum. Wir verbinden Ihre Marke mit den richtigen Publishern und liefern messbare Ergebnisse.",
    features: [
      "Unabhängige Shops & Amazon-Händler",
      "Kampagnen-Management & Optimierung",
      "Betrugsschutz & Transparenz",
      "Detaillierte Echtzeit-Analytics",
    ],
    cta: { label: "Mehr erfahren", href: "/fuer-werbetreibende" },
    color: "accent",
  },
  {
    icon: Users,
    title: "Für Publisher",
    description:
      "Monetarisieren Sie Ihren Traffic mit Top-Marken. Verdienen Sie attraktive Provisionen und profitieren Sie von zuverlässigen Auszahlungen.",
    features: [
      "10+ Publisher-Kategorien",
      "Höchste Provisionen im Markt",
      "Schnelle & zuverlässige Auszahlung",
      "Erweiterte Tracking-Tools",
    ],
    cta: { label: "Publisher werden", href: "/fuer-publisher" },
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Technologie & Plattform",
    description:
      "Unsere proprietäre Technologie sorgt für präzises Tracking, transparente Reports und maximale Performance für alle Beteiligten.",
    features: [
      "Server-to-Server Tracking",
      "Cookieless-Tracking-Lösungen",
      "REST-API & Webhooks",
      "DSGVO-konform & zertifiziert",
    ],
    cta: { label: "Plattform entdecken", href: "/ueber-uns" },
    color: "gold",
  },
];

export function ServiceCards() {
  return (
    <Section className="bg-bg-light">
      <SectionHeader
        eyebrow="Unsere Lösungen"
        title="Alles aus einer Hand für Ihren Erfolg"
        description="Von der Strategie bis zur Umsetzung – VSCommission bietet umfassende Lösungen für Werbetreibende und Publisher im Performance-Marketing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.color === "accent"
                  ? "bg-accent-50 text-accent"
                  : service.color === "primary"
                    ? "bg-primary-50 text-primary"
                    : "bg-gold/10 text-gold-dark"
              }`}
            >
              <service.icon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button to={service.cta.href} variant="ghost" size="sm" className="group-hover:text-accent">
              {service.cta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
