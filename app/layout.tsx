import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MobileCTA from "@/components/MobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a0f0a",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://archetype-coffee.vercel.app'),
  title: "Archetype Coffee | Specialty Coffee in Fitzrovia, London",
  description: "Visit Archetype Coffee at 31 Riding House Street, London — a cosy specialty coffee shop serving espresso, flat whites, matcha, cold brew, bubble tea, smoothies, and signature drinks in the heart of Fitzrovia.",
  keywords: ["Archetype Coffee", "coffee shop Fitzrovia", "specialty coffee London", "coffee near Oxford Circus", "flat white London", "matcha London", "Riding House Street coffee", "coffee shop London"],
  authors: [{ name: "Archetype Creative" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Archetype Coffee | Specialty Coffee in Fitzrovia, London",
    description: "Visit Archetype Coffee at 31 Riding House Street, London — a cosy specialty coffee shop in the heart of Fitzrovia.",
    url: "https://archetype-coffee.vercel.app",
    siteName: "Archetype Coffee",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Archetype Coffee Fitzrovia",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archetype Coffee | Specialty Coffee in Fitzrovia, London",
    description: "Visit Archetype Coffee at 31 Riding House Street, London — a cosy specialty coffee shop in the heart of Fitzrovia.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Archetype Coffee",
    "image": "https://archetype-coffee.vercel.app/og-image.jpg",
    "@id": "https://archetype-coffee.vercel.app",
    "url": "https://archetype-coffee.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "31 Riding House St",
      "addressLocality": "London",
      "postalCode": "W1W 7DY",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5185577,
      "longitude": -0.1409618
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "388"
    },
    "hasMap": "https://maps.app.goo.gl/GePTHSQfnDJdXdzh9",
    "priceRange": "£",
    "servesCuisine": ["Coffee", "Matcha", "Signature Alchemies"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="noise-overlay" />
        {children}
        <MobileCTA />
      </body>
    </html>
  );
}
