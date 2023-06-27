import { AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { Logo } from "../Logo";
import { Container, Menu, Desktop, Search, Open } from "./styles";

export function Header({ isAdmin, amount }) {

  return (
    <Container isadmin={isAdmin ? 1 : 0}>
      <Menu>
        <a href="#">
          <Open size={24} />
        </a>
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
            {!isAdmin && <BsReceiptCutoff size={24} />}
            {
              isAdmin ? <p>Novo Prato</p> : <p>Pedidos <span>({amount})</span></p>
            }
          </button>

          <a href="">
            <RxExit size={24} />
          </a>
        </Desktop>
      </Menu>
    </Container>
  )
}