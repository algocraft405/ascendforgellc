import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductPhoto } from "@/components/ProductPhoto";
import { ProductCard } from "@/components/ProductCard";
import { money } from "@/lib/format";
import {
  categoryLabel,
  getProduct,
  products,
  relatedProducts,
  savingsPercent,
  stockLabel,
  stockTone,
} from "@/lib/products";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: `${product.name}`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const save = savingsPercent(product);
  const related = relatedProducts(product.slug);

  return (
    <article className="container-page py-12">
      <p className="text-sm text-ink-500">
        <Link href="/shop" className="hover:text-ember-700">
          All gear
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${product.category}`} className="hover:text-ember-700">
          {categoryLabel(product.category)}
        </Link>
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-card border border-ink-200 bg-white p-6">
          <div className="relative overflow-hidden rounded-lg aspect-4/3">
            <ProductPhoto
              id={product.id}
              sizes="(max-width: 1024px) 90vw, 50vw"
              priority
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ember-700">
            {product.brand} · {product.sku}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="numeric text-3xl font-bold text-ink-950">{money(product.price)}</span>
            {product.compareAt ? (
              <span className="numeric text-lg text-ink-400 line-through">{money(product.compareAt)}</span>
            ) : null}
            {save > 0 ? (
              <span className="rounded-full bg-ember-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                Save {save}%
              </span>
            ) : null}
          </div>
          <p className={`mt-3 text-sm font-medium ${stockTone(product)}`}>{stockLabel(product)}</p>

          <ul className="mt-6 space-y-2 text-sm text-ink-700">
            <li>Free shipping on orders over ${site.freeShippingThreshold}</li>
            <li>Packed in {site.city} and shipped ourselves</li>
            <li>Fit questions answered on the phone, same day</li>
            <li>30-day returns · 1 year against manufacturing defects</li>
          </ul>

          <dl className="numeric mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-ink-200 p-3">
              <dt className="text-ink-400">Weight</dt>
              <dd className="mt-1 font-semibold text-ink-900">{product.weight}</dd>
            </div>
            <div className="rounded-lg border border-ink-200 p-3">
              <dt className="text-ink-400">Size</dt>
              <dd className="mt-1 font-semibold text-ink-900">{product.size}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <AddToCartButton slug={product.slug} disabled={product.stock <= 0} />
          </div>
        </div>
      </div>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink-950">Why we stock this one</h2>
          <p className="mt-4 leading-relaxed text-ink-600">{product.why}</p>
          <h3 className="mt-8 text-lg font-semibold text-ink-950">Key features</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink-950">Full specifications</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Every figure below is as published. Where a value is shown as “—”, the manufacturer does not print it
            and we will not invent one.
          </p>
          {product.specs.map((group) => (
            <div key={group.group} className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">{group.group}</h3>
              <dl className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
                {group.rows.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-2.5 text-sm">
                    <dt className="text-ink-500">{row.label}</dt>
                    <dd className="numeric font-medium text-ink-900">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-ink-950">Also on the floor</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
