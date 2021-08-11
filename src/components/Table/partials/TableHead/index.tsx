import { Row, TableHeader } from './styles';

interface Props {
  headers: string[];
  className?: string;
}

export function TableHead({ headers, ...props }: Props) {
  return (
    <TableHeader {...props} >
      {headers && headers.map((header, index) => <Row key={index}>{header}</Row>)}
    </TableHeader>
  );
}