import { useEffect, useState } from "react";
import Link from "../scr/components/Link";

export async function getStaticProps(context) {
  return {
    props: {
      texto: 'ainda esta em carga'
    },
  };
}

export default function FaqPage(props) {

  console.log(props);

  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const FAQ_API_URL =
      "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    fetch(FAQ_API_URL)
      .then((respostaDoServidor) => {
        return respostaDoServidor.json();
      })
      .then((resposta) => {
        setTimeout(() => {}, 5000);
        setFaq(resposta);
      }); //console.log(resposta)
  }, []);

  return (
    <div>
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
