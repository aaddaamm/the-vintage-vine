import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page Not Found | The Vintage Vine",
  description: "The requested page could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className="bg-[#f9eaf4]">
      <body className="m-0 grid min-h-screen place-items-center bg-[#f9eaf4] px-6 font-serif text-[#242122]">
        <main className="max-w-xl text-center">
          <p className="m-0 text-sm font-bold tracking-[0.2em] text-[#6d5864] uppercase">
            404
          </p>
          <h1 className="mt-4 mb-0 text-5xl leading-none font-black tracking-[-0.04em] sm:text-7xl">
            This detail is missing.
          </h1>
          <p className="mx-auto mt-6 mb-0 max-w-md text-lg leading-relaxed">
            The page you were looking for is not here, but the right prop still
            might be.
          </p>
          <Link
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#242122] px-7 py-3 text-sm font-bold tracking-[0.08em] text-white uppercase no-underline hover:bg-[#a63f73] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#d95e9b]"
            href="/"
          >
            Return home
          </Link>
        </main>
      </body>
    </html>
  );
}
