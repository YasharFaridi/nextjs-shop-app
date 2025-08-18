import Link from "next/link";

function Product({product}) {
   return (
    <div className="card bg-base-300 shadow-lg flex flex-col">
      <Link href={`/product/${product.slug_link}`}>
        <a>
          <figure className="aspect-[4/3] overflow-hidden rounded-t-2xl">
            <img
              src={product.image_src}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </figure>
        </a>
      </Link>

      <div className="card-body flex flex-col flex-grow">
        <Link href={`/product/${product.slug_link}`}>
          <a>
            <h2 className="card-title text-lg line-clamp-2">
              {product.title}
            </h2>
          </a>
        </Link>

        <h3 className="font-bold mt-2">{product.price} $</h3>

        <div className="card-actions mt-auto justify-center">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
