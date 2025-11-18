import { FaHistory, FaGlobeAsia, FaHandshake } from 'react-icons/fa';

const CompanyStory = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in the agricultural hub of Warud, Amravati district, we are rooted in the region that's globally recognized as the birthplace of the authentic Nagpur orange. What started as a family business has grown into a trusted name in international fruit exports.
              </p>
              <p>
                Warud's unique soil composition and climate create the perfect conditions for growing oranges with exceptional sweetness, juiciness, and color. We work directly with local farmers who have generations of expertise in cultivating these premium fruits.
              </p>
              <p>
                Today, we export to over 20 countries across the Middle East, Europe, and Asia, maintaining the highest standards of quality at every step - from farm to delivery.
              </p>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
              <FaHistory className="text-3xl text-orange-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+ Years</h3>
              <p className="text-gray-700">Of excellence in orange cultivation and export</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
              <FaGlobeAsia className="text-3xl text-orange-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">20+ Countries</h3>
              <p className="text-gray-700">Serving businesses across global markets</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
              <FaHandshake className="text-3xl text-orange-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+ Clients</h3>
              <p className="text-gray-700">Trusted partnerships with businesses worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
