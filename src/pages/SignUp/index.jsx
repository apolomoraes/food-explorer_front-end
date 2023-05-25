import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';


export function SignUp() {
  return (
    <Container>
      <Form>
        <div className='logo'>
          <Logo width={"42px"} height={"42px"} fontSize={"3.6rem"} />
        </div>

        <div className="wrapper">
          <h1>Crie sua conta</h1>
          <div className='inputs'>
            <Input
              type='email'
              placeholder='Exemplo: Maria da Silva'
              id={'name'}
              title={'Seu nome'}
              icon={FiUser}
            />

            <Input
              type='password'
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

          <Button title={'CRIAR CONTA'} background={'#750310'} />

          <a href="">Já tenho uma conta</a>
        </div>
      </Form>
    </Container>
  )
}