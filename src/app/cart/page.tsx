"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { ProductPhoto } from "@/components/ProductPhoto";
import { money } from "@/lib/format";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function CartPage() {
  const { lines, subtotal, setQuantity, remove, clear, hydrated } = useCart();
  const [placed, setPlaced] = useState(false);

  const detailed = useMemo(
    () =>
      lines
        .map((line) => {
          const product = products.find((item) => item.slug === line.slug);
          return product ? { product, quantity: line.quantity } : null;
        })
        .filter((line): line is NonNullable<typeof line> => Boolean(line)),
    [lines],
  );

  const shipping = subtotal === 0 || subtotal >= site.freeShippingThreshold ? 0 : 8;
  const total = subtotal + shipping;

  if (!hydrated) {
    return <section className="container-page py-16 text-ink-500">Loading cart…</section>;
  }

  if (placed) {
    return (
      <section className="container-page py-16">
        <p className="numeric text-sm font-bold uppercase tracking-wider text-ember-700">Order received</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-950">We will confirm by email</h1>
        <p className="mt-4 max-w-xl text-ink-600">
          A member of the warehouse will reply from {site.email} with availability and a payment link. For same-day
          questions, call {site.phoneDisplay}.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-lg bg-ember-700 px-6 py-3 text-sm font-semibold text-white hover:bg-ember-800"
        >
          Back to the catalogue
        </Link>
      </section>
    );
  }

  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold tracking-tight text-ink-950">Cart</h1>
      {detailed.length === 0 ? (
        <div className="mt-8 rounded-card border border-ink-200 p-8">
          <p className="text-ink-600">Your cart is empty. Everything we stock is on one page.</p>
          <Link
            href="/shop"
            className="mt-6 inline-block rounded-lg bg-ember-700 px-6 py-3 text-sm font-semibold text-white hover:bg-ember-800"
          >
            Browse gear
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <ul className="divide-y divide-ink-100 border-y border-ink-100">
            {detailed.map(({ product, quantity }) => (
              <li key={product.slug} className="flex gap-4 py-5">
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg border border-ink-200 sm:h-28 sm:w-28">
                  <ProductPhoto id={product.id} sizes="112px" />
                </div>
                <div className="min-w-0 flex-1">
                  <Link href={`/shop/${product.slug}`} className="font-semibold text-ink-900 hover:text-ember-700">
                    {product.name}
                  </Link>
                  <p className="numeric mt-1 text-sm text-ink-500">{money(product.price)}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <label className="flex items-center gap-2 text-sm text-ink-600">
                      Qty
                      <select
                        className="rounded-md border border-ink-200 px-2 py-1 text-ink-900"
                        value={quantity}
                        onChange={(event) => setQuantity(product.slug, Number(event.target.value))}
                      >
                        {Array.from({ length: 8 }, (_, index) => index + 1).map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button
                      type="button"
                      className="text-sm font-medium text-ink-500 hover:text-ember-700"
                      onClick={() => remove(product.slug)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="numeric font-semibold text-ink-900">{money(product.price * quantity)}</p>
              </li>
            ))}
          </ul>
          <aside className="rounded-card border border-ink-200 bg-ink-50/60 p-6 h-fit">
            <h2 className="font-semibold text-ink-950">Order summary</h2>
            <dl className="numeric mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-500">Subtotal</dt>
                <dd>{money(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-500">Shipping</dt>
                <dd>{shipping === 0 ? "Free" : money(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-ink-200 pt-3 text-base font-bold text-ink-950">
                <dt>Total</dt>
                <dd>{money(total)}</dd>
              </div>
            </dl>
            <form
              className="mt-6 grid gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                clear();
                setPlaced(true);
              }}
            >
              <input
                required
                name="name"
                placeholder="Name"
                className="rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-ember-500"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-ember-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-ember-700 px-6 py-3 text-sm font-semibold text-white hover:bg-ember-800"
              >
                Place order request
              </button>
            </form>
            <p className="mt-3 text-xs leading-relaxed text-ink-500">
              We confirm stock by email before taking payment. No charge until we reply.
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}
