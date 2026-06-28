import { Seo } from "@/components/seo/Seo";
import { Section } from "@/components/ui/Section";
import {
  ShieldCheck,
  Database,
  Cookie,
  BarChart3,
  UserCheck,
  Mail,
} from "lucide-react";

const userRights = [
  { title: "Auskunft (Art. 15 DSGVO)", description: "Recht auf Auskunft über die zu Ihrer Person verarbeiteten personenbezogenen Daten." },
  { title: "Berichtigung (Art. 16 DSGVO)", description: "Unverzügliche Berichtigung unrichtiger oder unvollständiger Daten." },
  { title: "Löschung (Art. 17 DSGVO)", description: "Löschung Ihrer personenbezogenen Daten unter bestimmten Voraussetzungen." },
  { title: "Einschränkung (Art. 18 DSGVO)", description: "Einschränkung der Verarbeitung Ihrer personenbezogenen Daten." },
  { title: "Datenübertragbarkeit (Art. 20 DSGVO)", description: "Erhalt Ihrer Daten in einem strukturierten, maschinenlesbaren Format." },
  { title: "Widerspruch (Art. 21 DSGVO)", description: "Widerspruch gegen die Verarbeitung aus Gründen Ihrer besonderen Situation." },
];

export default function Datenschutz() {
  return (
    <>
      <Seo
        title="Datenschutzerklärung | VSCommission"
        description="Datenschutzerklärung der VSCommission GmbH gemäß DSGVO. Informationen zur Erhebung, Verarbeitung und Speicherung personenbezogener Daten."
        keywords="Datenschutz VSCommission, DSGVO, Datenschutzerklärung, Affiliate Marketing Datenschutz"
        path="/datenschutz"
      />

      <header className="bg-bg-light pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-600 mb-4">
            <ShieldCheck className="w-4 h-4" />
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-3">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-slate-600">
            Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst.
          </p>
          <p className="text-sm text-slate-500 mt-3">Stand: 01. Januar 2025</p>
        </div>
      </header>

      <Section className="pt-12 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Verantwortlicher */}
          <div className="flex items-start gap-3 p-5 rounded-lg border-l-4 border-accent bg-accent-50 mb-12">
            <Database className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-slate-600">
              <p className="font-bold text-primary mb-1">Verantwortlicher</p>
              <p>VSCommission GmbH, Musterstraße 1, 10115 Berlin, Deutschland</p>
              <p>E-Mail: datenschutz@vscommission.de | Telefon: +49 (0) 30 1234 5678</p>
            </div>
          </div>

          {/* §1 Erhebung und Verarbeitung */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 1 Erhebung und Verarbeitung von Daten
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
            <p>
              Wir erheben und verarbeiten personenbezogene Daten, wenn Sie
              unseren Service nutzen, sich registrieren oder uns kontaktieren.
              Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b
              DSGVO zur Vertragserfüllung sowie gemäß Art. 6 Abs. 1 lit. f DSGVO
              zur Wahrung unserer berechtigten Interessen.
            </p>
            <p>
              Zu den erhobenen Daten gehören Name, Kontaktdaten,
              Unternehmensinformationen sowie Nutzungs- und
              Transaktionsdaten, die für die Abwicklung unseres
              Affiliate-Netzwerks erforderlich sind.
            </p>
          </div>

          {/* §2 Cookies */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 2 Cookies und Tracking-Technologien
          </h2>
          <p className="text-slate-600 leading-relaxed mb-12">
            Unsere Website verwendet Cookies und ähnliche Technologien, um den
            Betrieb der Plattform zu gewährleisten, die Nutzererfahrung zu
            verbessern und die Wirksamkeit unserer Marketingmaßnahmen zu messen.
            Detaillierte Informationen finden Sie in unserer Cookie-Richtlinie.
            Sie können die Verwendung nicht essentieller Cookies jederzeit über
            die Einstellungen Ihres Browsers oder unser Consent-Management-Tool
            deaktivieren.
          </p>

          {/* §3 Affiliate-spezifische Datenverarbeitung */}
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary font-heading">
              § 3 Affiliate-Marketing spezifische Datenverarbeitung
            </h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
            <p>
              Im Rahmen unseres Affiliate-Marketing-Angebots verarbeiten wir
              folgende Kategorien personenbezogener Daten. Die Verarbeitung
              erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b und f DSGVO; eine
              Übermittlung an Dritte erfolgt ausschließlich im Rahmen der
              vertraglichen Leistungserbringung.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Klick- und Conversion-Daten zur Provisionsabrechnung</li>
              <li>IP-Adressen und Geräteinformationen zur Betrugserkennung und Tracking-Validierung</li>
              <li>Kontodaten von Publishern zur Auszahlung erworbener Provisionen</li>
              <li>Kampagnen- und Leistungsdaten zur Erfolgsanalyse für Werbetreibende</li>
            </ul>
          </div>

          {/* §4 Speicherdauer */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 4 Dauer der Datenspeicherung
          </h2>
          <p className="text-slate-600 leading-relaxed mb-12">
            Wir speichern personenbezogene Daten nur so lange, wie es für die
            Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche
            Aufbewahrungsfristen dies vorschreiben. Nach Ablauf der Fristen
            werden die Daten gelöscht oder anonymisiert.
          </p>

          {/* §5 Ihre Rechte */}
          <div className="flex items-center gap-2 mb-4">
            <UserCheck className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary font-heading">
              § 5 Ihre Rechte
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            Sie haben jederzeit das Recht, sich mit Anliegen rund um Ihre
            personenbezogenen Daten an uns zu wenden. Die folgenden Rechte
            stehen Ihnen gemäß DSGVO zu:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {userRights.map((right) => (
              <div
                key={right.title}
                className="p-5 rounded-lg border border-slate-200 hover:border-accent transition-colors"
              >
                <h3 className="text-sm font-bold text-primary font-heading mb-2">
                  {right.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {right.description}
                </p>
              </div>
            ))}
          </div>

          {/* §6 Datenschutzbeauftragter */}
          <div className="flex items-center gap-2 mb-4">
            <Cookie className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary font-heading">
              § 6 Kontakt Datenschutzbeauftragter
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            Für Fragen zum Datenschutz erreichen Sie unseren
            Datenschutzbeauftragten unter:
          </p>
          <div className="flex items-start gap-3 p-5 rounded-lg bg-bg-light">
            <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-slate-600">
              <p className="font-semibold text-primary">Datenschutzbeauftragter</p>
              <p>VSCommission GmbH</p>
              <p>Musterstraße 1, 10115 Berlin</p>
              <p>E-Mail: datenschutz@vscommission.de</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
