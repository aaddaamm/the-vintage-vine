import Image from "next/image";

const categories = [
  {
    label: "Furniture",
    image: "/canva-assets/diamond-chair.png",
    alt: "Black vintage chair with a colorful diamond-patterned seat",
    position: "50% 62%",
  },
  {
    label: "Housewares",
    image: "/canva-assets/floral-crock-pot.jpg",
    alt: "Vintage floral crock pot",
    position: "50% 50%",
  },
  {
    label: "Oddities",
    image: "/canva-assets/peewee-doll.jpg",
    alt: "Pee-wee Herman character doll",
    position: "50% 42%",
  },
  {
    label: "Wardrobe",
    image: "/canva-assets/silver-necklace.jpg",
    alt: "Vintage silver statement necklace",
    position: "50% 35%",
  },
  {
    label: "Large scale",
    image: "/canva-assets/pink-dollhouse.jpg",
    alt: "Large pink and yellow vintage dollhouse",
    position: "50% 53%",
  },
  {
    label: "Period pieces",
    image: "/canva-assets/vintage-board-game.jpg",
    alt: "Ornate vintage board game in warm colors",
    position: "50% 50%",
  },
];

const featureFrames = [
  {
    number: "01",
    title: "Hero pieces",
    image: "/canva-assets/card-catalog-cabinet.jpg",
    alt: "Large wooden card-catalog cabinet with one drawer open",
    position: "50% 54%",
  },
  {
    number: "02",
    title: "Period detail",
    image: "/canva-assets/vintage-kitchenware.jpg",
    alt: "Shelf of colorful vintage kitchenware and glassware",
    position: "50% 50%",
  },
  {
    number: "03",
    title: "Industrial",
    image: "/canva-assets/metal-floor-fan.jpg",
    alt: "Large vintage metal floor fan",
    position: "50% 48%",
  },
  {
    number: "04",
    title: "Statement pieces",
    image: "/canva-assets/blue-rattan-table.jpg",
    alt: "Blue painted vintage rattan side table",
    position: "50% 48%",
  },
];

function Star({ className = "" }: { className?: string }) {
  return <span className={`star ${className}`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="miniMark" href="#top" aria-label="The Vintage Vine home">
          <span>TVV</span>
          <strong>Props &amp; Set Dressing</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#showroom">Showroom</a>
          <a className="headerCta" href="#contact">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroBackdrop" aria-hidden="true">
          <div className="screen screenOne"><span>SET</span></div>
          <div className="screen screenTwo"><span>PROP</span></div>
          <div className="screen screenThree"><span>FOUND</span></div>
        </div>

        <div className="ticketWrap">
          <div className="brandTicket">
            <div className="ticketMain">
              <div className="projectorPanel">
                <p>Props &amp;<br />Set Dressing</p>
                <div className="projector" aria-hidden="true">
                  <span className="reel reelOne" />
                  <span className="reel reelTwo" />
                  <span className="cameraBody" />
                  <span className="cameraLeg cameraLegOne" />
                  <span className="cameraLeg cameraLegTwo" />
                </div>
              </div>
              <div className="ticketName">
                <span>The</span>
                <strong>Vintage Vine</strong>
              </div>
              <a className="ticketPhone" href="tel:4018302068">
                No. 401-830-2068
              </a>
            </div>
            <div className="ticketStub">
              <div className="starField" aria-hidden="true">
                <Star className="starOne" />
                <Star className="starTwo" />
                <Star className="starThree" />
                <Star className="starFour" />
              </div>
              <span>Cranston, RI</span>
            </div>
          </div>
        </div>

        <div className="heroCopy">
          <p className="kicker">For film · television · theater · photography</p>
          <h1>
            Perfect Props. Distinctive Details.
            <span> Expert Sourcing. Camera Ready.</span>
          </h1>
          <a className="primaryButton" href="#contact">
            Start a prop search <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="story" id="services">
        <div className="filmEdge filmEdgeTop" aria-hidden="true" />
        <p className="sectionCue">The story / 001</p>
        <p className="storyLead">
          Whether you need a single hero prop, period-accurate set dressing, or
          an entire room filled with character, The Vintage Vine sources
          distinctive vintage, antique, and contemporary pieces for film,
          television, theater, photography, and commercial productions.
        </p>
        <p className="storyAside">
          Looking for something unusual? <strong>We&apos;ll help you find it.</strong>
        </p>
        <div className="filmEdge filmEdgeBottom" aria-hidden="true" />
      </section>

      <section className="categorySection" aria-labelledby="category-heading">
        <div className="sectionTitle">
          <p className="sectionCue">Browse the collection / 002</p>
          <h2 id="category-heading">A little bit of everything.</h2>
          <p>Curated with character. Sourced with a sharp eye for authenticity.</p>
        </div>
        <div className="categoryGrid">
          {categories.map((category, index) => (
            <article className="category" key={category.label}>
              <div className="categoryStill">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 700px) 42vw, (max-width: 980px) 28vw, 14vw"
                  style={{ objectPosition: category.position }}
                />
              </div>
              <p><span>0{index + 1}</span>{category.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showroom" id="showroom" aria-labelledby="showroom-heading">
        <div className="showroomHeading">
          <p className="sectionCue">Featured finds / 003</p>
          <h2 id="showroom-heading">From the prop room</h2>
          <p>Photo-ready spaces for Niki&apos;s latest finds.</p>
        </div>
        <div className="filmstrip">
          <div className="perforations perforationsTop" aria-hidden="true" />
          <div className="filmFrames">
            {featureFrames.map((frame) => (
              <article className="filmFrame" key={frame.number}>
                <div className="frameStill">
                  <Image
                    src={frame.image}
                    alt={frame.alt}
                    fill
                    sizes="(max-width: 700px) 96vw, (max-width: 980px) 48vw, 25vw"
                    style={{ objectPosition: frame.position }}
                  />
                </div>
                <p><span>{frame.number}</span>{frame.title}</p>
              </article>
            ))}
          </div>
          <div className="perforations perforationsBottom" aria-hidden="true" />
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactIntro">
          <p className="sectionCue">Next production / 004</p>
          <h2>Have a vision in mind—or something unusual to track down?</h2>
          <p>Tell Niki what the scene needs. Let&apos;s make it feel real.</p>
          <div className="actionWords" aria-hidden="true">
            <span>Lights.</span><span>Camera.</span><span>Action.</span>
          </div>
        </div>

        <div className="clapper">
          <div className="clapperTop" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
          <div className="clapperBody">
            <p>Props &amp; Set Dressing</p>
            <h3>Niki Robinson</h3>
            <a href="tel:4018302068">(401) 830-2068</a>
            <a className="email" href="mailto:TheVintageVinePVD@gmail.com">
              TheVintageVinePVD@gmail.com
            </a>
            <span>Cranston, Rhode Island</span>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 The Vintage Vine · Props &amp; Set Dressing</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
