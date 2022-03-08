import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { ValidationError } from 'yup';
import { Link } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígito'),
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
      <Background />
      <Content>
        <img src={logoImg} alt="Logo da goBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
            type="email"
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
        <Link to="/">
          <FiArrowLeft />
          Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
