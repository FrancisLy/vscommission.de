import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import {
  UserPlus,
  ShieldCheck,
  LayoutGrid,
  Rocket,
  Globe,
  Activity,
  FileText,
  Mail,
  Check,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: UserPlus,
    title: "Konto erstellen",
    description:
      "Registrieren Sie sich in wenigen Minuten. Geben Sie Ihre Kontaktdaten an und wählen Sie einen sicheren Zugang zu Ihrem Publisher-Dashboard.",
    duration: "ca. 5 Minuten",
  },
  {
    icon: ShieldCheck,
    title: "Website verifizieren",
    description:
      "Bestätigen Sie Ihr Eigentum an der Website oder dem Kanal. Wir prüfen Ihre Reichweite und Traffic-Qualität, um Spam und Betrug vorzubeugen.",
    duration: "1–2 Werktage",
  },
  {
    icon: LayoutGrid,
    title: "Programme wählen",
    description:
      "Durchsuchen Sie über 500 Markenprogramme und bewerben Sie sich für die Angebote, die zu Ihrer Zielgruppe und Ihrem Content passen.",
    duration: "Sofort verfügbar",
  },
  {
    icon: Rocket,
    title: "Verdienen starten",
    description:
      "Integrieren Sie Werbemittel und Deep-Links, generieren Sie Conversions und verdienen Sie ab der ersten erfolgreichen Vermittlung.",
    duration: "Laufend",
  },
];

const requirements = [
  {
    icon: Globe,
    title: "Website-URL",
    description:
      "Die Adresse Ihrer Website, Ihres Blogs oder Ihres Kanals. Alternativ auch Social-Media-Profile wie Instagram oder YouTube.",
  },
  {
    icon: Activity,
    title: "Traffic-Nachweis",
    description:
      "Ein Nachweis über Ihre monatlichen Besucher oder Reichweite, z. B. über Google Analytics oder Plattform-Statistiken.",
  },
  {
    icon: FileText,
    title: "Steuerinformationen",
    description:
      "Steuerliche Angaben wie Steuernummer oder USt-IdNr. sowie Ihre Bankverbindung für die Provisionsauszahlung.",
  },
  {
    icon: Mail,
    title: "Gültige E-Mail-Adresse",
    description:
      "Eine erreichbare E-Mail-Adresse für die Kontoverifizierung und die Kommunikation mit unserem Support-Team.",
  },
];

