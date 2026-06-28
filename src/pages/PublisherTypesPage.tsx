import * as Icons from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { publisherTypes } from "@/data/publisherTypes";
import { Check, ArrowRight } from "lucide-react";

export default function PublisherTypesPage() {
  return (
    <>
      <Seo
        title="Publisher-Typen | VSCommission"
        description="Entdecken Sie alle zehn Publisher-Kategorien im VSCommission-Netzwerk: Coupon-Seiten, Cashback-Portale, Influencer, Content-Publisher und viele mehr."
        keywords="Publisher Typen, Affiliate Kategorien, Coupon Seiten, Cashback Portale, Influencer Marketing, Content Publisher"
        path="/fuer-publisher/typen"
      />

      <PageHero
        eyebrow="Publisher-Typen"
        title={
          <>
            Finden Sie Ihre{" "}
            <span className="text-gradient">Publisher-Kategorie</span>
          </>
        }
        description="Jeder Publisher ist einzigartig. Entdecken Sie alle zehn Kategorien in unserem Netzwerk und finden Sie die Programme, die perfekt zu Ihrem Kanal und Ihrer Zielgruppe passen."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/fuer-publisher/registrierung" size="lg" variant="primary">
            Jetzt registrieren
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/fuer-publisher" size="lg" variant="outline">
            Zurück zur Übersicht
          </Button>
        </div>
      </PageHero>

      {/* All Publisher Types - detailed horizontal cards */}
      <Section>
        <SectionHeader
          eyebrow="Alle Kategorien"
          title="10 Publisher-Typen im Detail"
          description="Von Coupon-Portalen über Influencer bis hin zu App-Publishern – jede Kategorie hat eigene Stärken, Vergütungsmodelle und passende Markenprogramme."
        />

        <div className="space-y-6">
          {publisherTypes.map((type, index) => {
            const Icon =
              (Icons[type.icon as keyof typeof Icons] as Icons.LucideIcon) ||
              Icons.Circle;

            return (
              <Card
                key={type.id}
                className="animate-fade-in-up"
                hover
              >
                <div
                  className="flex flex-col md:flex-row gap-6 lg:gap-8"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Icon column */}
                  <div className="md:w-20 md:flex-shrink-0 flex md:block items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent/20 flex-shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-primary font-heading mb-1">
                          {type.name}
                        </h3>
                        <Badge variant="accent">
                          Ø Provision: {type.avgCommission}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {type.description}
                    </p>

                    {/* Features */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                        Typische Merkmale
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {type.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-slate-700"
                          >
                            <span className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-accent" />
                            </span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Popular for */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                        Besonders beliebt für
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {type.popularFor.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button to="/fuer-publisher/registrierung" size="lg" variant="primary">
            Jetzt Publisher werden
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      <CTASection
        title="Ihre Publisher-Kategorie ist dabei?"
        description="Registrieren Sie sich kostenlos und entdecken Sie Hunderte Programme, die zu Ihrem Kanal passen. Unser Team unterstützt Sie bei jedem Schritt."
        primaryCTA={{ label: "Kostenlos registrieren", href: "/fuer-publisher/registrierung" }}
        secondaryCTA={{ label: "Für Publisher erfahren", href: "/fuer-publisher" }}
      />
    </>
  );
}
