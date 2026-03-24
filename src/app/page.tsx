import Link from "next/link";
import NavBar from "@/components/NavBar";

/* ───────────────────────────── DATA ───────────────────────────── */

const packages = [
  {
    name: "Foundation",
    price: "$3,000",
    annualPrice: "$2,700",
    tagline:
      "Boost your exposure with our Video Starter package. Affordable and effective!",
    featured: false,
    features: [
      { text: "1-2 Core Content Assets Per Month", sub: "project feature, brand video, or client testimonial" },
      { text: "Built for Sales, Not Just Social", sub: "usable across your website, proposals, and outreach" },
      { text: "Half-Day Production Session", sub: "on-site filming of your team, projects, or process" },
      { text: "Creative Direction + Messaging Support", sub: "we guide what to say and how to position it" },
      { text: "Content Repurposed for Multiple Uses", sub: "cutdowns for social, website, and marketing" },
      { text: "2 Rounds of Revisions Per Deliverable", sub: null },
      { text: "Still Photography Included", sub: null },
    ],
  },
  {
    name: "Growth",
    price: "$4,500",
    annualPrice: "$3,999",
    tagline: "Content built to drive pipeline, not just presence.",
    featured: true,
    features: [
      { text: "2-3 Core Content Assets", sub: "case studies, project features, testimonials" },
      { text: "6-10 Supporting Content Pieces", sub: "cutdowns, social clips, distribution-ready variations" },
      { text: "Full Production Session (or 2 half-days)", sub: null },
      { text: "Monthly Strategy + Planning Call", sub: null },
      { text: "Creative Direction + Messaging Support", sub: null },
      { text: "Content Designed for Sales + Marketing Use", sub: "website, proposals, outreach, ads" },
      { text: "Repurposed Across Multiple Channels", sub: null },
      { text: "2 Rounds of Revisions Per Deliverable", sub: null },
      { text: "Still Photography Included", sub: null },
    ],
  },
  {
    name: "Authority",
    price: "$6,500",
    annualPrice: "$5,999",
    tagline:
      "A complete content system designed to position your company as the leader in your market.",
    featured: false,
    features: [
      { text: "3-5 Core Content Assets Per Month", sub: "case studies, project features, brand authority, leadership content" },
      { text: "10-20 Supporting Content Pieces", sub: "short-form cutdowns, social clips, multi-platform variations" },
      { text: "1-2 Full Production Days Per Month", sub: "capture multiple projects, team, and brand content at scale" },
      { text: "Monthly Strategy + Quarterly Content Roadmap", sub: "planned around business goals, not random content" },
      { text: "Advanced Creative Direction + Messaging", sub: "we shape how your company is perceived in the market" },
      { text: "Content Built for Sales, Marketing, and Recruiting", sub: "website, proposals, outreach, ads, hiring" },
      { text: "Multi-Channel Content System + Repurposing", sub: "maximize every shoot across all platforms" },
      { text: "Priority Editing + Faster Turnaround", sub: null },
      { text: "2 Rounds of Revisions Per Deliverable", sub: null },
      { text: "Still Photography Included", sub: null },
    ],
  },
];

/* ───────────────────────────── MEDIA ───────────────────────────── */

const videos = {
  theRoe: "https://dl.dropboxusercontent.com/scl/fi/kxyni7rdfju6v3zrn6yc0/The-Roe.mp4?rlkey=iu3ojwrocksywqzt55s37c7uf&st=7k253x6b",
  pinkham: "https://dl.dropboxusercontent.com/scl/fi/1vr9kpe87ainp1oeskubs/Pinkham-Real-Estate-Villa-Hygge.mov?rlkey=asp60g255rsetwb6a4pdh5xx0&st=bgg0i4hw",
  migis: "https://dl.dropboxusercontent.com/scl/fi/xk11b9za79qa8ieoz9shr/Migis-Photos-Video-Harkness-Inn_Loop-Video.mov?rlkey=o8v7dcttt4wz4awnqgfm8yq2l&st=rjowcg5g",
};

const howItWorks = [
  { step: "01", title: "Plan", description: "We align on what actually drives business." },
  { step: "02", title: "Capture", description: "We film your business on-site — efficiently and without disruption." },
  { step: "03", title: "Produce", description: "We turn footage into polished, ready-to-use content." },
  { step: "04", title: "Deliver", description: "You receive content built for social, sales, and marketing." },
];

