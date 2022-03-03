import React from 'react';
import Toast from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  mes: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ mes }) => {
  return (
    <Container>
      {mes.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};
export default ToastContainer;
