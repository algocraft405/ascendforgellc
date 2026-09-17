import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <Policy
      title="Shipping"
      intro="Orders leave Oklahoma City on business days. If it is on the site, it is on the floor — we do not wait on a supplier to drop-ship it."
    >
      <h2>When it ships</h2>
      <p>
        In-stock orders placed before 14:00 Central go out the same business day. Everything else ships the next
        business day. Lead times on each product page are from the warehouse door, not from a carrier promise.
      </p>
      <h2>Cost</h2>
      <p>
        Free on orders over ${site.freeShippingThreshold} to the continental United States. $8 flat below that.
        Alaska, Hawaii and international quotes are available by emailing {site.email}.
      </p>
      <h2>What we do not do</h2>
      <p>
        We do not split shipments to game a free-shipping threshold, and we do not hide a freight quote until
        checkout. If a bar or a dumbbell pair needs freight, the product page says so before you add it.
      </p>
    </Policy>
  );
}

function Policy({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="container-page prose-policy py-12 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-ink-950">{title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-600">{intro}</p>
      <div className="mt-8 space-y-6 text-ink-700 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink-950 [&_p]:leading-relaxed [&_li]:leading-relaxed">
        {children}
      </div>
    </article>
  );
}
