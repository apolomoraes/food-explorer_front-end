import { Container, Amount, DishName, Value, Description } from "./styles";
import { Button } from '../../components/Button';
import { AiOutlinePlus, AiOutlineHeart, AiFillHeart, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRightShort, BsPencil } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import imagePlaceHolder from "../../assets/imagePlaceHolder.png";

export function Card({ data, admin }) {
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

  const dishImage = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceHolder;

  return (
    <Container isclicked={isClicked ? 1 : 0} admin={admin ? 1 : 0}>
      {!admin &&
        <button onClick={handleClick} className="favorite">
          {isClicked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
        </button>
      }

      {
        admin &&
        <Link className="admin" to={`/edit/${data.id}`}>
          <BsPencil size={22} />
        </Link>
      }

      <img src={dishImage} alt={`Imagem do prato/lanche ${data.name}`} />

      <Description>
        <DishName>
          <Link to={`/details/${data.id}`}>
            <p>{data.name}</p>
            <BsArrowRightShort size={24} />
          </Link>
        </DishName>

        <span>{data.description}</span>
      </Description>

      <Value>{data.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}</Value>

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