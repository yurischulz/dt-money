import { TableBody } from './partials/TableBody';
import { TableHead } from './partials/TableHead';

import { TransactionProps } from '../../hooks/useTransactions';

import { Container } from './styles';
export interface Props {
  data: Array<TransactionProps>;
  headers: Array<string>;
}

export function Table({ data, headers, ...props }: Props) {
  return (
    <Container {...props} >
      <TableHead headers={headers} className="table-head" />
      <TableBody data={data} />
    </Container>
  );
}