import { Container } from './styles';
import logo from '../../assets/logo.svg';

export function Logo({ fontSize, width, height }) {
  return (
    <Container fontSize={fontSize}>
      <img src={logo} width={width} height={height} alt="Polígono Azul" />
      <h1 >Food Explorer</h1>
    </Container >
  )
}