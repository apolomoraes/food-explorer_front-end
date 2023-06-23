import { AiOutlineMenu } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";

import { Logo } from "../Logo";
import { useState } from "react";
import { Container, Menu, Desktop, Search } from "./styles";

export function Header() {

  return (
    <Container>
      <Menu>
        <AiOutlineMenu size={24} />
        <Logo width={"40px"} height={"40px"} fontSize={"2.2rem"} />

        <button className="mobile">
          <BsReceiptCutoff size={24} />
          <div>0</div>
        </button>

        <Search>
          <input type="text" />
        </Search>

        <Desktop>
          <BsReceiptCutoff size={24} />
          <p>Pedidos <span>(0)</span></p>
        </Desktop>
      </Menu>
    </Container>
  )
}