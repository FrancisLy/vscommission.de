import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  variant?: "light" | "dark";
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  variant = "light",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden",
        isDark ? "bg-primary-900 text-white" : "bg-bg-light"
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
            <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-mesh opacity-50" />
            <div className="absolute top-10 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-300/5 rounded-full blur-3xl" />
          </>
        )}
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <span
              className={cn(
                "inline-block text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full",
                isDark
                  ? "text-accent-300 bg-accent/10 border border-accent/30"
                  : "text-accent-700 bg-accent-50 border border-accent-100"
              )}
            >
              {eyebrow}
            </span>
          )}

          <h1
            className={cn(
              "text-display-lg lg:text-display-xl font-bold mb-6 leading-tight animate-fade-in-up",
              isDark ? "text-white" : "text-primary"
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up delay-200",
                isDark ? "text-primary-200" : "text-slate-600"
              )}
            >
              {description}
            </p>
          )}

          {children && (
            <div className="animate-fade-in-up delay-300">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
