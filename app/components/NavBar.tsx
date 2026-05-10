"use client";

// ===== IMPORTS =====
import { useEffect, useState } from "react";

// Navigation bar shown at the top of the site
// Includes desktop links and a toggleable mobile menu

export default function NavBar() {
  const [open, setOpen] = useState(false); // tracks whether the mobile menu is open

  // Navigation links used for both desktop and mobile views
  const links = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
    { href: "/board", label: "Board" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/donate", label: "Donate" },
  ];

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    // If the screen becomes large (desktop), close the mobile menu
    // Prevents the menu from staying open when switching screen sizes
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    // Sticky navbar that stays at the top while scrolling
    <nav className="sticky top-0 z-50 bg-[var(--usacs-red-dark)] shadow-sm">
      <div className="w-full px-6 sm:px-10 h-14 flex items-center justify-between">
        <a href="/" className="text-white font-extrabold tracking-wide">
          USACS
        </a>

        {/* Desktop navigation (hidden on smaller screens) */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-white font-bold text-sm no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-white"
          /* only visible on mobile + centers icon inside button */
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              // X icon (close)
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              // Hamburger icon (menu)
              <path
                d="M4 7h16M4 12h16M4 17h16" // hamburger icon when menu is closed
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu (only rendered when open is true) */}
      {open && (
        <div
          className="md:hidden border-t border-white/10"
          /* only visible on mobile + subtle top divider */
        >
          <div
            className="px-4 py-3 flex flex-col"
            /* stacked vertical links */
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 text-white font-bold text-sm no-underline"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
