import { Container, Header, Content, Search, Close } from "./styles"
import { AiOutlineSearch } from "react-icons/ai";
import { Footer } from "../../components/Footer";
import { useState } from "react";

export function MenuMobile() {
  const [active, setActive] = useState(false);

  function toggleMode() {
    setActive(!active);
  };

  const isAdmin = true
  return (
    <Container>
      <Header onClick={toggleMode}>
        <a href="#">
          <Close size={28} />
          <span>Menu</span>
        </a>
      </Header>


      <Content>
        <Search>
          <AiOutlineSearch size={24} />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </Search>

        {
          isAdmin &&
          <a href="#">Novo prato</a>
        }
        <a href="#">Sair</a>
      </Content>

      <Footer />
    </Container>
  )
} 