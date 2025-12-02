const steps = [
  {
    title: "Farm Selection & Harvest",
    description: "Sourcing from premium orchards in Warud with careful handpicking to preserve fruit quality.",
  },
  {
    title: "Sorting & Grading",
    description: "Advanced sorting technology to ensure only export-quality oranges proceed for packing.",
  },
  {
    title: "Washing & Treatment",
    description: "Safe and hygienic washing and treatment to retain freshness and meet export standards.",
  },
  {
    title: "Packing & Labeling",
    description: "Custom packaging options with clear labeling and quality seals for export markets.",
  },
  {
    title: "Cold Storage & Pre-cooling",
    description: "State-of-the-art cold chain facilities maintained to keep fruit fresh during transit.",
  },
  {
    title: "Container Loading & Documentation",
    description: "Professional loading with complete export documentation ensuring smooth customs clearance.",
  },
];

const QualityProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Quality Assurance Process
        </h2>

        <div className="space-y-12">
          {steps.map(({title, description}, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-orange-600 font-bold text-xl md:w-48">{`Step ${idx + 1}: ${title}`}</div>
              <div className="text-gray-700">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
