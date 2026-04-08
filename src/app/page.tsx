import Link from "next/link";
import NavBar from "@/components/NavBar";
import PricingSection from "@/components/PricingSection";

/* ───────────────────────────── MEDIA ───────────────────────────── */

const videos = {
  theRoe: "https://dl.dropboxusercontent.com/scl/fi/kxyni7rdfju6v3zrn6yc0/The-Roe.mp4?rlkey=iu3ojwrocksywqzt55s37c7uf&st=7k253x6b",
  pinkham: "https://dl.dropboxusercontent.com/scl/fi/1vr9kpe87ainp1oeskubs/Pinkham-Real-Estate-Villa-Hygge.mov?rlkey=asp60g255rsetwb6a4pdh5xx0&st=bgg0i4hw",
  migis: "https://dl.dropboxusercontent.com/scl/fi/xk11b9za79qa8ieoz9shr/Migis-Photos-Video-Harkness-Inn_Loop-Video.mov?rlkey=o8v7dcttt4wz4awnqgfm8yq2l&st=rjowcg5g",
};

const howItWorks = [
  { step: "01", title: "Book", description: "Pick your plan and lock in your monthly shoot date." },
  { step: "02", title: "Film", description: "We come to you and capture everything on-site — quick and easy." },
  { step: "03", title: "Edit", description: "We turn your footage into scroll-stopping reels, ready to post." },
  { step: "04", title: "Post", description: "You get polished content delivered monthly. Just hit publish." },
];

const results = [
  "You stay visible without lifting a finger",
  "Your brand looks polished and professional",
  "Your content works across every platform",
  "You attract the right audience, consistently",
  "You stop overthinking what to post",
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
              Reels That Make{" "}
              <span className="ig-gradient-text">
                Your Brand Impossible to Ignore.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-black/50 font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
              We show up, film you in action, and turn it into
              scroll-stopping reels — delivered every month, without
              adding a single thing to your to-do list.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="ig-gradient-btn text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                See Plans
              </a>
              <a
                href="#how-it-works"
                className="text-black/40 px-10 py-4 font-medium text-lg hover:text-black transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Hero Video Reel */}
          <div className="max-w-5xl mx-auto mt-20 px-6">
            <VideoShowcase src={videos.theRoe} className="aspect-video" />
          </div>
        </section>

        {/* ── SECTION 1: THE PROBLEM ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-14 leading-tight">
              You Know You Need to Post.{" "}
              <span className="ig-gradient-text">You Just Don&apos;t Have Time.</span>
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-black/40 font-normal mb-14">
              <p>You&apos;re great at what you do.</p>
              <p>But creating content? That keeps falling to the bottom of the list.</p>
              <p>And when you do post — it feels rushed, random, or just not you.</p>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
              Meanwhile, the people showing up consistently are getting all the attention.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: THE SHIFT ── */}
        <section className="py-28 md:py-36 px-6 ig-pastel-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-10 leading-tight">
              The Brands That Win{" "}
              <span className="ig-gradient-text">Show Up Every Day.</span>
            </h2>
            <p className="text-xl text-black/40 mb-14">
              Not once a week. Not when inspiration strikes. Consistently.
            </p>
            <div className="space-y-5 mb-16">
              {[
                "They look professional without trying",
                "They stay top-of-mind with their audience",
                "They let their work speak for itself — on camera",
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
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THE SOLUTION ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              We Make It{" "}
              <span className="ig-gradient-text">Effortless.</span>
            </h2>
            <p className="text-xl text-black/40 mb-16">
              No filming yourself. No editing. No figuring out what to post.
              We handle the entire thing.
            </p>
            <div className="space-y-5 text-left max-w-lg mx-auto mb-14">
              {[
                "We come to you every month",
                "We film you and your work on-site",
                "We handle creative direction and messaging",
                "We produce ready-to-post reels",
                "We optimize for every platform",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckIcon className="mt-1" />
                  <span className="text-lg text-black/70">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
              You do your thing.{" "}
              <span className="ig-gradient-text">We make sure people see it.</span>
            </p>
          </div>
        </section>

        {/* ── SECTION 4: HOW IT WORKS ── */}
        <section id="how-it-works" className="py-28 md:py-36 px-6 ig-pastel-bg">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-20 text-center leading-tight">
              Dead{" "}
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

        {/* ── SECTION 5: WHAT YOU GET ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
                Monthly Reels.{" "}
                <span className="ig-gradient-text">Done for You.</span>
              </h2>
              <p className="text-xl text-black/40 max-w-2xl mx-auto">
                Not stock templates. Not AI-generated clips. Real content,
                filmed on-site, edited to perform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                "On-site filming every month",
                "Short-form reels (Instagram, TikTok, Shorts)",
                "Creative direction + messaging",
                "Professional editing + sound design",
                "Optimized for each platform",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckIcon className="mt-1" />
                  <span className="text-lg text-black/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["Instagram", "TikTok", "YouTube Shorts", "LinkedIn"].map((tag) => (
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
            </div>
          </div>
        </section>

        {/* ── SECTION 6: PACKAGES ── */}
        <PricingSection />

        {/* ── SECTION 7: WHY THIS WORKS ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-10 leading-tight">
              Consistency Is the{" "}
              <span className="ig-gradient-text">Whole Game.</span>
            </h2>
            <p className="text-xl text-black/40 leading-relaxed mb-4">
              The brands people remember are the ones that keep showing up.
              Not louder. Not more often. Just consistently.
            </p>
            <p className="text-xl text-black/40 leading-relaxed">
              That&apos;s what this is — a system that keeps your brand visible
              without you having to think about it.
            </p>
          </div>
        </section>

        {/* ── SECTION 8: RESULTS ── */}
        <section className="py-28 md:py-36 px-6 ig-pastel-bg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 text-center leading-tight">
              What You{" "}
              <span className="ig-gradient-text">Actually Get</span>
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
              Ready to Show Up?
            </h2>
            <a
              href="#packages"
              className="inline-block ig-gradient-btn text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              Pick Your Plan
            </a>
          </div>
        </section>

        {/* ── SECTION 10: LOWER FUNNEL ── */}
        <section className="py-28 md:py-36 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              Not Sure Which Plan{" "}
              <span className="ig-gradient-text">Fits?</span>
            </h2>
            <p className="text-xl text-black/40 mb-12 max-w-xl mx-auto">
              No pressure. Let&apos;s talk through what makes sense for your
              brand and where you&apos;re trying to go.
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
