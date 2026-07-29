import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-worksans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ЖАР — ресторан на вогні",
  description: "Ресторан живого вогню — демо-сайт.",
};

export default function RestaurantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="min-h-full flex flex-col font-body bg-cream text-char">
        {children}
      </div>
 
  );
}