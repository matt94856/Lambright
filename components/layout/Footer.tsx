import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-grainger-dark-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo-placeholder.png"
              alt="Grainger Logo"
              width={150}
              height={30}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Grainger is your premier industrial supply company. We provide maintenance, repair and operations (MRO) solutions to keep your business running.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="text-gray-400 hover:text-white">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-400 hover:text-white">
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white">
                  Safety Resources
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/catalogs" className="text-gray-400 hover:text-white">
                  Catalogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Grainger. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 