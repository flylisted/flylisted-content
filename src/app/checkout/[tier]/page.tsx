"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

/* ───────────────────────────── TIER CONFIG ───────────────────────────── */

const tiers: Record<
  string,
  { name: string; price: string; stripeLink: string }
> = {
  starter: {
    name: "Starter",
    price: "$999/mo",
    stripeLink: "https://buy.stripe.com/fZu5kD1wQ6qFdGybwb6kg0g",
  },
  growth: {
    name: "Growth",
    price: "$1,499/mo",
    stripeLink: "https://buy.stripe.com/cNicN51wQ5mB31U9o36kg0h",
  },
  authority: {
    name: "Authority",
    price: "$2,699/mo",
    stripeLink: "https://buy.stripe.com/6oU5kDfnG9CR6e68jZ6kg0i",
  },
};

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const tierKey = (params.tier as string)?.toLowerCase();
  const tier = tiers[tierKey];

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    challenge: "",
  });
  const [submitting, setSubmitting] = useState(false);

  if (!tier) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            Package not found
          </h1>
          <Link
            href="/#packages"
            className="text-black/50 hover:text-black transition-colors"
          >
            &larr; Back to packages
          </Link>
        </div>
      </div>
    );
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Send lead data to HubSpot
    try {
      await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          package: tier.name,
        }),
      });
    } catch {
      // Don't block checkout if HubSpot fails
    }

    // Build Stripe link with prefilled email
    const url = new URL(tier.stripeLink);
    if (form.email) {
      url.searchParams.set("prefilled_email", form.email);
    }

    // Redirect to Stripe
    window.location.href = url.toString();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="w-full bg-white/80 backdrop-blur-xl border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="https://www.flylisted.com">
            <img src="/flylisted-logo.png" alt="Flylisted" className="h-10" />
          </Link>
          <Link
            href="/"
            className="text-sm text-black/40 hover:text-black transition-colors"
          >
            &larr; Back to packages
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block ig-gradient-btn text-white text-xs font-bold tracking-widest px-5 py-1.5 rounded-full uppercase mb-6">
            {tier.name} Package
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
            Let&apos;s Get You{" "}
            <span className="ig-gradient-text">Started.</span>
          </h1>
          <p className="text-lg text-black/40">
            Tell us a bit about your business so we can hit the ground running.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black/60 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black/60 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black/60 mb-2">
                Company *
              </label>
              <input
                type="text"
                name="company"
                required
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black/60 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black/60 mb-2">
              Industry *
            </label>
            <select
              name="industry"
              required
              value={form.industry}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-black/[0.02] text-black focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all appearance-none"
            >
              <option value="">Select your industry</option>
              <option value="residential-real-estate">Residential Real Estate</option>
              <option value="commercial-real-estate">Commercial Real Estate</option>
              <option value="construction">Construction</option>
              <option value="architecture-design">Architecture & Design</option>
              <option value="hospitality">Hospitality</option>
              <option value="professional-services">Professional Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="technology">Technology</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black/60 mb-2">
              What&apos;s your biggest content challenge right now?
            </label>
            <textarea
              name="challenge"
              value={form.challenge}
              onChange={handleChange}
              rows={3}
              placeholder="e.g., We don't have time to create content consistently..."
              className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Summary */}
          <div className="rounded-2xl bg-black/[0.02] border border-black/5 p-6 mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-black/40">
                Selected Package
              </span>
              <Link
                href="/#packages"
                className="text-xs text-black/30 hover:text-black transition-colors"
              >
                Change
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-black">{tier.name}</span>
              <span className="text-lg font-bold ig-gradient-text">
                {tier.price}
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full ig-gradient-btn text-white py-4 rounded-full font-semibold text-lg shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-4"
          >
            {submitting ? "Redirecting to payment..." : "Continue to Payment"}
          </button>

          <p className="text-xs text-black/25 text-center mt-4">
            You&apos;ll be redirected to our secure payment page powered by
            Stripe. No payment info is collected on this page.
          </p>
        </form>
      </main>
    </div>
  );
}
