import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Warranty" };

export default function WarrantyPage() {
  return (
    <article className="container-page py-12 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-ink-950">Warranty</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-600">
        Manufacturing defects are covered for one year from delivery. Wear from training, racing or weather is not a
        defect — it is the point of the gear.
      </p>
      <div className="mt-8 space-y-6 leading-relaxed text-ink-700">
        <p>
          If a seam opens, a collar fails or a bladder will not hold air under normal use, email {site.email} with
          photos and the order number. We replace first and argue later. Strength equipment (bars and bells) carries
          the mechanical coverage printed on the product page, which is longer than one year where noted.
        </p>
        <p>
          This warranty sits on top of whatever the manufacturer publishes. We do not make you call a brand in
          another time zone to start a claim.
        </p>
      </div>
    </article>
  );
}
