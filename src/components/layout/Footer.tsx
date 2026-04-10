import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-3">
              <Image src="/gtpowerwash-logo.jpeg" alt="GT Powerwash" height={48} width={164} className="object-contain" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Residential pressure washing done right. We bring grit, care, and passion to every driveway,
              patio, and sidewalk we clean.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2 text-sm">We Accept</h4>
              <p className="text-xs text-gray-400">Zelle · CashApp · Venmo · Cash · Check</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} GT Powerwash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
