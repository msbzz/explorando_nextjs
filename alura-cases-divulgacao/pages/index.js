import Link from "../scr/components/Link";
import Title from "../scr/components/titlle";
 
 

export default function HomePage() {
  return (
    <div>
      <Title as='h1'>Alura Cases</Title>
       <Link href="/faq">Ir para FAQ</Link>
    </div>
  );
}
