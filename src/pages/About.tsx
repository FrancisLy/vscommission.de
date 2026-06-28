import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, MapPin, Users, Calendar, Target } from "lucide-react";

const values = [
  { title: "Transparenz", description: "Offene Kommunikation, nachvollziehbare Reports und faire Konditionen bilden die Grundlage jeder Partnerschaft." },
  { title: "Innovation", description: "Wir investieren kontinuierlich in Technologie, Daten und Tools, um unseren Publishern und Marken einen Vorsprung zu verschaffen." },
  { title: "Partnerschaft", description: "Erfolg entsteht gemeinsam. Wir behandeln Publisher und Werbetreibende als langfristige Partner – nicht als reine Nummern." },
  { title: "DACH-Fokus", description: "Als lokal verwurzeltes Team verstehen wir die Besonderheiten der deutschsprachigen und Benelux-Märkte aus erster Hand." },
  { title: "Qualität", description: "Wir kuratieren unser Netzwerk sorgfältig und achten auf hochwertige Marken, verifizierte Publisher und sauberes Tracking." },
  { title: "Vertrauen", description: "DSGVO-konforme Prozesse, Betrugsschutz und zuverlässige Auszahlungen schaffen das Vertrauen, auf dem unser Netzwerk wächst." },
];

const team = [
  { name: "Lars Bergmann", role: "Gründer & CEO", initials: "LB", color: "from-accent to-accent-600" },
  { name: "Sabine Hoffmann", role: "Head of Sales", initials: "SH", color: "from-primary to-primary-700" },
  { name: "Markus Wagner", role: "Tech Lead", initials: "MW", color: "from-accent-600 to-primary" },
  { name: "Julia Schneider", role: "Head of Publisher Relations", initials: "JS", color: "from-primary-600 to-accent" },
  { name: "Tobias Krüger", role: "Head of Advertiser Success", initials: "TK", color: "from-accent to-primary-700" },
  { name: "Nadine Petersen", role: "Head of Marketing", initials: "NP", color: "from-primary-700 to-accent-600" },
];

const milestones = [
  { year: "2018", title: "Gründung in Berlin", description: "VSCommission wird mit der Mission gegründet, die führende Affiliate-Plattform für den deutschsprachigen Raum zu werden." },
  { year: "2019", title: "Erste 100 Marken", description: "Schnelles Wachstum: Innerhalb eines Jahres gewinnen wir über 100 Marken und 1.500 Publisher für das Netzwerk." },
  { year: "2020", title: "Expansion nach Österreich", description: "Wir öffnen unser zweites Büro in München und erweitern das Netzwerk auf den österreichischen Markt." },
  { year: "2022", title: "10.000 Publisher", description: "Ein wichtiger Meilenstein: Über 10.000 aktive Publisher vertrauen auf VSCommission im DACH-Raum." },
  { year: "2023", title: "Erweiterung auf Benelux", description: "Mit Belgien und den Niederlanden erschließen wir zwei weitere attraktive Cross-Border-Märkte." },
  { year: "2025", title: "25 Mio. € jährliche Provisionen", description: "Publisher verdienen mittlerweile über 25 Millionen Euro Provision pro Jahr über unsere Plattform." },
];

