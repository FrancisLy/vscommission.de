import { Seo } from "@/components/seo/Seo";
import { Section } from "@/components/ui/Section";
import {
  FileText,
  UserPlus,
  Briefcase,
  Users,
  CreditCard,
  ShieldAlert,
  XCircle,
  CheckCircle2,
} from "lucide-react";

const sections = [
  {
    icon: FileText,
    number: "§ 1",
    title: "Geltungsbereich",
    paragraphs: [
      "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Affiliate-Marketing-Plattform der VSCommission GmbH (nachfolgend „VSCommission“) durch Werbetreibende und Publisher.",
      "Durch die Registrierung und Nutzung unserer Plattform erkennen Sie diese AGB in ihrer jeweils gültigen Fassung an. Entgegenstehende oder von diesen AGB abweichende Bedingungen erkennen wir nicht an, es sei denn, ihrer Geltung wurde ausdrücklich schriftlich zugestimmt.",
    ],
  },
  {
    icon: UserPlus,
    number: "§ 2",
    title: "Registrierung und Konto",
    paragraphs: [
      "Die Registrierung erfolgt über das auf der Plattform bereitgestellte Formular. Mit der Registrierung beantragen Sie die Aufnahme in das VSCommission-Netzwerk.",
      "Die Registrierung ist nur unbeschränkt geschäftsfähigen Personen sowie juristischen Personen gestattet. Die bei der Registrierung angegebenen Daten müssen vollständig und wahrheitsgemäß sein.",
      "VSCommission behält sich vor, Registrierungen ohne Angabe von Gründen abzulehnen. Ein rechtlicher Anspruch auf Aufnahme in das Netzwerk besteht nicht.",
    ],
  },
  {
    icon: Briefcase,
    number: "§ 3",
    title: "Pflichten der Werbetreibenden",
    paragraphs: [
      "Werbetreibende verpflichten sich, alle für die Teilnahme am Affiliate-Programm erforderlichen Materialien wie Werbemittel, Produktfeeds und Tracking-Links zeitnah und in nutzbarer Qualität bereitzustellen.",
      "Werbetreibende gewährleisten, dass ihre Angebote, Werbemittel und verlinkten Inhalte keine Rechte Dritter verletzen und den geltenden gesetzlichen Vorschriften, insbesondere dem Wettbewerbsrecht, entsprechen.",
      "Provisionsansprüche von Publishern sind vom Werbetreibenden gemäß den vereinbarten Konditionen zu erfüllen, sofern die Vermittlung nachvollziehbar und rechtmäßig erfolgt ist.",
    ],
  },
  {
    icon: Users,
    number: "§ 4",
    title: "Pflichten der Publisher",
    paragraphs: [
      "Publisher verpflichten sich, die Werbemittel und Programme ausschließlich im Rahmen der geltenden Gesetze und der Vorgaben von VSCommission zu bewerben.",
      "Nicht zulässig sind insbesondere das Setzen von Cookies ohne Einwilligung, das Auslösen von Transaktionen ohne reale Kaufabsicht sowie die Bewerbung über unzulässige Kanäle wie Spam-E-Mails.",
      "Publisher sind verpflichtet, ihre Werbeaktivitäten transparent darzulegen und VSCommission auf Anfrage Auskunft über die eingesetzten Traffic-Quellen zu geben.",
    ],
  },
  {
    icon: CreditCard,
    number: "§ 5",
    title: "Vergütung und Zahlung",
    paragraphs: [
      "Die Vergütung richtet sich nach den im jeweiligen Programm definierten Konditionen (z. B. Cost-per-Action, Cost-per-Lead, Cost-per-Sale). Provisionsansprüche entstehen erst mit bestätigter und verifizierter Conversion.",
      "Auszahlungen erfolgen monatlich, sofern der Mindestauszahlungsbetrag von 50,00 EUR erreicht wurde. Zahlungen werden auf das vom Publisher hinterlegte Konto geleistet.",
      "VSCommission ist berechtigt, bei Verdacht auf Betrug oder unzulässige Praktiken Provisionen zurückzuhalten oder zu stornieren.",
    ],
  },
  {
    icon: ShieldAlert,
    number: "§ 6",
    title: "Haftung und Gewährleistung",
    paragraphs: [
      "VSCommission haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden an Leben, Körper und Gesundheit. Im Übrigen haftet VSCommission nur bei Verletzung wesentlicher Vertragspflichten der Höhe nach begrenzt auf den vertragstypisch vorhersehbaren Schaden.",
      "Die Verfügbarkeit der Plattform wird nicht garantiert. VSCommission behält sich vor, den Betrieb vorübergehend einzuschränken, um Wartungs- oder Aktualisierungsarbeiten durchzuführen.",
    ],
  },
  {
    icon: XCircle,
    number: "§ 7",
    title: "Kündigung",
    paragraphs: [
      "Das Vertragsverhältnis kann von beiden Parteien jederzeit ohne Angabe von Gründen gekündigt werden. Die Kündigung bedarf der Textform.",
      "Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere bei schwerwiegenden Verstößen gegen diese AGB oder gesetzliche Bestimmungen vor.",
    ],
  },
  {
    icon: CheckCircle2,
    number: "§ 8",
    title: "Schlussbestimmungen",
    paragraphs: [
      "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
      "Ausschließlicher Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit diesem Vertrag ist Berlin, sofern Sie Unternehmer im Sinne des § 14 BGB sind.",
      "Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.",
    ],
  },
];

export default function AGB() {
  return (
    <>
      <Seo
        title="AGB | VSCommission"
        description="Allgemeine Geschäftsbedingungen der VSCommission GmbH für die Nutzung der Affiliate-Marketing-Plattform durch Werbetreibende und Publisher."
        keywords="AGB VSCommission, Allgemeine Geschäftsbedingungen, Affiliate Marketing Bedingungen, Nutzungsbedingungen"
        path="/agb"
      />

      <header className="bg-bg-light pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-600 mb-4">
            <FileText className="w-4 h-4" />
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-3">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-lg text-slate-600">
            Bedingungen für die Nutzung der VSCommission-Plattform.
          </p>
          <p className="text-sm text-slate-500 mt-3">Stand: 01. Januar 2025</p>
        </div>
      </header>

      <Section className="pt-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.number}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary font-heading">
                    {section.number} {section.title}
                  </h2>
                </div>
                <div className="sm:pl-12 space-y-4">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
