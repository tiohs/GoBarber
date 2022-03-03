import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container } from './styled';

import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
}
const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();
  return (
    <Container type={message.type} hasDescription={!!message.description}>
      <FiAlertCircle size={18} />
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
