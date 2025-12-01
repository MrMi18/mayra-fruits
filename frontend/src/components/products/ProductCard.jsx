const ProductCard = ({ name, description, grade, packaging, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={ "https://tajfruitsco.com/assets/images/gellery/portfolio20.jpg" || imageSrc } alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-orange-700 mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-col space-y-1 text-gray-600 text-sm">
          <span><strong>Grade:</strong> {grade}</span>
          <span><strong>Packaging:</strong> {packaging}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
