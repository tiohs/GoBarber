import React from 'react';

import { Container } from './styles';

interface TooltioProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltioProps> = ({ className, title, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
