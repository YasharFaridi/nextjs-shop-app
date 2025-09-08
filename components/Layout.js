import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/Cart";

function Layout({ title, children }) {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsPrice, setCartItemsPrice] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((acc, cur) => acc + cur.qty, 0));
    setCartItemsPrice(
      cart.cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)
    );
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <div className="shadow-lg navbar bg-base-100">
            <div className="flex-1">
              <Link href="/">
                <a className="mx-8 text-xl font-bold">RedrumShop</a>
              </Link>
            </div>
            <div className="flex gap-6 mx-4">
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {cart.cartItems.length > 0 && (
                        <span className="badge badge-sm indicator-item">
                          {cartItemsCount}
                        </span>
                      )}
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="text-lg font-bold">
                        {cartItemsCount} Items
                      </span>
                      <span className="text-info">
                        Total price: ${cartItemsPrice}
                      </span>
                      <div className="card-actions">
                        <Link href="/cart">
                          <button className="btn btn-secondary btn-block">
                            View cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/login">
                <a>Login</a>
              </Link>
            </div>
          </div>
        </header>
        <main className="container p-4 m-auto mt-4">{children}</main>
        <footer className="p-2 footer footer-center bg-primary text-primary-content">
          <aside>
            <p className="font-bold">Created by Yashar Faridi</p>
            Copyright © 2025 - All right reserved
            <a href="https://github.com/YasharFaridi">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
    3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
    -.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 
    1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.304 
    3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93 
    0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 
    1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 
    11.52 11.52 0 0 1 3.003.404c2.291-1.552 3.297-1.23 
    3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 
    1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 
    5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 
    3.293 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 
    12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default Layout;
