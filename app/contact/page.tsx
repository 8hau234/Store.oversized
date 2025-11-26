"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9D3]">
      {/* HEADER */}
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

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-14">
        {/* HERO */}
        <section className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9c8f7a]">
            Contact • Support
          </p>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Talk to Store Oversized.
          </h1>

          <p className="max-w-xl text-sm md:text-base text-[#C8B79A]">
            Questions about authenticity, sizing, deliveries or drops?  
            Reach out anytime — we are active daily.
          </p>
        </section>

        {/* CONTACT CARDS */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* WhatsApp & Calls */}
          <div className="rounded-2xl border border-[#2e2a24] bg-[#0b0b0b] p-6 space-y-3">
            <h2 className="text-lg font-light">WhatsApp & Calls</h2>

            <p className="text-sm text-[#C8B79A]">
              Fast replies for orders, authenticity checks and sizing help.
            </p>

            <div className="space-y-1 text-sm text-[#E8DCC2]">
              <p>
                <span className="font-medium text-[#F5E9D3]">WhatsApp:</span>{" "}
                +977 9800000000
              </p>

              <p>
                <span className="font-medium text-[#F5E9D3]">Call:</span>{" "}
                +977 9800000000
              </p>
            </div>

            <a
              href="https://wa.me/9779800000000"
              className="inline-flex mt-3 bg-[#F5E9D3] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#050505] hover:bg-[#E8DCC2]"
            >
              Open WhatsApp
            </a>
          </div>

          {/* Email & Instagram */}
          <div className="rounded-2xl border border-[#2e2a24] bg-[#0b0b0b] p-6 space-y-3">
            <h2 className="text-lg font-light">Email & Instagram</h2>

            <p className="text-sm text-[#C8B79A]">
              For order issues, collabs, bulk pairs or anything formal.
            </p>

            <div className="space-y-1 text-sm text-[#E8DCC2]">
              <p>
                <span className="font-medium text-[#F5E9D3]">Email:</span>{" "}
                support@storeoversized.com
              </p>

              <p>
                <span className="font-medium text-[#F5E9D3]">Instagram:</span>{" "}
                @storeoversized
              </p>
            </div>

            <div className="flex gap-3 mt-3">
              <a
                href="mailto:support@storeoversized.com"
                className="inline-flex border border-[#F5E9D3] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#F5E9D3] hover:bg-[#F5E9D3]/10"
              >
                Email Us
              </a>

              <a
                href="https://instagram.com/storeoversized"
                className="inline-flex border border-[#C8B79A] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#C8B79A] hover:bg-[#F5E9D3]/10"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* SMALL NOTE */}
        <section>
          <p className="text-xs text-[#9c8f7a]">
            Typical response time: 15–60 minutes on WhatsApp / Instagram.  
            For email, we reply within 12–24 hours.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#2e2a24] bg-[#050505] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-lg tracking-[0.25em] font-light">
            STORE OVERSIZED
          </div>

          <p className="mt-3 max-w-xs text-sm text-[#C8B79A]">
            Premium Crocs & Birkenstock resale.  
            Oversized-friendly sizes, 100% legit pairs.
          </p>
        </div>
      </footer>
    </div>
  );
}
