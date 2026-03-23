import Link from "next/link";

const packages = [
  {
    name: "Foundation",
    price: "$3,000",
    annualPrice: "$2,700",
    tagline: "Boost your exposure with our Video Starter package. Affordable and effective!",
    badge: null,
    gradient: "from-rose-100 to-orange-100",
    borderColor: "border-rose-200",
    features: [
      "1–2 Core Content Assets Per Month",
      "(project feature, brand video, or client testimonial)",
      "Built for Sales, Not Just Social",
      "(usable across your website, proposals, and outreach)",
      "Half-Day Production Session",
      "(on-site filming of your team, projects, or process)",
      "Creative Direction + Messaging Support",
      "(we guide what to say and how to position it)",
      "Content Repurposed for Multiple Uses",
      "(cutdowns for social, website, and marketing)",
      "2 Rounds of Revisions Per Deliverable",
      "Still Photography Included",
    ],
  },
  {
    name: "Growth",
    price: "$4,500",
    annualPrice: "$3,999",
    tagline: "Content built to drive pipeline, not just presence.",
    badge: "BEST VALUE",
    gradient: "from-amber-100 via-yellow-50 to-teal-100",
    borderColor: "border-teal-300",
    features: [
      "2–3 Core Content Assets",
      "(case studies, project features, testimonials)",
      "+ 6–10 Supporting Content Pieces",
      "(cutdowns, social clips, distribution-ready variations)",
      "Full Production Session (or 2 half-days)",
      "Monthly Strategy + Planning Call",
      "Creative Direction + Messaging Support",
      "Content Designed for Sales + Marketing Use",
      "(website, proposals, outreach, ads)",
      "Repurposed Across Multiple Channels",
      "2 Rounds of Revisions Per Deliverable",
      "Still Photography Included",
    ],
  },
  {
    name: "Authority",
    price: "$6,500",
    annualPrice: "$5,999",
    tagline:
      "A complete content system designed to position your company as the leader in your market.",
    badge: null,
    gradient: "from-purple-200 via-violet-100 to-fuchsia-100",
    borderColor: "border-purple-300",
    features: [
      "3–5 Core Content Assets Per Month",
      "(case studies, project features, brand authority, leadership content)",
      "+ 10–20 Supporting Content Pieces",
      "(short-form cutdowns, social clips, multi-platform variations)",
      "1–2 Full Production Days Per Month",
      "(capture multiple projects, team, and brand content at scale)",
      "Monthly Strategy + Quarterly Content Roadmap",
      "(planned around business goals, not random content)",
      "Advanced Creative Direction + Messaging Development",
      "(we shape how your company is perceived in the market)",
      "Content Built for Sales, Marketing, and Recruiting",
      "(website, proposals, outreach, ads, hiring)",
      "Multi-Channel Content System + Repurposing",
      "(maximize every shoot across all platforms)",
      "Priority Editing + Faster Turnaround",
      "2 Rounds of Revisions Per Deliverable",
      "Still Photography Included",
    ],
  },
];

function NavBar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="https://www.flylisted.com" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 C45 25, 30 35, 20 30 C25 45, 35 55, 50 50 C40 55, 25 50, 15 55 C30 65, 45 65, 50 55 L50 90"
              stroke="black"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M50 10 C55 25, 70 35, 80 30 C75 45, 65 55, 50 50"
              stroke="black"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span
            className="text-2xl tracking-wide text-black"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            flylisted
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://www.flylisted.com"
            className="text-sm tracking-wider text-black/70 hover:text-black transition-colors uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "1.28px" }}
          >
            Home
          </Link>
          <Link
            href="https://www.flylisted.com/pricing"
            className="text-sm tracking-wider text-black/70 hover:text-black transition-colors uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "1.28px" }}
          >
            Pricing
          </Link>
          <Link
            href="https://www.flylisted.com/commercial-services"
            className="text-sm tracking-wider text-black/70 hover:text-black transition-colors uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "1.28px" }}
          >
            Commercial Services
          </Link>
          <Link
            href="https://www.flylisted.com/book-now"
            className="text-sm tracking-wider bg-black text-white px-5 py-2.5 rounded hover:bg-gray-800 transition-colors uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "1.28px" }}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

function PricingCard({
  pkg,
}: {
  pkg: (typeof packages)[0];
}) {
  const isGrowth = pkg.name === "Growth";

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-gradient-to-br ${pkg.gradient} border ${pkg.borderColor} p-8 ${isGrowth ? "md:-mt-4 md:mb-0 shadow-xl ring-2 ring-teal-400/50" : "shadow-lg"} transition-transform hover:-translate-y-1 hover:shadow-2xl`}
    >
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-md">
            {pkg.badge}
          </span>
        </div>
      )}

      <h3
        className="text-2xl font-bold text-gray-900 mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {pkg.name}
      </h3>

      <div className="mb-1">
        <span
          className="text-5xl font-extrabold text-gray-900"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {pkg.price}
        </span>
        <span className="text-lg text-gray-600 font-medium">/month</span>
      </div>

      <p className="text-sm text-rose-600 font-medium mb-4">
        {pkg.annualPrice}/mo with annual commitment
      </p>

      <p className="text-sm text-gray-700 italic mb-6 leading-relaxed min-h-[3rem]">
        {pkg.tagline}
      </p>

      <div className="border-t border-black/10 pt-5 mb-6 flex-1">
        <ul className="space-y-1">
          {pkg.features.map((feature, i) => {
            const isSubtext = feature.startsWith("(");
            return (
              <li
                key={i}
                className={
                  isSubtext
                    ? "text-xs text-gray-500 ml-6 -mt-1 mb-2"
                    : "flex items-start gap-2 text-sm text-gray-800"
                }
              >
                {!isSubtext && (
                  <svg
                    className="w-4 h-4 text-teal-600 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {feature}
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className={`w-full py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all cursor-pointer ${
          isGrowth
            ? "bg-black text-white hover:bg-gray-800 shadow-lg"
            : "bg-white/80 text-gray-900 border border-gray-300 hover:bg-white hover:border-gray-400"
        }`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Get Started
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              B2B Monthly Content Packages
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Content Systems Built to Generate Pipeline, Not Just Views
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              *Each package includes a guaranteed on-site shoot duration. Final deliverables and raw
              footage output are estimated based on that shoot time and the creative requirements
              discussed. Additional deliverables or extended footage needs may incur added costs.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="text-lg tracking-wide text-gray-600"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              flylisted
            </span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Flylisted. All rights reserved.
          </p>
          <Link
            href="https://www.flylisted.com"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Back to flylisted.com &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}
