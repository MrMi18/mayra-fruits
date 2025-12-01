import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Quality', path: '/quality' },
    { name: 'Export Markets', path: '/markets' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-orange-200">
              <FaPhone size={12} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@orangeexport.com" className="hidden md:flex items-center gap-2 hover:text-orange-200">
              <FaEnvelope size={12} />
              <span>info@orangeexport.com</span>
            </a>
          </div>
          <div className="text-sm">
            Warud, Amravati - Premium Nagpur Oranges
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-orange-600">
              Mayra<span className="text-gray-800">Fruits</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-orange-600"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 rounded"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
