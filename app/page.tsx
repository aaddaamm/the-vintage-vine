const services = [
  {
    number: "01",
    title: "Hero props",
    copy: "Distinctive objects with enough presence to hold the frame.",
    icon: "lamp",
  },
  {
    number: "02",
    title: "Set dressing",
    copy: "Layered, period-aware details that make a room feel truly lived in.",
    icon: "chair",
  },
  {
    number: "03",
    title: "Specialty & large scale",
    copy: "Unusual statement pieces, oddities, and the things no one else has.",
    icon: "vase",
  },
  {
    number: "04",
    title: "Wardrobe",
    copy: "Characterful clothing and accessories for every kind of story.",
    icon: "hanger",
  },
];

function Starburst({ className = "" }: { className?: string }) {
  return <span className={`starburst ${className}`} aria-hidden="true" />;
}

function MovieCamera() {
  return (
    <div className="camera" aria-hidden="true">
      <div className="reel reelOne"><i /><i /><i /><i /></div>
      <div className="reel reelTwo"><i /><i /><i /><i /></div>
      <div className="cameraBody" />
      <div className="cameraLens" />
      <div className="cameraLeg cameraLegOne" />
      <div className="cameraLeg cameraLegTwo" />
    </div>
  );
}

function PropIcon({ type }: { type: string }) {
  return (
    <div className={`propIcon propIcon-${type}`} aria-hidden="true">
      <span />
      <i />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="miniBrand" href="#top" aria-label="The Vintage Vine, home">
          <span>TVV</span>
          <strong>The Vintage Vine</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#collection">Collection</a>
          <a className="headerContact" href="#contact">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroTicket">
          <div className="ticketMain">
            <div className="cameraPanel">
              <div>
                <p>Props &amp;<br />Set Dressing</p>
                <span className="beam" aria-hidden="true" />
              </div>
              <MovieCamera />
            </div>
            <div className="titlePanel">
              <span>The</span>
              <h1>Vintage Vine</h1>
            </div>
            <a className="numberPanel" href="tel:4018302068">
              <span>No.</span> 401-830-2068
            </a>
          </div>
          <div className="ticketStub">
            <div className="stars">
              <Starburst className="starOne" />
              <Starburst className="starTwo" />
              <Starburst className="starThree" />
              <Starburst className="starFour" />
            </div>
            <p>Cranston, RI</p>
          </div>
        </div>
        <div className="heroIntro">
          <p className="kicker">For film · television · theater · photography</p>
          <h2>
            Perfect Props. <em>Distinctive Details.</em><br />
            Expert Sourcing. <em>Camera Ready.</em>
          </h2>
          <a className="circleLink" href="#contact">
            Start<br />the search <span aria-hidden="true">↘</span>
          </a>
        </div>
        <p className="scrollCue" aria-hidden="true">Roll down ↓</p>
      </section>

      <section className="story" id="collection">
        <div className="filmLeader" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
        </div>
        <p className="sectionLabel">The right thing, right on cue</p>
        <div className="storyGrid">
          <h2>Every set tells a story.<br /><em>We find the details.</em></h2>
          <div>
            <p>
              Whether you need a single hero prop, period-accurate set dressing,
              or an entire room filled with character, The Vintage Vine sources
              distinctive vintage, antique, and contemporary pieces for film,
              television, theater, photography, and commercial productions.
            </p>
            <p>
              Looking for something unusual? We&apos;ll help you find it.
            </p>
          </div>
        </div>
        <div className="stamp" aria-hidden="true">
          <span>Camera</span>
          <strong>READY</strong>
          <small>CRANSTON · RHODE ISLAND</small>
        </div>
      </section>

      <section className="services" id="services">
        <div className="servicesHeading">
          <div>
            <p className="sectionLabel">The collection</p>
            <h2>Plenty of character.<br />No stand-ins.</h2>
          </div>
          <p>
            From a single impossible find to a fully dressed space, each search
            starts with the story you need to tell.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.number}>
              <div className="frameTop">
                <span>Frame {service.number}</span>
                <Starburst />
              </div>
              <div className="propStage">
                <PropIcon type={service.icon} />
                <span className="photoNote">Your prop photography</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
        <p className="collectionNote">
          The archive keeps growing. Ask about furnishings, practicals,
          tabletop, smalls, ephemera, clothing, accessories, and wonderfully
          specific oddities.
        </p>
      </section>

      <section className="contact" id="contact">
        <Starburst className="contactStarOne" />
        <Starburst className="contactStarTwo" />
        <div className="contactCopy">
          <p className="sectionLabel">Have a vision in mind?</p>
          <h2>Lights.<br />Camera.<br /><em>Action.</em></h2>
        </div>
        <div className="clapper" aria-hidden="true">
          <div className="clapperTop" />
          <div className="clapperBody">
            <span>The Vintage Vine</span>
          </div>
        </div>
        <div className="contactDetails">
          <p>
            Need help tracking down something unusual?<br />
            Tell Niki what&apos;s on the call sheet.
          </p>
          <strong>Niki Robinson</strong>
          <a href="tel:4018302068">(401) 830-2068</a>
          <a href="mailto:TheVintageVinePVD@gmail.com">
            TheVintageVinePVD@gmail.com
          </a>
          <span>Cranston, Rhode Island</span>
        </div>
      </section>

      <footer>
        <a className="miniBrand footerBrand" href="#top">
          <span>TVV</span>
          <strong>The Vintage Vine</strong>
        </a>
        <p>Props &amp; set dressing · Cranston, RI</p>
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
