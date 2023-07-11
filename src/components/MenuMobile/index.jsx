import { Menu, ContainerMenu, HeaderMenu, ContentMenu, SearchMenu } from "./styles";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { useState } from "react";

export function MenuMobile({ isOpen }) {

  return (
    <ContainerMenu>
      <HeaderMenu>
        <button>
          <AiOutlineClose size={28} />
        </button>
        <span>Menu</span>
      </HeaderMenu>


      <ContentMenu>
        <SearchMenu>
          <AiOutlineSearch size={24} />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </SearchMenu>

        {/* {
            isAdmin &&
            <Link to="/add">Novo prato</Link>
          } */}
        <Link onClick={() => { }} to="/">Sair</Link>
      </ContentMenu>

      <Footer />
    </ContainerMenu>
  )
}