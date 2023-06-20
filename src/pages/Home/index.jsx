import { Header } from "../../components/Header";
import { Container, Description } from "./styles";
import { Card } from "../../components/Card";
import flavors from "../../assets/flavors.png";
import prate from '../../assets/prate.png';


export function Home() {
  return (
    <Container>
      <Header />

      <Description>
        <img src={flavors} alt="Alimentos e frutas" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Description>

      <Card
        image={prate}
        plateName="Salada Ravanello"
        value="49,97"
      />
    </Container>
  )
}