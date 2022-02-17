import React from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
  const handleSubmit = (data: object): void => {
    console.log(data);
  };
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo da goBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input
            icon={FiUser}
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu nome "
          />
          <Input
            icon={FiMail}
            type="text"
            name="email"
            id="email"
            placeholder="Digite o seu email "
          />
          <Input
            icon={FiLock}
            type="password"
            name="password"
            id="password"
            placeholder="Digite a password"
          />
          <Button>Enviar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
