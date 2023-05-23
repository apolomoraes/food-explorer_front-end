import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
// import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <div className='logo'>
          <Logo width={"42px"} height={"42px"} fontSize={"3.6rem"} />
        </div>

        <div className="wrapper">
          <div className='inputs'>
            <Input type='email' placeholder='Exemplo: exemplo@exemplo.com.br' id={'email'} title={'Email'} />
            <Input type='password' placeholder='No mínimo 6 caracteres' id={'password'} title={'Senha'} />
          </div>

          <Button title={'ENTRAR'} background={'#750310'} />

          <a href="">Criar uma conta</a>
        </div>
      </Form>
    </Container>
  )
}