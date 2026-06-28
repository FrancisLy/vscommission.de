import { Section, SectionHeader } from "@/components/ui/Section";
import { Search, FileText, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Beratung & Analyse",
    description:
      "Wir analysieren Ihre Ziele, Zielgruppe und Produkte, um die optimale Affiliate-Strategie für Ihr Unternehmen zu entwickeln.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Programm-Setup",
    description:
      "Unser Team richtet Ihr Affiliate-Programm ein, definiert Provisionen und erstellt alle nötigen Materialien für Publisher.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Kampagnen-Start",
    description:
      "Ihr Programm geht live. Wir aktivieren die passenden Publisher und starten gezielte Kampagnen für maximale Reichweite.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimierung & Skalierung",
    description:
      "Kontinuierliches Monitoring, A/B-Testing und Optimierung sorgen für nachhaltiges Wachstum und besseren ROI.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        eyebrow="So funktioniert's"
        title="In 4 Schritten zum Erfolg"
        description="Unser strukturierter Prozess sorgt dafür, dass Ihr Affiliate-Programm schnell und effektiv startet."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center text-white shadow-lg shadow-primary/20 relative z-10">
                  <step.icon className="w-7 h-7" />
                </div>
                <span className="text-4xl font-bold text-slate-100 font-heading">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
