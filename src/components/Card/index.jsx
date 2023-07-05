import { Container, Amount, PlateName, Value, Description } from "./styles";
import { Button } from '../../components/Button';
import { AiOutlinePlus, AiOutlineHeart, AiFillHeart, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRightShort, BsPencil } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Card({ plateName, value, image, admin, id }) {
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
    <Container isclicked={isClicked ? 1 : 0} admin={admin ? 1 : 0}>
      {!admin &&
        <button onClick={handleClick} className="favorite">
          {isClicked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
        </button>
      }

      {
        admin &&
        <Link className="admin" to={`/edit/${id}`}>
          <BsPencil size={22} />
        </Link>
      }

      <img src={image} alt={`Imagem do prato/lanche ${plateName}`} />

      <Description>
        <PlateName>
          <Link to={`/details/${id}`}>
            <p>{plateName}</p>
            <BsArrowRightShort size={24} />
          </Link>
        </PlateName>

        <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
      </Description>

      <Value>R$ {value}</Value>

      <Amount admin={admin ? 1 : 0}>
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