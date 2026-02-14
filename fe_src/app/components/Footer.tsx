import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#ffd100] py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:hello@hannahyanhan.com" className="hover:opacity-70 transition-opacity">
                  hello@hannahyanhan.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+65 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>Singapore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block hover:opacity-70 transition-opacity">
                Home
              </Link>
              <Link to="/about" className="block hover:opacity-70 transition-opacity">
                About
              </Link>
              <Link to="/contact" className="block hover:opacity-70 transition-opacity">
                Contact
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl mb-4">Hannah Yan Han</h3>
            <p className="text-gray-800 leading-relaxed">
              Data scientist and generative artist creating visualizations and exploring the intersection of data and art.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800/20 pt-8 text-center">
          <p className="text-sm text-gray-800">
            © 2026 Hannah Yan Han. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}