import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  description?: string;
  dark?: boolean;
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  description,
  dark = false,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp({ end });

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-4xl lg:text-5xl font-bold mb-2 ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        <span className="font-heading">
          {count.toLocaleString("de-DE")}
          {suffix}
        </span>
      </div>
      <div
        className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
          dark ? "text-accent-300" : "text-accent-600"
        }`}
      >
        {label}
      </div>
      {description && (
        <p
          className={`text-sm ${dark ? "text-primary-200" : "text-slate-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
