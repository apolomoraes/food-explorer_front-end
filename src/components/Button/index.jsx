import { Container } from './styles';

export function Button({ title, backgroundColor, ...rest }) {
  return (
    <Container
      type='button'
      backgroundColor={backgroundColor}
      {...rest}
    >
      {title}
    </Container>
  );
}