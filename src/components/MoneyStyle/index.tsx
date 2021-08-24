import { MoneyContainer } from './styles';

interface Props {
  value: number;
}

export const MoneyStyle = ({ value, ...props }: Props) => {
  return (
    <MoneyContainer {...props}>
      <span>R$</span>
      {new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value).replace('R$', '')}
    </MoneyContainer>
  );
}