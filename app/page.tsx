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
          src="/canva-original/homepage-final.webp"
          alt="The Vintage Vine prop and set dressing collection, featuring classic cinema imagery, vintage objects, filmstrip frames, and contact information."
          width={1800}
          height={15124}
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
    </main>
  );
}
