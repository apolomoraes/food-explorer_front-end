import { Container, Field } from './styles';
import { BsChevronDown } from "react-icons/bs";

export function Select({ title, ...rest }) {
  return (
    <Container>
      <label>{title}</label>
      <Field>
        <select name="category" required defaultValue={'refeições'}>
          <option value="refeições" >Refeição</option>
          <option value="pratos_principais" >Pratos Principais</option>
          <option value="sobremesa">Sobremesas</option>
        </select>
        <BsChevronDown size={24} />
      </Field>
    </Container>
  );
}