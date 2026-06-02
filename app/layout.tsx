// app/layout.tsx — Clean header, matching #4's aesthetic
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meridian — Client Retention Programs",
  description: "The only full-service client retention company built for the premier real estate agent. Cards, gifts, and curated touchpoints that earn referrals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="sticky top-0 z-40 backdrop-blur-md bg-brand-bg/85 border-b border-brand-border">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                <span className="font-serif text-white text-sm font-bold">M</span>
              </div>
              <span className="font-serif text-[15px] tracking-[0.08em] text-ink font-medium">Meridian</span>
            </Link>
            <div className="flex items-center gap-5">
              <Link href="#packages" className="text-[13px] text-ink-muted hover:text-ink transition hidden sm:block">Packages</Link>
              <Link href="#register" className="text-[13px] text-ink-muted hover:text-ink transition hidden sm:block">Contact</Link>
              <a href="#register" className="gold-gradient text-white text-[12px] font-semibold tracking-wide px-4 py-2 rounded-lg hover:opacity-90 transition">
                Get Started
              </a>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
