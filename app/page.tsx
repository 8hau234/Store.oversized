"use client";

// simple data for each full-screen section
const SLIDES = [
  {
    label: "STORE OVERSIZED",
    title: "Oversized Comfort.",
    subtitle: "Curated Crocs & Birkenstock in bigger, comfier fits.",
    img: "/hero1.jpg",
  },
  {
    label: "CROCS SELECTION",
    title: "Classic & Mega Crush",
    subtitle: "From clean white classics to chunky platforms.",
    img: "/hero2.jpg",
  },
  {
    label: "BIRKENSTOCK LINEUP",
    title: "Arizona & Boston Essentials",
    subtitle: "Neutral suede, soft footbeds, everyday comfort.",
    img: "/hero3.jpg",
  },
  {
    label: "LAST PAIRS",
    title: "Final Sizes. Don’t Sleep.",
    subtitle: "End-of-run sizes and pre-loved steals, updated weekly.",
    img: "/birken1.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#2e2a24] bg-[#050505]/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* LOGO */}
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light">
            STORE OVERSIZED
          </div>

          {/* NAVIGATION */}
<nav className="hidden gap-6 text-xs md:flex">
  <a
    href="/"
    className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
  >
    Home
  </a>

  <a
    href="/crocs"
    className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
  >
    Crocs
  </a>

  <a
    href="/birkenstock"
    className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
  >
    Birkenstock
  </a>

  <a
    href="/authenticity"
    className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
  >
    Authenticity
  </a>

  <a
    href="/contact"
    className="uppercase tracking-[0.18em] text-[#F5E9D3] font-medium"
  >
    Contact
  </a>
</nav>

          {/* CART */}
          <button className="text-xs uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]">
            Cart (0)
          </button>
        </div>
      </header>

      {/* FULLSCREEN SECTIONS */}
      <main className="bg-[#050505]">
        {SLIDES.map((slide, i) => (
          <section
            key={i}
            className="relative flex min-h-screen w-full items-end justify-start overflow-hidden"
          >
            {/* background image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* dark + beige overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,233,211,0.18),_transparent_55%)] mix-blend-soft-light" />

            {/* content */}
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-20 pt-24">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#C8B79A]">
                <span>{slide.label}</span>
                <span className="h-px w-10 bg-[#C8B79A]" />
                <span>
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              <h1 className="text-4xl font-light leading-tight md:text-6xl text-[#F5E9D3]">
                {slide.title}
              </h1>

              <p className="max-w-xl text-sm md:text-base text-[#E8DCC2]">
                {slide.subtitle}
              </p>

              {/* BUTTONS ONLY ON FIRST SLIDE */}
              {i === 0 && (
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em]">
                  {/* CROCS */}
                  <a
                    href="/crocs"
                    className="bg-[#F5E9D3] px-6 py-2 text-[#050505] hover:bg-[#E8DCC2] uppercase tracking-[0.18em] text-xs flex items-center justify-center"
                  >
                    Shop Crocs
                  </a>

                  {/* BIRKENSTOCK */}
                  <a
                    href="/birkenstock"
                    className="border border-[#F5E9D3] px-6 py-2 text-[#F5E9D3] hover:bg-[#F5E9D3]/10 uppercase tracking-[0.18em] text-xs flex items-center justify-center"
                  >
                    Shop Birkenstock
                  </a>
                </div>
              )}

              {i === 0 && (
                <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#9c8f7a]">
                  Scroll to explore ↓
                </div>
              )}
            </div>
          </section>
        ))}

        {/* FOOTER */}
        <footer className="border-t border-[#2e2a24] bg-[#050505] py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:justify-between">
            <div>
              <div className="text-lg tracking-[0.25em] font-light">
                STORE OVERSIZED
              </div>
              <p className="mt-3 max-w-xs text-sm text-[#C8B79A]">
                Premium Crocs & Birkenstock resale. Oversized-friendly sizes,
                legit only.
              </p>
            </div>

            <div className="text-sm text-[#C8B79A]">
              <div className="mb-2 font-medium text-[#F5E9D3]">
                Stay updated
              </div>
              <p className="mb-3 text-xs text-[#9c8f7a]">
                Drops & restocks, no spam.
              </p>
              <div className="flex max-w-xs gap-2">
                <input
                  className="w-full bg-[#141210] px-3 py-2 text-xs text-[#F5E9D3] outline-none placeholder:text-[#7d7361]"
                  placeholder="Email address"
                />
                <button className="bg-[#F5E9D3] px-4 text-xs font-medium text-[#050505] hover:bg-[#E8DCC2]">
                  Join
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
