import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="hero" aria-label="The Vintage Vine">
        <Image
          className="sectionArtwork"
          src="/canva-original/final-hero.webp"
          alt="A classic cinema collage surrounding The Vintage Vine ticket logo."
          width={1800}
          height={1235}
          priority
          unoptimized
        />
        <p className="heroTagline">We find the right thing, right on cue</p>
      </header>

      <section className="story" aria-labelledby="story-title">
        <div className="filmReel" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="storyInner">
          <h1 id="story-title">Details tell the story.</h1>
          <p className="storyLead">We find the right ones.</p>

          <div className="needs">
            <h2>Whether you need…</h2>
            <ul>
              <li>a single large-scale prop</li>
              <li>period-accurate set dressing</li>
              <li>unique character details</li>
              <li>or something else entirely</li>
            </ul>
          </div>

          <p className="storyBody">
            <strong>The Vintage Vine</strong> is here to help. We use our large
            network of sourcing partners to supply vintage, antique, and
            contemporary pieces that bring productions to life.
          </p>
        </div>
      </section>

      <section className="collection" aria-labelledby="collection-title">
        <Image
          className="sectionArtwork"
          src="/canva-original/final-collection.webp"
          alt="A vintage cinema interior with a sweeping pink arrow and starbursts."
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

      <section className="gallery" aria-labelledby="gallery-title">
        <Image
          className="sectionArtwork"
          src="/canva-original/final-gallery.webp"
          alt="A filmstrip gallery of vintage props including a card catalog, china, bridal shoes, artwork, a wooden barrel, a novelty lamp, a diamond chair, a handbag, and a raffle drum."
          width={1800}
          height={6399}
          unoptimized
        />
        <div className="galleryTitle">
          <h2 id="gallery-title">Gallery</h2>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <Image
          className="sectionArtwork"
          src="/canva-original/final-contact.webp"
          alt="A black and cream movie clapperboard."
          width={1800}
          height={2401}
          unoptimized
        />

        <div className="actionWords" id="contact-title">
          <span>Lights.</span>
          <span>Camera.</span>
          <span>Action.</span>
        </div>

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
