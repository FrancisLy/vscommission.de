import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import {
  Store,
  ShoppingBag,
  Server,
  Globe,
  Plug,
  Activity,
  ShoppingCart,
  Cpu,
  Shirt,
  Plane,
  HeartPulse,
  Landmark,
  Check,
  ArrowRight,
} from "lucide-react";

const solutionTypes = [
  {
    icon: Store,
    title: "Unabhängige Shop-Lösungen",
    description:
      "Für E-Commerce-Händler mit eigenem Shop-System. Wir integrieren nahtlos in Ihre bestehende Infrastruktur und bieten maximale Flexibilität beim Tracking und der Publisher-Ansprache.",
    features: [
      "Vollständige Integration mit Shopify, Shopware, WooCommerce & Magento",
      "Custom-Tracking und Conversion-Attribution auf Produktebene",
      "Produktdaten-Feeds mit automatischer Aktualisierung",
      "Deep-Links und dynamische Werbemittel für Publisher",
      "Retargeting- und Cross-Selling-Kampagnen",
    ],
    badge: "Empfohlen für Händler",
    badgeVariant: "accent" as const,
  },
  {
    icon: ShoppingBag,
    title: "Amazon-Lösungen",
    description:
      "Speziell für Amazon-Seller entwickelte Lösungen. Erreichen Sie Kunden über Publisher-Netzwerke und steigern Sie nachhaltig Ihre Amazon-Verkäufe – völlig unabhängig von Amazon Ads.",
    features: [
      "Amazon Associates Integration und Storefront-Promotion",
      "ASIN-basiertes Tracking über das gesamte Sortiment",
      "Brand-Store-Integration und Sponsored Brands",
      "Ausrollen neuer Produkte und Bestseller-Push",
      "Markenbekanntheit über Content-Publisher aufbauen",
    ],
    badge: "Schnell startklar",
    badgeVariant: "outline" as const,
  },
];

const technologies = [
  {
    icon: Server,
    title: "Server-to-Server Tracking",
    description:
      "Zuverlässiges Tracking ohne Abhängigkeit von Browser-Cookies. S2S-Tracking gewährleistet eine nahezu 100 %ige Erfassung Ihrer Conversions – auch über Geräte- und Sitzungsgrenzen hinweg.",
  },
  {
    icon: Globe,
    title: "Cookieless Tracking",
    description:
      "Zukunftssichere Erfassung von Klicks und Conversions ohne Drittanbieter-Cookies. Unsere Lösung ist vollständig DSGVO-konform und browserübergreifend einsatzbereit.",
  },
  {
    icon: Plug,
    title: "API-Integration",
    description:
      "Flexible REST-APIs für die Anbindung an Ihr CRM, Ihre Warenwirtschaft oder Ihr Data Warehouse. Synchronisieren Sie Bestellungen und Provisionen in Echtzeit.",
  },
  {
    icon: Activity,
    title: "Echtzeit-Analytics",
    description:
      "Live-Dashboards mit Klicks, Conversions, AOV und ROI. Reagieren Sie sofort auf Trends und steuern Sie Ihre Kampagnen auf Basis aktueller Kennzahlen.",
  },
];

const industries = [
  { icon: ShoppingCart, title: "E-Commerce", description: "Online-Shops aller Größenordnungen – vom Nischenanbieter bis zum Marktplatz-Riesen." },
  { icon: Cpu, title: "Consumer Electronics", description: "Technik- und Elektronikmarken mit hohem Beratungsbedarf und längeren Customer Journeys." },
  { icon: Shirt, title: "Fashion & Lifestyle", description: "Modemarken, die über Content- und Influencer-Publisher emotionales Storytelling betreiben." },
  { icon: Plane, title: "Travel & Tourismus", description: "Reiseveranstalter und Buchungsplattformen mit saisonalen Kampagnen und komplexer Attribution." },
  { icon: HeartPulse, title: "Health & Beauty", description: "Gesundheits- und Kosmetikmarken mit Fokus auf Vertrauen, DSGVO und Wiederkehrkäufen." },
  { icon: Landmark, title: "Finance & Insurance", description: "Finanzdienstleister und Versicherungen mit strengen Compliance- und Regulierungsanforderungen." },
];

export default function AdvertiserSolutions() {
  return (
    <>
      <Seo
        title="Lösungen für Werbetreibende | VSCommission"
        description="Maßgeschneiderte Affiliate-Lösungen für Online-Shops und Amazon-Händler. Server-to-Server-Tracking, Cookieless-Tracking und Echtzeit-Analytics für maximalen ROI im DACH-Raum."
        keywords="Affiliate Lösungen, S2S Tracking, Cookieless Tracking, E-Commerce Affiliate, DACH Performance Marketing"
        path="/fuer-werbetreibende/loesungen"
      />

      <PageHero
        eyebrow="Lösungen"
        title={
          <>
            Maßgeschneiderte Lösungen für Ihr{" "}
            <span className="text-gradient">Wachstum</span>
          </>
        }
        description="Egal ob Sie einen eigenständigen Online-Shop betreiben oder auf Amazon vertreten sind – unsere Lösungen passen sich Ihrem Geschäftsmodell an und lassen sich nahtlos in Ihre bestehende Infrastruktur integrieren."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/kontakt" size="lg" variant="primary">
            Beratung anfragen
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/fuer-werbetreibende/services" size="lg" variant="outline">
            Services ansehen
          </Button>
        </div>
      </PageHero>

      {/* Solution comparison */}
      <Section>
        <SectionHeader
          eyebrow="Die passende Lösung für Ihr Geschäftsmodell"
          title="Eigenständige Shops & Amazon-Händler"
          description="Zwei bewährte Lösungswege, ein Ziel: messbar mehr Umsatz. Wählen Sie den Ansatz, der zu Ihrer Vertriebsstrategie passt."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {solutionTypes.map((type) => (
            <Card key={type.title} className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent/20 flex-shrink-0">
                  <type.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <Badge variant={type.badgeVariant}>{type.badge}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {type.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button to="/kontakt" variant="ghost" className="self-start">
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technology */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Technologie"
          title="Tracking-Technologie der nächsten Generation"
          description="Unsere Plattform setzt auf modernste Tracking-Verfahren, damit keine Conversion verloren geht – datenschutzkonform und zukunftssicher."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <Card key={tech.title} className="animate-fade-in-up">
              <div
                className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tech.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 font-heading">
                {tech.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {tech.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeader
          eyebrow="Branchen"
          title="Erfahrung in Ihrer Branche"
          description="Über 500 Marken aus den unterschiedlichsten Branchen vertrauen auf unsere Expertise. Wir kennen die Herausforderungen Ihres Marktes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={industry.title} className="animate-fade-in-up">
              <div
                className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-heading">
                {industry.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Lassen Sie uns Ihre Lösung finden"
        description="Vereinbaren Sie ein unverbindliches Beratungsgespräch. Gemeinsam erarbeiten wir die passende Strategie für Ihr Affiliate-Marketing."
        primaryCTA={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCTA={{ label: "Services entdecken", href: "/fuer-werbetreibende/services" }}
      />
    </>
  );
}
