import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/Cart";

function Product({ product }) {
  const { state, dispatch } = useContext(CartContext);

  function addToCartHandler() {
    const existingProduct = state.cart.cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    const qty = existingProduct ? existingProduct.qty + 1 : 1;

    if (product.count < qty) {
      alert("Product is out!");
      return;
    }

    dispatch({ type: "ADD_CART_ITEM", payload: { ...product, qty } });
    console.log("added");
  }

  return (
    <div className="flex flex-col shadow-lg card bg-base-300">
      <Link href={`/product/${product.slug_link}`}>
        <a>
          <figure className="aspect-[4/3] overflow-hidden rounded-t-2xl">
            <img
              src={product.image_src}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </figure>
        </a>
      </Link>
      <div className="flex flex-col flex-grow card-body">
        <Link href={`/product/${product.slug_link}`}>
          <a>
            <h2 className="text-lg card-title line-clamp-2">{product.title}</h2>
          </a>
        </Link>

        <h3 className="mt-2 font-bold">${product.price}</h3>

        <div className="justify-center mt-auto card-actions">
          <button className="btn btn-primary" onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
