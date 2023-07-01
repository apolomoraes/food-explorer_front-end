import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { toastUtils } from '../../components/Toast';
import { Loading } from '../../components/Loading';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  function handleSignUp() {
    return toastUtils.handleError("Preencha todos os campos");
  }

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
              type='text'
              placeholder='Exemplo: Maria da Silva'
              id={'name'}
              title={'Seu nome'}
              icon={FiUser}
            />

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

          <Button title={'CRIAR CONTA'} background={'#750310'} onClick={handleSignUp} />

          <Link to="/">Já tenho uma conta</Link>
        </div>
      </Form>
      {/* {showLoading && <Loading />} */}
    </Container>
  )
}