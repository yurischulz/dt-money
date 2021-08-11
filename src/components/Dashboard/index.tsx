import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Summary } from "../Summary";
import { Table } from "../Table";

import { Container, Content } from "./styles";

export function Dashboard() {
  const [transactions, setTransactions] = useState({
    data: []
  });

  useEffect(() => {
    api.get('transactions')
      .then(data => setTransactions(data));
  }, []);

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
        <Table data={transactions.data} headers={headers} />
      </Content>
    </Container>
  )
}