    const regionData = [
  {
    region: "Middle East & Gulf",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait"],
    buyers: "Wholesalers, supermarkets, exporters",
    notes: "Consistent supply during export season via Dubai and Jeddah ports."
  },
  {
    region: "Europe",
    countries: ["Netherlands", "Germany", "UK", "France", "Belgium"],
    buyers: "Importers, distributors, fresh produce markets",
    notes: "Compliance with EU food safety standards and efficient cold chain logistics."
  },
  {
    region: "Asia-Pacific",
    countries: ["Singapore", "Malaysia", "Thailand", "Hong Kong"],
    buyers: "Retail chains, wholesalers",
    notes: "Fast delivery routes ensuring freshness and quality."
  },
  {
    region: "Domestic India",
    countries: ["Major metro cities & distribution centers"],
    buyers: "Retailers, local distributors",
    notes: "Direct farm-to-store supply with rigorous quality checks."
  },
];

const MarketsGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Export Regions & Buyers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regionData.map(({region, countries, buyers, notes}, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{region}</h3>
              <p className="text-gray-700 mb-2"><strong>Main Destination Countries:</strong> {countries.join(', ')}</p>
              <p className="mb-2"><strong>Typical Buyers:</strong> {buyers}</p>
              <p className="text-sm text-gray-500 italic">{notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsGrid;
