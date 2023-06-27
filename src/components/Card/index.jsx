import { Container, Amount, PlateName, Value, Description } from "./styles";
import { Button } from '../../components/Button';
import { AiOutlinePlus, AiOutlineHeart, AiFillHeart, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRightShort, BsPencil } from "react-icons/bs";
import { useState } from "react";

export function Card({ plateName, value, image, isAdmin }) {
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
    <Container isclicked={isClicked ? 1 : 0} isadmin={isAdmin ? 1 : 0}>
      <button onClick={handleClick} className="favorite">
        {isClicked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
      </button>

      {
        isAdmin &&
        <a className="admin" href="#">
          <BsPencil size={24} />
        </a>
      }

      <img src={image} alt={`Imagem do prato/lanche ${plateName}`} />

      <Description>
        <PlateName>
          <p>{plateName}</p>
          <button>
            <BsArrowRightShort size={24} />
          </button>
        </PlateName>

        <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
      </Description>

      <Value>R$ {value}</Value>

      <Amount>
        <div>
          <button className="decrement" onClick={decrement}>
            <AiOutlineMinus size={24} />
          </button>
          <span>{amount.toString().padStart(2, '0')}</span>
          <button className="increment" onClick={increment}>
            <AiOutlinePlus size={24} />
          </button>
        </div>
        <Button title={'Incluir'} background={'#750310'} />
      </Amount>

    </Container>
  )
}