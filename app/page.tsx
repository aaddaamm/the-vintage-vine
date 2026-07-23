import Image from "next/image";

export default function Home() {
  return (
    <main className="referencePage">
      <h1 className="srOnly">
        The Vintage Vine — props and set dressing
      </h1>

      <div className="poster">
        <Image
          className="posterArtwork"
          src="/canva-original/homepage.jpg"
          alt="The original Vintage Vine Canva website design by Niki Robinson, featuring classic cinema imagery, a pink ticket logo, vintage props, filmstrip frames, and contact information."
          width={601}
          height={2048}
          priority
          unoptimized
        />

        <a
          className="contactHotspot phoneHotspot"
          href="tel:+14018302068"
          aria-label="Call The Vintage Vine at 401-830-2068"
        />
        <a
          className="contactHotspot emailHotspot"
          href="mailto:TheVintageVinePVD@gmail.com"
          aria-label="Email The Vintage Vine at TheVintageVinePVD@gmail.com"
        />
      </div>

      <footer className="referenceFooter">
        <span>Original Canva direction by Niki Robinson</span>
        <a
          href="https://adamrobinson.tech"
          target="_blank"
          rel="noreferrer"
        >
          Site by Adam Robinson
        </a>
      </footer>
    </main>
  );
}
