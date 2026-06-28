import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/data/cases";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Clock,
  Award,
  Layers,
} from "lucide-react";

// Aggregate stats derived from the network – highlights above the case cards
const aggregateStats = [
  {
    icon: TrendingUp,
    value: "Ø 1:7",
    label: "Durchschnittlicher ROI",
    description: "Über alle betreuten Kampagnen im DACH-Raum.",
  },
  {
    icon: Users,
    value: "500+",
    label: "Betreute Marken",
    description: "Von aufstrebenden Start-ups bis hin zu Konzernen.",
  },
  {
    icon: Target,
    value: "12.000+",
    label: "Aktive Publisher",
    description: "In unserem branchenübergreifenden Netzwerk.",
  },
  {
    icon: Award,
    value: "+150%",
    label: "Ø Umsatzwachstum",
    description: "Im Durchschnitt innerhalb der ersten sechs Monate.",
  },
];

// Gradient variation per case card header
const headerGradients = [
  "from-primary via-primary-700 to-accent-700",
  "from-accent-600 via-accent to-primary-500",
  "from-primary-500 via-accent-700 to-primary-800",
];

export default function CaseStudiesPage() {
  return (
    <>
      <Seo
        title="Case Studies | VSCommission Affiliate Marketing"
        description="Erfolgsgeschichten unserer Partner: messbare Ergebnisse, angewandte Strategien und bewährte Publisher-Kombinationen aus dem DACH-Affiliate-Markt."
        keywords="Affiliate Case Studies, Affiliate Erfolgsgeschichten, DACH Affiliate Ergebnisse, ROI Affiliate Marketing"
        path="/case-studies"
      />

      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Erfolgsgeschichten{" "}
            <span className="text-gradient">unserer Partner</span>
          </>
        }
        description="Konkrete Ergebnisse statt leere Versprechen: Lesen Sie, wie Marken mit VSCommission messbares Wachstum im DACH-Raum erzielt haben – mit realen Kennzahlen, angewandten Strategien und den passenden Publisher-Kombinationen."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/kontakt" size="lg" variant="primary">
            Eigene Case Study starten
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/ressourcen" size="lg" variant="outline">
            Mehr Ressourcen
          </Button>
        </div>
      </PageHero>

      {/* Results Highlights */}
      <Section>
        <SectionHeader
          eyebrow="Ergebnisse in Zahlen"
          title="Was unsere Partner gemeinsam erreichen"
          description="Ein Überblick über die Performance, die Marken im VSCommission-Netzwerk im Durchschnitt erzielen – transparent und messbar."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aggregateStats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center animate-fade-in-up"
            >
              <div
                className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mx-auto mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-primary font-heading mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-primary mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Aus der Praxis"
          title="Detaillierte Erfolgsgeschichten"
          description="Jede Case Study zeigt die Ausgangslage, die eingesetzten Publisher-Typen und die konkret erzielten Ergebnisse – zum direkten Nachvollziehen."
        />

        <div className="space-y-6 lg:space-y-8">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className="!p-0 overflow-hidden animate-fade-in-up"
            >
              <div
                className="flex flex-col lg:flex-row"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Brand Header */}
                <div
                  className={
                    "lg:w-2/5 relative bg-gradient-to-br p-8 lg:p-10 flex flex-col justify-between text-white " +
                    headerGradients[index % headerGradients.length]
                  }
                >
                  <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
                  <div className="relative z-10">
                    <Badge variant="accent" className="!bg-white/20 !text-white">
                      {study.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold font-heading mt-5 mb-3 leading-tight">
                      {study.brand}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {study.title}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 mt-8 text-white/90 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    Kampagnendauer: {study.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-10">
                  <h4 className="text-lg font-bold text-primary font-heading mb-3">
                    Über die Kampagne
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-7">
                    {study.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="mb-7">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                      Erreichte Ergebnisse
                    </h5>
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="text-center p-4 rounded-xl bg-bg-light border border-slate-100"
                        >
                          <div className="text-2xl font-bold text-accent font-heading mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-600 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Publisher Types */}
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      Eingesetzte Publisher-Typen
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {study.publisherTypes.map((type) => (
                        <Badge key={type} variant="accent">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Button to="/kontakt" variant="outline" size="sm">
                      Ähnliche Kampagne planen
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Bereit für Ihre eigene Erfolgsgeschichte?"
        description="Lassen Sie uns gemeinsam Ihre nächste Kampagne planen. Unser Team analysiert Ihr Potenzial und entwickelt eine maßgeschneiderte Affiliate-Strategie für den DACH-Raum."
        primaryCTA={{ label: "Kostenlose Beratung", href: "/kontakt" }}
        secondaryCTA={{ label: "Für Werbetreibende", href: "/fuer-werbetreibende" }}
      />
    </>
  );
}
