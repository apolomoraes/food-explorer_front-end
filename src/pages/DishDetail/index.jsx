import { Container, Content, Wrapper, Ingredients, Amount, Purchase, Description } from "./styles";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiReceipt } from "react-icons/ci";
import { ButtonBack } from "../../components/ButtonBack";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export function DishDetail() {
  const [amount, setAmount] = useState(0);

  function increment() {
    if (amount >= 0) setAmount(amount + 1);
  };

  function decrement() {
    if (amount > 0) setAmount(amount - 1);
  };

  const { user } = useAuth();
  const isAdmin = user && user.admin ? 1 : 0;
  return (
    <Container>
      <Header />

      <Wrapper>
        <Content>
          <Link to="/">
            <ButtonBack fontSize="2.4rem" size="3.2rem" />
          </Link>

          {/* <img src={() => { }} alt="imagem do prato"/*{`Imagem do prato/lanche ${plateName}`}*/ /> */}

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
              <div style={{ display: isAdmin ? 'none' : 'flex' }}>
                <button className="decrement" onClick={decrement}>
                  <AiOutlineMinus size={27} />
                </button>
                <span>{amount.toString().padStart(2, '0')}</span>
                <button className="increment" onClick={increment}>
                  <AiOutlinePlus size={27} />
                </button>
              </div>
              <Purchase to="/edit/1">
                {!isAdmin && <CiReceipt size={32} />}
                <span>{isAdmin ? 'Editar Prato' : 'Incluir - R$ 25,00'}</span>
              </Purchase>
            </Amount>
          </Description>
        </Content>

      </Wrapper>
      <Footer />
    </Container>
  )
}