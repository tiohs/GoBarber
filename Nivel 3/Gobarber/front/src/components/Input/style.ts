import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.label<ContainerProps>`
  color: #666368;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  & + label {
    margin-top: 8px;
  }
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `};
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `};
  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #666368;
    }
  }
  svg {
    margin-right: 12px;
  }
`;