const results = [
  "You stay visible without thinking about it",
  "Your brand looks established and credible",
  "Your content works across every channel",
  "Your team has assets for sales and marketing",
  "You attract better clients, more consistently",
];

/* ───────────────────────────── COMPONENTS ───────────────────────────── */

function VideoShowcase({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} />
      </video>
    </div>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`w-5 h-5 rounded-full check-gradient flex items-center justify-center shrink-0 ${className}`}>
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function PricingCard({ pkg }: { pkg: (typeof packages)[0] }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        pkg.featured
          ? "bg-white shadow-2xl ring-2 ring-pink-200 scale-[1.02]"
          : "bg-white shadow-lg hover:shadow-xl"
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="ig-gradient-btn text-white text-xs font-bold tracking-widest px-5 py-1.5 rounded-full uppercase shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-black/40 uppercase tracking-wider mb-4">
        {pkg.name}
      </h3>

      <div className="mb-1">
        <span className="text-5xl font-bold tracking-tight text-black">
          {pkg.price}
        </span>
        <span className="text-lg text-black/40 font-medium">/mo</span>
      </div>

      <p className="text-sm ig-gradient-text font-semibold mb-3">
        {pkg.annualPrice}/mo with annual commitment
      </p>

      <p className="text-sm text-black/50 leading-relaxed mb-8 min-h-[2.5rem]">
        {pkg.tagline}
      </p>

      <div className="border-t border-black/5 pt-6 mb-8 flex-1">
        <ul className="space-y-3">
          {pkg.features.map((feature, i) => (
            <li key={i}>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-black/80">{feature.text}</span>
                  {feature.sub && (
                    <p className="text-xs text-black/35 mt-0.5">{feature.sub}</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/checkout/${pkg.name.toLowerCase()}`}
        className={`block w-full py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all text-center ${
          pkg.featured
            ? "ig-gradient-btn text-white shadow-lg"
            : "bg-black/5 text-black hover:bg-black/10"
        }`}
      >
        Get Started
      </Link>
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
        <section className="pt-28 pb-32 md:pt-40 md:pb-44 px-6 ig-pastel-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] mb-8">
              Your On-Site Content Team.{" "}
              <span className="ig-gradient-text">
                Built to Keep Your Business Visible.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-black/50 font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
              We show up, capture your business in motion, and turn it into
              consistent content that attracts the right clients — without
              adding work to your plate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="ig-gradient-btn text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="text-black/40 px-10 py-4 font-medium text-lg hover:text-black transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Hero Video Reel */}
          <div className="max-w-5xl mx-auto mt-20 px-6">
            <VideoShowcase src={videos.theRoe} className="aspect-video" />
          </div>
        </section>

        {/* ── SECTION 1: THE REAL PROBLEM ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-14 leading-tight">
              You Don&apos;t Need More Ideas.{" "}
              <span className="ig-gradient-text">You Need Execution.</span>
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-black/40 font-normal mb-14">
              <p>You know content matters.</p>
              <p>You don&apos;t have time to consistently create it.</p>
              <p>Your team isn&apos;t built for it.</p>
              <p>And when it does get done — it&apos;s inconsistent.</p>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
              So your business stays invisible more often than it should.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: THE SHIFT ── */}
        <section className="py-28 md:py-36 px-6 ig-pastel-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-10 leading-tight">
              The Businesses That Win{" "}
              <span className="ig-gradient-text">Show Up — Consistently.</span>
            </h2>
            <p className="text-xl text-black/40 mb-14">
              Not when it&apos;s convenient. Not when there&apos;s time. Every month.
            </p>
            <div className="space-y-5 mb-16">
              {[
                "Capture real work",
                "Showcase real expertise",
                "Stay in front of the right audience",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-4 text-xl text-black/70 font-medium"
                >
                  <div className="w-2 h-2 rounded-full check-gradient shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Showcase Video */}
            <div className="max-w-4xl mx-auto">
              <VideoShowcase src={videos.pinkham} className="aspect-video" />
              <p className="text-sm text-black/25 text-center mt-4">Pinkham Real Estate — Villa Hygge</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THE SOLUTION ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              We Handle{" "}
              <span className="ig-gradient-text">Everything.</span>
            </h2>
            <p className="text-xl text-black/40 mb-16">
              We don&apos;t just create content — we take ownership of the entire process.
            </p>
            <div className="space-y-5 text-left max-w-lg mx-auto mb-14">
              {[
                "We come to your business monthly",
                "We film your team, process, and projects",
                "We guide messaging and positioning",
                "We produce content ready for every platform",
                "We repurpose everything for maximum reach",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckIcon className="mt-1" />
                  <span className="text-lg text-black/70">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
              You run your business.{" "}
              <span className="ig-gradient-text">We make sure it&apos;s seen.</span>
            </p>
          </div>
        </section>

        {/* ── SECTION 4: HOW IT WORKS ── */}
        <section id="how-it-works" className="py-28 md:py-36 px-6 ig-pastel-bg">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-20 text-center leading-tight">
              Built to Be{" "}
              <span className="ig-gradient-text">Simple.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {howItWorks.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="step-number text-6xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-black/40 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WHAT YOU'RE GETTING ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
                A Monthly{" "}
                <span className="ig-gradient-text">Content System.</span>
              </h2>
              <p className="text-xl text-black/40 max-w-2xl mx-auto">
                Not random videos. Not one-off shoots. A structured system that
                compounds over time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                "On-site filming of your business",
                "Short-form content (Reels, TikTok, Shorts)",
                "Core brand content (testimonials, projects, authority)",
                "Messaging + creative direction",
                "Multi-platform content usage",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckIcon className="mt-1" />
                  <span className="text-lg text-black/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["Social", "Sales", "Marketing", "Recruiting"].map((tag) => (
                <span
                  key={tag}
                  className="pricing-highlight text-black/60 px-6 py-2.5 rounded-full text-sm font-semibold border border-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content Example Video */}
            <div className="mt-16 max-w-3xl mx-auto">
              <VideoShowcase src={videos.migis} className="aspect-video" />
              <p className="text-sm text-black/25 text-center mt-4">Harkness Inn — Loop Content</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: PACKAGES ── */}
        <section id="packages" className="py-28 md:py-36 px-6 ig-pastel-bg">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-5 leading-tight">
              Choose Your Level of{" "}
              <span className="ig-gradient-text">Visibility</span>
            </h2>
            <p className="text-xl text-black/40 max-w-2xl mx-auto">
              Whether you need to stay consistent or scale aggressively, we
              structure content around your business goals.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <p className="text-xs text-black/25 text-center mt-10 max-w-3xl mx-auto leading-relaxed">
            *Each package includes a guaranteed on-site shoot duration. Final
            deliverables and raw footage output are estimated based on that shoot
            time and the creative requirements discussed.
          </p>
        </section>

        {/* ── SECTION 7: WHY THIS WORKS ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-10 leading-tight">
              Consistency Builds{" "}
              <span className="ig-gradient-text">Authority.</span>
            </h2>
            <p className="text-xl text-black/40 leading-relaxed mb-4">
              The businesses that show up regularly are the ones people remember,
              trust, and hire.
            </p>
            <p className="text-xl text-black/40 leading-relaxed">
              This isn&apos;t about posting more. It&apos;s about being present — all the time.
            </p>
          </div>
        </section>

        {/* ── SECTION 8: RESULTS ── */}
        <section className="py-28 md:py-36 px-6 ig-pastel-bg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 text-center leading-tight">
              What This{" "}
              <span className="ig-gradient-text">Actually Does</span>
            </h2>
            <div className="space-y-6 max-w-xl mx-auto">
              {results.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckIcon className="mt-1" />
                  <span className="text-lg text-black/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: PRIMARY CTA ── */}
        <section className="py-28 md:py-36 px-6 bg-black">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10 leading-tight">
              Ready to Get Started?
            </h2>
            <a
              href="#packages"
              className="inline-block ig-gradient-btn text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* ── SECTION 10: LOWER FUNNEL ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              Want to Talk It{" "}
              <span className="ig-gradient-text">Through First?</span>
            </h2>
            <p className="text-xl text-black/40 mb-12 max-w-xl mx-auto">
              We&apos;ll walk you through the process and help you decide what
              makes the most sense for your business.
            </p>
            <Link
              href="https://www.flylisted.com/book-now"
              className="inline-block bg-black text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-black/80 transition-all"
            >
              Book a Call
            </Link>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/flylisted-logo.png" alt="Flylisted" className="h-6 opacity-30" />
          <p className="text-sm text-black/25">
            &copy; {new Date().getFullYear()} Flylisted. All rights reserved.
          </p>
          <Link
            href="https://www.flylisted.com"
            className="text-sm text-black/30 hover:text-black transition-colors"
          >
            Back to flylisted.com &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}
