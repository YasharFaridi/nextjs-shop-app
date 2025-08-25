import Link from "next/link";

function Product({ product }) {
  return (
    <div className="flex flex-col shadow-lg card bg-base-300">
function Product({ product }) {
  return (
    <div className="flex flex-col shadow-lg card bg-base-300">
      <Link href={`/product/${product.slug_link}`}>
        <a>
          <figure className="aspect-[4/3] overflow-hidden rounded-t-2xl">
            <img
              src={product.image_src}
              alt={product.title}
              className="object-cover w-full h-full"
              className="object-cover w-full h-full"
            />
          </figure>
        </a>
      </Link>

      <div className="flex flex-col flex-grow card-body">
      <div className="flex flex-col flex-grow card-body">
        <Link href={`/product/${product.slug_link}`}>
          <a>
            <h2 className="text-lg card-title line-clamp-2">{product.title}</h2>
            <h2 className="text-lg card-title line-clamp-2">{product.title}</h2>
          </a>
        </Link>

        <h3 className="mt-2 font-bold">${product.price}</h3>

        <div className="justify-center mt-auto card-actions">
        <div className="justify-center mt-auto card-actions">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
