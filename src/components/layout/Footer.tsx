import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Twitter, Linkedin, Globe } from 'lucide-react';
import { DEVELOPER_INFO } from '../../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">JodisCars</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner in finding the perfect car. We provide comprehensive 
              car listings, inspections, and secure payment solutions.
            </p>
            <div className="flex space-x-4">
              <a href={`https://twitter.com/${DEVELOPER_INFO.twitter}`} className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={`https://linkedin.com/in/${DEVELOPER_INFO.linkedin}`} className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`https://${DEVELOPER_INFO.website}`} className="text-gray-400 hover:text-blue-400">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/cars" className="text-gray-300 hover:text-blue-400 text-sm">Buy Cars</Link></li>
              <li><Link to="/sell" className="text-gray-300 hover:text-blue-400 text-sm">Sell Your Car</Link></li>
              <li><Link to="/inspections" className="text-gray-300 hover:text-blue-400 text-sm">Car Inspections</Link></li>
              <li><Link to="/financing" className="text-gray-300 hover:text-blue-400 text-sm">Financing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 text-sm">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-blue-400 text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 text-sm">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 text-sm">About Us</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-blue-400 text-sm">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400 text-sm">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-blue-400 text-sm">Refund Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-blue-400 text-sm">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-gray-300 hover:text-blue-400 text-sm">
                  {DEVELOPER_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href={`tel:${DEVELOPER_INFO.phone}`} className="text-gray-300 hover:text-blue-400 text-sm">
                  {DEVELOPER_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-blue-400" />
                <a href={`https://${DEVELOPER_INFO.website}`} className="text-gray-300 hover:text-blue-400 text-sm">
                  {DEVELOPER_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} JodisCars v1.0. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Developed by <span className="text-blue-400">{DEVELOPER_INFO.name}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;