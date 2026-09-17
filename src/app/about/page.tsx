import type { Metadata } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} is a sports-only retail ecommerce shop in ${site.city}. One category, done properly.`,
};

export default function AboutPage() {
  return (
    <section className="container-page py-12 lg:grid-cols-[1.4fr_1fr] lg:grid">
      <article className="max-w-3xl">
        <p className="numeric text-xs font-semibold uppercase tracking-wider text-ember-700">The shop</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950">About Ascendforge</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-600">
          {site.legalName} is a sports-only retail ecommerce dealer operating out of {site.city}, {site.region}. We
          do not sell fashion, gadgets or whatever is trending this week. One category: sports stuff, done properly.
        </p>
        <p className="mt-4 leading-relaxed text-ink-600">
          That focus is a deliberate trade. A general sporting-goods site carries a few thousand SKUs and cannot know
          any of them in depth. We carry {products.length} models, and every unit on this site is physically on our
          floor. We have opened the boxes, weighed the bars, inflated the balls overnight, and run in the shoes.
        </p>

        <h2 className="mt-10 text-xl font-bold tracking-tight text-ink-950">We pack our own orders</h2>
        <p className="mt-3 leading-relaxed text-ink-600">
          The single biggest source of sports-gear complaints is a marketplace listing fulfilled by someone else: a
          box arrives late, the size is wrong, and there is no one to call. We do not work that way. Orders leave{" "}
          {site.city}. If a pair does not fit, you talk to the same people who taped the carton.
        </p>

        <h2 className="mt-10 text-xl font-bold tracking-tight text-ink-950">We publish the real numbers</h2>
        <p className="mt-3 leading-relaxed text-ink-600">
          Every weight, size and material figure on this site is taken from the manufacturer’s own published spec, or
          from a measurement we took in the warehouse. Where a manufacturer does not publish a figure, we show a dash
          rather than an estimate. If you need a number that is not printed anywhere, email {site.email} and we will
          go measure the unit standing on the floor.
        </p>

        <h2 className="mt-10 text-xl font-bold tracking-tight text-ink-950">Where we ship</h2>
        <p className="mt-3 leading-relaxed text-ink-600">
          Continental United States on our own labels — free on orders over ${site.freeShippingThreshold}, a flat $8
          below that. Alaska, Hawaii and international we will quote, and we will also tell you honestly if a local
          shop is the better call.
        </p>
      </article>
      <aside className="mt-10 h-fit rounded-card border border-ink-200 bg-ink-50/60 p-6 lg:mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">{site.legalName}</h2>
        <p className="mt-3 text-ink-800">
          {site.city}, {site.region}
          <br />
          {site.country}
        </p>
        <p className="mt-4 text-sm">
          <a href={`tel:${site.phoneTel}`} className="numeric font-semibold text-ember-700">
            {site.phoneDisplay}
          </a>
          <span className="text-ink-400"> · </span>
          <a href={`mailto:${site.email}`} className="text-ember-700">
            {site.email}
          </a>
        </p>
      </aside>
    </section>
  );
}
