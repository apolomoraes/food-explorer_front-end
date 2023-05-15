import { Container } from './styles';
import logo from '../../assets/logo.svg';

export function Logo({ width, height, fontSize }) {
  return (
    <Container>
      <img src={logo} width={width} height={height} alt="Polígono Azul" />
      <h1 style={{ fontSize: fontSize }} >Food Explorer</h1>
    </Container >
  )
}