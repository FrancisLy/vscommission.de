import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "gold" | "outline";
  className?: string;
}

const variantClasses = {
  default: "bg-primary-50 text-primary-700",
  accent: "bg-accent-50 text-accent-700",
  gold: "bg-gold/10 text-gold-dark",
  outline: "border border-primary-200 text-primary-600",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
