import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import {
  Store,
  ShoppingBag,
  Target,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Check,
  ArrowRight,
} from "lucide-react";

const merchantTypes = [
  {
    icon: Store,
    title: "Unabhängige Online-Shops",
    description:
      "Für E-Commerce-Händler mit eigenem Shop-System. Wir unterstützen alle gängigen Plattformen und bieten maßgeschneiderte Tracking-Lösungen.",
    features: [
      "Shopify, WooCommerce, Magento, Shopware",
      "Custom-Tracking für jedes System",
      "Produktdaten-Feeds & Deep-Links",
      "Vollständige Conversion-Attribution",
    ],
    commission: "CPS (Cost per Sale)",
    setupTime: "2-5 Werktage",
  },
  {
    icon: ShoppingBag,
    title: "Amazon-Händler",
    description:
      "Speziell für Amazon-Seller entwickelte Lösungen. Erreichen Sie Kunden über Publisher-Netzwerke und steigern Sie Ihre Amazon-Verkäufe.",
    features: [
      "Amazon Associates Integration",
      "ASIN-basiertes Tracking",
      "Storefront-Promotion",
      "Brand-Store-Integration",
    ],
    commission: "CPS / CPA",
    setupTime: "1-3 Werktage",
  },
];

const services = [
  {
    icon: Target,
    title: "Kampagnen-Management",
    description:
      "Strategische Planung und Durchführung von Affiliate-Kampagnen mit klaren Zielen und messbaren KPIs.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Detaillierte Reports und Dashboards mit Echtzeit-Daten zu Klicks, Conversions, ROI und Publisher-Performance.",
  },
  {
    icon: Shield,
    title: "Betrugsschutz & Compliance",
    description:
      "KI-gestützte Betrugserkennung und vollständige DSGVO-Konformität schützen Ihre Marke und Ihr Budget.",
  },
  {
    icon: Zap,
    title: "Kreatives & Werbemittel",
    description:
      "Professionelle Banner, Textlinks, Produktdaten-Feeds und individuelle Werbemittel für Publisher.",
  },
  {
    icon: Users,
    title: "Publisher-Rekrutierung",
    description:
      "Aktive Ansprache und Gewinnung der passenden Publisher für Ihre Marke und Ihre Produkte.",
  },
  {
    icon: TrendingUp,
    title: "Performance-Optimierung",
    description:
      "Kontinuierliche Optimierung von Provisionen, Kampagnen und Publisher-Beziehungen für maximalen ROI.",
  },
];

export default function Advertisers() {
  return (
    <>
      <Seo
        title="Für Werbetreibende | VSCommission Affiliate Marketing"
        description="Erreichen Sie neue Kunden im DACH-Raum. Maßgeschneiderte Affiliate-Lösungen für Online-Shops und Amazon-Händler."
        keywords="Affiliate Marketing für Werbetreibende, Affiliate Programm, DACH Marketing"
        path="/fuer-werbetreibende"
      />

      <PageHero
        eyebrow="Für Werbetreibende"
        title={
          <>
            Skalieren Sie Ihren <span className="text-gradient">DACH-Umsatz</span> mit
            Affiliate Marketing
          </>
        }
        description="Verbinden Sie Ihre Marke mit über 12.000 aktiven Publishern und erreichen Sie Kunden in Deutschland, Österreich, Belgien und den Niederlanden. Maßgeschneidert für Online-Shops und Amazon-Händler."
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

      {/* Merchant Types */}
      <Section>
        <SectionHeader
          eyebrow="Lösungen für jeden Händlertyp"
          title="Unabhängige Shops & Amazon-Händler"
          description="Egal ob Sie einen eigenen Online-Shop betreiben oder auf Amazon verkaufen – wir haben die passende Lösung für Ihr Geschäftsmodell."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {merchantTypes.map((type) => (
            <Card key={type.title} className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent/20 flex-shrink-0">
                  <type.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Vergütungsmodell</div>
                  <Badge variant="accent">{type.commission}</Badge>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Setup-Zeit</div>
                  <Badge variant="outline">{type.setupTime}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Unsere Services"
          title="Alles für Ihren Affiliate-Erfolg"
          description="Von der Strategie bis zur Umsetzung – wir bieten umfassende Services für Ihr Performance-Marketing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="animate-fade-in-up" >
              <div
                className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button to="/fuer-werbetreibende/services" size="lg" variant="secondary">
            Alle Services entdecken
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      <HowItWorks />

      <CTASection
        title="Starten Sie Ihr Affiliate-Programm"
        description="Werden Sie Teil des führenden Affiliate-Netzwerks im DACH-Raum und erreichen Sie tausende neue Kunden."
        primaryCTA={{ label: "Programm starten", href: "/kontakt" }}
        secondaryCTA={{ label: "Mehr erfahren", href: "/marken-programme" }}
      />
    </>
  );
}
