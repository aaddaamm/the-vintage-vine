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
        className="relative isolate aspect-[1800/3130] w-full overflow-hidden bg-[#f9eaf4] bg-[radial-gradient(ellipse_at_18%_24%,#f2c9e77a_0_7%,transparent_8%),radial-gradient(ellipse_at_73%_18%,#f2c9e761_0_9%,transparent_10%),radial-gradient(ellipse_at_38%_78%,#f2c9e770_0_8%,transparent_9%),radial-gradient(ellipse_at_88%_72%,#f2c9e766_0_7%,transparent_8%)] bg-[length:230px_190px] min-[701px]:aspect-[4/5]"
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
          className="absolute inset-x-0 top-[71.5%] h-[7%] opacity-90 [background:linear-gradient(#ffffff9e,#ffffff9e)_center/100%_48%_no-repeat,repeating-linear-gradient(90deg,#f2c9e78c_0_5.5%,transparent_5.5%_9%)] min-[701px]:top-[68%]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-[1]">
          <h2
            className="absolute top-[4%] left-[2%] m-0 font-['Limelight',sans-serif] text-[13cqw] leading-[0.98] font-normal tracking-[-0.04em] text-white [-webkit-text-stroke:clamp(1px,0.13cqw,2px)_#242122] min-[701px]:top-[3%] min-[701px]:text-[9cqw]"
            id="story-title"
          >
            Details
            <br />
            tell the story.
          </h2>
          <p className="absolute top-[20.5%] left-[9%] m-0 text-[7cqw] font-bold min-[701px]:top-[18%] min-[701px]:text-[5.8cqw]">
            We find the right ones.
          </p>

          <div className="absolute top-[38.5%] right-[3%] left-[2%] min-[701px]:top-[32%]">
            <h3 className="m-0 mb-[8%] text-[9cqw] leading-none min-[701px]:text-[6.5cqw]">
              Whether you need…
            </h3>
            <ul className="ml-[23%] grid list-disc gap-[6cqw] pl-[1.2em] text-[4.6cqw] leading-[1.15] font-bold min-[701px]:gap-[4.5cqw] min-[701px]:text-[3.8cqw]">
              <li>a single large scale prop</li>
              <li>period accurate set dressing</li>
              <li>unique character details</li>
              <li>or something else entirely</li>
            </ul>
          </div>

          <p className="absolute top-[77%] right-[5%] left-[5%] m-0 text-justify text-[5.5cqw] leading-[1.35] min-[701px]:top-[75%] min-[701px]:text-[4cqw]">
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
            className="m-0 text-[8cqw] leading-[0.9] font-normal tracking-[-0.055em] whitespace-nowrap min-[701px]:text-[6.8cqw]"
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
            className="absolute top-[62%] right-[3%] text-[clamp(28px,7cqw,112px)] leading-none text-[#d95e9b]"
            aria-hidden="true"
          >
            ✦ ✦
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
        <div className="absolute top-0 left-0 flex h-[11.5%] w-[58%] items-center bg-[#f9eaf4] bg-[radial-gradient(ellipse_at_18%_24%,#f2c9e77a_0_7%,transparent_8%),radial-gradient(ellipse_at_73%_18%,#f2c9e761_0_9%,transparent_10%),radial-gradient(ellipse_at_38%_78%,#f2c9e770_0_8%,transparent_9%),radial-gradient(ellipse_at_88%_72%,#f2c9e766_0_7%,transparent_8%)] bg-[length:230px_190px] px-[4%]">
          <h2
            className="m-0 rotate-[-7deg] font-['Brush_Script_MT','Segoe_Script',cursive] text-[20cqw] leading-none font-normal text-white [text-shadow:0_0_4px_#c94ee7,0_0_12px_#d95ff2,0_0_28px_#e48bfa] [-webkit-text-stroke:1px_#d863eb] min-[701px]:text-[10cqw]"
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
              className="block font-['Limelight',sans-serif] text-[17cqw] leading-[0.98] font-normal tracking-[-0.055em] text-white [-webkit-text-stroke:clamp(1px,0.14cqw,2px)_#555] min-[701px]:text-[10.5cqw]"
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
          <strong className="flex min-h-[1.2em] items-center justify-center bg-[#4e4949] text-center text-[12cqw] leading-none font-normal text-white no-underline min-[701px]:text-[8cqw]">
            Niki Robinson
          </strong>
          <a
            className="flex min-h-[1.28em] items-center justify-center bg-[#050505] text-center text-[12.2cqw] leading-none text-white no-underline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#f2c9e7] min-[701px]:text-[9cqw]"
            href="tel:+14018302068"
          >
            401-830-2068
          </a>
          <a
            className="flex min-h-[1.55em] items-center justify-center bg-[#4c4848] text-center text-[5cqw] leading-none font-bold text-white no-underline [overflow-wrap:anywhere] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#f2c9e7] min-[701px]:text-[4.3cqw]"
            href="mailto:TheVintageVinePVD@gmail.com"
          >
            TheVintageVinePVD@gmail.com
          </a>
        </address>
      </section>
    </main>
  );
}
