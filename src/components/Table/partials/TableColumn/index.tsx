import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode;
  className: string;
}

export function TableColumn({ children, ...props }: Props) {
  return (
    <Container {...props} >
      {children}
    </Container>
  );
}