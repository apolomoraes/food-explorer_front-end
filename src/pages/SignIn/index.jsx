import { Container } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
export function SignIn() {
  return (
    <Container>
      <Input type='email' placeholder='Exemplo: exemplo@exemplo.com.br' id={'email'} title={'Email'} />
      <Input type='password' placeholder='No mínimo 6 caracteres' id={'password'} title={'Senha'} />
      <Button title={'Entrar'} backgroundColor={'#750310'} />
    </Container>
  )
}