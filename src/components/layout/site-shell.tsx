import type { ReactNode } from "react";
import { CookieBanner } from "./cookie-banner";
import { Footer } from "./footer";
import { Header } from "./header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col">
      <Header />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
