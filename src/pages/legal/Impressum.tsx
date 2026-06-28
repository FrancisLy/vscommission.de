import { Seo } from "@/components/seo/Seo";
import { Section } from "@/components/ui/Section";
import { Building2, Mail, Phone, MapPin, FileText, ShieldCheck } from "lucide-react";

const companyDetails = [
  { label: "Unternehmen", value: "VSCommission GmbH" },
  { label: "Anschrift", value: "Musterstraße 1, 10115 Berlin, Deutschland" },
  { label: "Telefon", value: "+49 (0) 30 1234 5678" },
  { label: "E-Mail", value: "info@vscommission.de" },
  { label: "Vertreten durch", value: "Geschäftsführer Max Mustermann" },
  { label: "Handelsregister", value: "HRB 123456 B, Amtsgericht Berlin" },
  { label: "USt-IdNr.", value: "DE123456789" },
];

export default function Impressum() {
  return (
    <>
      <Seo
        title="Impressum | VSCommission"
        description="Impressum und Anbieterkennzeichnung der VSCommission GmbH gemäß § 5 DDG mit allen gesetzlich erforderlichen Unternehmensangaben."
        keywords="Impressum VSCommission, Anbieterkennzeichnung, § 5 DDG, Impressumspflicht"
        path="/impressum"
      />

      <header className="bg-bg-light pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-600 mb-4">
            <FileText className="w-4 h-4" />
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-3">
            Impressum
          </h1>
          <p className="text-lg text-slate-600">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </p>
          <p className="text-sm text-slate-500 mt-3">Stand: 01. Januar 2025</p>
        </div>
      </header>

      <Section className="pt-12 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* §1 Anbieter */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-6">
            § 1 Anbieter
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-12">
            <div className="flex items-center gap-3 px-6 py-4 bg-bg-light border-b border-slate-200">
              <Building2 className="w-5 h-5 text-accent" />
              <span className="font-bold text-primary font-heading">
                VSCommission GmbH
              </span>
            </div>
            <dl className="divide-y divide-slate-100">
              {companyDetails.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4"
                >
                  <dt className="text-sm font-semibold text-primary">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-slate-600 sm:col-span-2">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Kontakt */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 2 Kontakt
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Für allgemeine Anfragen erreichen Sie uns unter den oben genannten
            Kontaktdaten. Unser Team steht Ihnen während der üblichen
            Geschäftszeiten (Mo–Fr von 9:00 bis 18:00 Uhr) gerne zur Verfügung.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-bg-light">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary">Anschrift</p>
                <p className="text-sm text-slate-600">Musterstraße 1, 10115 Berlin</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-bg-light">
              <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary">E-Mail</p>
                <p className="text-sm text-slate-600">info@vscommission.de</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-bg-light">
              <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary">Telefon</p>
                <p className="text-sm text-slate-600">+49 (0) 30 1234 5678</p>
              </div>
            </div>
          </div>

          {/* Verantwortlich für den Inhalt */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 3 Verantwortlich für den Inhalt
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Verantwortlich für den Inhalt nach § 18 Abs. 2
            Medienstaatsvertrag (MStV):
          </p>
          <div className="flex items-start gap-3 p-5 rounded-lg border border-slate-200 mb-12">
            <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-slate-600">
              <p className="font-semibold text-primary">Max Mustermann</p>
              <p>VSCommission GmbH</p>
              <p>Musterstraße 1, 10115 Berlin</p>
            </div>
          </div>

          {/* Haftungsausschluss */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 4 Haftung für Inhalte
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            </p>
          </div>

          {/* Haftung für Links */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 5 Haftung für Links
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>

          {/* Urheberrecht */}
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">
            § 6 Urheberrecht
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </Section>
    </>
  );
}
