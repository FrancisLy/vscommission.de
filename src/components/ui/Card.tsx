import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8 transition-all duration-300",
        hover && "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-accent/30",
        className
      )}
    >
      {children}
    </div>
  );
}
