import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description = `${site.legalName} is an Oklahoma City retail ecommerce shop for sports gear. We stock running, training, team, outdoor and recovery kit, and we ship it ourselves.`;

export const metadata: Metadata = {
  title: {
    default: `${site.brandName} — Sports gear from Oklahoma City`,
    template: `%s | ${site.brandName}`,
  },
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.brandName} — Sports gear from Oklahoma City`,
    description,
    siteName: site.brandName,
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportingGoodsStore",
  name: site.legalName,
  alternateName: site.brandName,
  description,
  telephone: site.phoneTel,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CartProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
