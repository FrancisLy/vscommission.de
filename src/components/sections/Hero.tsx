import { ArrowRight, TrendingUp, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-mesh">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl animate-pulse-slow delay-500" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent-700">
                Über 12.000 Publisher im DACH-Raum
              </span>
            </div>

            <h1 className="text-display-xl lg:text-display-2xl font-bold text-primary mb-6 leading-tight">
              Affiliate Marketing, das{" "}
              <span className="text-gradient">Umsatz Wachstum</span> schafft
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              VSCommission verbindet Ihre Marke mit den besten Publishern in
              Deutschland, Österreich, Belgien und den Niederlanden. Skalieren Sie
              Ihr Performance-Marketing mit dem führenden Affiliate-Netzwerk der
              Region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button to="/fuer-werbetreibende" size="lg" variant="primary">
                Für Werbetreibende
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button to="/fuer-publisher" size="lg" variant="outline">
                Für Publisher
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: Users, label: "12.000+ Publisher" },
                { icon: Building2, label: "500+ Marken" },
                { icon: TrendingUp, label: "35% höhere Conversion" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon className="w-4 h-4 text-accent" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 p-8 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Heutige Performance</p>
                    <p className="text-3xl font-bold text-primary font-heading">
                      €48.290
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold">
                    +24,5%
                  </div>
                </div>

                {/* Mini chart bars */}
                <div className="flex items-end gap-2 h-32 mb-6">
                  {[40, 65, 45, 80, 55, 90, 70, 100, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-accent to-accent-300 rounded-t-lg transition-all hover:opacity-80"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Klicks</p>
                    <p className="text-lg font-bold text-primary">12,4K</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Sales</p>
                    <p className="text-lg font-bold text-primary">847</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">CR</p>
                    <p className="text-lg font-bold text-accent">6,8%</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 animate-fade-in-up delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">ROI</p>
                    <p className="text-lg font-bold text-primary">1:7,2</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl shadow-xl p-4 text-white animate-fade-in-up delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-200">Aktive Publisher</p>
                    <p className="text-lg font-bold">+1.247</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
