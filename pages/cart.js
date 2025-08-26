import Layout from "../components/Layout";
import { useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "../contexts/Cart";
import Link from "next/link";

function CartPage() {
  const router = useRouter()
  const { state, dispatch } = useContext(CartContext);
  const {
    cart: { cartItems },
  } = state;

  function removeItemsHandler(cartItem) {
    dispatch({ type: "REMOVE_CART_ITEMS", payload: cartItem });
  }
  return (
    <Layout title="Cart">
      {cartItems.length === 0 ? (
        <div className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-info shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-center">The Shoping card is empty.</span>
          <div>
            <Link href="/">
              <button className="btn btn-sm btn-info">Add products</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product Name</th>
                <th className="text-right">Quantity</th>
                <th className="text-right">price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img src={cartItem.image_src} alt={cartItem.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold ">{cartItem.title}</div>
                        <div className="text-sm opacity-50">
                          {cartItem.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">{cartItem.qty}</td>
                  <td className="text-right">${cartItem.price}</td>
                  <th className="text-center">
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => removeItemsHandler(cartItem)}
                    >
                      Remove
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className=" text-lg text-right align-top">
                  Total price
                </td>
                <td className="text-lg text-center">
                  <div className="flex flex-col gap-3">
                    <p className="text-accent">
                      $
                      {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}
                    </p>
                    <button className="btn btn-sm btn-success" onClick={()=> router.push('/shipping')}>Checkout</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </Layout>
  );
}

export default CartPage;
