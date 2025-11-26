"use client";

import { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // for now just log – later you can route to /search?query=...
    console.log("Searching for:", search);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#2e2a24] bg-[#050505]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          {/* LOGO */}
          <div className="text-xl md:text-2xl tracking-[0.25em] font-light whitespace-nowrap">
            STORE OVERSIZED
          </div>

          {/* DESKTOP SEARCH */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden flex-1 items-center justify-center md:flex"
          >
            <div className="relative w-full max-w-xs">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full bg-[#141210] px-4 py-2 pr-8 text-xs text-[#F5E9D3] placeholder:text-[#7d7361] outline-none border border-[#2e2a24] focus:border-[#F5E9D3]"
                placeholder="Search Crocs, Birkenstock, sizes..."
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Go
              </button>
            </div>
          </form>

          {/* DESKTOP NAV */}
          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#F5E9D3] font-medium"
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
              className="uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]"
            >
              Contact
            </a>
          </nav>

          {/* RIGHT SIDE: CART + BURGER */}
          <div className="flex items-center gap-3">
            {/* Cart (desktop only) */}
            <button className="hidden text-xs uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3] md:inline-block">
              Cart (0)
            </button>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-[#F5E9D3]"
              onClick={() => setIsMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <span className="block h-[2px] w-5 bg-[#F5E9D3]" />
                <span className="block h-[2px] w-5 bg-[#F5E9D3]" />
                <span className="block h-[2px] w-5 bg-[#F5E9D3]" />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH + MENU */}
        <div className="md:hidden border-t border-[#2e2a24] bg-[#050505]">
          {/* mobile search bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="mx-auto max-w-6xl px-4 py-3"
          >
            <div className="relative w-full">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full bg-[#141210] px-4 py-2 pr-10 text-xs text-[#F5E9D3] placeholder:text-[#7d7361] outline-none border border-[#2e2a24] focus:border-[#F5E9D3]"
                placeholder="Search Crocs, Birks, sizes..."
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.2em] text-[#C8B79A]"
              >
                Go
              </button>
            </div>
          </form>

          {/* mobile nav links */}
          {isMenuOpen && (
            <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-4 text-xs">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#F5E9D3]"
              >
                Home
              </a>
              <a
                href="/crocs"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Crocs
              </a>
              <a
                href="/birkenstock"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Birkenstock
              </a>
              <a
                href="/authenticity"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Authenticity
              </a>
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]"
              >
                Contact
              </a>
              <button className="mt-2 text-left text-xs uppercase tracking-[0.2em] text-[#C8B79A] hover:text-[#F5E9D3]">
                Cart (0)
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* FULLSCREEN SECTIONS, NORMAL PAGE SCROLL */}
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

              <h1 className="text-3xl font-light leading-tight md:text-6xl text-[#F5E9D3]">
                {slide.title}
              </h1>

              <p className="max-w-xl text-sm md:text-base text-[#E8DCC2]">
                {slide.subtitle}
              </p>

              {/* CTA only on first slide */}
              {i === 0 && (
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em]">
                  <a
                    href="/crocs"
                    className="bg-[#F5E9D3] px-6 py-2 text-[#050505] hover:bg-[#E8DCC2] text-xs flex items-center justify-center"
                  >
                    Shop Crocs
                  </a>

                  <a
                    href="/birkenstock"
                    className="border border-[#F5E9D3] px-6 py-2 text-[#F5E9D3] hover:bg-[#F5E9D3]/10 text-xs flex items-center justify-center"
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
