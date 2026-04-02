import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nirvelli Med Spa & Laser | Premium Med Spa in Cary, NC",
  description:
    "Nirvelli Med Spa & Laser is Cary's premier med spa. 5x Diamond Award Winner offering facials, massage, laser treatments, injectables, and more since 2003.",
  keywords:
    "med spa, Cary NC, laser hair removal, facials, massage, injectables, skin rejuvenation, day spa, Nirvelli",
  openGraph: {
    title: "Nirvelli Med Spa & Laser | Premium Med Spa in Cary, NC",
    description:
      "5x Cary Living Diamond Award Winner. Facials, massage, laser treatments, and more since 2003.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-full flex flex-col font-body overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
