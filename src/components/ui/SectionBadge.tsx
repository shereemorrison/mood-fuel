type SectionBadgeProps = {
  children: string;
  variant?: "orange" | "blue" | "black" | "cream";
  className?: string;
};

const variantStyles = {
  orange: "bg-orange text-cream",
  blue: "bg-blue text-cream",
  black: "bg-black text-cream",
  cream: "bg-cream text-black",
};

export function SectionBadge({
  children,
  variant = "orange",
  className = "",
}: SectionBadgeProps) {
  return (
    <span
      className={`inline-block brutal-border rounded-full px-3 py-1 font-display text-[10px] uppercase tracking-wide -rotate-1 mb-4 ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
