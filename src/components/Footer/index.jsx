import { Container, Logo } from './styles';
import logo from '../../assets/logo.svg';

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Polígono Azul" />
        <p>Food Explorer</p>
      </Logo>

      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}