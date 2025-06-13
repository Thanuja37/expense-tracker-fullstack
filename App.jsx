import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>{tx.description} - ${tx.amount}</li>
        ))}
      </ul>
    </div>
  );
}