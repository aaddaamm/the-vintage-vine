import Image from "next/image";

const catalog = [
  {
    id: "A–01",
    title: "Hero props",
    note: "The one object the scene turns around.",
    image: "/canva-assets/pee-wee-figure.jpg",
    alt: "Vintage Pee-wee Herman figure in a gray suit and red bow tie",
    position: "50% 38%",
  },
  {
    id: "B–17",
    title: "Period pieces",
    note: "Era-specific details, sourced with care.",
    image: "/canva-assets/vintage-kitchenware.jpg",
    alt: "Shelf of vintage green glassware and patterned kitchenware",
    position: "50% 50%",
  },
  {
    id: "C–08",
    title: "Set dressing",
    note: "Character for corners, shelves, and whole rooms.",
    image: "/canva-assets/carved-wood-desk.jpg",
    alt: "Large rustic desk assembled from carved wood panels",
    position: "50% 50%",
  },
  {
    id: "D–24",
    title: "The unusual",
    note: "Odd, oversized, elusive, and worth the search.",
    image: "/canva-assets/pink-vintage-dollhouse.jpg",
    alt: "Large pink and cream vintage dollhouse",
    position: "50% 50%",
  },
];

function Starburst({ className = "" }: { className?: string }) {
  return <span className={`starburst ${className}`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="miniMark" href="#top" aria-label="The Vintage Vine home">
          <span className="miniReel" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            The Vintage Vine
            <small>Props &amp; Set Dressing</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#catalog">The archive</a>
          <a className="headerContact" href="#contact">
            Start a search
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroCinema" aria-hidden="true">
          <Image
            src="/canva-assets/classic-cinema-collage.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="heroGrain" aria-hidden="true" />
        <div className="heroCopy">
          <p className="kicker">Props &amp; Set Dressing · Cranston, RI</p>
          <h1>
            Perfect Props.
            <span>Distinctive Details.</span>
          </h1>
          <p className="heroTagline">Expert Sourcing. Camera Ready.</p>
          <p className="heroIntro">
            Distinctive vintage, antique, and contemporary pieces for film,
            television, theater, photography, and commercial productions.
          </p>
          <div className="heroActions">
            <a className="button buttonPink" href="#contact">
              Tell us what you need
            </a>
            <a className="quietLink" href="#catalog">
              Browse the departments <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="heroTicket" aria-label="The Vintage Vine calling card">
          <div className="ticketLeft">
            <div className="projector" aria-hidden="true">
              <span className="reel reelOne"><i /><i /><i /></span>
              <span className="reel reelTwo"><i /><i /><i /></span>
              <span className="cameraBody" />
              <span className="cameraLens" />
              <span className="tripod tripodOne" />
              <span className="tripod tripodTwo" />
              <span className="lightBeam" />
            </div>
            <p>Props &amp;<br />Set Dressing</p>
            <div className="ticketTitle">
              <span>The</span>
              <strong>Vintage Vine</strong>
            </div>
            <a href="tel:4018302068">No. 401–830–2068</a>
          </div>
          <div className="ticketRight">
            <Starburst className="starOne" />
            <Starburst className="starTwo" />
            <Starburst className="starThree" />
            <span className="diamond diamondOne" aria-hidden="true" />
            <span className="diamond diamondTwo" aria-hidden="true" />
            <strong>Cranston, RI</strong>
          </div>
        </div>
        <p className="frameCode frameCodeLeft">TVV / ROLL 01</p>
        <p className="frameCode frameCodeRight">FRAME 401</p>
      </section>

      <div className="sprocketRule" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => <i key={index} />)}
      </div>

      <section className="manifesto" id="services">
        <div className="manifestoLabel">
          <span>Production notes</span>
          <strong>01</strong>
        </div>
        <div className="manifestoCopy">
          <p className="sectionKicker">For the scene behind the scene</p>
          <h2>
            A good prop does more than fill space.
            <em> It makes the story feel true.</em>
          </h2>
          <p>
            Whether you need a single hero prop, period-accurate set dressing,
            or an entire room filled with character, The Vintage Vine sources
            distinctive pieces with an eye for story, texture, and the telling
            detail. Looking for something unusual? We&apos;ll help you find it.
          </p>
        </div>
      </section>

      <section className="catalog" id="catalog">
        <div className="catalogHeading">
          <div>
            <p className="sectionKicker">Selected departments</p>
            <h2>The curiosity archive</h2>
          </div>
          <p>
            Large-scale pieces, specialty items, wardrobe, and hard-to-find
            objects—sourced for the world you&apos;re building.
          </p>
        </div>

        <div className="filmStrip">
          <div className="filmEdge filmEdgeTop" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
          </div>
          <div className="filmFrames">
            {catalog.map((item) => (
              <article className="catalogCard" key={item.id}>
                <div className="propScene">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 25vw"
                    style={{ objectPosition: item.position }}
                  />
                  <span className="frameNumber" aria-hidden="true">
                    {item.id}
                  </span>
                </div>
                <div className="catalogCardCopy">
                  <span>{item.id}</span>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="filmEdge filmEdgeBottom" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
          </div>
        </div>
        <p className="catalogFootnote">
          Inventory shown here is illustrative. Every production starts with a
          fresh conversation and a very specific wish list.
        </p>
      </section>

      <section className="contact" id="contact">
        <div className="contactStars" aria-hidden="true">
          <Starburst className="contactStarOne" />
          <Starburst className="contactStarTwo" />
          <span className="diamond contactDiamond" />
        </div>
        <div className="contactIntro">
          <p className="sectionKicker">Call sheet</p>
          <h2>Have a vision in mind—or something impossible to find?</h2>
          <p>Let&apos;s talk. The stranger the request, the better.</p>
        </div>
        <div className="contactSlate">
          <div className="slateTop" aria-hidden="true">
            <i /><i /><i /><i /><i />
          </div>
          <p>Lights. Camera. Action.</p>
          <strong>Niki Robinson</strong>
          <a href="tel:4018302068">(401) 830-2068</a>
          <a href="mailto:TheVintageVinePVD@gmail.com">
            TheVintageVinePVD@gmail.com
          </a>
          <span>Cranston, Rhode Island</span>
        </div>
      </section>

      <footer>
        <a className="footerMark" href="#top">
          The Vintage Vine <span>Props &amp; Set Dressing</span>
        </a>
        <p>Distinctive finds for convincing worlds.</p>
        <p className="siteCredit">
          Site by{" "}
          <a href="https://adamrobinson.tech" target="_blank" rel="noreferrer">
            Adam Robinson
          </a>
        </p>
      </footer>
    </main>
  );
}
