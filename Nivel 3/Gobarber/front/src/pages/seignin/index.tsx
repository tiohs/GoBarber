import { Sign } from 'crypto';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './style';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Logo da goBarber" />
      <form action="post">
        <h1>Faça seu logon</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite o email "
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite a password"
        />
        <button type="submit">Enviar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
