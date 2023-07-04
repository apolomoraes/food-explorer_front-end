import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { toastUtils } from '../../components/Toast';
import { Loading } from '../../components/Loading';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, showLoading, user } = useAuth();

  const greetingMessage = () => {
    const isAdmin = user && user.admin ? 1 : 0;
    let hour = new Date().getHours();
    switch (true) {
      case hour <= 5: return !isAdmin ? '👋 Boa madrugada!' : '👋 Boa madrugada! Bom trabalho';
      case hour < 12: return !isAdmin ? '👋 Bom dia!' : '👋 Bom dia! Bom trabalho';
      case hour < 18: return !isAdmin ? '👋 Boa tarde!' : '👋 Boa tarde! Bom trabalho';
      default: return !isAdmin ? '👋 Boa noite!' : '👋 Boa noite! Bom trabalho';
    }
  }

  function handleSignIn() {
    if (!email || !password) return toastUtils.handleError("Preencha todos os campos");

    signIn({ email, password })
    toastUtils.handleDefault(greetingMessage);
  }

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
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type='password'
              placeholder='No mínimo 6 caracteres'
              id={'password'}
              title={'Senha'}
              icon={FiLock}
              autoComplete="on"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button title={'ENTRAR'} background={'#750310'} onClick={handleSignIn} />

          <Link to='/register'>Criar uma conta</Link>
        </div>
      </Form>
      {showLoading && <Loading />}
    </Container>
  )
}