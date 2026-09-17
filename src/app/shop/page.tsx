import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categoryCount, productsByCategory } from "@/lib/products";
import { categories, type CategoryId } from "@/lib/site";

const validCategories = new Set(categories.map((category) => category.id));

function resolveCategory(value?: string) {
  return value && validCategories.has(value as CategoryId) ? (value as CategoryId) : undefined;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const category = resolveCategory(params.category);
  const active = categories.find((item) => item.id === category);
  return {
    title: active ? active.name : "All gear",
    description: active
      ? active.description
      : "Every sports model Ascendforge stocks, with published specifications. If a figure is not on the spec sheet, we leave it blank rather than guess.",
  };
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = resolveCategory(params.category);
  const items = productsByCategory(category);
  const active = categories.find((item) => item.id === category);

  return (
    <section className="container-page py-12">
      <p className="numeric text-xs font-semibold uppercase tracking-wider text-ember-700">Catalogue</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950">
        {active ? active.name : "All gear"}
      </h1>
      <p className="mt-3 max-w-2xl text-ink-600">
        {active
          ? active.description
          : "Every model we stock, with the specs as published. If a figure is not printed on the spec sheet, we leave it blank rather than guess."}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip href="/shop" active={!category} label="All" />
        {categories.map((item) => (
          <FilterChip
            key={item.id}
            href={`/shop?category=${item.id}`}
            active={category === item.id}
            label={`${item.name} (${categoryCount(item.id)})`}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function FilterChip({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={
        active
          ? "rounded-full bg-ink-950 px-3 py-1.5 text-sm font-semibold text-white"
          : "rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-700 hover:border-ember-500 hover:text-ember-700"
      }
    >
      {label}
    </Link>
  );
}
