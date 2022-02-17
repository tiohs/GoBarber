import styled from 'styled-components';

export const Container = styled.div`
  input {
    color: #f4ede8;
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    & + input {
      margin-top: 8px;
    }
    &::placeholder {
      color: #666368;
    }
  }
`;
