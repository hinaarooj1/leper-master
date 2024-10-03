import { FC, ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import WalletContextProvider from "./WalletContextProvider";
import { UserProvider } from "../hooks/userProvider";
import ConnectionHoc from "./ConnectionHoc";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Meme2Earn - $LEPER token</title>
        <meta name="title" content="Meme2Earn  - $LEPER token" />
        <meta
          name="description"
          content="Help Larry distribute memes across the crypto space to earn frequent airdrops of $LEPER."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meme2earn.cash" />
        <meta property="og:title" content="Meme2Earn  - $LEPER token" />
        <meta
          property="og:description"
          content="Help Larry distribute memes across the crypto space to earn frequent airdrops of $LEPER."
        />
        <meta property="og:image" content="https://meme2earn.cash/main.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://meme2earn.cash" />
        <meta property="twitter:title" content="Meme2Earn  - $LEPER token" />
        <meta
          property="twitter:description"
          content="Help Larry distribute memes across the crypto space to earn frequent airdrops of $LEPER."
        />
        <meta
          property="twitter:image"
          content="https://meme2earn.cash/main.png"
        />

        <link rel="icon" type="image/x-icon" href="favicon.png " />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.cdnfonts.com/css/introvert"
          rel="stylesheet"
        />
      </Head>
      <UserProvider>
        <Header></Header>
        <ConnectionHoc>
          <main>{children}</main>
        </ConnectionHoc>
      </UserProvider >
    </>
  );
};

export default Layout;
