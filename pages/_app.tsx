import "../styles/globals.css";
import Layout from "../components/Layout";
require('@solana/wallet-adapter-react-ui/styles.css')
import WalletContextProvider from "../components/WalletContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <WalletContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletContextProvider>
  );
}

export default MyApp;
