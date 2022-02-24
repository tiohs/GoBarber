import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './style';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Password obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const err = error as ValidationError;
      formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo da goBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input
            icon={FiMail}
            type="text"
            name="email"
            id="email"
            placeholder="Digite o email "
          />
          <Input
            icon={FiLock}
            type="password"
            name="password"
            id="password"
            placeholder="Digite a password"
          />
          <Button>Enviar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
