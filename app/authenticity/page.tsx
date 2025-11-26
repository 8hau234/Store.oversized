"use client";

export default function AuthenticityPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#2e2a24] bg-[#050505]/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light">
            STORE OVERSIZED
          </div>

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
              className="uppercase tracking-[0.18em] text-[#F5E9D3] font-medium"
            >
              Authenticity
            </a>
          </nav>

          <button className="text-xs uppercase tracking-[0.18em] text-[#C8B79A] hover:text-[#F5E9D3]">
            Cart (0)
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* HERO */}
        <section className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9c8f7a]">
            Authenticity Check
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            100% Legit. Zero First-Copy.
          </h1>
          <p className="max-w-xl text-sm md:text-base text-[#C8B79A]">
            Every pair we sell—Crocs or Birkenstock—is checked and verified for authenticity.
            Below is a simple comparison to help you understand real vs fake Crocs.
          </p>
        </section>

        {/* SINGLE IMAGE — REAL VS FAKE CROCS */}
        <section className="rounded-2xl border border-[#2e2a24] bg-[#0b0b0b] p-4">
          <h2 className="text-lg md:text-xl font-light mb-4">
            Real vs Fake Crocs (Image Comparison)
          </h2>

          <img
            src="/crocs-compare.jpg"
            alt="Real vs Fake Crocs Comparison"
            className="w-full rounded-xl object-cover"
          />

          <p className="mt-3 text-sm text-[#C8B79A]">
            This image clearly highlights the difference in material, logo shape, hole alignment,
            outsole quality, and overall construction between real and fake Crocs.
          </p>
        </section>

        {/* OUR POLICY */}
        <section>
          <div className="rounded-2xl border border-[#2e2a24] bg-[#0b0b0b] p-6 space-y-4">
            <h2 className="text-xl font-light">Our Sourcing Policy</h2>
            <p className="text-sm text-[#C8B79A] leading-relaxed">
              We only source from trusted retailers, verified importers, and official platforms.
              We never deal with fakes, replicas, or first-copy items.
            </p>
          </div>
        </section>

        {/* VERIFY ORDER */}
        <section>
          <div className="rounded-2xl border border-[#2e2a24] bg-[#0b0b0b] p-6 space-y-5">
            <h2 className="text-xl font-light">Verify Your Order</h2>
            <p className="text-sm text-[#C8B79A]">
              Want to double-check your pair? Send us:
            </p>

            <ul className="text-sm text-[#C8B79A] list-disc pl-5 space-y-1">
              <li>Order ID</li>
              <li>Name & Phone number</li>
              <li>Where you purchased</li>
              <li>Photos of logo, strap, sole, tags, box</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/9779800000000?text=I want to verify my Crocs order."
                className="bg-[#F5E9D3] px-6 py-2 text-[#050505] text-xs uppercase tracking-[0.18em] hover:bg-[#E8DCC2]"
              >
                Verify via WhatsApp
              </a>
              <a
                href="mailto:support@storeoversized.com?subject=Order+Verification"
                className="border border-[#F5E9D3] px-6 py-2 text-[#F5E9D3] text-xs uppercase tracking-[0.18em] hover:bg-[#F5E9D3]/10"
              >
                Verify via Email
              </a>
            </div>
          </div>
        </section>

        {/* CROCS DETAILS (TEXT VERSION) */}
        <section>
          <h2 className="text-xl md:text-2xl font-light mb-5">
            Crocs: Real vs Fake (Detailed Breakdown)
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* REAL */}
            <div className="rounded-2xl border border-[#2e2a24] bg-[#0b0b0b] p-6 space-y-3">
              <h3 className="text-lg font-light text-[#F5E9D3]">Real Crocs</h3>
              <ul className="list-disc pl-5 text-sm text-[#C8B79A] space-y-2">
                <li>Sharp & correct crocodile logo</li>
                <li>Premium Croslite comfort</li>
                <li>Perfectly aligned holes</li>
                <li>Crisp molded text, no spelling errors</li>
                <li>High-quality strap buttons</li>
              </ul>
            </div>

            {/* FAKE */}
            <div className="rounded-2xl border border-[#3c3223] bg-[#090808] p-6 space-y-3">
              <h3 className="text-lg font-light text-[#F5E9D3]">Fake / First-Copy</h3>
              <ul className="list-disc pl-5 text-sm text-[#C8B79A] space-y-2">
                <li>Wrong/blurred crocodile logo</li>
                <li>Hard plastic material</li>
                <li>Uneven hole alignment</li>
                <li>Spelling mistakes on sole</li>
                <li>Very strong chemical smell</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#2e2a24] bg-[#050505] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-lg tracking-[0.25em] font-light">
            STORE OVERSIZED
          </div>
          <p className="mt-3 max-w-xs text-sm text-[#C8B79A]">
            Premium Crocs & Birkenstock resale. Oversized-friendly sizes, legit only.
          </p>
        </div>
      </footer>
    </div>
  );
}
