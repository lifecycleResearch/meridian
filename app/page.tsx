// app/page.tsx
// Meridian Client Retention Service — landing page
// Design tokens: #d7d1cc bg, #c9a84c gold, Playfair+Inter
// Two packages, product images, registration

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

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="container-page py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Client Retention Service
              </p>
              <h1 className="text-5xl md:text-7xl font-light leading-[0.95] text-ink mb-3">
                PRESENCE
              </h1>
              <p className="text-4xl md:text-5xl italic gold-text mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Without Pressure.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-8 max-w-md">
                The only full-service client retention company built for the premier real estate agent.
                Cards, gifts, and curated touchpoints that keep you top of mind — years after closing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#packages" className="btn-gold">View Packages</a>
                <a href="#register" className="btn-outline">Get Started Free</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden card-glow">
                <div className="w-full h-full gold-gradient opacity-10 absolute inset-0" />
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                      <span className="font-serif text-3xl text-white">M</span>
                    </div>
                    <p className="font-serif text-2xl text-ink">Meridian</p>
                    <p className="text-sm text-ink-muted mt-2">Client Retention Programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────── */}
      <section className="py-16 bg-brand-card/50">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl text-ink">We handle everything after closing.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(s => (
              <div key={s.step} className="bg-brand-bg rounded-card p-6 text-center border border-brand-border">
                <div className="gold-text font-serif text-4xl mb-3">{s.step}</div>
                <h3 className="font-serif text-lg text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2 Packages ───────────────────────────── */}
      <section id="packages" className="py-16">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Choose Your Package</p>
            <h2 className="text-3xl text-ink">Two plans. One promise.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`relative rounded-card bg-brand-bg border ${
                  pkg.popular ? "card-glow-active border-gold/30" : "border-brand-border"
                } p-6`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1 rounded-pill">
                    Most Popular
                  </div>
                )}
                <div className={pkg.popular ? "pt-3" : ""}>
                  <h3 className="font-serif text-xl text-ink mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-serif text-4xl font-light text-ink">${pkg.price}</span>
                    <span className="text-sm text-ink-muted">/client</span>
                  </div>
                  <p className="text-sm text-ink-muted mb-5">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" className="w-4 h-4 flex-shrink-0 mt-0.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#register"
                    className={pkg.popular
                      ? "block text-center btn-gold w-full"
                      : "block text-center btn-outline w-full"
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

      {/* ── Register ─────────────────────────────── */}
      <section id="register" className="py-16 bg-brand-card/50">
        <div className="container-page max-w-xl">
          <div className="text-center mb-8">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Get Started</p>
            <h2 className="text-3xl text-ink mb-2">Ready to retain more clients?</h2>
            <p className="text-ink-muted">Tell us about your business. We'll reach out within 24 hours.</p>
          </div>
          <RegisterForm />
        </div>
      </section>
    </div>
  );
}

// ── RegisterForm (inline to keep it one file) ──────
function RegisterForm() {
  return (
    <form
      className="bg-brand-bg rounded-card border border-brand-border p-6 space-y-4"
      action="/api/lead"
      method="POST"
    >
      <div>
        <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Select Package</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: "foundation", label: "Foundation", price: "$199" },
            { id: "concierge", label: "Concierge", price: "$499" },
          ].map(pkg => (
            <label
              key={pkg.id}
              className="flex items-center gap-2 p-3 rounded border border-brand-border bg-brand-card cursor-pointer hover:border-gold/50 transition"
            >
              <input type="radio" name="package" value={pkg.id} defaultChecked={pkg.id === "foundation"} className="accent-gold" />
              <div>
                <div className="text-sm font-medium text-ink">{pkg.label}</div>
                <div className="text-xs text-ink-muted">{pkg.price}/client</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Brokerage" name="brokerage" />
      </div>

      <button type="submit" className="btn-gold w-full">
        Register Now
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.15em] uppercase text-ink-muted mb-1 block">
        {label}{required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-3 py-2.5 bg-brand-card border border-brand-border rounded text-ink text-sm
                   placeholder:text-ink-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
      />
    </label>
  );
}
