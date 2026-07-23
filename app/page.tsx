const categories = [
  { label: "Furniture", className: "furniture" },
  { label: "Housewares", className: "housewares" },
  { label: "Oddities", className: "oddities" },
  { label: "Wardrobe", className: "wardrobe" },
  { label: "Large scale", className: "largeScale" },
  { label: "Period pieces", className: "period" },
];

const featureFrames = [
  { number: "01", title: "Hero pieces", className: "cabinet" },
  { number: "02", title: "Period detail", className: "telephone" },
  { number: "03", title: "Tabletop", className: "tabletop" },
  { number: "04", title: "Wardrobe", className: "wardrobeRack" },
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
              <div className={`categoryStill ${category.className}`} aria-hidden="true">
                <span className="stillObject" />
                <span className="stillShadow" />
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
          <p>Photo-ready spaces for Nikki&apos;s latest finds.</p>
        </div>
        <div className="filmstrip">
          <div className="perforations perforationsTop" aria-hidden="true" />
          <div className="filmFrames">
            {featureFrames.map((frame) => (
              <article className="filmFrame" key={frame.number}>
                <div className={`frameStill ${frame.className}`} aria-hidden="true">
                  <span className="frameObject" />
                  <span className="frameDetail" />
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
          <p>Tell Nikki what the scene needs. Let&apos;s make it feel real.</p>
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
            <h3>Nikki Robinson</h3>
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
        <p>
          Site by{" "}
          <a href="https://adamrobinson.tech" target="_blank" rel="noreferrer">
            Adam Robinson
          </a>
        </p>
      </footer>
    </main>
  );
}
