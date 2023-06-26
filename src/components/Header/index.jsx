import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { Logo } from "../Logo";
import { Container, Menu, Desktop, Search } from "./styles";

export function Header() {

  return (
    <Container>
      <Menu>
        <AiOutlineMenu size={24} />
        <Logo width={"40px"} height={"40px"} fontSize={"2.2rem"} display={"none"} isAdmin />

        <button type="button" className="mobile">
          <BsReceiptCutoff size={24} />
          <div>0</div>
        </button>

        <Search>
          <AiOutlineSearch size={24} />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </Search>

        <Desktop>
          <button type="button">
            <BsReceiptCutoff size={24} />
            <p>Pedidos <span>(0)</span></p>
          </button>

          <a href="">
            <RxExit size={24} />
          </a>
        </Desktop>
      </Menu>
    </Container>
  )
}