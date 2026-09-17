import Link from "next/link";
import { ProductPhoto } from "@/components/ProductPhoto";
import { money } from "@/lib/format";
import {
  categoryLabel,
  savingsPercent,
  stockLabel,
  stockTone,
  type Product,
} from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const save = savingsPercent(product);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-ink-200 bg-white transition hover:border-ink-300 hover:shadow-lg hover:shadow-ink-900/5">
      <div className="relative bg-ink-50/60 p-4">
        {save > 0 ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-ember-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Save {save}%
          </span>
        ) : null}
        <div className="relative overflow-hidden rounded-lg aspect-4/3">
          <ProductPhoto id={product.id} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-ink-100 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ember-700">{product.brand}</p>
          <h3 className="mt-1 text-base font-semibold leading-snug text-ink-900">
            <Link className="after:absolute after:inset-0" href={`/shop/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          <p className="numeric mt-1 text-xs text-ink-500">SKU {product.sku}</p>
        </div>
        <dl className="numeric flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-600">
          <div className="flex gap-1">
            <dt className="text-ink-400">Category</dt>
            <dd className="font-medium">{categoryLabel(product.category)}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="text-ink-400">Size</dt>
            <dd className="font-medium">{product.size}</dd>
          </div>
        </dl>
        <p className="line-clamp-2 text-sm leading-relaxed text-ink-600">{product.summary}</p>
        <div className="mt-auto pt-2">
          <div className="flex items-baseline gap-2">
            <span className="numeric text-xl font-bold text-ink-900">{money(product.price)}</span>
            {product.compareAt ? (
              <span className="numeric text-sm text-ink-400 line-through">{money(product.compareAt)}</span>
            ) : null}
          </div>
          <p className={`mt-1.5 text-xs font-medium ${stockTone(product)}`}>{stockLabel(product)}</p>
        </div>
      </div>
    </article>
  );
}
