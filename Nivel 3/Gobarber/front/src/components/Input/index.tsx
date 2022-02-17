import React, { InputHTMLAttributes } from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = () => (
  <Container>
    <input type="text" />
  </Container>
);

export default Input;
