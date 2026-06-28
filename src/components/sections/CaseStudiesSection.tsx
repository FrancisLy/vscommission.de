import { caseStudies } from "@/data/cases";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, TrendingUp } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <Section className="bg-bg-light">
      <SectionHeader
        eyebrow="Erfolgsgeschichten"
        title="Bewiesene Ergebnisse für Top-Marken"
        description="Sehen Sie, wie führende Marken mit VSCommission ihr Umsatzwachstum im DACH-Raum beschleunigt haben."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {caseStudies.map((study, index) => (
          <article
            key={study.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Image / Visual header */}
            <div className="relative h-48 bg-gradient-to-br from-primary-900 to-primary-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/90 font-heading">
                  {study.brand}
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <Badge variant="accent" className="bg-white/20 text-white border border-white/20">
                  {study.category}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  {study.duration}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {study.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-slate-100">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-xl font-bold text-accent">{metric.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Publisher types */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.publisherTypes.map((type) => (
                  <Badge key={type} variant="outline">
                    {type}
                  </Badge>
                ))}
              </div>

              <Button to="/ressourcen/case-studies" variant="ghost" size="sm" className="px-0 group-hover:text-accent">
                Fallstudie lesen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
