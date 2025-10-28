import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[oklch(0.15_0_0)] text-white/90">
      {/* matte gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_120%,oklch(0.2_0_0/.6),transparent_60%)]" />

      {/* top sheen accent */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm" />
              <span className="text-lg font-semibold tracking-wide">Hackwise</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Building the future of creation — collaborative, fast, and delightful.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            <div className="space-y-3">
              <p className="text-white/60">Explore</p>
              <ul className="space-y-2">
                <li><Link className="hover:text-white transition-colors" href="#about">About</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#schedule">Schedule</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#prizes">Prizes</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-white/60">Community</p>
              <ul className="space-y-2">
                <li><Link className="hover:text-white transition-colors" href="#judging">Judging</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#format">Format</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-white/60">Legal</p>
              <ul className="space-y-2">
                <li><Link className="hover:text-white transition-colors" href="#terms">Terms</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#privacy">Privacy</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Hackwise. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-white transition-colors" href="https://x.com" target="_blank" rel="noreferrer">X</Link>
            <span className="text-white/20">•</span>
            <Link className="hover:text-white transition-colors" href="https://github.com" target="_blank" rel="noreferrer">GitHub</Link>
            <span className="text-white/20">•</span>
            <Link className="hover:text-white transition-colors" href="mailto:team@hackwise.io">Email</Link>
          </div>
        </div>
      </div>

      {/* bottom glow line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-linear-to-r from-transparent via-[oklch(0.7_0.24_264.3/.6)] to-transparent" />

      {/* floating matte chips */}
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(60%_50%_at_50%_100%,black,transparent)]">
        <div className="absolute right-10 bottom-10 h-20 w-20 rounded-xl border border-white/10 bg-white/3 backdrop-blur-md" />
        <div className="absolute left-8 bottom-6 h-10 w-24 rounded-full border border-white/10 bg-white/4 backdrop-blur-md" />
      </div>
    </footer>
  );
}
