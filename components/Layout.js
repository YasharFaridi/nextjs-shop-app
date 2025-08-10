import Head from "next/head";
import Link from "next/link";

function Layout({ title, children }) {
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
              <Link href="/cart">
                <a>Cart</a>
              </Link>

              <Link href="/login">
                <a>Login</a>
              </Link>
            </div>
          </div>
        </header>
        <main className="container p-4 m-auto mt-4">{children}</main>
        <footer className="flex items-center justify-center h-20">
          Footer
        </footer>
      </div>
    </>
  );
}

export default Layout;
