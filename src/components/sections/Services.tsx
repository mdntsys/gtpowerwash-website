const services = [
  {
    title: "House & Siding Washing",
    description:
      "Remove dirt, mold, mildew, and algae from your home's exterior. We use safe soft-washing techniques that protect your siding and paint.",
    icon: "🏠",
  },
  {
    title: "Driveway & Sidewalk",
    description:
      "Blast away oil stains, tire marks, and embedded grime from concrete and pavers. Your driveway will look brand new.",
    icon: "🛣️",
  },
  {
    title: "Deck & Patio",
    description:
      "Restore your outdoor living space. We clean wood, composite, and stone decks and patios, prepping them for staining or sealing.",
    icon: "🌿",
  },
  {
    title: "Roof Soft Washing",
    description:
      "Safely eliminate black streaks (Gloeocapsa magma), moss, and lichen from your roof without damaging shingles.",
    icon: "🏡",
  },
  {
    title: "Fence Cleaning",
    description:
      "Revive wood, vinyl, or metal fences with a thorough pressure wash that removes weathering and biological growth.",
    icon: "🔧",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Keep your business looking professional. We service storefronts, parking lots, warehouses, and more.",
    icon: "🏢",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            From rooftops to driveways, we handle every surface with professional-grade equipment and proven techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
