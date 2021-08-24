import { MAP_TYPES, useTransactions } from '../../hooks/useTransactions';
import { SummaryCard } from '../SummaryCard';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  const { data } = useTransactions();

  const summary = data.reduce((acc, transaction) => {
    if (transaction.type === MAP_TYPES.INCOME) {
      acc.income += parseFloat(transaction.amount);
      acc.total += parseFloat(transaction.amount);
    } else if (transaction.type === MAP_TYPES.OUTCOME) {
      acc.outcome += parseFloat(transaction.amount);
      acc.total -= parseFloat(transaction.amount);
    }
    return acc;
  }, {
    income: 0,
    outcome: 0,
    total: 0
  });

  return (
    <Container>
      <SummaryCard icon={incomeImg} value={summary.income} title="Entradas" />
      <SummaryCard icon={outcomeImg} value={summary.outcome} title="Saídas" />
      <SummaryCard className="highlight-background" icon={totalImg} value={summary.total} title="Total" />
    </Container>
  );
}