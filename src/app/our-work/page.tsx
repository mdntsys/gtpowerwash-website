import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
  description: "See before and after results from GT Powerwash — driveways, patios, sidewalks, windows, and more.",
};

const categories = [
  { label: "Driveways", icon: "🛣️" },
  { label: "Patios", icon: "🌿" },
  { label: "Sidewalks", icon: "🚶" },
  { label: "Windows", icon: "🪟" },
  { label: "Car Washes", icon: "🚗" },
  { label: "Trash Cans", icon: "🗑️" },
];

// Placeholder gallery items — replace src with real photos
const galleryItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: categories[i % categories.length].label,
  icon: categories[i % categories.length].icon,
}));

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Our Work
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
            The proof is in the clean. See what a difference pressure washing makes on real homes in our community.
          </p>
        </div>
      </section>

      {/* What We Work On */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">What We Clean</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div key={cat.label} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Before &amp; After</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Real results from real jobs. Photos coming soon as we grow our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm aspect-video flex flex-col items-center justify-center gap-3 text-gray-400"
              >
                <span className="text-5xl">{item.icon}</span>
                <div className="text-sm font-semibold">{item.label} — Photo Coming Soon</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-blue-800 font-semibold text-lg mb-2">We&apos;re just getting started.</p>
            <p className="text-blue-600 text-sm">
              We&apos;re new to the industry and building our portfolio every week. Check back soon for before &amp; after photos — or{" "}
              <Link href="/contact" className="underline font-semibold hover:text-blue-800">
                become one of our first customers
              </Link>{" "}
              and see the results for yourself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-4">Let Us Do the Same for Your Home</h2>
          <p className="text-blue-100 mb-8">
            Free quotes, no pressure. We&apos;ll assess your property and give you a fair price.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
