import Link from "next/link";
import { ProductPhoto } from "@/components/ProductPhoto";
import { ProductCard } from "@/components/ProductCard";
import { money, modelCount } from "@/lib/format";
import { categoryCount, featuredProducts, heroProduct, products } from "@/lib/products";
import { categories, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-ink-200 bg-gradient-to-b from-ember-50/70 to-white">
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ember-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ember-700">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
              Retail ecommerce · {site.city}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
              We only sell sports stuff.
              <span className="block text-ember-700">So we know it properly.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-600">
              {products.length} models, every one of them on our floor in {site.city}. We pick, pack and ship
              ourselves — no marketplace listings, no mystery warehouses. Call {site.phoneDisplay} if you want
              the honest version of a size.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-lg bg-ember-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ember-800"
                href="/shop"
              >
                Browse the catalogue
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="numeric rounded-lg border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-ember-500 hover:text-ember-700"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-card border border-ink-200 bg-white p-6 shadow-xl shadow-ink-900/5">
              <div className="relative overflow-hidden rounded-lg aspect-4/3">
                <ProductPhoto
                  id={heroProduct.id}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                />
              </div>
              <div className="mt-4 flex items-end justify-between gap-4 border-t border-ink-100 pt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ember-700">
                    {heroProduct.brand} · {heroProduct.sku}
                  </p>
                  <p className="mt-1 font-semibold text-ink-900">{heroProduct.name}</p>
                  <p className="numeric mt-1 text-sm text-ink-500">
                    {heroProduct.weight} · {heroProduct.size}
                  </p>
                </div>
                <Link
                  className="numeric shrink-0 rounded-lg bg-ink-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-ink-800"
                  href={`/shop/${heroProduct.slug}`}
                >
                  {money(heroProduct.price)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <div className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-sm font-semibold text-ink-900">Shipped from our floor</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              Free over ${site.freeShippingThreshold} in the continental US. $8 flat below that.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink-900">Sized by people who use it</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              Call us and we will talk through drop, last, and whether the jacket actually layers.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink-900">No drop-ship filler</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              If it is on the site, it is in Oklahoma City. We do not list what we cannot put in a box today.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink-900">30-day returns</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              Unworn, unwashed, original packaging. Full refund to the original payment method.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold tracking-tight text-ink-950">Shop by category</h2>
        <p className="mt-2 max-w-2xl text-ink-600">
          The sport decides more about what you need day to day than the brand does. Here is the honest version
          of each shelf.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="group rounded-card border border-ink-200 p-6 transition hover:border-ember-400 hover:bg-ember-50/40"
              href={`/shop?category=${category.id}`}
            >
              <h3 className="font-semibold text-ink-900 group-hover:text-ember-800">{category.name}</h3>
              <p className="numeric mt-1 text-xs font-medium text-ink-400">
                {modelCount(categoryCount(category.id))}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink-950">In the warehouse now</h2>
            <p className="mt-2 text-ink-600">Everything below is physically on our floor — not a marketplace listing.</p>
          </div>
          <Link
            className="hidden shrink-0 text-sm font-semibold text-ember-700 hover:text-ember-800 sm:block"
            href="/shop"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-ink-200 bg-ink-950 text-ink-200">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Check three things before you order</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ink-400">
              Nearly every return we get comes down to one of these, and all three take a minute. If anything is
              unclear, call us and we will work it out before the box is taped.
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="numeric mt-6 inline-block rounded-lg bg-ember-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ember-500"
            >
              Talk it through — {site.phoneDisplay}
            </a>
          </div>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="numeric flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ember-500/40 bg-ember-500/10 text-sm font-bold text-ember-300">
                1
              </span>
              <div>
                <h3 className="font-semibold text-white">The size you actually wear</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-400">
                  Shoes: if you are between sizes, go up. Jackets: athletic fit, so size up if you layer a fleece.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="numeric flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ember-500/40 bg-ember-500/10 text-sm font-bold text-ember-300">
                2
              </span>
              <div>
                <h3 className="font-semibold text-white">The sport, not the photo</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-400">
                  Trail shoes on a treadmill are wasted rubber. Indoor balls on asphalt are a wasted ball. Match
                  the surface.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="numeric flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ember-500/40 bg-ember-500/10 text-sm font-bold text-ember-300">
                3
              </span>
              <div>
                <h3 className="font-semibold text-white">The return window</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-400">
                  Thirty days, unworn. Try the shoes on carpet. Do not cut tags until you are sure.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
