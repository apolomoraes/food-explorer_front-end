import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
// import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <Logo width={"42px"} height={"42px"} fontSize={"3.7rem"} />

        <Input type='email' placeholder='Exemplo: exemplo@exemplo.com.br' id={'email'} title={'Email'} />
        <Input type='password' placeholder='No mínimo 6 caracteres' id={'password'} title={'Senha'} />

        <Button title={'Entrar'} background={'#750310'} />

        <a>Criar uma conta</a>
      </Form>
    </Container>
  )
}