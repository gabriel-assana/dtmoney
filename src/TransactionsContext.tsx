import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

/* interface TransactionInput {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
}   ou  */

/* Omit - pega todos os campos da Interface de referencia no caso a Transaction, e retira(omite)
os campos que eu quero */
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
/* ou */

/* Pick - pega apenas os campos da Interface de referencia no caso a Transaction, que eu queira*/
 /* type TransactionInput = Pick<Transaction, 'id' | 'title' | 'amount' | 'type'> */

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData 
);

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
      const response = await api.post('/transactions', {
          ...transactionInput,
          createdAt: new Date()
        })
      const { transaction } = response.data

      setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction} }>
            {children}
        </TransactionsContext.Provider>
    );
}