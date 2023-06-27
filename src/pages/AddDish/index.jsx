import { Container, Form, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { BsUpload, BsCurrencyDollar } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";


export function AddDish() {

  return (
    <Container>
      <Header />

      <Content>
        <a href="#">
          <ButtonBack fontSize="1.6rem" size="2.2rem" />
        </a>

        <h1>Novo Prato</h1>

        <Form>
          <InputFile icon={BsUpload} title="Imagem do prato" text="Selecione a imagem" id="image" />
          <Input icon={GiKnifeFork} type="text" placeholder="Ex.: Feijão Tropeiro" title="Nome" id="name" />
          <Input
            icon={BsCurrencyDollar}
            type="number"
            placeholder="R$ 00,00"
            title="Preço"
            id="price" />
        </Form>
      </Content>

      <Footer />
    </Container>
  )
}