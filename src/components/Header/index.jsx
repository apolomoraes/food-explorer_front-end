import { AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { Logo } from "../Logo";
import { Container, Menu, Desktop, Search, Open, New } from "./styles";
import { Link } from "react-router-dom";

export function Header({ isAdmin }) {

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
          {!isAdmin &&
            <>
              <button type="button">
                <BsReceiptCutoff size={24} />
                <p>Pedidos <span>(5)</span></p>
              </button>
            </>
          }

          {isAdmin &&
            <>
              <New to="/add">
                Novo Prato
              </New>
            </>
          }

          <Link to="/">
            <RxExit size={24} />
          </Link>
        </Desktop>
      </Menu>
    </Container >
  )
}