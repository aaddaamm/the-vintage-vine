import Image from "next/image";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-vintage-vine.vercel.app";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Vintage Vine",
  url: siteUrl,
  image: `${siteUrl}/canva-original/final-hero.webp`,
  description:
    "Prop sourcing and set dressing for film, television, photography, theater, and commercial productions.",
  telephone: "+1-401-830-2068",
  email: "TheVintageVinePVD@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cranston",
    addressRegion: "RI",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Niki Robinson",
  },
  knowsAbout: [
    "Prop sourcing",
    "Set dressing",
    "Large-scale props",
    "Period-accurate props",
    "Vintage objects",
    "Antiques",
    "Wardrobe",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
        }}
      />

      <header className="hero" aria-label="The Vintage Vine">
        <Image
          className="sectionArtwork"
          src="/canva-original/final-hero.webp"
          alt=""
          width={1800}
          height={1235}
          priority
          unoptimized
        />

        <div className="srOnly">
          <p>Props &amp; Set Dressing</p>
          <h1>The Vintage Vine</h1>
          <p>No. 401-830-2068</p>
          <p>Cranston, RI</p>
        </div>

        <p className="heroTagline">We find the right thing, right on cue</p>
      </header>

      <section className="story" id="story" aria-labelledby="story-title">
        <div className="filmReel" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="storyInner">
          <h2 id="story-title">
            Details
            <br />
            tell the story.
          </h2>
          <p className="storyLead">We find the right ones.</p>

          <div className="needs">
            <h3>Whether you need…</h3>
            <ul>
              <li>a single large scale prop</li>
              <li>period accurate set dressing</li>
              <li>unique character details</li>
              <li>or something else entirely</li>
            </ul>
          </div>

          <p className="storyBody">
            <strong>The Vintage Vine</strong> is here to help. We use our large
            network of sourcing partners to supply vintage, antique &amp;
            contemporary pieces to bring productions to life.
          </p>
        </div>
      </section>

      <section
        className="collection"
        id="collection"
        aria-labelledby="collection-title"
      >
        <Image
          className="sectionArtwork"
          src="/canva-original/final-collection.webp"
          alt=""
          width={1800}
          height={1958}
          unoptimized
        />
        <div className="collectionCard">
          <p className="eyebrow">The collection</p>
          <h2 id="collection-title">
            Plenty of character.
            <br />
            No stand-ins.
          </h2>
          <p>
            From a single impossible find to a fully dressed space, each search
            starts with the story you need to tell.
          </p>
        </div>
      </section>

      <section className="gallery" id="gallery" aria-labelledby="gallery-title">
        <Image
          className="sectionArtwork"
          src="/canva-original/final-gallery.webp"
          alt="Vintage props including a card catalog, china, bridal shoes, artwork, a wooden barrel, a novelty lamp, a diamond chair, a handbag, and a raffle drum."
          width={1800}
          height={6399}
          unoptimized
        />
        <div className="galleryTitle">
          <h2 id="gallery-title">Gallery</h2>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <Image
          className="sectionArtwork"
          src="/canva-original/final-contact.webp"
          alt=""
          width={1800}
          height={2401}
          unoptimized
        />

        <h2 className="actionWords" id="contact-title">
          <span>Lights.</span>
          <span>Camera.</span>
          <span>Action.</span>
        </h2>

        <address className="contactDetails">
          <strong>Niki Robinson</strong>
          <a href="tel:+14018302068">401-830-2068</a>
          <a href="mailto:TheVintageVinePVD@gmail.com">
            TheVintageVinePVD@gmail.com
          </a>
        </address>
      </section>
    </main>
  );
}
