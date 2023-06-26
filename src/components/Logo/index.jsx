import { Container } from './styles';
import logo from '../../assets/logo.svg';

export function Logo({ fontSize, width, height, display, isAdmin }) {
  return (
    <Container fontSize={fontSize} display={display} isAdmin={isAdmin}>
      <div>
        <img src={logo} width={width} height={height} alt="Polígono Azul" />
        {isAdmin && <p>admin</p>}
      </div>
      <h1 >Food Explorer</h1>
    </Container >
  )
}