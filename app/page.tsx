// app/page.tsx
// Meridian Client Retention Service — polished landing page.
// Design tokens matched from clientretentionservice.com
// bg: #d7d1cc · gold: #c9a84c · fonts: Playfair+Inter

import Link from "next/link";

const packages = [
  {
    id: "foundation",
    name: "Foundation",
    price: 199,
    description: "Handwritten cards, curated gifts, and timed touchpoints for up to 50 clients.",
    features: [
      "Up to 50 clients/year",
      "Handwritten cards",
      "Curated gifts per occasion",
      "12-month program",
      "Welcome Home package",
      "Anniversary touchpoints",
    ],
    popular: true,
  },
  {
    id: "concierge",
    name: "Concierge",
    price: 499,
    description: "Everything in Foundation plus referral mobile, custom occasions, and dedicated concierge.",
    features: [
      "Everything in Foundation",
      "Unlimited clients",
      "Referral mobile app",
      "Custom occasions",
      "White-glove sourcing",
      "Dedicated concierge",
      "Priority support",
    ],
  },
];

const steps = [
  { step: "01", title: "You Close", desc: "Tell us about your new client. We take it from there." },
  { step: "02", title: "We Curate", desc: "Handwritten cards, curated gifts, timed perfectly throughout the year." },
  { step: "03", title: "They Remember", desc: "Your clients feel genuinely cared for — and send referrals your way." },
];

