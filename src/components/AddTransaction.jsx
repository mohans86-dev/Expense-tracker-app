import { useState } from "react";

export default function AddTransaction({ onAdd }) {
  const [showBox, setShowBox] = useState(false);
  const [type, setType] = useState("add");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!amount || isNaN(amount)) return alert("Enter valid amount");
    onAdd({ type, category, amount: Number(amount) });
    setShowBox(false);
    setAmount("");
  };

  return (
    <div>
      <button onClick={() => setShowBox(true)}>ADD</button>

      {showBox && (
        <div style={styles.box}>
          <h3>Add Transaction</h3>
          <div>
            <label>
              <input
                type="radio"
                value="add"
                checked={type === "add"}
                onChange={(e) => setType(e.target.value)}
              />
              Add Amount
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                value="spend"
                checked={type === "spend"}
                onChange={(e) => setType(e.target.value)}
              />
              Spend
            </label>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Category: </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Groceries</option>
              <option>Drinks</option>
              <option>Others</option>
            </select>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Amount: ₹ </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button style={{ margin: "10px" }} onClick={handleSubmit}>
            Save
          </button>
          <button style={{ margin: "10px" }} onClick={() => setShowBox(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  box: {
    marginTop: "10px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#323131ff",
    width: "300px",
  },
};
