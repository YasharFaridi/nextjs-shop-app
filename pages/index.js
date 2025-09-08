import Layout from "../components/Layout";
import Product from "../components/Product";
import productItems from "../data/products.json";

export default function Home() {
  return (
    <Layout title="Home page">
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-6 md:px-8 lg:px-12 md:grid-cols-2 lg:grid-cols-3">
        {productItems.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </Layout>
  );
}
