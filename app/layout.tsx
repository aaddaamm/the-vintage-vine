import type { Metadata } from "next";
import { Arimo, Fraunces, Limelight, Sacramento } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import {
  serviceArea,
  siteDescription,
  siteName,
  siteUrl,
} from "./site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});

const limelight = Limelight({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-limelight",
  weight: "400",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-sacramento",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Vintage Vine | Props & Set Dressing in Rhode Island",
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteName} | Props & Set Dressing`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName,
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} — props and set dressing serving ${serviceArea}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Props & Set Dressing`,
    description: siteDescription,
    images: [
      {
        url: "/og.jpg",
        alt: `${siteName} — props and set dressing serving ${serviceArea}`,
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${arimo.variable} ${limelight.variable} ${sacramento.variable} scroll-smooth bg-[#f9eaf4] motion-reduce:scroll-auto`}
    >
      <Analytics />
      <body className="m-0 bg-[#f9eaf4] font-(family-name:--font-fraunces) text-[#242122]">
        {children}
      </body>
    </html>
  );
}
