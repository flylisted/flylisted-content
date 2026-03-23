import Link from "next/link";

/* ───────────────────────────── PRICING DATA ───────────────────────────── */

const packages = [
  {
    name: "Foundation",
    price: "$3,000",
    annualPrice: "$2,700",
    tagline:
      "Boost your exposure with our Video Starter package. Affordable and effective!",
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

const howItWorks = [
  {
    step: "01",
    title: "Plan",
    description: "We align on what actually drives business.",
  },
  {
    step: "02",
    title: "Capture",
    description:
      "We film your business on-site — efficiently and without disruption.",
  },
  {
    step: "03",
    title: "Produce",
    description: "We turn footage into polished, ready-to-use content.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "You receive content built for social, sales, and marketing.",
  },
];

const results = [
  "You stay visible without thinking about it",
  "Your brand looks established and credible",
  "Your content works across every channel",
  "Your team has assets for sales and marketing",
  "You attract better clients, more consistently",
];

/* ───────────────────────────── COMPONENTS ───────────────────────────── */

function NavBar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="https://www.flylisted.com"
          className="flex items-center gap-2"
        >
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
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            flylisted
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://www.flylisted.com"
            className="text-sm tracking-wider text-black/70 hover:text-black transition-colors uppercase"
            style={{ letterSpacing: "1.28px" }}
          >
            Home
          </Link>
          <Link
            href="https://www.flylisted.com/pricing"
            className="text-sm tracking-wider text-black/70 hover:text-black transition-colors uppercase"
            style={{ letterSpacing: "1.28px" }}
          >
            Pricing
          </Link>
          <Link
            href="https://www.flylisted.com/commercial-services"
            className="text-sm tracking-wider text-black/70 hover:text-black transition-colors uppercase"
            style={{ letterSpacing: "1.28px" }}
          >
            Commercial Services
          </Link>
          <Link
            href="https://www.flylisted.com/book-now"
            className="text-sm tracking-wider bg-black text-white px-5 py-2.5 rounded hover:bg-gray-800 transition-colors uppercase"
            style={{ letterSpacing: "1.28px" }}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

function PricingCard({ pkg }: { pkg: (typeof packages)[0] }) {
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
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {pkg.name}
      </h3>

      <div className="mb-1">
        <span
          className="text-5xl font-extrabold text-gray-900"
          style={{ fontFamily: "var(--font-montserrat)" }}
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
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
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Get Started
      </button>
    </div>
  );
}

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="py-24 md:py-36 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Your On-Site Content Team.
              <br />
              Built to Keep Your Business Visible.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We show up, capture your business in motion, and turn it into
              consistent content that attracts the right clients — without
              adding work to your plate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-base tracking-wide hover:bg-gray-800 transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 px-8 py-4 font-medium text-base hover:text-black transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: THE REAL PROBLEM ── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              You Don&apos;t Need More Ideas.
              <br />
              You Need Execution.
            </h2>
            <div className="space-y-4 text-lg text-gray-600 mb-10">
              <p>You know content matters.</p>
              <p>You don&apos;t have time to consistently create it.</p>
              <p>Your team isn&apos;t built for it.</p>
              <p>And when it does get done — it&apos;s inconsistent.</p>
            </div>
            <p className="text-xl text-gray-900 font-medium">
              So your business stays invisible more often than it should.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: THE SHIFT ── */}
        <section className="py-20 md:py-28 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              The Businesses That Win
              <br />
              Show Up — Consistently.
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Not when it&apos;s convenient. Not when there&apos;s time. Every
              month.
            </p>
            <p className="text-lg text-gray-700 font-medium mb-6">
              They&apos;ve built systems that:
            </p>
            <div className="space-y-3">
              {[
                "Capture real work",
                "Showcase real expertise",
                "Stay in front of the right audience",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-3 text-lg text-gray-800"
                >
                  <div className="w-2 h-2 bg-black rounded-full shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THE SOLUTION ── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              We Handle Everything.
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We don&apos;t just create content — we take ownership of the
              entire process.
            </p>
            <div className="space-y-4 text-left max-w-xl mx-auto mb-12">
              {[
                "We come to your business monthly",
                "We film your team, process, and projects",
                "We guide messaging and positioning",
                "We produce content ready for every platform",
                "We repurpose everything for maximum reach",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-600 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-900 font-semibold">
              You run your business. We make sure it&apos;s seen.
            </p>
          </div>
        </section>

        {/* ── SECTION 4: HOW IT WORKS ── */}
        <section id="how-it-works" className="py-20 md:py-28 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Built to Be Simple.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howItWorks.map((step) => (
                <div key={step.step} className="text-center">
                  <div
                    className="text-5xl font-bold text-gray-200 mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {step.step}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WHAT YOU'RE GETTING ── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                A Monthly Content System.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Not random videos. Not one-off shoots. A structured system that
                compounds over time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "On-site filming of your business",
                "Short-form content (Reels, TikTok, Shorts)",
                "Core brand content (testimonials, projects, authority)",
                "Messaging + creative direction",
                "Multi-platform content usage",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-600 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-gray-700 font-medium mb-3 ml-8">
                Assets for:
              </p>
              <div className="flex flex-wrap gap-3 ml-8">
                {["Social", "Sales", "Marketing", "Recruiting"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: PACKAGES ── */}
        <section id="packages" className="py-20 md:py-28 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Choose Your Level of Visibility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need to stay consistent or scale aggressively, we
              structure content around your business goals.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              *Each package includes a guaranteed on-site shoot duration. Final
              deliverables and raw footage output are estimated based on that
              shoot time and the creative requirements discussed. Additional
              deliverables or extended footage needs may incur added costs.
            </p>
          </div>
        </section>

        {/* ── SECTION 7: WHY THIS WORKS ── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Consistency Builds Authority.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The businesses that show up regularly are the ones people remember,
              trust, and hire.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This isn&apos;t about posting more. It&apos;s about being present
              — all the time.
            </p>
          </div>
        </section>

        {/* ── SECTION 8: RESULTS ── */}
        <section className="py-20 md:py-28 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              What This Actually Does
            </h2>
            <div className="space-y-5 max-w-xl mx-auto">
              {results.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: PRIMARY CTA ── */}
        <section className="py-20 md:py-28 px-6 bg-black text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Ready to Get Started?
            </h2>
            <a
              href="#packages"
              className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-base tracking-wide hover:bg-gray-100 transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get Started
            </a>
          </div>
        </section>

        {/* ── SECTION 10: LOWER FUNNEL ── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Want to Talk It Through First?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
              We&apos;ll walk you through the process and help you decide what
              makes the most sense for your business.
            </p>
            <Link
              href="https://www.flylisted.com/book-now"
              className="inline-block bg-black text-white px-10 py-4 rounded-lg font-semibold text-base tracking-wide hover:bg-gray-800 transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Book a Call
            </Link>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-lg tracking-wide text-gray-600"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            flylisted
          </span>
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
