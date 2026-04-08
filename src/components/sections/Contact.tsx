"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up to a form backend (e.g. Resend, Formspree, or a Next.js API route)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-20 bg-blue-700 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Get Your Free Quote</h2>
          <p className="text-blue-100 text-lg">
            Fill out the form below and we'll get back to you within one business day.
          </p>
        </div>

        {status === "sent" ? (
          <div className="text-center bg-white/10 rounded-2xl p-10">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">Thanks! We'll be in touch soon.</h3>
            <p className="text-blue-100">Expect a response within 1 business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
                  Phone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="service">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              >
                <option value="">Select a service...</option>
                <option>House &amp; Siding Washing</option>
                <option>Driveway &amp; Sidewalk</option>
                <option>Deck &amp; Patio</option>
                <option>Roof Soft Washing</option>
                <option>Fence Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                placeholder="Tell us about your property and what you need cleaned..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Request My Free Quote"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
