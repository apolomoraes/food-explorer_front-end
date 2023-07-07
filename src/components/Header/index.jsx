import { AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { Logo } from "../Logo";
import { Container, Menu, Desktop, Search, Open, New, Logout } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header({ filterDishes }) {
  const { user, signOut } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  return (
    <Container >
      <Menu>
        <Link to="/menu">
          <Open size={24} />
        </Link>
        <Logo width={"40px"} height={"40px"} fontSize={"2.2rem"} display={"none"} isadmin={isAdmin} />

        <button type="button" className="mobile">
          <BsReceiptCutoff size={24} />
          <div>0</div>
        </button>

        <Search>
          <AiOutlineSearch size={24} />
          <input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={filterDishes}
          />
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

          <Logout onClick={signOut}>
            <RxExit size={24} />
          </Logout>
        </Desktop>
      </Menu>
    </Container >
  )
}