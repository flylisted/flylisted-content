"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const packages = [
  {
    name: "Foundation",
    monthlyPrice: "$3,000",
    annualPrice: "$2,699",
    monthlyRaw: 3000,
    annualRaw: 2699,
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
    monthlyPrice: "$4,500",
    annualPrice: "$3,999",
    monthlyRaw: 4500,
    annualRaw: 3999,
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
    monthlyPrice: "$6,500",
    annualPrice: "$5,999",
    monthlyRaw: 6500,
    annualRaw: 5999,
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

/* ── Flip digit animation ── */

function seededShuffle(arr: number[], seed: number): number[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function FlipChar({ char, delay, flipKey }: { char: string; delay: number; flipKey: number }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);
  const prevFlipKey = useRef(flipKey);
  const [visibleChar, setVisibleChar] = useState(char);
  const pendingChar = useRef(char);

  useEffect(() => {
    pendingChar.current = char;
  }, [char]);

  useEffect(() => {
    if (prevFlipKey.current !== flipKey) {
      prevFlipKey.current = flipKey;
      const timer = setTimeout(() => {
        const top = topRef.current;
        const bottom = bottomRef.current;
        if (!top || !bottom) return;

        // Set the new char on the incoming element
        bottom.textContent = pendingChar.current;

        // Reset positions
        top.style.transition = "none";
        top.style.transform = "translateY(0%)";
        top.style.opacity = "1";
        bottom.style.transition = "none";
        bottom.style.transform = "translateY(-100%)";
        bottom.style.opacity = "0";

        // Force reflow
        void top.offsetHeight;

        // Animate out: old rolls down
        top.style.transition = "transform 0.25s ease-in, opacity 0.2s ease-in";
        top.style.transform = "translateY(100%)";
        top.style.opacity = "0";

        // Animate in: new rolls down from top — slight delay for the cascade feel
        setTimeout(() => {
          bottom.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.15s ease-out";
          bottom.style.transform = "translateY(0%)";
          bottom.style.opacity = "1";
        }, 80);

        // After animation completes, swap the visible char to the new one
        setTimeout(() => {
          setVisibleChar(pendingChar.current);
          // Reset: put old char back in position, hide new char
          top.style.transition = "none";
          top.style.transform = "translateY(0%)";
          top.style.opacity = "1";
          bottom.style.transition = "none";
          bottom.style.transform = "translateY(-100%)";
          bottom.style.opacity = "0";
        }, 400);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [flipKey, delay]);

  return (
    <span
      ref={containerRef}
      className="inline-block relative overflow-hidden"
    >
      {/* Old character — visible, will roll down and out */}
      <span
        ref={topRef}
        className="inline-block"
      >
        {visibleChar}
      </span>
      {/* New character — hidden above, will roll down into place */}
      <span
        ref={bottomRef}
        className="absolute left-0 top-0 inline-block"
        style={{ transform: "translateY(-100%)", opacity: 0 }}
      >
        {char}
      </span>
    </span>
  );
}

function FlipPrice({ price, cardIndex }: { price: string; cardIndex: number }) {
  const maxLen = 6;
  const padded = price.padStart(maxLen, " ");
  const [flipKey, setFlipKey] = useState(0);
  const [delays, setDelays] = useState<number[]>(() => {
    const indices = Array.from({ length: maxLen }, (_, i) => i);
    const shuffled = seededShuffle(indices, cardIndex + 1);
    return shuffled.map((order) => order * 70);
  });

  const prevPrice = useRef(price);

  useEffect(() => {
    if (prevPrice.current !== price) {
      prevPrice.current = price;
      // Increment flipKey so ALL characters flip, even unchanged ones
      setFlipKey((k) => k + 1);
      // Generate new random delays each time price changes
      const indices = Array.from({ length: maxLen }, (_, i) => i);
      const seed = Date.now() + cardIndex;
      const shuffled = seededShuffle(indices, seed);
      setDelays(shuffled.map((order) => order * 70));
    }
  }, [price, cardIndex]);

  return (
    <span className="inline-flex" style={{ perspective: "600px" }}>
      {padded.split("").map((char, i) => (
        <FlipChar key={i} char={char} delay={delays[i] ?? i * 70} flipKey={flipKey} />
      ))}
    </span>
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

function PricingCard({ pkg, isAnnual, cardIndex }: { pkg: (typeof packages)[0]; isAnnual: boolean; cardIndex: number }) {
  const price = isAnnual ? pkg.annualPrice : pkg.monthlyPrice;
  const savingsPercent = Math.round(((pkg.monthlyRaw - pkg.annualRaw) / pkg.monthlyRaw) * 100);

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

      <div className="mb-1 h-[3.5rem] flex items-baseline overflow-hidden">
        <span className="text-5xl font-bold tracking-tight text-black">
          <FlipPrice price={price} cardIndex={cardIndex} />
        </span>
        <span className="text-lg text-black/40 font-medium">/mo</span>
      </div>

      <div className="mb-3 h-[2.5rem]">
        {isAnnual ? (
          <>
            <p className="text-sm ig-gradient-text font-semibold">
              Save {savingsPercent}%
            </p>
            <p className="text-xs text-black/30 font-medium">
              billed annually
            </p>
          </>
        ) : (
          <p className="text-sm text-black/30 font-medium">
            Save {savingsPercent}% with annual billing
          </p>
        )}
      </div>

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

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="packages" className="py-28 md:py-36 px-6 ig-pastel-bg">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-5 leading-tight">
          Choose Your Level of{" "}
          <span className="ig-gradient-text">Visibility</span>
        </h2>
        <p className="text-xl text-black/40 max-w-2xl mx-auto mb-12">
          Whether you need to stay consistent or scale aggressively, we
          structure content around your business goals.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-3 bg-white rounded-full p-1.5 shadow-sm border border-black/5">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              !isAnnual
                ? "ig-gradient-btn text-white shadow-md"
                : "text-black/40 hover:text-black/60"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              isAnnual
                ? "ig-gradient-btn text-white shadow-md"
                : "text-black/40 hover:text-black/60"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, i) => (
          <PricingCard key={pkg.name} pkg={pkg} isAnnual={isAnnual} cardIndex={i} />
        ))}
      </div>

      <p className="text-xs text-black/25 text-center mt-10 max-w-3xl mx-auto leading-relaxed">
        *Each package includes a guaranteed on-site shoot duration. Final
        deliverables and raw footage output are estimated based on that shoot
        time and the creative requirements discussed.
      </p>
    </section>
  );
}
