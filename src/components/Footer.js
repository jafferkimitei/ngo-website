import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        
        {/* Logo & Description */}
        <div>
          <div className="mb-4">
            <Image src="/logo.png" alt="Organization Logo"
              className="w-32 h-auto"
              width={128}
              height={32}/>
          </div>
          <p className="text-gray-400">
            We are a non-profit charity organisation dedicated to supporting marginalized communities.Our mission is to uplift and empower those in need through various initiatives, including food rescue and redistribution.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/volunteer" className="text-gray-400 hover:text-white">Become a volunteer</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/donate" className="text-gray-400 hover:text-white">Donate</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">3930 Oregon Street, Suite 211, SAN DIEGO, CA 92104</p>
          <p className="text-gray-400 mb-2">Phone: +254 700 123 456</p>
          <p className="text-gray-400 mb-2">Email: info@organization.org</p>
          <p className="text-gray-400">Working Hours: Mon - Fri, 9AM - 6PM</p>
        </div>

        {/* Newsletter Sign-up */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form>
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media & Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} StandUp To Our Perpetrators. All rights reserved. | <Link href="/terms" className="hover:text-white">Terms of Service</Link> | <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link href="https://facebook.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://twitter.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="https://instagram.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
