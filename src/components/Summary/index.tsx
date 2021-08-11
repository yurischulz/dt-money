import { SummaryCard } from '../SummaryCard';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <SummaryCard icon={incomeImg} value="1000,00" title="Entradas" />
      <SummaryCard icon={outcomeImg} value="-500,00" title="Saídas" />
      <SummaryCard className="highlight-background" icon={totalImg} value="500,00" title="Total" />
    </Container>
  )
}