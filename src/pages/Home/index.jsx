import { Header } from "../../components/Header";
import { Container, Description, Menu } from "./styles";
import { Card } from "../../components/Card";
import flavors from "../../assets/flavors.png";
import prate from '../../assets/prate.png';
import { Section } from "../../components/Section";
import Slider from "../../components/Slider";
import { SwiperSlide } from "swiper/react";



export function Home() {
  const settings = {
    spaceBetween: 70,
    slidesPerView: 3,
    navigation: true,
    loop: true,
  }

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

      <Menu>
        <Section title="Refeições">
          <Card image={prate} value="47,99" plateName="Salada Ravanello" />
          <Card image={prate} value="47,99" plateName="Salada Ravanello" />
        </Section>

        <Section title="Pratos principais">
          <Card image={prate} value="47,99" plateName="Salada Ravanello" />
          <Card image={prate} value="47,99" plateName="Salada Ravanello" />
        </Section>

        <Section title="Sobremesas">
          <Card image={prate} value="47,99" plateName="Salada Ravanello" />
          <Card image={prate} value="47,99" plateName="Salada Ravanello" />
        </Section>
      </Menu>

    </Container >
  )
}