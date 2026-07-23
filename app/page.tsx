const offerings = [
  {
    number: "01",
    title: "Specialty props",
    description:
      "Unusual, character-rich objects that give a scene history, texture, and a point of view.",
  },
  {
    number: "02",
    title: "Large-scale pieces",
    description:
      "Statement pieces and oversized finds for sets that need more than a finishing touch.",
  },
  {
    number: "03",
    title: "Wardrobe & clothing",
    description:
      "Distinctive clothing and accessories chosen to make a character feel immediately believable.",
  },
  {
    number: "04",
    title: "The hard-to-find",
    description:
      "Specific, strange, and seemingly impossible requests are where the real fun begins.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="The Vintage Vine home">
          <span aria-hidden="true">V</span>
          The Vintage Vine
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#offerings">Offerings</a>
          <a className="navCta" href="#contact">
            Get in touch
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Props · Set dressing · Wardrobe</p>
          <h1>
            The details make
            <em> the world believable.</em>
          </h1>
          <p className="heroIntro">
            Hard-to-find, unusual, and wonderfully specific pieces for film,
            television, and every set with a story to tell.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#contact">
              Start a prop search
            </a>
            <a className="textLink" href="#about">
              Our story <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        <div className="heroArt" aria-label="An eclectic arrangement of prop category cards">
          <p className="catalogLabel">Available for the extraordinary</p>
          <div className="propCard propCardOne">
            <span>Oversized</span>
            <strong>SET<br />PIECES</strong>
            <small>Big presence required</small>
          </div>
          <div className="propCard propCardTwo">
            <span>Wardrobe</span>
            <strong>WORN<br />JUST RIGHT</strong>
            <small>Character starts here</small>
          </div>
          <div className="propCard propCardThree">
            <span>Oddities</span>
            <strong>THE HARD<br />TO FIND</strong>
            <small>Try us</small>
          </div>
          <p className="catalogNumber">Prop file<br />No. 001</p>
        </div>
      </section>

      <section className="intro" id="about">
        <p className="sectionLabel">A note from the founder</p>
        <div>
          <h2>For worlds that need to feel lived in.</h2>
          <p>
            The Vintage Vine sources and curates props, set dressing, large-scale
            pieces, specialty items, clothing, and the wonderfully unusual.
            Every find is chosen to help production teams build authentic
            spaces and believable characters—down to the last curious detail.
          </p>
        </div>
      </section>

      <section className="offerings" id="offerings">
        <div className="sectionHeading">
          <p className="sectionLabel">What we offer</p>
          <h2>Specific, storied,<br />and set-ready.</h2>
        </div>
        <div className="offeringGrid">
          {offerings.map((offering) => (
            <article className="offering" key={offering.number}>
              <span>{offering.number}</span>
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel">Let&apos;s connect</p>
        <h2>What are you hunting for?</h2>
        <p>
          Tell us about the production, the period, the character, or the one
          impossible thing you still haven&apos;t found. We love a good search.
        </p>
        <span className="button buttonLight">Contact details coming soon</span>
      </section>

      <footer>
        <a className="wordmark wordmarkFooter" href="#top">
          <span aria-hidden="true">V</span>
          The Vintage Vine
        </a>
        <p>
          Site by{" "}
          <a
            className="developerLink"
            href="https://adamrobinson.tech"
            target="_blank"
            rel="noreferrer"
          >
            Adam Robinson
          </a>
        </p>
        <p>© 2026 The Vintage Vine</p>
      </footer>
    </main>
  );
}
