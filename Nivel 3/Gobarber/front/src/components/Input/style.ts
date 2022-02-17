import styled from 'styled-components';

export const Container = styled.label`
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
