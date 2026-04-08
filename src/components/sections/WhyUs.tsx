const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "5★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "Same Day", label: "Quotes Available" },
];

const reasons = [
  {
    title: "Fully Insured",
    description: "We carry full liability insurance so you have complete peace of mind on every job.",
  },
  {
    title: "Eco-Friendly Chemicals",
    description: "Our cleaning solutions are biodegradable and safe for your family, pets, and landscaping.",
  },
  {
    title: "Professional Equipment",
    description: "We use commercial-grade pressure washers and hot water systems for superior results.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "If you're not happy with the results, we'll come back and make it right at no charge.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Why Choose GT Powerwash?</h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            We're committed to delivering exceptional results with every visit.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
