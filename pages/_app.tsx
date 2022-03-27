import "../styles/globals.css";
import type { AppProps } from "next/app";

import "react-toastify/dist/ReactToastify.css";
import { Web3ContextProvider } from "~/core/context";
import Layout from "~/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ContextProvider>
  );
}

export default MyApp;
