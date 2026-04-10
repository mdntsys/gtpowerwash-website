"use client";

import { useState } from "react";

const paymentMethods = [
  { name: "Zelle" },
  { name: "CashApp" },
  { name: "Venmo" },
  { name: "Cash" },
  { name: "Check" },
];

const contactInfo = [
  {
    label: "Phone",
    value: "(000) 000-0000",
    href: "tel:+10000000000",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@gtpowerwash.com",
    href: "mailto:info@gtpowerwash.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Get a Free Quote
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
            Tell us what you need and we&apos;ll send a confirmation to your email — no commitment, no pressure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h2>
                <ul className="space-y-4">
                  {contactInfo.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center gap-3 text-gray-600 hover:text-blue-700 transition-colors"
                      >
                        <span className="text-blue-600">{item.icon}</span>
                        <div>
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{item.label}</div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">We Accept</h2>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods.map((pm) => (
                    <div
                      key={pm.name}
                      className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-gray-700 font-medium text-sm shadow-sm"
                    >
                      {pm.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="font-bold text-blue-900 mb-2">Response Time</h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  We respond to all quote requests within 1 business day. For urgent needs, give us a call directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === "sent" ? (
                <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-100 p-14">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                  <p className="text-gray-500">Check your email — we sent a confirmation. We&apos;ll follow up within 1 business day.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
                >
                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

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
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="address">
                      Property Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="123 Main St, City, State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="service">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Driveway Cleaning ($75–$150)</option>
                      <option>Sidewalk Cleaning ($50–$100)</option>
                      <option>Patio Cleaning ($75–$175)</option>
                      <option>Car Wash ($25–$50)</option>
                      <option>Trash Can Cleaning ($20–$35)</option>
                      <option>Window Cleaning ($50–$125)</option>
                      <option>Multiple Services</option>
                      <option>Other / Not Sure</option>
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
                      placeholder="Describe your property, what needs cleaning, any specific concerns..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-colors disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Request My Free Quote"}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We&apos;ll send a confirmation to your email and follow up within 1 business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
