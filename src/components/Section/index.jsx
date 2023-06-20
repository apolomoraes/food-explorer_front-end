import { Container, Cards } from './styles'

export function Section({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <h2>
        {title}
      </h2>
      <Cards>
        {children}
      </Cards>
    </Container>
  )
}