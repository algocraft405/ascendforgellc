import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${site.phoneDisplay} or email ${site.email}. We answer our own phone during business hours.`,
};

export default function ContactPage() {
  return (
    <section className="container-page py-12">
      <p className="numeric text-xs font-semibold uppercase tracking-wider text-ember-700">Reach us</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950">Contact us</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
        Sizing questions, shipping, or working out whether a shoe last will fit — call us, that is usually fastest.
        We answer our own phone during business hours.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Warehouse</h2>
            <p className="mt-2 leading-relaxed text-ink-800">
              {site.legalName}
              <br />
              {site.city}, {site.region}
              <br />
              {site.country}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Phone</h2>
            <p className="numeric mt-2">
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-ember-700">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Email</h2>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="text-ember-700">
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Hours</h2>
            <ul className="numeric mt-2 space-y-1.5 text-sm text-ink-700">
              {site.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4 max-w-xs">
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-ink-500">All times {site.timezone}.</p>
          </div>
        </div>
        <div className="rounded-card border border-ink-200 p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-ink-950">Send us a message</h2>
          <p className="mt-2 mb-6 text-sm text-ink-600">
            We reply within one business day. For same-day shipping questions, please call.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
