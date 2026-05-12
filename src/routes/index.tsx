import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/miami-hero.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Brickell Dusk — Limited Edition Fine Art Print" },
      {
        name: "description",
        content:
          "A single, numbered fine art print of Miami's Brickell skyline at dusk. Only 100 made.",
      },
    ],
  }),
});

function Index() {
  const [size, setSize] = useState("StdvXOte");

  const prices = {
    StdvXOte: 25,
  } as const;

  const buyLink = "https://breyux.gumroad.com/l/tradingmentorship";

  return (
    <div className="min-h-screen bg-transparent text-white relative">
      <div className="fixed inset-0 -z-10 bg-[#020B18]/60 backdrop-blur-2xl" />

      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="font-semibold tracking-tight text-white">
            Trading Mentorship
          </div>

          <Link
            to="/"
            className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md transition hover:border-[#F5E6C8]/30 hover:text-[#F5E6C8]"
          >
            Home
          </Link>
        </div>

        <div className="text-xs uppercase tracking-[0.2em] text-white/60">
          Edition of 100
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="aspect-[3/4] w-full">
            <img
              src={heroImage}
              alt="Brickell skyline at dusk — original photograph"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#F5E6C8]/80">
            1 Of 1 Strategy
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Trading Mentorship
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            
          </p>

          <div className="mt-10">
            <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/50">
              Product
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(prices) as Array<keyof typeof prices>).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-lg border px-4 py-3 text-sm transition backdrop-blur-md ${
                    size === s
                      ? "border-[#F5E6C8]/40 bg-[#F5E6C8]/20 text-[#F5E6C8]"
                      : "border-white/10 bg-white/5 text-white/80 hover:border-[#F5E6C8]/30"
                  }`}
                >
                  <div className="font-medium">{s}</div>
                  <div className="mt-1 text-xs opacity-70">
                    ${prices[s]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-white">
              ${prices[size]}
            </span>
            <span className="text-sm text-white/60">USD · Instant Get</span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://breyux.gumroad.com/l/tradingmentorship"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border py-4 text-sm font-semibold uppercase tracking-[0.18em] backdrop-blur-md transition sm:px-10 inline-block text-center"
              style={{
                backgroundColor: "#f5e9c8",
                color: "#1e3a8a",
                boxShadow: "0 0 0 2px #1e3a8a"
              }}
            >
              Explore
            </a>

            <a
              href="https://www.instagram.com/breyux"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-white/10 bg-white/5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md transition hover:border-[#F5E6C8]/30 hover:text-[#F5E6C8] sm:px-10 inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5z" />
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15a3.5 3.5 0 010-7.5z" />
                <circle cx="17.5" cy="6.5" r="1.25" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3">
          <h2 className="text-2xl font-semibold tracking-tight md:col-span-1">
            One strategy.
            <br />
            One hundred tests.
            <br />
            One edge refined.
          </h2>

          <div className="space-y-4 text-white/60 md:col-span-2">
            <p>
              We don't drop new products every week. This is the only thing we
              sell — a single photograph, printed in a closed edition of one
              hundred.
            </p>

            <p>
              When the last one ships, the file is retired. No reprints, no
              posters, no merch. Just one image, made to last on a wall.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Trading Mentorship</div>
        </div>
      </footer>
    </div>
  );
}
