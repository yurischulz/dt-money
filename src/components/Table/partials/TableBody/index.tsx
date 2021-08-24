import { TransactionProps } from '../../../../TransactionsContext';
import { MoneyStyle } from '../../../MoneyStyle';

import { Container, TableColumn, TableRow } from './styles';
interface Props {
  data: Array<TransactionProps | any>;
  className?: string;
}

export function TableBody({ data, ...props }: Props) {
  return (
    <Container {...props} >
      {data && data.map((column, index) => (
        <TableColumn key={index} className={column.type === 0 ? 'input' : 'output'} >
          <TableRow>{column.title}</TableRow>
          <TableRow className="amount">
            <MoneyStyle value={column.amount} />
          </TableRow>
          <TableRow>{column.category}</TableRow>
          <TableRow>
            {new Intl.DateTimeFormat('pt-BR').format(
              new Date(column.createdAt)
            )}
          </TableRow>
        </TableColumn>
      ))}
    </Container>
  );
}