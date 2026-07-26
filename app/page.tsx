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

const reelRotations = [
  "rotate-0",
  "rotate-[72deg]",
  "rotate-[144deg]",
  "rotate-[216deg]",
  "rotate-[288deg]",
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1100px] overflow-clip [container-type:inline-size]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
        }}
      />

      <header
        className="relative isolate w-full"
        aria-label="The Vintage Vine"
      >
        <Image
          className="relative z-[-1] block h-auto w-full"
          src="/canva-original/final-hero.webp"
          alt=""
          width={1800}
          height={1235}
          priority
          unoptimized
        />

        <div className="sr-only">
          <p>Props &amp; Set Dressing</p>
          <h1>The Vintage Vine</h1>
          <p>No. 401-830-2068</p>
          <p>Cranston, RI</p>
        </div>

        <p className="absolute inset-x-0 bottom-0 m-0 flex h-[10.7%] items-center justify-center bg-[#050505] px-[4%] text-center font-['Fraunces',Garamond,Georgia,serif] text-[3cqw] font-bold tracking-[0.015em] text-white uppercase">
          We find the right thing, right on cue
        </p>
      </header>

      <section
        className="relative isolate aspect-[1800/3130] w-full overflow-hidden bg-[#f9eaf4] bg-[radial-gradient(ellipse_at_20%_25%,transparent_0_24%,#f2c9e75c_25%_43%,transparent_44%),radial-gradient(ellipse_at_75%_20%,transparent_0_22%,#f2c9e752_23%_42%,transparent_43%),radial-gradient(ellipse_at_35%_78%,transparent_0_25%,#f2c9e757_26%_44%,transparent_45%),radial-gradient(ellipse_at_88%_70%,transparent_0_20%,#f2c9e752_21%_40%,transparent_41%)] bg-[length:170px_145px,210px_175px,190px_165px,155px_135px]"
        id="story"
        aria-labelledby="story-title"
      >
        <div
          className="absolute top-[1%] left-[-15%] h-[43%] w-[74%] rotate-[-18deg] rounded-full border-[clamp(14px,2.5cqw,44px)] border-solid border-[#c691ae38]"
          aria-hidden="true"
        >
          <i className="absolute inset-[22%] rounded-full border-[clamp(16px,2.6cqw,46px)] border-solid border-[#c691ae2e]" />
          {reelRotations.map((rotation) => (
            <span
              className={`absolute top-[8%] left-[39%] h-[22%] w-[22%] origin-[50%_192%] rounded-full bg-[#c691ae33] ${rotation}`}
              key={rotation}
            />
          ))}
        </div>

        <div
          className="absolute inset-x-0 top-[71.5%] flex h-[7%] items-center gap-[1.4%] border-y border-[#e8c8dc99] bg-[#fff9fc99] px-[1.2%] opacity-90"
          aria-hidden="true"
        >
          {Array.from({ length: 11 }, (_, index) => (
            <span
              className="h-[72%] min-w-0 flex-1 rounded-[12%] border border-[#deb9d180] bg-white/30"
              key={index}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-[1]">
          <h2
            className="absolute top-[4%] left-[2%] m-0 font-['Limelight',sans-serif] text-[13cqw] leading-[0.98] font-normal tracking-[-0.04em] text-white [-webkit-text-stroke:clamp(1px,0.13cqw,2px)_#242122]"
            id="story-title"
          >
            Details
            <br />
            tell the story.
          </h2>
          <p className="absolute top-[20.5%] left-[9%] m-0 text-[7cqw] font-bold">
            We find the right ones.
          </p>

          <div className="absolute top-[38.5%] right-[3%] left-[2%]">
            <h3 className="m-0 mb-[8%] text-[9cqw] leading-none">
              Whether you need…
            </h3>
            <ul className="ml-[23%] grid list-disc gap-[6cqw] pl-[1.2em] text-[4.6cqw] leading-[1.15] font-bold">
              <li>a single large scale prop</li>
              <li>period accurate set dressing</li>
              <li>unique character details</li>
              <li>or something else entirely</li>
            </ul>
          </div>

          <p className="absolute top-[77%] right-[5%] left-[5%] m-0 text-justify text-[5.5cqw] leading-[1.35]">
            <strong className="underline underline-offset-[0.1em]">
              The Vintage Vine
            </strong>{" "}
            is here to help. We use our large network of sourcing partners to
            supply vintage, antique &amp; contemporary pieces to bring
            productions to life.
          </p>
        </div>
      </section>

      <section
        className="relative isolate w-full"
        id="collection"
        aria-labelledby="collection-title"
      >
        <Image
          className="relative z-[-1] block h-auto w-full"
          src="/canva-original/final-collection.webp"
          alt=""
          width={1800}
          height={1958}
          unoptimized
        />
        <div className="absolute top-[11%] left-0 min-h-[59%] w-[78.5%] bg-[#fcecf7] px-[3.5%] py-[5%]">
          <p className="m-0 mb-[4%] font-['Arimo',Arial,sans-serif] text-[clamp(8px,1.45cqw,26px)] font-bold tracking-[0.24em] uppercase">
            The collection
          </p>
          <h2
            className="m-0 text-[8cqw] leading-[0.9] font-normal tracking-[-0.055em] whitespace-nowrap"
            id="collection-title"
          >
            Plenty of character.
            <br />
            No stand-ins.
          </h2>
          <p className="mt-[15%] mr-[12%] mb-0 text-[3.6cqw] leading-[1.5]">
            From a single impossible find to a fully dressed space, each search
            starts with the story you need to tell.
          </p>
          <span
            className="absolute top-[57%] right-[3%] flex items-end gap-[0.2cqw] leading-none"
            aria-hidden="true"
          >
            <i className="text-[4.2cqw] not-italic text-[#f6c447]">✦</i>
            <i className="text-[7cqw] not-italic text-[#d95e9b]">✦</i>
          </span>
        </div>
      </section>

      <section
        className="relative isolate w-full"
        id="gallery"
        aria-labelledby="gallery-title"
      >
        <Image
          className="relative z-[-1] block h-auto w-full"
          src="/canva-original/final-gallery.webp"
          alt="Vintage props including a card catalog, china, bridal shoes, artwork, a wooden barrel, a novelty lamp, a diamond chair, a handbag, and a raffle drum."
          width={1800}
          height={6399}
          unoptimized
        />
        <div className="absolute top-0 left-0 flex h-[11.5%] w-[58%] items-center bg-[#f9eaf4] bg-[radial-gradient(ellipse_at_20%_25%,transparent_0_24%,#f2c9e75c_25%_43%,transparent_44%),radial-gradient(ellipse_at_75%_20%,transparent_0_22%,#f2c9e752_23%_42%,transparent_43%),radial-gradient(ellipse_at_35%_78%,transparent_0_25%,#f2c9e757_26%_44%,transparent_45%),radial-gradient(ellipse_at_88%_70%,transparent_0_20%,#f2c9e752_21%_40%,transparent_41%)] bg-[length:170px_145px,210px_175px,190px_165px,155px_135px] px-[4%]">
          <h2
            className="m-0 rotate-[-7deg] font-['Brush_Script_MT','Segoe_Script',cursive] text-[20cqw] leading-none font-normal text-white [text-shadow:0_0_4px_#c94ee7,0_0_12px_#d95ff2,0_0_28px_#e48bfa] [-webkit-text-stroke:1px_#d863eb]"
            id="gallery-title"
          >
            Gallery
          </h2>
        </div>
      </section>

      <section
        className="relative isolate w-full"
        id="contact"
        aria-labelledby="contact-title"
      >
        <Image
          className="relative z-0 block h-auto w-full"
          src="/canva-original/final-contact.webp"
          alt=""
          width={1800}
          height={2401}
          unoptimized
        />

        <h2
          className="absolute top-0 left-0 z-[1] m-0 grid h-[42%] w-[58%] content-center bg-linear-to-r from-[#f7e6f1] to-[#fbf8f9] px-[3%] py-[2.5%]"
          id="contact-title"
        >
          {["Lights.", "Camera.", "Action."].map((word) => (
            <span
              className="block font-['Limelight',sans-serif] text-[17cqw] leading-[0.98] font-normal tracking-[-0.055em] text-white [-webkit-text-stroke:clamp(1px,0.14cqw,2px)_#555]"
              key={word}
            >
              {word}
            </span>
          ))}
        </h2>

        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-[url('/canva-original/final-contact.webp')] bg-[length:100%_100%] bg-center bg-no-repeat [clip-path:polygon(0_45%,100%_30%,100%_100%,0_100%)]"
          aria-hidden="true"
        />

        <address className="absolute top-[70%] right-[5%] bottom-[0.8%] left-[5%] z-[3] grid grid-rows-[32%_40%_28%] gap-0 not-italic">
          <strong className="flex min-h-[1.2em] items-center justify-center bg-[#4e4949] text-center text-[12cqw] leading-none font-normal text-white no-underline">
            Niki Robinson
          </strong>
          <a
            className="flex min-h-[1.28em] items-center justify-center bg-[#050505] text-center text-[12.2cqw] leading-none text-white no-underline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#f2c9e7]"
            href="tel:+14018302068"
          >
            401-830-2068
          </a>
          <a
            className="flex min-h-[1.55em] items-center justify-center bg-[#4c4848] text-center text-[5cqw] leading-none font-bold text-white no-underline [overflow-wrap:anywhere] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#f2c9e7]"
            href="mailto:TheVintageVinePVD@gmail.com"
          >
            TheVintageVinePVD@gmail.com
          </a>
        </address>
      </section>
    </main>
  );
}
