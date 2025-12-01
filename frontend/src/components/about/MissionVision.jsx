import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100 p-4 rounded-full">
                <FaBullseye className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To deliver the finest quality Nagpur oranges to global markets while supporting local farmers and maintaining sustainable agricultural practices. We are committed to excellence in every aspect of our business - from cultivation to export.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100 p-4 rounded-full">
                <FaEye className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the world's most trusted supplier of premium Indian oranges, recognized for quality, reliability, and innovation in agricultural exports. Mayra Fruits - making Warud the global center for premium orange exports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
