import { moneyMask } from '../../helpers/masks';

import { MoneyContainer } from './styles';

interface Props {
  value: string;
}

export const MoneyStyle = ({ value, ...props }: Props) => {
  return (
    <MoneyContainer {...props}>
      <span>R$</span>
      {moneyMask(value.toString())}
    </MoneyContainer>
  );
}