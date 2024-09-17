import Head from "next/head";
import GlobalStyle from "../scr/components/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
