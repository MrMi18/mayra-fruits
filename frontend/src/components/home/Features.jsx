import { FaCheckCircle, FaTruck, FaCertificate, FaLeaf } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';

const Features = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-4xl text-orange-600" />,
      title: 'Premium Quality',
      description: 'Hand-picked, export-grade Nagpur oranges with superior taste and freshness.'
    },
    {
      icon: <FaTruck className="text-4xl text-orange-600" />,
      title: 'Global Delivery',
      description: 'Efficient logistics and cold chain management for worldwide shipping.'
    },
    {
      icon: <FaCertificate className="text-4xl text-orange-600" />,
      title: 'Certified Export',
      description: 'APEDA registered with all necessary export certifications and quality standards.'
    },
    {
      icon: <FaLeaf className="text-4xl text-orange-600" />,
      title: 'Sustainable Farming',
      description: 'Grown with sustainable practices from the farms of Warud, Nagpur region.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Choose Mayra Fruits"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
