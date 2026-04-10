import Link from "next/link";

const stats = [
  { value: "100%", label: "Satisfaction Guaranteed" },
  { value: "6", label: "Services Offered" },
  { value: "Same Day", label: "Quotes Available" },
  { value: "5 Ways", label: "To Pay" },
];

const reasons = [
  {
    title: "Gritty Work Ethic",
    description: "We outwork everyone. Every job gets our full effort — no shortcuts, no cutting corners.",
  },
  {
    title: "Community First",
    description: "We're from the neighborhoods we serve. We take pride in keeping our community clean.",
  },
  {
    title: "Honest Pricing",
    description: "Transparent quotes with no hidden fees. What we say is what you pay.",
  },
  {
    title: "Flexible Payment",
    description: "We accept Zelle, CashApp, Venmo, Cash, and Check — whatever works best for you.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Why Choose GT Powerwash?</h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            We&apos;re new to the industry but built on the right values — hard work, honesty, and community.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl font-extrabold text-blue-700 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-700 font-bold hover:bg-blue-50 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
