import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">GT Powerwash</h3>
            <p className="text-sm leading-relaxed">
              Professional residential and commercial pressure washing services.
              We restore the look of your property with powerful, thorough cleaning.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>House &amp; Siding Washing</li>
              <li>Driveway &amp; Sidewalk Cleaning</li>
              <li>Deck &amp; Patio Cleaning</li>
              <li>Roof Soft Washing</li>
              <li>Commercial Pressure Washing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+1-000-000-0000" className="hover:text-white transition-colors">
                  (000) 000-0000
                </a>
              </li>
              <li>
                <a href="mailto:info@gtpowerwash.com" className="hover:text-white transition-colors">
                  info@gtpowerwash.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} GT Powerwash. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
