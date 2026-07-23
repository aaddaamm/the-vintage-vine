import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000",
  ),
  title: "The Vintage Vine",
  description:
    "Hard-to-find props, set dressing, specialty pieces, and wardrobe for film and television.",
  openGraph: {
    title: "The Vintage Vine",
    description: "Curious things for convincing worlds.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Vintage Vine — curious things for convincing worlds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vintage Vine",
    description: "Curious things for convincing worlds.",
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
