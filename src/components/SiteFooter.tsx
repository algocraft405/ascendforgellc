import Link from "next/link";
import { BrandWord } from "@/components/Brand";
import { categories, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink-200 bg-ink-950 text-ink-300">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold tracking-tight text-white">
            <BrandWord accentClassName="text-ember-400" />
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-400">{site.tagline}</p>
          <address className="mt-5 text-sm not-italic leading-relaxed text-ink-400">
            {site.legalName}
            <br />
            {site.city}, {site.region}
            <br />
            {site.country}
          </address>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Shop</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link className="hover:text-ember-300" href="/shop">
                All gear
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link className="hover:text-ember-300" href={`/shop?category=${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Customer care</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link className="hover:text-ember-300" href="/policies/shipping">
                Shipping
              </Link>
            </li>
            <li>
              <Link className="hover:text-ember-300" href="/policies/returns">
                Returns
              </Link>
            </li>
            <li>
              <Link className="hover:text-ember-300" href="/policies/warranty">
                Warranty
              </Link>
            </li>
            <li>
              <Link className="hover:text-ember-300" href="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="hover:text-ember-300" href="/about">
                About Ascendforge
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                className="numeric font-semibold text-white hover:text-ember-300"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ember-300">
                {site.email}
              </a>
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">Hours</h3>
          <ul className="numeric mt-3 space-y-1.5 text-sm text-ink-400">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800/60">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Retail ecommerce for sports gear. Specs are as published; confirm size before you order.</p>
        </div>
      </div>
    </footer>
  );
}
