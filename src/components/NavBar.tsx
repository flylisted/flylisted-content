import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-xl border-b border-black/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="https://www.flylisted.com">
          <img src="/flylisted-logo.png" alt="Flylisted" className="h-10" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="https://www.flylisted.com" className="text-sm font-medium text-black/50 hover:text-black transition-colors">
            Home
          </Link>
          <Link href="https://www.flylisted.com/pricing" className="text-sm font-medium text-black/50 hover:text-black transition-colors">
            Pricing
          </Link>
          <Link href="https://www.flylisted.com/commercial-services" className="text-sm font-medium text-black/50 hover:text-black transition-colors">
            Commercial Services
          </Link>
          <Link
            href="https://www.flylisted.com/book-now"
            className="text-sm font-semibold ig-gradient-btn text-white px-5 py-2.5 rounded-full"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
