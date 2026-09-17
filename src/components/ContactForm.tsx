"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-card border border-ember-200 bg-ember-50/40 p-6">
        <h3 className="font-semibold text-ink-900">Message received</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">
          We reply within one business day at {site.email}. For same-day order questions, call{" "}
          {site.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink-800">Name</span>
        <input
          required
          name="name"
          className="rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 outline-none focus:border-ember-500"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink-800">Email</span>
        <input
          required
          type="email"
          name="email"
          className="rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 outline-none focus:border-ember-500"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink-800">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-lg border border-ink-200 px-3 py-2.5 text-ink-900 outline-none focus:border-ember-500"
        />
      </label>
      <button
        type="submit"
        className="rounded-lg bg-ember-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ember-800"
      >
        Send message
      </button>
    </form>
  );
}
