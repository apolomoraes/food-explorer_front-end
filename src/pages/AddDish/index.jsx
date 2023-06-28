import { Container, Form, Content, Wrapper, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { BsUpload, BsCurrencyDollar } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import { Select } from "../../components/Select";
import { IngredientTag } from "../../components/IngredientTag";
import { Textarea } from "../../components/Textarea";
export function AddDish() {

  return (
    <Container>
      <Header />

      <Wrapper>
        <Content>
          <a href="#">
            <ButtonBack fontSize="1.6rem" size="2.2rem" />
          </a>

          <h1>Novo Prato</h1>

          <Form>
            <InputFile icon={BsUpload} title="Imagem do prato" text="Selecione a imagem" id="image" />
            <Input icon={GiKnifeFork} type="text" placeholder="Ex.: Feijão Tropeiro" title="Nome" id="name" />
            <Select title="Categoria" />

            <Ingredients>
              <label htmlFor="ingredients" >Ingredientes</label>

              <div>
                <IngredientTag placeholder="Adicionar" isNew id="ingredients" />
              </div>
            </Ingredients>
            <Input
              icon={BsCurrencyDollar}
              type="number"
              placeholder="R$ 00,00"
              title="Preço"
              id="price" />
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" title="Descrição" id="description" />
          </Form>
        </Content>

        <Footer />
      </Wrapper>
    </Container>
  )
}