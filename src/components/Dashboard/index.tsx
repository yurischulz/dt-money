import { useTransactions } from "../../TransactionsContext";
import { Summary } from "../Summary";
import { Table } from "../Table";

import { Container, Content } from "./styles";

export function Dashboard() {
  const { data } = useTransactions();

  const headers = [
    'Título',
    'Valor',
    'Categoria',
    'Data',
  ] as Array<string>;

  return (
    <Container>
      <Content>
        <Summary />
        <Table data={data} headers={headers} />
      </Content>
    </Container>
  )
}