const faqs = [
  {
    question: "Ist die Registrierung als Publisher kostenlos?",
    answer:
      "Ja, die Registrierung und die Mitgliedschaft im VSCommission-Netzwerk sind für Publisher vollständig kostenlos. Es fallen weder Einrichtungsgebühren noch monatliche Kosten an – Sie verdienen von der ersten Vermittlung an.",
  },
  {
    question: "Wie lange dauert die Freischaltung meines Kontos?",
    answer:
      "Nach der Registrierung prüfen wir Ihre Angaben in der Regel innerhalb von ein bis zwei Werktagen. Sobald Ihr Konto freigeschaltet ist, können Sie sofort Programme auswählen und Werbemittel einbinden.",
  },
  {
    question: "Welche Voraussetzungen muss meine Website erfüllen?",
    answer:
      "Ihre Website sollte eigenen Content enthalten, regelmäßigen Traffic aufweisen und DSGVO-konform sein. Wir akzeptieren keine Seiten mit illegalen, anstößigen oder irreführenden Inhalten sowie reine Parkseiten oder Spam-Portale.",
  },
  {
    question: "Wann und wie werde ich ausgezahlt?",
    answer:
      "Auszahlungen erfolgen monatlich, sobald Ihr Provisionsguthaben mindestens 50 € beträgt. Sie wählen selbst, ob die Zahlung per Banküberweisung oder PayPal erfolgen soll.",
  },
  {
    question: "Kann ich auch ohne eigene Website teilnehmen?",
    answer:
      "Ja. Neben Website-Betreibern sind auch Influencer, Social-Media-Creator, E-Mail-Marketer und Mobile-App-Entwickcker willkommen. Wichtig ist ein nachweisbarer Kanal mit echter Reichweite.",
  },
  {
    question: "Welche Unterstützung erhalte ich nach der Registrierung?",
    answer:
      "Jeder Publisher erhält Zugang zu unserem Support-Team, umfangreichen Schulungsmaterialien und einem persönlichen Ansprechpartner ab einer bestimmten Performance-Schwelle. So helfen wir Ihnen, Ihre Einnahmen zu maximieren.",
  },
];

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-base lg:text-lg font-bold text-primary font-heading">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 -mt-1">
          <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PublisherRegister() {
  return (
    <>
      <Seo
        title="Registrierung für Publisher | VSCommission"
        description="Werden Sie Publisher bei VSCommission. Kostenlos registrieren, Website verifizieren, Programme wählen und mit dem Verdienen starten. In nur vier Schritten dabei."
        keywords="Publisher Registrierung, Affiliate Anmeldung, Publisher werden, kostenloses Affiliate Programm"
        path="/fuer-publisher/registrierung"
      />

      <PageHero
        eyebrow="Registrierung"
        title={
          <>
            Werden Sie Publisher bei{" "}
            <span className="text-gradient">VSCommission</span>
          </>
        }
        description="In nur vier einfachen Schritten zum ersten verdienten Euro. Die Registrierung ist kostenlos, unkompliziert und innerhalb weniger Minuten erledigt."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/kontakt" size="lg" variant="primary">
            Jetzt registrieren
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button to="/fuer-publisher" size="lg" variant="outline">
            Mehr erfahren
          </Button>
        </div>
      </PageHero>

      {/* Registration Process */}
      <Section>
        <SectionHeader
          eyebrow="So funktioniert's"
          title="Ihr Weg zum Publisher in 4 Schritten"
          description="Von der Anmeldung bis zur ersten Provision – der gesamte Prozess ist transparent, schnell und ohne versteckte Hürden."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative animate-fade-in-up">
              <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-accent/30">
                {index + 1}
              </div>
              <div
                className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mb-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 font-heading">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {step.description}
              </p>
              <Badge variant="outline">{step.duration}</Badge>
            </Card>
          ))}
        </div>
      </Section>

      {/* Requirements */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Voraussetzungen"
          title="Was Sie für die Registrierung brauchen"
          description="Damit wir Ihr Konto schnell freischalten können, halten Sie bitte folgende Informationen bereit. Je vollständig Ihre Angaben, desto rascher starten Sie."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <Card key={req.title} className="flex gap-5 animate-fade-in-up">
              <div
                className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center flex-shrink-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <req.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2 font-heading">
                  {req.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {req.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 p-6 lg:p-8 bg-white rounded-2xl border border-accent/20 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent-50 text-accent flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-primary mb-2 font-heading">
              Tipp: Schneller durch die Freischaltung
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Je vollständiger und aktueller Ihre Angaben beim ersten Einreichen
              sind, desto zügiger erfolgt die Prüfung. Reichen Sie am besten
              direkt Traffic-Nachweis und Steuerinformationen zusammen mit der
              Anmeldung ein.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          eyebrow="Häufige Fragen"
          title="Antworten zur Publisher-Registrierung"
          description="Die wichtigsten Fragen rund um Anmeldung, Freischaltung und erste Schritte im VSCommission-Netzwerk."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <FaqItem faq={faq} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-600 mb-4">
            Noch Fragen? Unser Team hilft Ihnen gerne persönlich weiter.
          </p>
          <Button to="/kontakt" size="lg" variant="outline">
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      <CTASection
        title="Bereit, loszulegen?"
        description="Werden Sie Teil eines der größten Affiliate-Netzwerke im DACH-Raum. Kostenlos, unverbindlich und mit persönlichem Support ab dem ersten Tag."
        primaryCTA={{ label: "Jetzt kostenlos registrieren", href: "/kontakt" }}
        secondaryCTA={{ label: "Publisher-Typen ansehen", href: "/fuer-publisher/typen" }}
      />
    </>
  );
}
