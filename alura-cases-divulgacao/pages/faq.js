 
import Head from "next/head";
import Link from "../scr/components/Link";

// SSG - Static Side Generetion
// SSR - Serve Side Rendering
// ISG - Incremental Static Generation

//getServerSideProps - paginas sob demanda a cada acesso da pagina é feito o buid  (SSR)
//getStaticProps - paginas estáticas somente é renderizada no build  (SSG)
export async function getServerSideProps(context) {
  
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
  return {
    props: {
      faq,
    },
  };
}

export default function FaqPage({faq}) {
  //console.log('faq ==>> '+faq);
 
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - Paginas de Perguntas FAQ</h1>
      <Link href="/">Ir para a Home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
