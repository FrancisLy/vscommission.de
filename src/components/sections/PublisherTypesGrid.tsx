import * as Icons from "lucide-react";
import { publisherTypes } from "@/data/publisherTypes";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function PublisherTypesGrid() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Publisher-Netzwerk"
        title="10 Publisher-Typen für jede Zielgruppe"
        description="Von Coupon-Portalen bis hin zu Influencern – unser vielfältiges Netzwerk deckt jeden Marketing-Kanal ab und erreicht Ihre Zielgruppe genau dort, wo sie sich aufhält."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
        {publisherTypes.map((type, index) => {
          const Icon = (Icons[type.icon as keyof typeof Icons] as Icons.LucideIcon) || Icons.Circle;

          return (
            <div
              key={type.id}
              className="group bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-accent-600 transition-all">
                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-bold text-primary mb-2 text-base">{type.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {type.description}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-1">Ø Provision</div>
                <div className="text-sm font-bold text-accent">{type.avgCommission}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button to="/fuer-publisher/typen" size="lg" variant="primary">
          Alle Publisher-Typen entdecken
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
}
