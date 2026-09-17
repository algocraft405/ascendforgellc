"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/lib/products";

type CartLine = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  hydrated: boolean;
};

const STORAGE_KEY = "ascendforge-cart";
const CartContext = createContext<CartContextValue | null>(null);

function readCart(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        typeof line.slug === "string" &&
        typeof line.quantity === "number" &&
        line.quantity > 0 &&
        products.some((product) => product.slug === line.slug),
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(readCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const add = useCallback((slug: string, quantity = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.slug === slug);
      if (existing) {
        return current.map((line) =>
          line.slug === slug
            ? { ...line, quantity: Math.min(line.quantity + quantity, 12) }
            : line,
        );
      }
      return [...current, { slug, quantity }];
    });
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setLines((current) => {
      if (quantity <= 0) return current.filter((line) => line.slug !== slug);
      return current.map((line) =>
        line.slug === slug ? { ...line, quantity: Math.min(quantity, 12) } : line,
      );
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((current) => current.filter((line) => line.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(() => {
    const detailed = lines
      .map((line) => {
        const product = products.find((item) => item.slug === line.slug);
        return product ? { product, quantity: line.quantity } : null;
      })
      .filter((line): line is { product: Product; quantity: number } => Boolean(line));

    return {
      lines,
      count: detailed.reduce((sum, line) => sum + line.quantity, 0),
      subtotal: detailed.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
      add,
      setQuantity,
      remove,
      clear,
      hydrated,
    };
  }, [add, clear, hydrated, lines, remove, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
