"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export function AddToCartButton({ slug, disabled }: { slug: string; disabled?: boolean }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled}
      className="rounded-lg bg-ember-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ember-800 disabled:bg-ink-300"
      onClick={() => {
        add(slug);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
    >
      {added ? "Added to cart" : "Add to cart"}
    </button>
  );
}
