import { FaLeaf, FaUserShield, FaAward, FaHeart } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      icon: <FaAward className="text-4xl text-orange-600" />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every orange is carefully selected to meet international standards.'
    },
    {
      icon: <FaUserShield className="text-4xl text-orange-600" />,
      title: 'Trust & Transparency',
      description: 'Building long-term relationships through honest communication and reliable service.'
    },
    {
      icon: <FaLeaf className="text-4xl text-orange-600" />,
      title: 'Sustainability',
      description: 'Supporting sustainable farming practices that benefit farmers and the environment.'
    },
    {
      icon: <FaHeart className="text-4xl text-orange-600" />,
      title: 'Community Support',
      description: 'Empowering local farmers and contributing to the growth of Warud\'s agricultural economy.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            The principles that guide our business and relationships with partners worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-orange-100">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
