import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "GT Powerwash — gritty, community-driven, and passionate. Learn who we are and why we do what we do.",
};

const traits = [
  {
    label: "Gritty",
    heading: "We Outwork Everyone",
    body: "We don't cut corners. We don't do halfway. Every driveway, every patio, every window gets our full effort — because that's the only way we know how to work. If something doesn't look right, we go back over it until it does. That's the standard we hold ourselves to on every single job.",
    accent: "bg-blue-50 border-blue-200",
    headingColor: "text-blue-800",
  },
  {
    label: "Community-Driven",
    heading: "We Care About the Neighborhoods We Serve",
    body: "We're not a franchise or a faceless company. We're local. We live and work in the same neighborhoods you do, and we take real pride in keeping them clean. When your property looks good, the whole block looks better — and that matters to us. We treat every home like it's in our own neighborhood.",
    accent: "bg-blue-50 border-blue-200",
    headingColor: "text-blue-800",
  },
  {
    label: "New but Passionate",
    heading: "Fresh to the Industry. Fully Committed.",
    body: "We'll be straight with you — we're new. We don't have decades of experience yet. What we do have is a relentless drive to do excellent work, learn quickly, and build something we're proud of. We're not coasting on reputation — we're earning it, job by job. That keeps us hungry and motivated in ways that matter.",
    accent: "bg-blue-50 border-blue-200",
    headingColor: "text-blue-800",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            About GT Powerwash
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
            We&apos;re a residential pressure washing company built on three things: grit, community, and a genuine passion for doing great work.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            To deliver honest, high-quality pressure washing to homeowners who want someone they can trust —
            someone who shows up, does the job right, and leaves their property looking better than before.
          </p>
        </div>
      </section>

      {/* Meet the Owners */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[2/3] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/gtpowerwash-owners.JPG"
                alt="GT Powerwash owners Gustavo Ramos and Tyler Noe"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Meet the Owners</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                GT Powerwash was founded by Gustavo Ramos and Tyler Noe — two guys who believe that hard work
                and genuine care go further than any sales pitch. They started this company not to just run a
                business, but to build something they&apos;re proud of in the communities they call home.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Gustavo and Tyler bring the same grit to every job that they put into building GT Powerwash from
                the ground up. They&apos;re new to the industry, but not new to putting in the work — and that
                hunger shows in every driveway, patio, and sidewalk they clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Traits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Three traits define everything we do.
            </p>
          </div>

          <div className="space-y-8">
            {traits.map((trait, idx) => (
              <div
                key={trait.label}
                className="rounded-2xl border border-blue-200 bg-blue-50 p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
              >
                <div className="flex-shrink-0 w-36 flex flex-col items-center sm:items-start gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
                    0{idx + 1}. {trait.label}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-blue-800">
                    {trait.heading}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{trait.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                GT Powerwash specializes in residential cleaning services — driveways, patios, sidewalks,
                car washes, trash cans, and window cleaning. We serve homeowners who want a clean, well-kept property
                without the hassle of doing it themselves.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We keep our pricing transparent and our process simple. You reach out, we give you a quote,
                we show up on time, and we get it done right.
              </p>
            </div>
            <div className="bg-blue-700 rounded-2xl p-8 text-white">
              <h3 className="font-extrabold text-lg mb-4">By the Numbers</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0" />
                  6 residential services offered
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0" />
                  5 payment options accepted
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0" />
                  Free quotes, no commitment
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0" />
                  100% satisfaction guaranteed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-4">Work With Us</h2>
          <p className="text-blue-100 mb-8">
            We&apos;d love to earn your business. Reach out for a free, no-obligation quote.
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
