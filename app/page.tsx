// app/page.tsx — Meridian Client Retention Service
// Design quality: Meridian Partners (#4) level
// Product: Client Retention for real estate agents
// One page. Two packages. Real images. Mobile carousel.

import Link from "next/link";

const packages = [
  {
    id: "foundation",
    name: "Foundation",
    price: 199,
    description: "Handwritten cards, curated gifts, and timed touchpoints for up to 50 clients.",
    features: [
      "Up to 50 clients/year",
      "Handwritten cards per occasion",
      "Curated gifts — Welcome Home, Anniversary, Just Checking In",
      "12-month program with timed delivery",
      "Dedicated account manager",
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
      "Referral mobile — Accept or decline incoming referrals",
      "Custom occasion sourcing",
      "White-glove gift curation",
      "Dedicated concierge",
      "Priority support",
    ],
  },
];

const productImages = [
  { src: "/images/card-handwritten.jpg", alt: "Handwritten card with gold M seal", label: "Cards" },
  { src: "/images/gift-box.jpg", alt: "Black Meridian gift box with Enjoy.", label: "Gifts" },
  { src: "/images/envelope-seal.jpg", alt: "Cream envelope with gold M wax seal", label: "Sealed" },
  { src: "/images/referral-phone.jpg", alt: "Phone showing Referral mobile", label: "Referred" },
  { src: "/images/keys-hand.jpg", alt: "Hands holding house keychain", label: "Keys" },
  { src: "/images/family-photo.jpg", alt: "Framed family photo on marble", label: "Memory" },
  { src: "/images/coffee-mug.jpg", alt: "Ceramic coffee mug with olive branch", label: "Moments" },
];

const steps = [
  { num: "01", title: "We learn about your client.", desc: "You tell us who they are, what they bought, and when they closed. We build their profile." },
  { num: "02", title: "We curate and send.", desc: "Handwritten card. Curated gift. Timed perfectly. Every time. No reminders, no spreadsheets." },
  { num: "03", title: "They feel genuinely cared for.", desc: "Your clients remember you — not an email drip. They send referrals because they want to, not because they're asked." },
  { num: "04", title: "You receive the referral.", desc: "Referral Mobile alerts you. Accept or decline. No pressure. Just presence." },
];

