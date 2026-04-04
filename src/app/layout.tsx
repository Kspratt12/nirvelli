import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

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
  title: "Nirvelli Med Spa & Laser | Best Med Spa in Cary NC | Facials, Massage, Acupuncture",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  description:
    "Nirvelli Med Spa is Cary NC's top-rated med spa since 2003. 5x Diamond Award Winner offering medical-grade facials, massage therapy, acupuncture, laser treatments, HydraFacial, and injectables. Serving Raleigh, Holly Springs & Morrisville. Book today!",
  keywords:
    "med spa Cary NC, acupuncture Cary NC, massage Cary NC, facial treatments Cary NC, laser treatments Cary NC, HydraFacial Cary, Botox Cary NC, med spa Raleigh NC, best spa Cary, Nirvelli Med Spa, day spa Holly Springs, massage Morrisville",
  openGraph: {
    title: "Nirvelli Med Spa & Laser | Best Med Spa in Cary NC",
    description:
      "5x Cary Living Diamond Award Winner. Medical-grade facials, massage, acupuncture, laser treatments & injectables since 2003. Serving Cary, Raleigh & the Triangle.",
    type: "website",
    locale: "en_US",
    siteName: "Nirvelli Med Spa & Laser",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirvelli Med Spa & Laser | Best Med Spa in Cary NC",
    description: "Award-winning med spa in Cary NC. Facials, massage, acupuncture, laser treatments since 2003.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nirvelli.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Cary" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Nirvelli Med Spa & Laser",
              "image": "https://www.nirvelli.com/logo.png",
              "url": "https://www.nirvelli.com",
              "telephone": "(919) 297-0107",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "151 Quarrystone Circle, Suite 116",
                "addressLocality": "Cary",
                "addressRegion": "NC",
                "postalCode": "27519",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.8013,
                "longitude": -78.7987
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "19:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"], "opens": "07:00", "closes": "19:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "19:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "reviewCount": "200"
              },
              "areaServed": ["Cary", "Raleigh", "Holly Springs", "Morrisville", "Apex"]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden w-full">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
