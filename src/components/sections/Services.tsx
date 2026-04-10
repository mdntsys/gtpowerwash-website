import Link from "next/link";

const services = [
  {
    title: "Driveway Cleaning",
    description: "Blast away oil stains, tire marks, and embedded grime from concrete and pavers. Your driveway will look brand new.",
    price: "$75 – $150",
  },
  {
    title: "Sidewalk Cleaning",
    description: "Remove built-up dirt, mildew, and weathering from walkways so your curb appeal is always on point.",
    price: "$50 – $100",
  },
  {
    title: "Patio Cleaning",
    description: "Restore your outdoor living space. We clean concrete, stone, and paver patios so you can enjoy them again.",
    price: "$75 – $175",
  },
  {
    title: "Car Wash",
    description: "A thorough exterior wash to get your vehicle looking clean and fresh — done right in your own driveway.",
    price: "$25 – $50",
  },
  {
    title: "Trash Can Cleaning",
    description: "Sanitize and deodorize your trash cans inside and out. Eliminate bacteria and odor fast.",
    price: "$20 – $35",
  },
  {
    title: "Window Cleaning",
    description: "Streak-free window cleaning for a clear view and a polished look on the exterior of your home.",
    price: "$50 – $125",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            From driveways to trash cans, we take care of the dirty work so you don&apos;t have to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-blue-700 font-bold text-sm">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            View Full Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
