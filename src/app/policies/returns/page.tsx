import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Returns" };

export default function ReturnsPage() {
  return (
    <article className="container-page py-12 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-ink-950">Returns</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-600">
        You have 30 days from the delivery date to return unworn gear. We issue a prepaid label — you do not need to
        argue with a carrier about the original box.
      </p>
      <div className="mt-8 space-y-6 text-ink-700">
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink-950">What we accept</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>Items returned within 30 days of delivery</li>
            <li>Unworn, unwashed items with original tags and packaging</li>
            <li>Shoes tried on indoors — a pair you walked around the house in is still returnable</li>
            <li>Any item that is the wrong size, provided it has not been modified</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink-950">What we cannot accept</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>Items with wear from outdoor use, gym floors or match play</li>
            <li>Balls that have been inflated and used in a game</li>
            <li>Special-order sizes sourced specifically for you, noted at the time of order</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink-950">Restocking</h2>
          <p className="mt-3 leading-relaxed">
            There is no restocking fee on a return within the 30-day window. You cover return shipping only if the
            item is not defective and not our picking error.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink-950">How to start a return</h2>
          <p className="mt-3 leading-relaxed">
            Call {site.phoneDisplay} or email {site.email} with your order number. We will send a label within one
            business day and refund the original payment method within five business days of the item reaching our
            warehouse.
          </p>
        </section>
      </div>
    </article>
  );
}
