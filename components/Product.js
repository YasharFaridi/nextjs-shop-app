import Link from "next/link";

<<<<<<< HEAD
function Product({ product }) {
  return (
    <div className="flex flex-col shadow-lg card bg-base-300">
function Product({ product }) {
  return (
    <div className="flex flex-col shadow-lg card bg-base-300">
=======
function Product({product}) {
   return (
    <div className="card bg-base-300 shadow-lg flex flex-col">
>>>>>>> parent of 9974db4 (Create page for each products)
      <Link href={`/product/${product.slug_link}`}>
        <a>
          <figure className="aspect-[4/3] overflow-hidden rounded-t-2xl">
            <img
              src={product.image_src}
              alt={product.title}
<<<<<<< HEAD
              className="object-cover w-full h-full"
              className="object-cover w-full h-full"
=======
              className="w-full h-full object-cover"
>>>>>>> parent of 9974db4 (Create page for each products)
            />
          </figure>
        </a>
      </Link>

<<<<<<< HEAD
      <div className="flex flex-col flex-grow card-body">
      <div className="flex flex-col flex-grow card-body">
        <Link href={`/product/${product.slug_link}`}>
          <a>
            <h2 className="text-lg card-title line-clamp-2">{product.title}</h2>
            <h2 className="text-lg card-title line-clamp-2">{product.title}</h2>
=======
      <div className="card-body flex flex-col flex-grow">
        <Link href={`/product/${product.slug_link}`}>
          <a>
            <h2 className="card-title text-lg line-clamp-2">
              {product.title}
            </h2>
>>>>>>> parent of 9974db4 (Create page for each products)
          </a>
        </Link>

        <h3 className="font-bold mt-2">{product.price} $</h3>

<<<<<<< HEAD
        <div className="justify-center mt-auto card-actions">
        <div className="justify-center mt-auto card-actions">
=======
        <div className="card-actions mt-auto justify-center">
>>>>>>> parent of 9974db4 (Create page for each products)
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
