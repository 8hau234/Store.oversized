"use client";

const CROCS_ITEMS = [
  {
    name: "Classic Clog",
    color: "White",
    type: "Unisex",
    sizes: "42 · 43",
    condition: "New / Tag",
    img: "/1crocs.jpeg",
  },
  {
    name: "Mega Crush",
    color: "Black",
    type: "Unisex",
    sizes: "41 · 42",
    condition: "New / Boxed",
    img: "/2crocs.jpeg",
  },
  {
    name: "Classic Clog",
    color: "Bone",
    type: "Unisex",
    sizes: "40 · 41 · 42",
    condition: "Used · Clean",
    img: "/3crocs.jpeg",
  },
  {
    name: "Echo Clog",
    color: "Desert Tan",
    type: "Unisex",
    sizes: "43",
    condition: "New / Tag",
    img: "/4crocs.jpeg",
  },
  {
    name: "Mega Crush Sandal",
    color: "Triple Black",
    type: "Women",
    sizes: "40 · 41",
    condition: "New / No Box",
    img: "/5crocs.jpeg",
  },
];

export default function CrocsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#2e2a24] bg-[#050505]/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light">
            STORE OVERSIZED
          </div>

          <nav className="hidden gap-6 text-xs md:flex">
            <a href="/" className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]">
              Home
            </a>
            <span className="uppercase tracking-[0.18em] text-[#F5E9D3]">
              Crocs
            </span>
            <a href="/birkenstock" className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]">
              Birkenstock
            </a>
          </nav>

          <div className="text-xs uppercase tracking-[0.18em] text-[#C8B79A]">
            Display only
          </div>
        </div>
      </header>

      <main className="bg-[#050505] pb-16">
        {/* HERO */}
        <section className="relative flex min-h-[60vh] w-full items-end justify-start overflow-hidden">
          <img
            src="/1crocs.jpeg"
            alt="Crocs Lineup"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,233,211,0.18),_transparent_55%)] mix-blend-soft-light" />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-20 pt-24">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#C8B79A]">
              <span>CROCS</span>
              <span className="h-px w-10 bg-[#C8B79A]" />
              <span>DISPLAY ONLY</span>
            </div>

            <h1 className="text-4xl font-light leading-tight md:text-6xl text-[#F5E9D3]">
              Classic · Mega Crush · Echo.
            </h1>

            <p className="max-w-xl text-sm md:text-base text-[#E8DCC2]">
              Current Crocs available at STORE OVERSIZED. Stock updates as
              sizes move — screenshot and DM to confirm availability.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="mx-auto mt-10 max-w-6xl px-4">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-lg md:text-xl uppercase tracking-[0.25em] text-[#F5E9D3]">
              Available Crocs
            </h2>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#9c8f7a]">
              Display only · DM to reserve
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CROCS_ITEMS.map((item) => (
              <article
                key={item.name + item.color}
                className="group flex flex-col overflow-hidden border border-[#2e2a24] bg-[#0b0b0b] transition-transform duration-200 hover:-translate-y-1 hover:border-[#C8B79A]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#F5E9D3]">
                    {item.condition}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#C8B79A]">
                    {item.color}
                  </div>
                  <h3 className="text-base font-light md:text-lg">
                    {item.name}
                  </h3>

                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-[#E8DCC2]">
                    <span className="rounded-full border border-[#3a3328] px-2 py-1 text-[11px] uppercase tracking-[0.18em]">
                      {item.type}
                    </span>
                    <span className="rounded-full bg-[#141210] px-2 py-1 text-[11px] uppercase tracking-[0.18em]">
                      Sizes: {item.sizes}
                    </span>
                  </div>

                  <p className="mt-3 text-[11px] text-[#9c8f7a]">
                    DM with a screenshot of this card to confirm it’s still available.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
