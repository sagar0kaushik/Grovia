import products from "../data/products";
import ProductCard from "./ProductCard";

const Products = ({ search }) => {

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <section className="px-10 py-20">

      <h1 className="text-4xl font-bold mb-10 text-[#4A3428]">
        Grocery Products
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default Products;