import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Nagpur Orange Premium",
    description: "Handpicked, export-quality Nagpur oranges with exceptional sweetness and juiciness.",
    grade: "A Grade",
    packaging: "Cartons of 10kg / 15kg",
    imageSrc: "/images/products/nagpur-orange-premium.jpg"
  },
  {
    id: 2,
    name: "Nagpur Orange Select",
    description: "Selected top-quality oranges suitable for fresh markets and exports.",
    grade: "Select Grade",
    packaging: "Cartons of 10kg",
    imageSrc: "/images/products/nagpur-orange-select.jpg"
  },
  {
    id: 3,
    name: "Warud Fresh Citrus",
    description: "Freshly harvested oranges with excellent color and taste, ideal for bulk orders.",
    grade: "Commercial Grade",
    packaging: "Bulk packaging available",
    imageSrc: "/images/products/warud-fresh-citrus.jpg"
  }
];

const ProductsList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
