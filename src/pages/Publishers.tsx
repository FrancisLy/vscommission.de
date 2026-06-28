import * as Icons from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { publisherTypes } from "@/data/publisherTypes";
import { brands } from "@/data/brands";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Icons.TrendingUp,
    title: "Höchste Provisionen",
    description:
      "Profitieren Sie von branchenführenden Provisionssätzen von bis zu 30 % und attraktiven Bonussen für Top-Performer.",
  },
  {
    icon: Icons.Zap,
    title: "Schnelle Auszahlung",
    description:
      "Wir zahlen Ihre Provisionen zuverlässig jeden Monat aus – auf Ihr Bankkonto oder per PayPal, ganz wie Sie möchten.",
  },
  {
    icon: Icons.Award,
    title: "Top-Marken",
    description:
      "Werben Sie für über 500 renommierte Marken aus dem DACH-Raum und international – von E-Commerce bis Travel.",
  },
  {
    icon: Icons.BarChart3,
    title: "Erweiterte Tools",
    description:
      "Nutzen Sie unsere leistungsstarken Tools: Deep-Link-Generator, Produktdaten-Feeds, Realtime-Dashboards und mehr.",
  },
  {
    icon: Icons.Headphones,
    title: "Persönlicher Support",
    description:
      "Ein dedizierter Account-Manager begleitet Sie persönlich und hilft Ihnen, Ihre Einnahmen kontinuierlich zu steigern.",
  },
  {
    icon: Icons.Shuffle,
    title: "Flexible Vergütungsmodelle",
    description:
      "Wählen Sie aus CPS, CPA, CPL und CPI – das Modell, das am besten zu Ihrem Traffic und Ihrer Zielgruppe passt.",
  },
];

const commissionModels = [
  {
    acronym: "CPS",
    name: "Cost per Sale",
    description:
      "Verdienen Sie einen prozentualen Anteil an jedem vermittelten Verkauf. Ideal für E-Commerce- und Shopping-Traffic.",
    range: "3 % – 30 %",
    example: "z. B. Fashion, Elektronik, Beauty",
  },
  {
    acronym: "CPA",
    name: "Cost per Action",
    description:
      "Provision für eine definierte Aktion wie eine Anmeldung, einen Download oder eine Buchungsanfrage.",
    range: "5 € – 120 €",
    example: "z. B. Finance, Versicherungen, Leads",
  },
  {
    acronym: "CPL",
    name: "Cost per Lead",
    description:
      "Vergütung für jeden qualifizierten Lead – perfekt für Portale mit beratungsintensiven Angeboten.",
    range: "2 € – 80 €",
    example: "z. B. B2B, Dienstleistungen, Immobilien",
  },
  {
    acronym: "CPI",
    name: "Cost per Install",
    description:
      "Verdienst pro erfolgreicher App-Installation. Optimal für Mobile-Publisher und App-Empfehlungsportale.",
    range: "0,50 € – 15 €",
    example: "z. B. Mobile Apps, Gaming, SaaS",
  },
];

export default function Publishers() {
  const featuredTypes = publisherTypes.slice(0, 6);

  return (
    <>
      <Seo
        title="Für Publisher | VSCommission Affiliate Marketing"
        description="Monetarisieren Sie Ihren Traffic mit den besten Marken im DACH-Raum. Höchste Provisionen, schnelle Auszahlung und leistungsstarke Tools für Publisher."
        keywords="Affiliate Marketing für Publisher, Geld verdienen mit Website, Provisionen Publisher, Affiliate Netzwerk DACH"
        path="/fuer-publisher"
      />

      <PageHero
        eyebrow="Für Publisher"
        title={
          <>
            Monetarisieren Sie Ihren{" "}
            <span className="text-gradient">Traffic</span>
          </>
        }
        description="Verwandeln Sie Ihre Reichweite in nachhaltige Einnahmen. Werben Sie für über 500 Top-Marken und profitieren Sie von höchsten Provisionen, zuverlässiger Auszahlung und persönlichem Support."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/fuer-publisher/registrierung" size="lg" variant="primary">
            Jetzt registrieren
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/fuer-publisher/typen" size="lg" variant="outline">
            Publisher-Typen ansehen
          </Button>
        </div>
      </PageHero>

      {/* Benefits */}
      <Section>
        <SectionHeader
          eyebrow="Ihre Vorteile"
          title="Warum Publisher VSCommission wählen"
          description="Über 12.000 aktive Publisher vertrauen auf unser Netzwerk. Wir bieten Ihnen alles, was Sie für nachhaltigen Erfolg brauchen – an einem Ort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="animate-fade-in-up">
              <div
                className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 font-heading">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Commission Models */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Vergütungsmodelle"
          title="Vier Wege, um zu verdienen"
          description="Wählen Sie das Vergütungsmodell, das am besten zu Ihrem Traffic passt. Mischen Sie verschiedene Modelle für maximale Einnahmen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commissionModels.map((model, index) => (
            <Card key={model.acronym} className="flex gap-5 animate-fade-in-up">
              <div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white flex-shrink-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-lg font-bold font-heading">{model.acronym}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-primary font-heading">
                    {model.name}
                  </h3>
                  <Badge variant="accent">{model.range}</Badge>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {model.description}
                </p>
                <p className="text-xs text-slate-500">{model.example}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Publisher Types Preview */}
      <Section>
        <SectionHeader
          eyebrow="Publisher-Typen"
          title="Für jeden Kanal die passende Lösung"
          description="Unabhängig von Ihrem Kanal – bei uns finden Sie die richtigen Programme. Hier ein Auszug aus unseren zehn Publisher-Kategorien."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredTypes.map((type, index) => {
            const Icon =
              (Icons[type.icon as keyof typeof Icons] as Icons.LucideIcon) ||
              Icons.Circle;
            return (
              <div
                key={type.id}
                className="group bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-accent-600 transition-all">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-primary mb-2 text-base font-heading">
                  {type.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">Ø Provision</div>
                  <div className="text-sm font-bold text-accent">
                    {type.avgCommission}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button to="/fuer-publisher/typen" size="lg" variant="secondary">
            Alle 10 Publisher-Typen entdecken
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      {/* Top Brands */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Top-Marken"
          title="Werben Sie für bekannte Marken"
          description="Von Europcar über MediaMarkt bis hin zu SHEIN – vermarkten Sie die stärksten Brands im DACH-Raum und international."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.slice(0, 8).map((brand, index) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span
                className="text-xl lg:text-2xl font-bold font-heading mb-2"
                style={{ color: brand.color }}
              >
                {brand.logo}
              </span>
              <span className="text-xs text-slate-500">{brand.category}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button to="/marken-programme" size="lg" variant="outline">
            Alle Marken ansehen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      <CTASection
        title="Werden Sie Teil unseres Netzwerks"
        description="Schließen Sie sich über 12.000 Publishern an, die mit VSCommission erfolgreich Geld verdienen. Die Registrierung ist kostenlos – starten Sie noch heute."
        primaryCTA={{ label: "Kostenlos registrieren", href: "/fuer-publisher/registrierung" }}
        secondaryCTA={{ label: "Publisher-Typen ansehen", href: "/fuer-publisher/typen" }}
      />
    </>
  );
}
