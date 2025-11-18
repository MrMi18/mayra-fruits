import Button from '../common/Button';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Place Your Order?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Get in touch with us for bulk orders, pricing, and export inquiries. We're here to serve your business needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" className="flex items-center gap-2">
            <FaWhatsapp size={20} />
            WhatsApp Us
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FaEnvelope />
            Send Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
