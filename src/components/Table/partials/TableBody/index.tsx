import { TableColumn } from '../TableColumn';
import { TableRow } from '../TableRow';
import { Container } from './styles';

interface Props {
  data: Array<any>
  className?: string;
}

export function TableBody({ data, ...props }: Props) {
  return (
    <Container {...props} >
      {data && data.map((column, index) => (
        <TableColumn key={index} className={column.type === 0 ? 'input' : 'output'} >
          <TableRow key={index} data={column} />
        </TableColumn>
      ))}
    </Container>
  );
}