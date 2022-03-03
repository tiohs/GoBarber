import React from 'react';
import { FiAlertCircle, FiMessageSquare, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  mes: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ mes }) => {
  return (
    <Container>
      {mes.map((message) => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertCircle size={18} />
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};
export default ToastContainer;
