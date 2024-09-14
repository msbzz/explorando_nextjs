import GlobalStyle from "../scr/components/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        {/* Aqui você pode adicionar cabeçalhos ou outros componentes que devem aparecer em todas as páginas */}
        <GlobalStyle/> 
       <Component {...pageProps} />
      </>
    );
  }
  