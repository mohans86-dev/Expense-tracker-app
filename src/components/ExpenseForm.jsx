import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ExpenseForm({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    if (
      (type === "expense" && name.trim() && parsedAmount > 0) ||
      (type === "balance" && parsedAmount > 0)
    ) {
      onAdd({
        id: uuidv4(),
        name: type === "balance" ? "Added to Balance" : name,
        amount: parsedAmount,
        type,
      });
      setName("");
      setAmount("");
      setType("expense");
    } else {
      alert("Please fill in all fields correctly");
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={type === "balance"}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="expense"
            checked={type === "expense"}
            onChange={() => setType("expense")}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            value="balance"
            checked={type === "balance"}
            onChange={() => setType("balance")}
          />
          Balance
        </label>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
