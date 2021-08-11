import { MoneyStyle } from '../../../MoneyStyle';
import { Row } from './styles';

interface Props {
  data: Array<any>
}

export function TableRow({ data, ...props }: Props) {
  const handleValue = ({ label, value }: any) => {
    if (label === 'price') return <MoneyStyle value={value} />
    if (label === 'createdAt') {
      const date = new Date(value).toLocaleDateString('pt-br')
      return date;
    };
    return value;
  }

  return (
    <>
      {/* eslint-disable-next-line */}
      {Object.entries(data).map(([label, value], index) => {
        if (label !== 'type' && label !== 'id') return <Row key={index} className={label === 'price' ? 'price' : ''}>{handleValue({ label, value })}</Row>;
      })}
    </>
  );
}