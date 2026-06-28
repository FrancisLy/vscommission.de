import { useMemo, useState } from "react";
import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Hash } from "lucide-react";

const popularTags = [
  "Affiliate Marketing",
  "DSGVO",
  "Influencer Marketing",
  "Tracking",
  "Cashback",
  "Performance Marketing",
  "Content-Strategie",
  "Conversion-Optimierung",
  "KI",
  "Amazon Associates",
];

// Gradient variation per post index for visual variety in card headers
const headerGradients = [
  "from-primary via-primary-700 to-accent-700",
  "from-accent-600 via-accent to-primary-500",
  "from-primary-500 via-accent-700 to-primary-800",
  "from-accent via-primary-600 to-primary-800",
  "from-primary-700 via-accent-600 to-primary",
  "from-primary-600 via-primary to-accent-700",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("Alle");

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(blogPosts.map((post) => post.category))
    );
    return ["Alle", ...unique];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Alle") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Seo
        title="Blog | VSCommission Affiliate Marketing"
        description="Insights, Branchen-News und Strategien rund um Affiliate Marketing im DACH-Raum. Trends, Leitfäden und Best Practices für Werbetreibende und Publisher."
        keywords="Affiliate Marketing Blog, Affiliate News, DACH Affiliate Trends, Affiliate Strategie, Publisher Tipps"
        path="/blog"
      />

      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights & <span className="text-gradient">Branchen-News</span>
          </>
        }
        description="Frische Perspektiven auf das Affiliate Marketing im deutschsprachigen Raum: Strategien, Marktanalysen, Technologien und rechtliche Leitfäden – direkt von unseren Experten."
      />

      {/* Popular Tags */}
      <Section className="!py-12 lg:!py-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="lg:w-auto flex items-center gap-2 text-primary font-heading font-semibold">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="whitespace-nowrap">Beliebte Themen</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-light border border-slate-200 text-sm text-slate-700 hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                <Hash className="w-3.5 h-3.5 text-accent" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Articles */}
      <Section className="!pt-0">
        <SectionHeader
          eyebrow="Alle Artikel"
          title="Der komplette Blog-Überblick"
          description="Filtern Sie nach Kategorie und finden Sie genau die Inhalte, die für Ihre Affiliate-Strategie relevant sind."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 " +
                  (isActive
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-accent hover:text-accent")
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="flex flex-col animate-fade-in-up !p-0 overflow-hidden"
            >
              {/* Gradient Header */}
              <div
                className={
                  "relative h-40 bg-gradient-to-br p-6 flex flex-col justify-between " +
                  headerGradients[index % headerGradients.length]
                }
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-primary">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading leading-snug pr-8 line-clamp-3">
                  {post.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center">
                      <User className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">
                      {post.author}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>

                <Button
                  to="/blog"
                  variant="ghost"
                  size="sm"
                  className="mt-5 self-start"
                >
                  Artikel lesen
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500">
              Keine Artikel in dieser Kategorie gefunden.
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          <Badge variant="outline">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "Artikel" : "Artikel"} gefunden
          </Badge>
          {activeCategory !== "Alle" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveCategory("Alle")}
            >
              Filter zurücksetzen
            </Button>
          )}
        </div>
      </Section>

      <CTASection
        title="Verpassen Sie keinen Artikel mehr"
        description="Abonnieren Sie unseren Newsletter und erhalten Sie die wichtigsten Affiliate-Insights wöchentlich direkt in Ihr Postfach – werbefrei und jederzeit kündbar."
        primaryCTA={{ label: "Newsletter abonnieren", href: "/ressourcen" }}
        secondaryCTA={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      />
    </>
  );
}
