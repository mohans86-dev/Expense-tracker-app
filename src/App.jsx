import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import "./App.scss";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(10000); // Default balance

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    if (transaction.type === "expense") {
      setBalance((prev) => prev - transaction.amount);
    } else if (transaction.type === "balance") {
      setBalance((prev) => prev + transaction.amount);
    }
  };

  const deleteTransaction = (id, amount, type) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
    // Reverse the balance effect
    if (type === "expense") {
      setBalance((prev) => prev + amount);
    } else if (type === "balance") {
      setBalance((prev) => prev - amount);
    }
  };

  const updateTransaction = (updatedItem) => {
    setTransactions((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const clearAll = () => {
    setTransactions([]);
    setBalance(10000); // Reset to default
  };

  return (
    <div className="app">
      <Header />
      <div className="balance-card">
        <p>💰 Main Balance: ₹{balance.toFixed(2)}</p>
      </div>
      <ExpenseForm onAdd={addTransaction} />
      <ExpenseList
        transactions={transactions}
        onDelete={deleteTransaction}
        onUpdate={updateTransaction}
        onClear={clearAll}
      />
    </div>
  );
}

export default App;
