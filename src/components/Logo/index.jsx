import { Container } from './styles';
import logo from '../../assets/logo.svg';

export function Logo({ fontSize, width, height, display, isAdmin }) {
  return (
    <Container fontSize={fontSize} display={display} isAdmin={isAdmin}>
      <img src={logo} width={width} height={height} alt="Polígono Azul" />
      <h1 >Food Explorer</h1>
      {isAdmin && <p>Admin</p>}
    </Container >
  )
}