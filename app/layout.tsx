import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://the-vintage-vine.vercel.app",
  ),
  title: "The Vintage Vine | Props & Set Dressing in Rhode Island",
  description:
    "Distinctive vintage, antique, contemporary, large-scale, and hard-to-find props and set dressing for film, television, photography, theater, and commercial productions.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "props Rhode Island",
    "set dressing Rhode Island",
    "film props",
    "television props",
    "vintage prop sourcing",
    "large-scale props",
    "period-accurate set dressing",
    "Cranston Rhode Island",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "The Vintage Vine | Props & Set Dressing",
    description:
      "Distinctive finds and hard-to-source details for convincing productions.",
    type: "website",
    locale: "en_US",
    siteName: "The Vintage Vine",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Vintage Vine — props and set dressing in Cranston, Rhode Island",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vintage Vine | Props & Set Dressing",
    description:
      "Distinctive finds and hard-to-source details for convincing productions.",
    images: ["/og.png"],
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
