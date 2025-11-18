import { FaCertificate, FaCheckCircle } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    'APEDA (Agricultural and Processed Food Products Export Development Authority)',
    'ISO 9001:2015 - Quality Management System',
    'ISO 22000 - Food Safety Management System',
    'FSSAI (Food Safety and Standards Authority of India)',
    'Nagpur Orange GI Tag (Geographical Indication)',
    'Phytosanitary Certificate for Export',
    'Cold Storage & Pre-cooling Facilities',
    'Export License & IEC Code'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FaCertificate className="text-5xl text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Quality Standards
            </h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of quality and compliance for international exports
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <FaCheckCircle className="text-orange-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-600 rounded-lg">
            <p className="text-gray-700">
              <strong>Note:</strong> All certifications are renewed regularly and available for verification. We comply with international food safety standards and export regulations for all our destination markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