export default function About() {
  return (
    <>
      <Seo
        title="Über uns | VSCommission Affiliate Marketing"
        description="2018 in Berlin gegründet, verbindet VSCommission über 500 Marken mit 12.000 Publishern im DACH-Raum. Erfahren Sie mehr über unsere Mission, Werte und unser Team."
        keywords="VSCommission Über uns, Affiliate Unternehmen Berlin, DACH Affiliate Plattform"
        path="/ueber-uns"
      />

      <PageHero
        eyebrow="Über uns"
        title={
          <>
            Wir verbinden Marken mit{" "}
            <span className="text-gradient">Publishern</span>
          </>
        }
        description="Seit 2018 bauen wir das führende Affiliate-Netzwerk für den DACH-Raum. Mit Hauptsitz in Berlin und einem engagierten Team verbinden wir über 500 Marken mit mehr als 12.000 Publishern."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/kontakt" size="lg" variant="primary">
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/karriere" size="lg" variant="outline">
            Karriere bei uns
          </Button>
        </div>
      </PageHero>

      {/* Company Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-3 text-accent-600">
              Unsere Geschichte
            </span>
            <h2 className="text-display-md md:text-display-lg font-bold text-primary mb-6 font-heading">
              Gegründet in Berlin, gewachsen im DACH-Raum
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                VSCommission wurde 2018 in Berlin gegründet – mit einer klaren
                Mission: die führende Affiliate-Marketing-Plattform für den
                deutschsprachigen Raum zu werden. Was mit einem kleinen Team
                und einer einfachen Idee begann, ist heute eines der
                am schnellsten wachsenden Netzwerke in der Region.
              </p>
              <p>
                Unsere Vision ist ein transparenter, fairer und
                leistungsstarker Marktplatz, auf dem Marken und Publisher
                gleichermaßen erfolgreich sein können. Dafür investieren wir
                in Technologie, persönliche Betreuung und ein tiefes
                Verständnis der lokalen Märkte.
              </p>
              <p>
                Heute sind wir an vier Standorten aktiv, beschäftigen ein
                Team aus über 80 Expertinnen und Experten und vermitteln
                jährlich mehr als 25 Millionen Euro an Provisionen an unsere
                Publisher.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <Card className="flex flex-col">
              <Calendar className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-primary font-heading mb-1">
                2018
              </div>
              <div className="text-sm text-slate-600">Gründungsjahr</div>
            </Card>
            <Card className="flex flex-col">
              <Users className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-primary font-heading mb-1">
                80+
              </div>
              <div className="text-sm text-slate-600">Mitarbeitende</div>
            </Card>
            <Card className="flex flex-col">
              <MapPin className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-primary font-heading mb-1">
                2
              </div>
              <div className="text-sm text-slate-600">Büros: Berlin & München</div>
            </Card>
            <Card className="flex flex-col">
              <Target className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-primary font-heading mb-1">
                4
              </div>
              <div className="text-sm text-slate-600">DACH-Märkte</div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Unsere Werte"
          title="Wofür wir stehen"
          description="Diese sechs Werte leiten unsere tägliche Arbeit und prägen unsere Partnerschaften mit Marken und Publishern."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} className="animate-fade-in-up">
              <div
                className="w-10 h-10 rounded-lg bg-accent-50 text-accent flex items-center justify-center mb-4 font-bold font-heading"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-heading">
                {value.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeader
          eyebrow="Unser Team"
          title="Die Köpfe hinter VSCommission"
          description="Ein interdisziplinäres Team aus Affiliate-Experten, Entwicklerinnen und Beraterinnen mit Leidenschaft für Performance-Marketing."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-bold font-heading mb-3 shadow-lg`}
              >
                {member.initials}
              </div>
              <h3 className="text-sm font-bold text-primary font-heading">
                {member.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Milestones / Timeline */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Meilensteine"
          title="Unsere Reise von 2018 bis heute"
          description="Die wichtigsten Stationen auf unserem Weg zur führenden Affiliate-Plattform im DACH-Raum."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 md:px-6 pl-12 md:pl-0">
                  <Card hover={false} className="animate-fade-in-up">
                    <span className="text-sm font-bold text-accent font-heading">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-primary mt-1 mb-2 font-heading">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-bg-light md:-translate-x-1/2" />
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Lernen Sie uns persönlich kennen"
        description="Ob Sie eine Marke vertreten oder als Publisher durchstarten möchten – unser Team berät Sie gerne und unverbindlich. Sprechen Sie mit uns über Ihre Ziele."
        primaryCTA={{ label: "Termin vereinbaren", href: "/kontakt" }}
        secondaryCTA={{ label: "Karriere ansehen", href: "/karriere" }}
      />
    </>
  );
}
