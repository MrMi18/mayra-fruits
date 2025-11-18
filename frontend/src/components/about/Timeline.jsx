import { FaSeedling, FaCertificate, FaShippingFast, FaTrophy } from 'react-icons/fa';

const Timeline = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Started our journey in Warud with a vision to share Nagpur oranges globally',
      icon: <FaSeedling className="text-2xl" />
    },
    {
      year: '2013',
      title: 'First Export',
      description: 'Successfully exported our first shipment to Middle East markets',
      icon: <FaShippingFast className="text-2xl" />
    },
    {
      year: '2017',
      title: 'APEDA Certification',
      description: 'Achieved APEDA registration and quality certifications',
      icon: <FaCertificate className="text-2xl" />
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Expanded operations to serve 20+ countries across three continents',
      icon: <FaTrophy className="text-2xl" />
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as a leading orange exporter from the Vidarbha region',
      icon: <FaTrophy className="text-2xl" />
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Key Milestones
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>

            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-orange-600 font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-2/12 flex justify-center">
                  <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                    {milestone.icon}
                  </div>
                </div>

                {/* Empty space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    {milestone.icon}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-1 h-full bg-orange-200 mt-2"></div>
                  )}
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg flex-grow">
                  <div className="text-orange-600 font-bold text-lg mb-1">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
