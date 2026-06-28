import { useState, type FormEvent } from "react";
import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blog";
import {
  FileText,
  Award,
  HelpCircle,
  ArrowRight,
  Clock,
  Calendar,
  Mail,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const resourceCategories = [
  {
    icon: FileText,
    title: "Blog",
    description:
      "Frische Insights, Branchen-News und strategische Leitfäden aus dem DACH-Affiliate-Markt – regelmäßig aktualisiert von unseren Experten.",
    link: "/blog",
    linkLabel: "Alle Artikel ansehen",
    badge: "Wöchentlich neu",
    points: ["Trends & Analysen", "Strategie-Leitfäden", "Publisher-Tipps"],
  },
  {
    icon: Award,
    title: "Case Studies",
    description:
      "Konkrete Erfolgsgeschichten unserer Partner. Messbare Ergebnisse, angewandte Strategien und bewährte Publisher-Kombinationen zum Nachlesen.",
    link: "/case-studies",
    linkLabel: "Erfolgsgeschichten entdecken",
    badge: "12+ Studien",
    points: ["Reale Kampagnen", "Messbare KPIs", "Best Practices"],
  },
  {
    icon: HelpCircle,
    title: "Hilfe-Center",
    description:
      "Antworten auf häufige Fragen, Schritt-für-Schritt-Anleitungen und detaillierte Dokumentation für Werbetreibende und Publisher.",
    link: "/hilfe",
    linkLabel: "Zum Hilfe-Center",
    badge: "Rund um die Uhr",
    points: ["Setup-Anleitungen", "Tracking-Doku", "FAQ"],
  },
];

const latestPosts = blogPosts.slice(0, 3);

export default function Resources() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <Seo
        title="Ressourcen | VSCommission Affiliate Marketing"
        description="Wissenshub für Affiliate Marketing im DACH-Raum: Blog-Artikel, Case Studies und ein Hilfe-Center mit Anleitungen und Best Practices für Werbetreibende und Publisher."
        keywords="Affiliate Marketing Ressourcen, Affiliate Blog, Case Studies, Hilfe-Center, DACH Affiliate Wissen"
        path="/ressourcen"
      />

      <PageHero
        eyebrow="Ressourcen"
        title={
          <>
            Wissen, das Ihren{" "}
            <span className="text-gradient">Erfolg vorantreibt</span>
          </>
        }
        description="Entdecken Sie unseren Wissenshub für Affiliate Marketing im DACH-Raum. Von aktuellen Branchen-Insights über praxiserprobte Case Studies bis hin zu detaillierten Anleitungen – alles, was Sie für Ihren Erfolg brauchen."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/blog" size="lg" variant="primary">
            Zum Blog
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/case-studies" size="lg" variant="outline">
            Case Studies ansehen
          </Button>
        </div>
      </PageHero>

      {/* Resource Categories */}
      <Section>
        <SectionHeader
          eyebrow="Erkunden Sie unsere Bereiche"
          title="Drei Wege zu mehr Affiliate-Wissen"
          description="Egal, ob Sie sich inspirieren lassen, von Erfolgen anderer lernen oder konkrete Hilfe brauchen – in unseren Ressourcen finden Sie die passenden Antworten."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {resourceCategories.map((category, index) => (
            <Card
              key={category.title}
              className="flex flex-col animate-fade-in-up"
            >
              <div
                className="flex items-center justify-between mb-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent/20">
                  <category.icon className="w-7 h-7" />
                </div>
                <Badge variant="accent">{category.badge}</Badge>
              </div>

              <h3 className="text-xl font-bold text-primary font-heading mb-3">
                {category.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {category.description}
              </p>

              <ul className="space-y-2 mb-6">
                {category.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <Button to={category.link} variant="ghost" size="sm">
                  {category.linkLabel}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Articles */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Frisch aus dem Blog"
          title="Neueste Artikel & Insights"
          description="Bleiben Sie auf dem Laufenden: Die aktuellsten Beiträge aus unserem Blog zu Trends, Strategien und Best Practices im Affiliate Marketing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {latestPosts.map((post, index) => (
            <Card
              key={post.id}
              className="flex flex-col animate-fade-in-up overflow-hidden !p-0"
            >
              <div
                className="h-32 bg-gradient-to-br from-primary via-primary-700 to-accent-700 flex items-end p-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-primary">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-primary font-heading mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-500">
                    {post.author}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/blog" size="lg" variant="primary">
            Alle Artikel im Blog
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden !p-8 lg:!p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
            <div className="relative z-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-50 text-accent flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h2 className="text-display-md font-bold text-primary font-heading mb-4">
                Affiliate-Newsletter abonnieren
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Erhalten Sie die wichtigsten Branchen-News, exklusive Insights
                und praktische Tipps direkt in Ihr Postfach – einmal pro Woche,
                werbefrei und jederzeit kündbar.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-6">
                  <div className="w-16 h-16 rounded-full bg-accent-50 flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9 text-accent" />
                  </div>
                  <p className="text-lg font-semibold text-primary">
                    Vielen Dank für Ihre Anmeldung!
                  </p>
                  <p className="text-sm text-slate-600">
                    Bitte bestätigen Sie Ihre E-Mail-Adresse in der Nachricht,
                    die wir Ihnen gerade gesendet haben.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ihre geschäftliche E-Mail-Adresse"
                    className="flex-1 px-5 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                  />
                  <Button type="submit" variant="primary" size="md">
                    Abonnieren
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              )}

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
                {["Wöchentlich", "Werbefrei", "Jederzeit kündbar"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <CTASection
        title="Noch Fragen zu unseren Ressourcen?"
        description="Unser Team hilft Ihnen gerne weiter – egal ob Sie konkrete Unterstützung bei Ihrem Affiliate-Programm brauchen oder einfach mehr über eine Case Study erfahren möchten."
        primaryCTA={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
        secondaryCTA={{ label: "Hilfe-Center öffnen", href: "/hilfe" }}
      />
    </>
  );
}
