import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';
interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'green',
  danger: 'red',
  success: 'green'
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 70px;
  ${props => `background-color: ${buttonVariants[props.variant]}`}
`;