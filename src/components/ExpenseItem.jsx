import { useState } from "react";

export default function ExpenseItem({ item, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(item.name);
  const [editAmount, setEditAmount] = useState(item.amount);

  const handleSave = () => {
    if (editName.trim() && editAmount) {
      onUpdate({ ...item, name: editName, amount: parseFloat(editAmount) });
      setIsEditing(false);
    } else {
      alert("Both fields required");
    }
  };

  return (
    <li className={`expense-item ${item.type}`}>
      {isEditing ? (
        <>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
          />
          <button onClick={handleSave}>save</button>
        </>
      ) : (
        <>
          <span style={styling}>{item.name}</span>
          <span style={styling}>₹{item.amount}</span>
          <button onClick={() => setIsEditing(true)}>EDIT</button>
          <button onClick={() => onDelete(item.id, item.amount, item.type)}>
            DEL
          </button>
        </>
      )}
    </li>
  );
}

const styling = {
  fontSize: "16px",
  fontWeight: "bold",
};
