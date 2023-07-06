import { Header } from "../../components/Header";
import { Container, Description, Menu, Content, Wrapper } from "./styles";
import { Card } from "../../components/Card";
import flavors from "../../assets/flavors.png";
import prate from '../../assets/prate.png';
import { Section } from "../../components/Section";
import Slider from "../../components/Slider";
import { SwiperSlide } from "swiper/react";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";



export function Home() {
  const { user } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  return (
    <Container>
      <Header />

      <Wrapper>
        <Content>
          {/* <MenuMobile /> */}
          <Description>
            <img src={flavors} alt="Alimentos e frutas" />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Description>

          <Menu>
            <Section title="Refeições">
              <Card image={prate} value="47,99" plateName="Salada Ravanello" admin={isAdmin} id={1} />
              <Card image={prate} value="47,99" plateName="Salada Ravanello" admin={isAdmin} id={2} />
            </Section>

            <Section title="Pratos principais">
              <Card image={prate} value="47,99" plateName="Salada Ravanello" admin={isAdmin} id={3} />
              <Card image={prate} value="47,99" plateName="Salada Ravanello" admin={isAdmin} id={4} />
            </Section>

            <Section title="Sobremesas">
              <Card image={prate} value="47,99" plateName="Salada Ravanello" admin={isAdmin} />
              <Card image={prate} value="47,99" plateName="Salada Ravanello" admin={isAdmin} />
            </Section>
          </Menu>
        </Content>


        <Footer />
      </Wrapper>

    </Container >
  )
}