import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import {
  Target,
  LineChart,
  Palette,
  Users,
  FileBarChart,
  ShieldCheck,
  Check,
  ArrowRight,
  Rocket,
  Briefcase,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Kampagnen-Management",
    description:
      "Strategische Planung und operative Durchführung Ihrer Affiliate-Kampagnen. Wir definieren klare Ziele, steuern Provisionen und sorgen für eine optimale Auslastung Ihres Budgets.",
    features: ["Kampagnen-Setup & -Steuerung", "Provisions-Strategien", "Saisonale Aktionen"],
  },
  {
    icon: LineChart,
    title: "Tracking & Attribution",
    description:
      "Zuverlässige Erfassung jeder Conversion dank Server-to-Server-Tracking und Multi-Touch-Attribution. So wissen Sie genau, welcher Publisher welchen Beitrag leistet.",
    features: ["S2S- & Cookieless-Tracking", "Multi-Touch-Attribution", "Plattform-Übergreifende Erfassung"],
  },
  {
    icon: Palette,
    title: "Creative Services",
    description:
      "Professionelle Werbemittel, die konvertieren: Banner, Textlinks, Produktdaten-Feeds und individuelle Kreativanpassungen für jede Publisher-Kategorie.",
    features: ["Banner & HTML5-Kreativen", "Produktdaten-Feeds", "Individuelle Werbemittel"],
  },
  {
    icon: Users,
    title: "Publisher-Management",
    description:
      "Aktive Rekrutierung, Betreuung und Qualitätssicherung der passenden Publisher. Wir pflegen langfristige Beziehungen zu Ihren wichtigsten Vermittlern.",
    features: ["Gezielte Publisher-Ansprache", "Onboarding & Schulung", "Performance-Coaching"],
  },
  {
    icon: FileBarChart,
    title: "Analytics & Reporting",
    description:
      "Transparente Dashboards und individuelle Reports mit allen relevanten KPIs. Treffen Sie datenbasierte Entscheidungen und optimieren Sie kontinuierlich.",
    features: ["Echtzeit-Dashboards", "Individuelle Reports", "ROI- & ROAS-Analysen"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Fraud Protection",
    description:
      "KI-gestützte Betrugserkennung und vollständige DSGVO-Konformität schützen Ihre Marke, Ihr Budget und Ihre Kundendaten – rund um die Uhr.",
    features: ["KI-Betrugserkennung", "DSGVO-konforme Prozesse", "Markenschutz & Brand Safety"],
  },
];

const tiers = [
  {
    icon: Rocket,
    name: "Starter",
    description:
      "Der ideale Einstieg für Marken, die Affiliate-Marketing erstmals aufbauen und schnell erste Ergebnisse erzielen möchten.",
    price: "Basis-Paket",
    features: [
      "Bis zu 50 aktive Publisher", "Standard-Tracking & Reporting",
      "Basis-Werbemittel & Feeds", "E-Mail-Support", "Onboarding-Workshop",
    ],
    cta: "Jetzt starten",
    highlight: false,
  },
  {
    icon: Briefcase,
    name: "Professional",
    description:
      "Für wachsende Marken, die ihr Affiliate-Programm professionell skalieren und von erweiterten Funktionen profitieren möchten.",
    price: "Beliebteste Wahl",
    features: [
      "Unbegrenzte Publisher-Anzahl", "Erweitertes S2S- & Cookieless-Tracking",
      "Individuelle Werbemittel & Kreativen", "Dedizierter Account-Manager",
      "Monatliche Strategie-Calls", "Premium-Analytics & Dashboards",
    ],
    cta: "Beratung anfragen",
    highlight: true,
  },
  {
    icon: Building2,
    name: "Enterprise",
    description:
      "Maßgeschneiderte Komplettlösung für Großunternehmen mit komplexen Anforderungen und individuellen Integrationsbedürfnissen.",
    price: "Individuell",
    features: [
      "Vollständige API-Integration", "Custom-Tracking & Daten-Exporte",
      "Dediziertes Team & SLAs", "Custom-Berichte & Data-Pipelines",
      "24/7 Premium-Support", "Vertragliche Markenfreigaben",
    ],
    cta: "Kontakt aufnehmen",
    highlight: false,
  },
];

export default function AdvertiserServices() {
  return (
    <>
      <Seo
        title="Services für Werbetreibende | VSCommission"
        description="Umfassende Affiliate-Services aus einer Hand: Kampagnen-Management, Tracking, Creative Services, Publisher-Management, Analytics und Fraud Protection."
        keywords="Affiliate Services, Kampagnen-Management, Tracking Attribution, Publisher-Management, Fraud Protection"
        path="/fuer-werbetreibende/services"
      />

      <PageHero
        eyebrow="Services"
        title={
          <>
            Umfassende Services aus{" "}
            <span className="text-gradient">einer Hand</span>
          </>
        }
        description="Von der Strategie bis zur operativen Umsetzung – wir begleiten Sie auf dem gesamten Weg zu einer erfolgreichen Affiliate-Präsenz. Alles aus einer Hand, voll integriert und auf Ihren Erfolg ausgerichtet."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/kontakt" size="lg" variant="primary">
            Beratung anfragen
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/fuer-werbetreibende/loesungen" size="lg" variant="outline">
            Lösungen ansehen
          </Button>
        </div>
      </PageHero>

      {/* Services */}
      <Section>
        <SectionHeader
          eyebrow="Unsere Leistungen"
          title="Alles für Ihren Affiliate-Erfolg"
          description="Sechs Kernbereiche, die nahtlos ineinandergreifen und gemeinsam für maximale Performance Ihres Programms sorgen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="flex flex-col animate-fade-in-up">
              <div
                className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 font-heading">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing / Tiers */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Pakete & Prozess"
          title="Das passende Paket für Ihre Größe"
          description="Drei transparent abgestufte Pakete – vom schnellen Einstieg bis zur Enterprise-Lösung. Wachsen Sie in Ihrem Tempo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col animate-fade-in-up ${
                tier.highlight
                  ? "border-accent shadow-xl shadow-accent/10 ring-2 ring-accent/30 lg:-translate-y-2"
                  : ""
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">Empfohlen</Badge>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white mb-5" style={{ animationDelay: `${index * 100}ms` }}>
                <tier.icon className="w-6 h-6" />
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{tier.price}</span>
                <h3 className="text-2xl font-bold text-primary mt-1 font-heading">{tier.name}</h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                to="/kontakt"
                variant={tier.highlight ? "primary" : "outline"}
                className="w-full"
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Bereit, Ihre Services zu entdecken?"
        description="Lassen Sie uns gemeinsam herausfinden, welches Paket am besten zu Ihren Zielen passt. Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch."
        primaryCTA={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCTA={{ label: "Lösungen ansehen", href: "/fuer-werbetreibende/loesungen" }}
      />
    </>
  );
}
