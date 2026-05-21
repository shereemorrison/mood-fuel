import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import { GsapProvider } from "@/components/providers/GsapProvider";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOOD-FUEL — Digital Wellbeing Campaign",
  description:
    "A bold experimental digital wellbeing campaign. Loud, playful, intentional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <GsapProvider>{children}</GsapProvider>
      </body>
    </html>
  );
}
