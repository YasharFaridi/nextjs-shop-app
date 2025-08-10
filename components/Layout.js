import Head from "next/head";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>

      <div className="flex flex-col min-h-screen justify-between">
        <header className="bg-orange-500">Header</header>
        <main className="container bg-rose-500 m-auto mt-4 p-4">
          {children}
        </main>
        <footer className="bg-sky-500 flex items-center justify-center h-20">
          Footer
        </footer>
      </div>
    </>
  );
}

export default Layout;
