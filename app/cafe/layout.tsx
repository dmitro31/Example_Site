import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ЗЕРНО Coffee & Kitchen",
  description: "Кав'ярня з власним обсмажуванням — демо-сайт.",
};

export default function CafeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} font-body bg-cream text-espresso`}
    >
      {children}
    </div>
  );
}