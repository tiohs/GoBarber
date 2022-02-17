import React, { InputHTMLAttributes } from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = (props) => (
  <Container>
    <input {...props} />
  </Container>
);

export default Input;
