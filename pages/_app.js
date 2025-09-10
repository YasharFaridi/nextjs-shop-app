import { CartContextProvider } from "../contexts/Cart";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
