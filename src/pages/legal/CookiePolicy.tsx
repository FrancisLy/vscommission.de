import { Seo } from "@/components/seo/Seo";
import { Section } from "@/components/ui/Section";
import { Cookie, Settings, CheckCircle2, RefreshCw, Info } from "lucide-react";

const cookieTypes = [
  {
    icon: CheckCircle2,
    name: "Essenzielle Cookies",
    purpose: "Notwendig für den Betrieb",
    description: "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie ermöglichen beispielsweise die sichere Anmeldung und das Speichern Ihrer Consent-Einstellungen.",
    examples: ["Session-Cookie", "Consent-Management-Cookie", "Sicherheitstoken"],
    required: true,
  },
  {
    icon: RefreshCw,
    name: "Analytics-Cookies",
    purpose: "Reichweitenmessung",
    description: "Mit diesen Cookies sammeln wir aggregierte, anonymisierte Daten darüber, wie Besucher unsere Website nutzen. Dies hilft uns, die Nutzererfahrung kontinuierlich zu verbessern.",
    examples: ["Google Analytics", "Matomo", "Hotjar"],
    required: false,
  },
  {
    icon: Settings,
    name: "Marketing-Cookies",
    purpose: "Personalisierte Werbung",
    description: "Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten. Sie dienen zudem dazu, den Erfolg unserer Affiliate-Kampagnen zu messen.",
    examples: ["Facebook Pixel", "Google Ads", "LinkedIn Insight Tag"],
    required: false,
  },
];

export default function CookiePolicy() {
  return (
    <>
      <Seo
        title="Cookie-Richtlinie | VSCommission"
        description="Cookie-Richtlinie der VSCommission GmbH. Informationen über die Verwendung von Cookies und Tracking-Technologien auf unserer Website."
        keywords="Cookie-Richtlinie VSCommission, Cookies, Tracking-Technologien, Einwilligung"
        path="/cookie-richtlinie"
      />

      <header className="bg-bg-light pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-600 mb-4">
            <Cookie className="w-4 h-4" />
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-3">
            Cookie-Richtlinie
          </h1>
          <p className="text-lg text-slate-600">
            Informationen über unsere Verwendung von Cookies.
          </p>
          <p className="text-sm text-slate-500 mt-3">Stand: 01. Januar 2025</p>
        </div>
      </header>

      <Section className="pt-12 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Was sind Cookies? */}
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary font-heading">
              Was sind Cookies?
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-12">
            Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
            werden, wenn Sie eine Website besuchen. Sie ermöglichen es der
            Website, Ihren Browser bei einem erneuten Besuch wiederzuerkennen
            und bestimmte Einstellungen oder Informationen abzurufen. Neben
            Cookies kommen gegebenenfalls weitere Tracking-Technologien wie
            Web-Beacons oder Pixel-Tags zum Einsatz, die ähnliche Funktionen
            erfüllen. In dieser Richtlinie wird der Begriff „Cookies“
            stellvertretend für alle diese Technologien verwendet.
          </p>

          {/* Welche Cookies wir verwenden */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-6">
            Welche Cookies wir verwenden
          </h2>
          <div className="space-y-5 mb-12">
            {cookieTypes.map((type) => (
              <div
                key={type.name}
                className="p-6 rounded-xl border border-slate-200 hover:border-accent transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent flex items-center justify-center">
                      <type.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary font-heading">
                        {type.name}
                      </h3>
                      <p className="text-xs text-slate-500">{type.purpose}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      type.required
                        ? "bg-accent-50 text-accent-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {type.required ? "Erforderlich" : "Optional"}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example) => (
                    <span
                      key={example}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-bg-light text-xs text-slate-600"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cookie-Verwaltung */}
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary font-heading">
              Cookie-Verwaltung
            </h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
            <p>
              Beim ersten Besuch unserer Website werden Sie über ein
              Consent-Management-Tool um Ihre Einwilligung in die Verwendung
              nicht essentieller Cookies gebeten. Sie können dabei frei
              entscheiden, welche Kategorien Sie zulassen möchten.
            </p>
            <p>
              Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für
              die Zukunft widerrufen. Die dafür erforderlichen Möglichkeiten
              sind im Folgenden aufgeführt:
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-12">
            <li>Über das Consent-Tool, das Sie über den Link am Seitenende jederzeit erneut aufrufen können.</li>
            <li>Über die Cookie-Einstellungen Ihres Browsers, in denen Sie Cookies jederzeit blockieren oder löschen können.</li>
            <li>Durch das Löschen Ihres Browser-Verlaufs und der gespeicherten Website-Daten.</li>
          </ul>

          {/* Aktualisierungen */}
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary font-heading">
              Aktualisierungen der Richtlinie
            </h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Wir behalten uns vor, diese Cookie-Richtlinie anzupassen, um
              Änderungen der gesetzlichen Rahmenbedingungen oder der von uns
              eingesetzten Technologien Rechnung zu tragen. Das Datum der
              letzten Aktualisierung wird oben auf dieser Seite ausgewiesen.
            </p>
            <p>
              Bei wesentlichen Änderungen werden wir Sie beim nächsten Besuch
              unserer Website erneut um Ihre Einwilligung bitten. Wir
              empfehlen, diese Richtlinie regelmäßig zu überprüfen, um über
              die aktuelle Verwendung von Cookies informiert zu bleiben.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
