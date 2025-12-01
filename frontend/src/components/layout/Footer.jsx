import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Mayra<span className="text-orange-600">Fruits</span>
            </h3>
            <p className="text-sm mb-4">
              Mayra Fruits - Premium Nagpur oranges from Warud, delivering quality citrus fruits to global markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-orange-600 transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Nagpur Oranges</li>
              <li>Fresh Citrus Fruits</li>
              <li>Export Quality Oranges</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-orange-600" />
                <span>Warud, Amravati District, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-orange-600" />
                <a href="tel:+919876543210" className="hover:text-orange-600">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-orange-600" />
                <a href="mailto:info@orangeexport.com" className="hover:text-orange-600">info@orangeexport.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OrangeExport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
