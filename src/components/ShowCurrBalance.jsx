import { useState } from "react";
import Button from "./Button";
import TransactionList from "./TransactionList";
import Card from "./Card";

export default function ShowCurrBalance() {
  const rowStyle = {
    card: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
    },
    h3: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
    },
  };

  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(10000);
  const [totalExpense, setTotalBal] = useState(0);

  const handleAdd = (newTxn) => {
    setTransactions([...transactions, newTxn]);

    // Update the balance
    if (newTxn.type === "add") {
      setBalance((prev) => prev + newTxn.amount);
    } else if (newTxn.type === "spend") {
      setBalance((prev) => prev - newTxn.amount);
      setTotalBal((prev) => prev + newTxn.amount);
    }
  };

  return (
    <>
      <div style={rowStyle.h3}>
        <h3>Balance: ₹{balance}</h3>
        <Button onAdd={handleAdd} />
      </div>
      <div style={rowStyle.card}>
        <Card title="Total Expense" amount={totalExpense} type="expense" />
        <Card title="Income" amount={10000} type="income" />
      </div>
      <TransactionList transactions={transactions} />
    </>
  );
}
