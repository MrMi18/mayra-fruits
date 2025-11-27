import { useState } from 'react';

const initialFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  packaging: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.product) {
      return 'Please fill all required fields marked with *.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const error = validate();
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with real API call later
      // await axios.post('/api/inquiries', formData);

      setStatus({
        type: 'success',
        message: 'Thank you for your enquiry. Our team will contact you shortly.',
      });
      setFormData(initialFormState);
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or use WhatsApp/phone.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Export Enquiry Form
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Share your requirements and we will get back with pricing, availability, and shipping details.
      </p>

      {status.message && (
        <div
          className={`p-3 rounded-md text-sm ${
            status.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company / Business name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone / WhatsApp (with country code) *
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <input
            type="text"
            name="country"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.country}
            onChange={handleChange}
            placeholder="Destination country"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Required *
          </label>
          <select
            name="product"
            className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.product}
            onChange={handleChange}
          >
            <option value="">Select product</option>
            <option value="Nagpur Orange Premium">Nagpur Orange Premium</option>
            <option value="Nagpur Orange Select">Nagpur Orange Select</option>
            <option value="Warud Fresh Citrus">Warud Fresh Citrus</option>
            <option value="Other / Custom">Other / Custom requirement</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Approx. Quantity (per shipment)
          </label>
          <input
            type="text"
            name="quantity"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 1 container / 20 tons"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Packaging
          </label>
          <input
            type="text"
            name="packaging"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.packaging}
            onChange={handleChange}
            placeholder="e.g. 10kg cartons, bulk, etc."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details / Requirements
        </label>
        <textarea
          name="message"
          rows="4"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share any details about quality, delivery time, port, payment terms, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
      </button>
    </form>
  );
};

export default ContactForm;
