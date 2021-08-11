import { MoneyStyle } from '../MoneyStyle';
import { Container } from './styles';

interface Props {
  icon: string;
  value: string;
  title: string;
  className?: string;
}

export function SummaryCard({ icon, value, title, ...props }: Props) {
  return (
    <Container {...props} >
      <header>
        <p>{title}</p>
        <img src={icon} alt="Entradas" />
      </header>
      <strong>
        <MoneyStyle value={value} />
      </strong>
    </Container>
  )
}