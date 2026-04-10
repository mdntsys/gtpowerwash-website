import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "GT Powerwash residential services — driveway cleaning, patio cleaning, car wash, trash can cleaning, window cleaning, and more. Transparent pricing with no hidden fees.",
};

const services = [
  {
    title: "Driveway Cleaning",
    description:
      "Blast away oil stains, tire marks, and years of embedded grime from concrete and paver driveways. We use high-pressure equipment to restore your surface to its original condition.",
    icon: "🛣️",
    priceRange: "$75 – $150",
    priceNote: "Price varies by driveway size and level of staining.",
    includes: ["Oil and grease stain treatment", "Surface pre-treatment", "High-pressure rinse", "Edge detail cleaning"],
  },
  {
    title: "Sidewalk Cleaning",
    description:
      "Keep your walkways clean and safe. We remove mildew, algae, dirt buildup, and weathering from concrete and paver sidewalks so your curb appeal stays sharp year-round.",
    icon: "🚶",
    priceRange: "$50 – $100",
    priceNote: "Price varies by linear footage and condition.",
    includes: ["Algae and mildew removal", "High-pressure wash", "Edge and joint cleaning", "Pre-treatment for heavy buildup"],
  },
  {
    title: "Patio Cleaning",
    description:
      "Restore your outdoor living space to something you're actually proud to show off. We clean concrete, stone, brick, and paver patios — prepping them to look their best all season.",
    icon: "🌿",
    priceRange: "$75 – $175",
    priceNote: "Price varies by patio size and surface material.",
    includes: ["Surface pre-treatment", "High-pressure wash", "Furniture area cleaning", "Grout and joint detail"],
  },
  {
    title: "Car Wash",
    description:
      "A thorough exterior pressure wash done right in your own driveway. We rinse away road grime, mud, and buildup so your vehicle looks clean and polished without the drive to a car wash.",
    icon: "🚗",
    priceRange: "$25 – $50",
    priceNote: "Price varies by vehicle size (car vs. SUV/truck).",
    includes: ["Full exterior rinse", "Wheel and tire cleaning", "Undercarriage rinse", "Gentle low-pressure technique"],
  },
  {
    title: "Trash Can Cleaning",
    description:
      "Your trash cans collect bacteria, mold, and odor over time. We sanitize and deodorize the interior and exterior so they're clean, fresh, and ready for weekly use.",
    icon: "🗑️",
    priceRange: "$20 – $35",
    priceNote: "Price varies by number of cans and size.",
    includes: ["Interior hot-water rinse", "Exterior pressure wash", "Sanitizing treatment", "Deodorizing rinse"],
  },
  {
    title: "Window Cleaning",
    description:
      "Streak-free exterior window cleaning that makes your home look sharp from the outside. We remove water spots, dirt, and grime to give you a clear view and a polished exterior.",
    icon: "🪟",
    priceRange: "$50 – $125",
    priceNote: "Price varies by number of windows and home size.",
    includes: ["Exterior glass cleaning", "Frame and sill wipe-down", "Streak-free finish", "Screen rinse"],
  },
];

const paymentMethods = [
  { name: "Zelle", icon: "💜" },
  { name: "CashApp", icon: "💚" },
  { name: "Venmo", icon: "🔵" },
  { name: "Cash", icon: "💵" },
  { name: "Check", icon: "📝" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Services &amp; Pricing
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
            Honest, transparent pricing. No hidden fees. We price by size and complexity — get in touch for a free quote tailored to your property.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{service.icon}</span>
                      <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="text-blue-700 font-extrabold text-lg">{service.priceRange}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 italic">{service.priceNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Payment Methods</h2>
          <p className="text-gray-500 mb-8">We keep it simple — pay the way that works best for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((pm) => (
              <div
                key={pm.name}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-6 py-3 text-gray-800 font-semibold"
              >
                <span className="text-2xl">{pm.icon}</span>
                {pm.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Book?</h2>
          <p className="text-blue-100 mb-8">
            Get a free quote with no commitment. We&apos;ll get back to you fast.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
