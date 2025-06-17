import { Phone, Mail, MapPin} from 'lucide-react';
import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="transform transition-transform duration-300 group-hover:rotate-12">
  <img
    src={logo}
    alt="Dil Maina Pharmacy"
    className="h-8 w-8 object-contain"
  />
</div>
              <div>
                <h3 className="text-xl font-bold">Dil Maina Pharmacy & Clinic</h3>
                <p className="text-gray-400 text-sm">Your trusted neighborhood health partner</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide quality medicines, doctor consultation. Trusted by thousands of families.
            </p>
          </div>

          {/* Contact Info */}
          <div className="transform transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+97714567890"
                className="flex items-center space-x-3 group hover:text-teal-400 transition-colors duration-300"
              >
                <Phone className="h-5 w-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+977-1-4567890</span>
              </a>
              <a
                href="mailto:gorkhalipatholoy75@gmail.com"
                className="flex items-center space-x-3 group hover:text-teal-400 transition-colors duration-300"
              >
                <Mail className="h-5 w-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">gorkhalipatholoy75@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Dil Maina Pharmacy & Clinic, Kathmandu 44600</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="transform transition-transform duration-300 hover:scale-105">
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between hover:text-teal-400 transition-colors duration-300">
                <span>Sunday - Friday:</span>
                <span>7:30 AM - 9:30 PM</span>
              </div>
              <div className="flex justify-between hover:text-teal-400 transition-colors duration-300">
                <span>Saturday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div className="mt-4 p-3 bg-teal-600 rounded-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300">
                <p className="text-xs font-medium">Emergency Line (24/7)</p>
                <p className="text-xs">
                  <a href="tel:+9779818068544" className="underline hover:text-white">
                    +977-9818068544
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Dil Maina Pharmacy & Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
