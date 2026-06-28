import { useState } from "react";
import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { brands, brandCategories } from "@/data/brands";
import { marketStats } from "@/data/stats";
import { ArrowRight, TrendingUp, MousePointerClick, Globe2, Users, Building2 } from "lucide-react";

const featuredPrograms = [
  { name: "Anker", category: "Konsumelektronik", commission: "8 % CPS", epc: "0,42 €", color: "#00A0E9",
    description: "Führender Anbieter von Ladetechnik, Audio- und Smart-Home-Produkten. Hohe Conversion-Raten und starke Markenbekanntheit im DACH-Raum." },
  { name: "SHEIN", category: "Fashion & Lifestyle", commission: "12 % CPS", epc: "0,38 €", color: "#000000",
    description: "Einer der am schnellsten wachsenden Fashion-Onlineshops weltweit. Tausende neue Produkte pro Woche und attraktive Saisonkampagnen." },
  { name: "Europcar", category: "Auto & Mobilität", commission: "5 % CPA", epc: "1,20 €", color: "#0066B3",
    description: "Internationaler Mietwagen-Anbieter mit starker Präsenz in Deutschland und Österreich. Ideal für Travel-Publisher mit beratungsintensivem Traffic." },
  { name: "Myprotein", category: "Health & Nutrition", commission: "15 % CPS", epc: "0,55 €", color: "#00A19C",
    description: "Europas führende Marke für Sportnahrung und Nahrungsergänzung. Besonders beliebt bei Fitness- und Lifestyle-Publishern." },
];

const countryStats = [
  { name: "Deutschland", publishers: "8.500+", brands: "320+", description: "Größter Markt mit dem stärksten Wachstum im DACH-Raum." },
  { name: "Österreich", publishers: "2.100+", brands: "110+", description: "Starkes Engagement im Travel- und E-Commerce-Segment." },
  { name: "Belgien", publishers: "850+", brands: "45+", description: "Wachsender Markt mit Fokus auf Fashion und Elektronik." },
  { name: "Niederlande", publishers: "620+", brands: "35+", description: "Emerging Market mit hohem Cross-Border-Potenzial." },
];

export default function Brands() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredBrands =
    activeCategory === "Alle"
      ? brands
      : brands.filter((brand) => brand.category === activeCategory);

  return (
    <>
      <Seo
        title="Marken & Programme | VSCommission Affiliate Marketing"
        description="Entdecken Sie über 500 Marken-Partnerschaften im DACH-Raum. Von E-Commerce über Fashion bis Travel – finden Sie das passende Affiliate-Programm."
        keywords="Affiliate Programme, Marken Partnerschaft, DACH Affiliate Marken, CPS CPA Programme"
        path="/marken-programme"
      />

      <PageHero
        eyebrow="Marken & Programme"
        title={
          <>
            Entdecken Sie unsere{" "}
            <span className="text-gradient">Marken-Partnerschaften</span>
          </>
        }
        description="Über 500 renommierte Marken aus dem DACH-Raum und international vertrauen auf VSCommission. Finden Sie das passende Programm für Ihre Zielgruppe – mit attraktiven Provisionen und hoher Conversion."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/fuer-publisher/registrierung" size="lg" variant="primary">
            Programm bewerben
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/kontakt" size="lg" variant="outline">
            Beratung anfragen
          </Button>
        </div>
      </PageHero>

      {/* Brand Grid with Category Filter */}
      <Section>
        <SectionHeader
          eyebrow="Unser Marken-Portfolio"
          title="Alle Marken auf einen Blick"
          description="Filtern Sie nach Kategorie und entdecken Sie die passenden Programme für Ihren Kanal. Neue Marken werden wöchentlich hinzugefügt."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brandCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "px-4 py-2 rounded-full text-sm font-semibold bg-accent text-white shadow-md shadow-accent/20 transition-all"
                  : "px-4 py-2 rounded-full text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-accent hover:text-accent transition-all"
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredBrands.map((brand, index) => (
            <Card
              key={brand.name}
              className="flex flex-col items-center text-center animate-fade-in-up"
            >
              <div
                className="h-16 flex items-center justify-center mb-4"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span
                  className="text-2xl lg:text-3xl font-bold font-heading"
                  style={{ color: brand.color }}
                >
                  {brand.logo}
                </span>
              </div>
              <Badge variant="outline" className="mb-4">
                {brand.category}
              </Badge>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-600 transition-colors"
              >
                Programm ansehen
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Card>
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <p className="text-center text-slate-500 mt-8">
            Keine Marken in dieser Kategorie gefunden.
          </p>
        )}
      </Section>

      {/* Featured Programs */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Empfohlene Programme"
          title="Top-Programme mit höchster Performance"
          description="Diese Programme zeichnen sich durch besonders hohe Provisionen, starke Conversion-Raten und zuverlässige Auszahlungen aus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredPrograms.map((program, index) => (
            <Card key={program.name} className="animate-fade-in-up">
              <div
                className="flex items-start justify-between mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${program.color}15` }}
                  >
                    <span
                      className="text-lg font-bold font-heading"
                      style={{ color: program.color }}
                    >
                      {program.name}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary font-heading">
                      {program.name}
                    </h3>
                    <span className="text-sm text-slate-500">
                      {program.category}
                    </span>
                  </div>
                </div>
                <Badge variant="accent">{program.commission}</Badge>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {program.description}
              </p>

              <div className="flex items-center gap-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4 text-accent" />
                  <div>
                    <div className="text-xs text-slate-500">EPC</div>
                    <div className="text-sm font-bold text-primary">
                      {program.epc}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <div>
                    <div className="text-xs text-slate-500">Vergütung</div>
                    <div className="text-sm font-bold text-primary">
                      {program.commission}
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-600 transition-colors"
                >
                  Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Market Reach */}
      <Section>
        <SectionHeader
          eyebrow="Marktabdeckung"
          title="Stark im gesamten DACH-Raum"
          description={`Mit ${marketStats.countriesList.length} Kernmärkten und ${marketStats.languageReach.toLowerCase()} erreichen wir eine der attraktivsten Zielgruppen Europas.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countryStats.map((country, index) => (
            <Card key={country.name} className="animate-fade-in-up">
              <div
                className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mb-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-heading">
                {country.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {country.description}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-semibold text-primary">
                    {country.publishers}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-semibold text-primary">
                    {country.brands}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ihre Marke fehlt noch?"
        description="Werden Sie Teil unseres wachsenden Netzwerks und erreichen Sie über 12.000 aktive Publisher im DACH-Raum. Wir begleiten Sie von der Programm-Einrichtung bis zum Skalierungserfolg."
        primaryCTA={{ label: "Programm einrichten", href: "/kontakt" }}
        secondaryCTA={{ label: "Mehr erfahren", href: "/fuer-werbetreibende" }}
      />
    </>
  );
}
