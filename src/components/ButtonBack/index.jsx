import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";


export function ButtonBack({ fontSize, size }) {
  return (
    <Container fontSize={fontSize} size={size}>
      <IoIosArrowBack />
      voltar
    </Container>
  )
}