const comparison = [
  ["What your client receives", "Email drip campaign", "Generic holiday card", "Handwritten card + curated gift"],
  ["Frequency", "Automated, forgettable", "Once a year", "12 months of timed touchpoints"],
  ["Referral generation", "Passive — \"forward this email\"", "None", "Referral Mobile — real-time alerts"],
  ["Your time investment", "Setup + ignore", "Minimal", "Zero — we handle everything"],
  ["Cost per client/year", "$5–50 (software)", "$2–10 (card + postage)", "$199 (Foundation)"],
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-brand-border">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 30% 35%, #e3ddd8 0%, #d7d1cc 100%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #1d2128 1px, transparent 0)",
            backgroundSize: "24px 24px", opacity: 0.12,
            maskImage: "radial-gradient(ellipse 60% 50% at center, transparent 0%, black 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at center, transparent 0%, black 75%)",
          }} />

        <div className="relative max-w-[920px] mx-auto px-6 pt-32 pb-28 md:pt-40 md:pb-32">
          <div className="flex items-center gap-3 mb-6" style={{ animation: "fadeUp 0.8s ease-out both" }}>
            <span className="block w-8 h-px bg-ink/30" aria-hidden="true" />
            <p className="text-[12px] text-ink-muted tracking-[0.15em] uppercase font-medium">
              Client Retention Service · Est. 2024
            </p>
          </div>

          <h1 className="font-serif text-[44px] sm:text-[60px] md:text-[76px] lg:text-[84px] leading-[1.0] tracking-[-0.035em] font-medium text-ink"
            style={{ animation: "fadeUp 0.8s ease-out 0.15s both" }}>
            Retention that<br />
            <em className="italic underline decoration-gold decoration-[1.5px] underline-offset-[0.18em]">
              earns referrals
            </em>.
          </h1>

          <div className="mt-10 h-[1.5px] w-20 bg-ink/30" style={{ animation: "fadeUp 0.8s ease-out 0.5s both" }} />

          <p className="mt-10 max-w-[640px] text-[18px] sm:text-[20px] leading-[1.55] text-ink-muted"
            style={{ animation: "fadeUp 0.8s ease-out 0.65s both" }}>
            The only full-service client retention company built for the premier real estate agent.
            Cards, gifts, and curated touchpoints that keep you top of mind — years after closing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3" style={{ animation: "fadeUp 0.8s ease-out 0.8s both" }}>
            <a href="#packages" className="inline-flex items-center gap-2 rounded-xl gold-gradient text-white px-6 py-3 text-[14px] font-semibold tracking-wide hover:opacity-90 transition">
              View Packages
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="#register" className="inline-flex items-center gap-2 rounded-xl border border-ink/20 bg-white px-6 py-3 text-[14px] font-medium text-ink hover:border-ink/40 transition">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ── Product Carousel ──────────────────── */}
      <section className="border-b border-brand-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-ink/30" />
            <p className="text-[12px] text-ink-muted tracking-[0.15em] uppercase font-medium">Product</p>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] tracking-[-0.025em] font-medium text-ink max-w-[720px]">
            Every touchpoint,<br />
            <em className="italic font-normal">crafted by hand</em>.
          </h2>

          {/* Carousel — horizontal scroll on mobile, grid on desktop */}
          <div className="mt-12 overflow-x-auto pb-4 -mx-6 px-6 md:overflow-visible md:px-0 md:mx-0">
            <div className="flex gap-4 md:grid md:grid-cols-4 lg:grid-cols-7 md:gap-3" style={{ minWidth: "max-content" }}>
              {productImages.map((img, i) => (
                <div key={i}
                  className="group relative flex-shrink-0 w-[200px] md:w-auto aspect-square rounded-xl overflow-hidden border border-brand-border bg-brand-card
                             hover:shadow-[0_12px_32px_-16px_rgba(29,33,40,0.18)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent p-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-medium tracking-wide">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────── */}
      <section className="border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-ink/30" />
            <p className="text-[12px] text-ink-muted tracking-[0.15em] uppercase font-medium">Method</p>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.025em] font-medium text-ink max-w-[820px]">
            From closing to referral,<br className="hidden md:block" />
            in four steps.
          </h2>

          <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-14">
            {steps.map((s, i) => (
              <li key={s.num}
                className={`group relative bg-white border border-brand-border rounded-2xl p-7 md:p-9 
                            transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20
                            hover:shadow-[0_12px_32px_-16px_rgba(29,33,40,0.14)]
                            ${i % 2 === 1 ? "md:mt-12 lg:mt-16" : ""}`}>
                <span aria-hidden="true"
                  className="pointer-events-none select-none absolute -bottom-10 -right-3 font-serif font-normal text-ink/[0.04] leading-none tracking-[-0.04em]"
                  style={{ fontSize: "clamp(140px, 16vw, 220px)" }}>{s.num}</span>
                <div className="relative">
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">Step {s.num}</p>
                  <h3 className="mt-2 font-serif text-[22px] font-medium text-ink tracking-[-0.01em]">{s.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-ink/70">{s.desc}</p>
                  {s.num === "04" && (
                    <p className="mt-5 pt-4 border-t border-brand-border text-[12px] font-medium text-gold tabular-nums">
                      First referral typically within 90 days.
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Comparison Table ───────────────────── */}
      <section id="difference" className="border-b border-brand-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-28 md:py-36">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-ink/30" />
            <p className="text-[12px] text-ink-muted tracking-[0.15em] uppercase font-medium">Difference</p>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] tracking-[-0.025em] font-medium text-ink max-w-[720px]">
            Why retention beats marketing.
          </h2>
          <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-[680px]">
            Most agents rely on email drips or generic postcards. Here&apos;s what a full-service retention program changes.
          </p>

          <div className="mt-14 overflow-x-auto rounded-2xl border border-brand-border bg-white">
            <table className="w-full text-left">
              <thead className="bg-brand-card">
                <tr>
                  <th scope="col" className="px-5 py-4 text-[11px] font-medium tracking-[0.12em] uppercase text-ink-muted"><span className="sr-only">Criteria</span></th>
                  <th scope="col" className="px-5 py-4 text-[11px] font-medium tracking-[0.12em] uppercase text-ink-muted">Email Drip</th>
                  <th scope="col" className="px-5 py-4 text-[11px] font-medium tracking-[0.12em] uppercase text-ink-muted">Generic Card</th>
                  <th scope="col" className="px-5 py-4 text-[11px] font-medium tracking-[0.12em] uppercase text-gold">Meridian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-brand-card/50 transition-colors">
                    <th scope="row" className="px-5 py-4 text-[14px] font-medium text-ink align-top w-[28%]">{row[0]}</th>
                    <td className="px-5 py-4 text-[14px] text-ink-muted align-top">{row[1]}</td>
                    <td className="px-5 py-4 text-[14px] text-ink-muted align-top">{row[2]}</td>
                    <td className="px-5 py-4 text-[14px] text-ink font-medium align-top">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 2 Packages ─────────────────────────── */}
      <section id="packages" className="border-b border-brand-border"
        style={{ background: "linear-gradient(180deg, #e3ddd8 0%, #d7d1cc 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 py-28 md:py-36">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-ink/30" />
            <p className="text-[12px] text-ink-muted tracking-[0.15em] uppercase font-medium">Packages</p>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] tracking-[-0.025em] font-medium text-ink max-w-[720px]">
            Two plans.<br />
            <em className="italic font-normal">One promise</em>.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map(pkg => (
              <div key={pkg.id}
                className={`relative rounded-2xl p-7 md:p-9 transition-all duration-300 hover:-translate-y-0.5
                  ${pkg.popular
                    ? "bg-white border-2 border-gold shadow-[0_12px_32px_-16px_rgba(201,168,76,0.25)]"
                    : "bg-white border border-brand-border shadow-[0_1px_0_rgba(29,33,40,0.04)] hover:border-ink/20"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gold-gradient text-white text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className={pkg.popular ? "mt-2" : ""}>
                  <h3 className="font-serif text-[22px] font-medium text-ink tracking-[-0.01em]">{pkg.name}</h3>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-serif text-[40px] font-light text-ink">${pkg.price}</span>
                    <span className="text-[14px] text-ink-muted">/client</span>
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.6] text-ink-muted">{pkg.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] text-ink/80">
                        <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" className="mt-1 shrink-0">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#register"
                    className={`mt-8 block text-center rounded-xl px-6 py-3.5 text-[14px] font-semibold tracking-wide transition
                      ${pkg.popular
                        ? "gold-gradient text-white hover:opacity-90"
                        : "border border-ink/20 text-ink hover:bg-ink/5"}`}>
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-[13px] text-ink-muted italic font-serif">
            Not sure which plan fits? We&apos;ll help you choose during onboarding.
          </p>
        </div>
      </section>

      {/* ── Register ───────────────────────────── */}
      <section id="register" className="border-b border-brand-border bg-white">
        <div className="max-w-[680px] mx-auto px-6 py-28 md:py-36 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-ink/30" />
            <p className="text-[12px] text-ink-muted tracking-[0.15em] uppercase font-medium">Contact</p>
            <span className="block w-8 h-px bg-ink/30" />
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.025em] font-medium text-ink">
            Ready to retain<br />
            <em className="italic font-normal">more clients</em>?
          </h2>
          <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-[540px] mx-auto">
            Tell us about your business. We&apos;ll reach out within 24 hours to discuss the right plan.
          </p>

          <form action="/api/lead" method="POST" className="mt-12 max-w-[480px] mx-auto text-left space-y-5">
            <fieldset>
              <legend className="text-[12px] tracking-[0.12em] uppercase text-ink-muted mb-4 font-medium">Select Package</legend>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "foundation", label: "Foundation", price: "$199" },
                  { id: "concierge", label: "Concierge", price: "$499" },
                ].map(pkg => (
                  <label key={pkg.id}
                    className="relative flex items-start gap-3 p-4 rounded-xl border border-brand-border bg-brand-card
                               cursor-pointer hover:border-gold/50 transition-all duration-200
                               has-[:checked]:border-gold has-[:checked]:bg-gold/5 has-[:checked]:shadow-[0_0_0_1px_rgba(201,168,76,0.3)]">
                    <input type="radio" name="package" value={pkg.id} defaultChecked={pkg.id === "foundation"}
                      className="mt-0.5 accent-gold w-4 h-4" />
                    <div>
                      <div className="text-[14px] font-semibold text-ink">{pkg.label}</div>
                      <div className="text-[12px] text-ink-muted">{pkg.price}/client</div>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Brokerage" name="brokerage" />
            </div>

            <button type="submit"
              className="w-full gold-gradient text-white rounded-xl px-6 py-3.5 text-[14px] font-semibold tracking-wide hover:opacity-90 transition">
              Register Now
            </button>
            <p className="text-[12px] text-ink-muted text-center">
              No credit card required. Response within 24 business hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[12px] tracking-[0.12em] uppercase text-ink-muted mb-1.5 block font-medium">
        {label}{required && " *"}
      </span>
      <input type={type} name={name} required={required}
        className="w-full px-3.5 py-2.5 bg-brand-card border border-brand-border rounded-lg text-ink text-[14px]
                   placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition" />
    </label>
  );
}
