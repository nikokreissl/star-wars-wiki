import Head from "next/head";
import GlobalStyle from "../styles";
import Header from "/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>STAR WARS-PEDIA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
