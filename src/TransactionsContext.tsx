import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionsProps {
  children: ReactNode;
}

export interface TransactionProps {
  id: number;
  title: string;
  amount: string;
  type: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionsContextData {
  data: TransactionProps[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const useTransactions = () => useContext(TransactionsContext);

export const MAP_TYPES = {
  INCOME: 0,
  OUTCOME: 1
};

export function TransactionsProvider({ children }: TransactionsProps) {
  const [data, setData] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => setData(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setData([
      ...data,
      transaction
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ data, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}