const productImages = [
  { src: "/images/card-handwritten.jpg", alt: "Handwritten card with gold M seal" },
  { src: "/images/keys-hand.jpg", alt: "Hands holding house keychain" },
  { src: "/images/gift-box.jpg", alt: "Black Meridian gift box with Enjoy. inside" },
  { src: "/images/family-photo.jpg", alt: "Framed family photo on marble" },
  { src: "/images/envelope-seal.jpg", alt: "Cream envelope with gold M wax seal" },
  { src: "/images/referral-phone.jpg", alt: "Phone showing Referral mobile screen" },
  { src: "/images/coffee-mug.jpg", alt: "Ceramic coffee mug with olive branch" },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Subtle gold gradient wash at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

        <div className="container-page py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Client Retention Service
              </p>
              <h1 className="text-5xl md:text-7xl font-light leading-[0.95] text-ink mb-3 text-balance">
                PRESENCE
              </h1>
              <p
                className="text-4xl md:text-5xl italic gold-text mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Without Pressure.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-8 max-w-md">
                The only full-service client retention company built for the premier real estate
                agent. Cards, gifts, and curated touchpoints that keep you top of mind — years
                after closing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#packages" className="btn-gold">
                  View Packages
                </a>
                <a href="#register" className="btn-outline">
                  Get Started Free
                </a>
              </div>
            </div>

            {/* Hero image — real product photo */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden card-glow">
                <img
                  src="/images/card-handwritten.jpg"
                  alt="Handwritten Meridian card with gold M seal"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-xl overflow-hidden card-glow rotate-3">
                <img
                  src="/images/gift-box.jpg"
                  alt="Meridian gift box"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small floating badge */}
              <div className="absolute -top-3 -left-3 gold-gradient text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-pill shadow-soft">
                Since 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Images Strip ─────────────────── */}
      <section className="py-12">
        <div className="container-page">
          <div className="text-center mb-8">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Real Moments
            </p>
            <h2 className="text-3xl text-ink">Every touchpoint, crafted by hand.</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
            {productImages.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden border border-brand-border
                           hover:card-glow-active transition-shadow duration-300 cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────── */}
      <section className="py-16 bg-brand-card/50">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl text-ink">We handle everything after closing.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(s => (
              <div
                key={s.step}
                className="bg-brand-bg rounded-card p-6 text-center border border-brand-border
                           hover:card-glow-active transition-shadow duration-300"
              >
                <div className="gold-text font-serif text-5xl mb-4">{s.step}</div>
                <h3 className="font-serif text-xl text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2 Packages ───────────────────────────── */}
      <section id="packages" className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Choose Your Package
            </p>
            <h2 className="text-3xl text-ink">Two plans. One promise.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`relative rounded-card bg-brand-bg p-6 transition-shadow duration-300 ${
                  pkg.popular
                    ? "card-glow-active border border-gold/30"
                    : "border border-brand-border hover:card-glow"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gold-gradient text-white text-xs font-bold tracking-[0.15em] uppercase px-5 py-1.5 rounded-pill shadow-md">
                    Most Popular
                  </div>
                )}

                <div className={pkg.popular ? "pt-4" : ""}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl text-ink">{pkg.name}</h3>
                    <div className="text-right">
                      <div className="font-serif text-3xl font-light text-ink">
                        ${pkg.price}
                      </div>
                      <div className="text-xs text-ink-muted">per client</div>
                    </div>
                  </div>

                  <p className="text-sm text-ink-muted mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#c9a84c"
                          strokeWidth="2.5"
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#register"
                    className={
                      pkg.popular
                        ? "block text-center btn-gold w-full py-3.5 text-sm"
                        : "block text-center btn-outline w-full py-3.5 text-sm"
                    }
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Referral Phone Section ────────────────── */}
      <section className="py-16 bg-brand-card/50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="w-64 aspect-[9/16] rounded-2xl overflow-hidden card-glow">
                <img
                  src="/images/referral-phone.jpg"
                  alt="Meridian Referral Mobile — Decline or Accept incoming referrals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Referral Mobile
              </p>
              <h2 className="text-3xl text-ink mb-4">
                Referrals, delivered to your phone.
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                When a past client is ready to refer you, you get a call. Accept or decline.
                No pressure. Just presence.
              </p>
              <a href="#register" className="btn-gold">
                Get Referral Mobile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Register ─────────────────────────────── */}
      <section id="register" className="py-20">
        <div className="container-page max-w-xl">
          <div className="text-center mb-8">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-3xl text-ink mb-2">Ready to retain more clients?</h2>
            <p className="text-ink-muted">
              Tell us about your business. We&apos;ll reach out within 24 hours.
            </p>
          </div>

          <form
            className="bg-brand-bg rounded-card border border-brand-border p-8 space-y-5"
            action="/api/lead"
            method="POST"
          >
            {/* Package selector */}
            <fieldset>
              <legend className="text-xs tracking-[0.15em] uppercase text-ink-muted mb-3 font-medium">
                Select Package
              </legend>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "foundation", label: "Foundation", price: "$199" },
                  { id: "concierge", label: "Concierge", price: "$499" },
                ].map(pkg => (
                  <label
                    key={pkg.id}
                    className="relative flex items-start gap-3 p-4 rounded-lg border border-brand-border
                               bg-brand-card cursor-pointer hover:border-gold/40
                               has-[:checked]:card-glow-active has-[:checked]:border-gold/30
                               transition-all duration-200"
                  >
                    <input
                      type="radio"
                      name="package"
                      value={pkg.id}
                      defaultChecked={pkg.id === "foundation"}
                      className="mt-0.5 accent-gold w-4 h-4"
                    />
                    <div>
                      <div className="text-sm font-semibold text-ink">{pkg.label}</div>
                      <div className="text-xs text-ink-muted">{pkg.price}/client</div>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field label="Email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              <Field label="Brokerage" name="brokerage" />
            </div>

            <button type="submit" className="btn-gold w-full py-3.5 text-sm">
              Register Now
            </button>

            <p className="text-xs text-ink-muted text-center">
              No credit card required. We&apos;ll reach out to discuss the right plan for you.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

/* ── Form field component ──────────────────────── */

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.15em] uppercase text-ink-muted mb-1.5 block font-medium">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full px-3.5 py-2.5 bg-brand-card border border-brand-border rounded-lg
                   text-ink text-sm placeholder:text-ink-light
                   focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold
                   transition-shadow duration-200"
      />
    </label>
  );
}
