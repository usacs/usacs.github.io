import "./globals.css";
import type { ReactNode } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// Root layout applied to every page in the app
// Wraps all pages with shared components (NavBar + Footer)

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Global page styling (background, font, spacing) */}
      <body className="bg-[var(--cream)] font-sans leading-relaxed">
        {/* Top navigation bar shown on all pages */}
        <NavBar />

        {/* Page-specific content gets rendered here */}
        {children}

        {/* Footer shown on all pages */}
        <Footer />
      </body>
    </html>
  );
}
