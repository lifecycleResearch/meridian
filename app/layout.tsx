// app/layout.tsx
// Meridian — Client Retention Service
// Design tokens matched from clientretentionservice.com

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Retention Programs — Meridian",
  description: "The only full-service client retention company built for the premier real estate agent.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: { icon: "/meridian-logo.png", apple: "/meridian-logo.png" },
  themeColor: "#11141d",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "CRS" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Top bar — matching the real site's minimal header */}
        <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur border-b border-brand-border">
          <div className="container-page flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                <span className="font-serif text-white text-sm font-bold">M</span>
              </div>
              <span className="font-serif text-base tracking-wider text-ink">MERIDIAN</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm text-ink-muted hover:text-ink transition"
              >
                Sign in
              </Link>
              <a href="#register" className="btn-gold text-xs px-4 py-2">
                Get Started Free
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-brand-border bg-brand-card/50">
          <div className="container-page py-12 text-center">
            <div className="gold-text font-serif text-2xl tracking-widest mb-2">MERIDIAN</div>
            <p className="text-sm text-ink-muted">Client Retention Programs</p>
            <p className="text-xs text-ink-light mt-4">
              &copy; {new Date().getFullYear()} Meridian. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
