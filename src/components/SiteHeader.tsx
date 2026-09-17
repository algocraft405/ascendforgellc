"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandWord, Mark } from "@/components/Brand";
import { useCart } from "@/components/CartProvider";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { count, hydrated } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur">
      <div className="bg-ink-950 text-ink-100">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p>
            Free shipping on orders over{" "}
            <span className="numeric font-semibold text-white">${site.freeShippingThreshold}</span>{" "}
            across the continental US
          </p>
          <a href={`tel:${site.phoneTel}`} className="numeric font-semibold text-white hover:text-ember-300">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link className="flex shrink-0 items-center gap-2.5" href="/" onClick={() => setOpen(false)}>
          <Mark className="h-7 w-7 text-ember-600" />
          <span className="text-lg font-bold tracking-tight text-ink-950">
            <BrandWord />
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-sm font-medium text-ink-600 transition hover:text-ember-700"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            className="relative inline-flex items-center gap-2 rounded-lg border border-ink-200 px-3 py-2 text-sm font-semibold text-ink-800 transition hover:border-ember-500 hover:text-ember-700"
            href="/cart"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6" />
              <circle cx="10" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {hydrated && count > 0 ? (
              <span className="numeric absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-ember-700 px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-ink-200 bg-white lg:hidden">
          <div className="container-page grid gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-ember-700"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
