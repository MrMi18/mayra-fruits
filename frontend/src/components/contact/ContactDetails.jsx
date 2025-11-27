import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Contact</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <FaPhone className="text-orange-600" />
            <a href="tel:+919876543210" className="hover:text-orange-600">
              +91 98765 43210
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaWhatsapp className="text-green-600" />
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-600"
            >
              WhatsApp (Business)
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-orange-600" />
            <a href="mailto:info@orangeexport.com" className="hover:text-orange-600">
              info@orangeexport.com
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
        <div className="flex items-start gap-3 text-gray-700">
          <FaMapMarkerAlt className="text-orange-600 mt-1" />
          <p>
            Warud, Amravati District,<br />
            Maharashtra, India
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
        <div className="flex items-center gap-3 text-gray-700">
          <FaClock className="text-orange-600" />
          <p>Monday – Saturday: 9:00 AM – 7:00 PM (IST)</p>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          We usually respond to export enquiries within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
