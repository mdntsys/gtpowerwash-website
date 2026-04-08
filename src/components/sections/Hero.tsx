import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Professional Pressure Washing<br className="hidden sm:block" /> You Can Trust
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 mb-10">
          GT Powerwash delivers spotless results for residential and commercial properties.
          Fast, reliable, and affordable service — get your property looking its best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/#services"
            className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
