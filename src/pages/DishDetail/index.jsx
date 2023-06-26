import { Container, Content, Wrapper, Ingredients, Amount, Purchase, Description } from "./styles";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiReceipt } from "react-icons/ci";
import prate from "../../assets/prate.png";


export function DishDetail() {
  const [amount, setAmount] = useState(0);

  function increment() {
    if (amount >= 0) setAmount(amount + 1);
  };

  function decrement() {
    if (amount > 0) setAmount(amount - 1);
  };

  return (
    <Container>
      <Header />

      <Wrapper>
        <Content>
          <div>
            <a href="">
              <IoIosArrowBack size={24} />
              voltar
            </a>
            <img src={prate} alt="imagem do prato"/*{`Imagem do prato/lanche ${plateName}`}*/ />
          </div>

          <Description>
            <h2>Salada Ravanello</h2>

            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <Ingredients>
              <Ingredient title="alface" />
              <Ingredient title="cebola" />
              <Ingredient title="pepino" />
              <Ingredient title="pepino" />
              <Ingredient title="pepino" />
              <Ingredient title="pepino" />
            </Ingredients>

            <Amount>
              <div>
                <button className="decrement" onClick={decrement}>
                  <AiOutlineMinus size={27} />
                </button>
                <span>{amount.toString().padStart(2, '0')}</span>
                <button className="increment" onClick={increment}>
                  <AiOutlinePlus size={27} />
                </button>
              </div>
              <Purchase>
                <CiReceipt size={32} />
                <span>Incluir - R$ 25,00</span>
              </Purchase>
            </Amount>
          </Description>
        </Content>

        <Footer />
      </Wrapper>
    </Container>
  )
}