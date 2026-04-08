const testimonials = [
  {
    name: "Sarah M.",
    location: "Homeowner",
    body: "GT Powerwash transformed my driveway — it looks better than when we moved in! The team was professional, fast, and the price was very fair.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Property Manager",
    body: "We use GT Powerwash for all our commercial properties. They're reliable, thorough, and always show up on time. Highly recommend.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Homeowner",
    body: "My deck looks brand new after their soft wash treatment. I was amazed at how much mold and staining they were able to remove.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Don't take our word for it — here's what our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <Stars count={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.body}&rdquo;</p>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-400">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
