import { Container, Amount, PlateName, Value } from "./styles";
import { Button } from '../../components/Button';
import { AiOutlinePlus, AiOutlineHeart, AiFillHeart, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";

export function Card({ plateName, value, image }) {
  const [amount, setAmount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  function increment() {
    if (amount >= 0) setAmount(amount + 1);
  };

  function decrement() {
    if (amount > 0) setAmount(amount - 1);
  };

  function handleClick() {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <button onClick={handleClick}>
        {isClicked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
      </button>

      <img src={image} alt={`Imagem do prato/lanche ${plateName}`} />

      <PlateName>
        <p>{plateName}</p>
        <button>
          <BsArrowRightShort size={24} />
        </button>
      </PlateName>

      <Value>R$ {value}</Value>

      <Amount>
        <button onClick={decrement}>
          <AiOutlineMinus size={24} />
        </button>
        <span>{amount.toString().padStart(2, '0')}</span>
        <button onClick={increment}>
          <AiOutlinePlus size={24} />
        </button>
      </Amount>

      <Button title={'Incluir'} background={'#750310'} />
    </Container>
  )
}