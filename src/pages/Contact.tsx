import { useState, type FormEvent } from "react";
import { Seo } from "@/components/seo/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  Building2,
  User,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Hauptsitz Berlin",
    lines: ["VSCommission GmbH", "Friedrichstraße 68", "10117 Berlin, Deutschland"],
  },
  {
    icon: Mail,
    title: "E-Mail",
    lines: ["kontakt@vscommission.de", "support@vscommission.de"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+49 (0)30 1234 5678", "Mo–Fr von 9:00–18:00 Uhr"],
  },
  {
    icon: Clock,
    title: "Geschäftszeiten",
    lines: ["Mo–Fr: 9:00–18:00 Uhr", "Sa–So: Geschlossen"],
  },
];

const faqs = [
  {
    question: "Wie schnell meldet sich das Team nach meiner Anfrage?",
    answer:
      "In der Regel erhalten Sie innerhalb eines Werktages eine persönliche Rückmeldung. Bei dringenden Anliegen erreichen Sie unser Team telefonisch während der Geschäftszeiten.",
  },
  {
    question: "Für wen ist das Affiliate-Programm von VSCommission geeignet?",
    answer:
      "Wir betreuen sowohl Werbetreibende – von eigenständigen Online-Shops bis hin zu Amazon-Händlern – als auch Publisher aller zehn Kategorien im DACH-Raum. Gemeinsam finden wir die passende Lösung für Ihr Geschäftsmodell.",
  },
  {
    question: "Welche Kosten entstehen für den Einstieg?",
    answer:
      "Die Registrierung für Publisher ist kostenlos. Für Werbetreibende erstellen wir nach einem unverbindlichen Beratungsgespräch ein individuelles, transparentes Angebot – ohne versteckte Einrichtungsgebühren.",
  },
  {
    question: "Ist VSCommission DSGVO-konform?",
    answer:
      "Ja. Sämtliche Prozesse, das Tracking sowie die Datenverarbeitung entsprechen vollständig den Anforderungen der DSGVO. Auf Wunsch stellen wir Ihnen alle relevanten Dokumente und Auftragsverarbeitungsverträge zur Verfügung.",
  },
  {
    question: "In welchen Ländern ist das Netzwerk aktiv?",
    answer:
      "Unser Schwerpunkt liegt auf dem DACH-Raum (Deutschland, Österreich, Schweiz). Zusätzlich betreuen wir Kunden in Belgien und den Niederlanden, sodass Sie Märkteübergreifend skalieren können.",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all";

  return (
    <>
      <Seo
        title="Kontakt | VSCommission Affiliate Marketing"
        description="Kontaktieren Sie das VSCommission-Team in Berlin. Persönliche Beratung für Werbetreibende und Publisher im DACH-Raum – per E-Mail, Telefon oder Kontaktformular."
        keywords="VSCommission Kontakt, Affiliate Marketing Beratung, Berlin Affiliate Agentur, Publisher Support"
        path="/kontakt"
      />

      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Sprechen Sie mit{" "}
            <span className="text-gradient">unserem Team</span>
          </>
        }
        description="Ob Sie ein neues Affiliate-Programm starten, als Publisher durchstarten oder einfach mehr erfahren möchten – unser Team in Berlin berät Sie gerne. Wir melden uns in der Regel innerhalb eines Werktages."
      />

      {/* Contact Form + Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="!p-8 lg:!p-10">
              <h2 className="text-2xl font-bold text-primary font-heading mb-2">
                Nachricht senden
              </h2>
              <p className="text-sm text-slate-600 mb-8">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                bei Ihnen. Mit * markierte Felder sind erforderlich.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-accent-50 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-11 h-11 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary font-heading mb-3">
                    Vielen Dank für Ihre Nachricht!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mb-8">
                    Wir haben Ihre Anfrage erhalten und melden uns innerhalb
                    eines Werktages bei Ihnen. Für dringende Anliegen erreichen
                    Sie uns telefonisch unter +49 (0)30 1234 5678.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                  >
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ihr vollständiger Name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@firma.de"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Unternehmen
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Ihr Unternehmen"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+49 ..."
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-primary mb-2"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Erzählen Sie uns, wie wir Ihnen helfen können ..."
                      className={inputClasses + " resize-none"}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-slate-500">
                      Mit dem Absenden stimmen Sie unserer Datenschutzerklärung
                      zu.
                    </p>
                    <Button type="submit" variant="primary" size="md">
                      Nachricht senden
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-bold text-primary font-heading">
                Direkt erreichbar
              </h2>
            </div>
            {contactInfo.map((info) => (
              <Card key={info.title} className="!p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-50 text-accent flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary font-heading mb-1">
                      {info.title}
                    </h3>
                    {info.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm text-slate-600 leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-bg-light">
        <SectionHeader
          eyebrow="Häufige Fragen"
          title="Das wird oft gefragt"
          description="Die Antworten auf die häufigsten Fragen rund um VSCommission und unsere Affiliate-Lösungen. Sollte Ihre Frage nicht dabei sein, schreiben Sie uns einfach."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <Card key={faq.question} className="!p-0 overflow-hidden" hover={false}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-bold text-primary font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={
                      "w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 " +
                      (isOpen ? "rotate-180" : "")
                    }
                  />
                </button>
                <div
                  className={
                    "grid transition-all duration-300 ease-in-out " +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-600 mb-4">
            Ihre Frage war nicht dabei?
          </p>
          <div className="inline-flex items-center gap-2">
            <User className="w-4 h-4 text-accent" />
            <Badge variant="accent">Wir antworten innerhalb von 24 Stunden</Badge>
          </div>
        </div>
      </Section>
    </>
  );
}
