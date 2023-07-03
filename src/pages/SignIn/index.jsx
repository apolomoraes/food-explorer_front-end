import { useContext } from 'react';
import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi';


export function SignIn() {
  return (
    <Container>
      <Form>
        <div className='logo'>
          <Logo width={"48px"} height={"48px"} fontSize={"3.6rem"} />
        </div>

        <div className="wrapper">
          <h1>Faça login</h1>
          <div className='inputs'>
            <Input
              type='email'
              placeholder='Exemplo: exemplo@exemplo.com.br'
              id={'email'}
              title={'Email'}
              icon={FiMail}
            />
            <Input
              type='password'
              placeholder='No mínimo 6 caracteres'
              id={'password'}
              title={'Senha'}
              icon={FiLock}
            />
          </div>

          <Button title={'ENTRAR'} background={'#750310'} />

          <Link to='/register'>Criar uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}