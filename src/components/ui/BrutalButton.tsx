"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

type BrutalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "orange" | "yellow" | "blue" | "cream" | "black";
  size?: "md" | "lg";
};

const variantStyles = {
  orange: "bg-orange text-cream hover:bg-yellow hover:text-black",
  yellow: "bg-yellow text-black hover:bg-orange hover:text-cream",
  blue: "bg-blue text-cream hover:bg-yellow hover:text-black",
  cream: "bg-cream text-black hover:bg-yellow",
  black: "bg-black text-cream hover:bg-orange",
};

const sizeStyles = {
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 md:px-10 md:py-5 text-base md:text-lg",
};

export function BrutalButton({
  children,
  variant = "orange",
  size = "md",
  className = "",
  ...props
}: BrutalButtonProps) {
  return (
    <button
      type="button"
      className={`brutal-border brutal-shadow-sm font-display uppercase tracking-wide transition-all duration-200 rounded-2xl ${variantStyles[variant]} ${sizeStyles[size]} hover:brutal-shadow-hover hover:-rotate-1 active:translate-x-1 active:translate-y-1 active:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
