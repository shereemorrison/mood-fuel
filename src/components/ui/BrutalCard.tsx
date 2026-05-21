import { type ReactNode } from "react";

type BrutalCardProps = {
  children: ReactNode;
  className?: string;
  bg?: string;
};

export function BrutalCard({
  children,
  className = "",
  bg = "bg-cream",
}: BrutalCardProps) {
  return (
    <div
      className={`brutal-border brutal-shadow rounded-3xl ${bg} p-6 md:p-8 transition-all duration-300 hover:brutal-shadow-hover ${className}`}
    >
      {children}
    </div>
  );
}
