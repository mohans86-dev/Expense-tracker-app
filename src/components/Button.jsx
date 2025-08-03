import { useState } from "react";

export default function Button({ onAdd }) {
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
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h3 style={{ marginTop: 0, color: "#fff" }}>Add Transaction</h3>
            <div>
              <label style={styles.radio}>
                <input
                  type="radio"
                  value="add"
                  checked={type === "add"}
                  onChange={(e) => setType(e.target.value)}
                />
                Add Amount
              </label>
              <label style={{ ...styles.radio, marginLeft: "10px" }}>
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
              <label style={{ color: "#fff" }}>Category: </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={styles.select}
              >
                <option>Food</option>
                <option>Travel</option>
                <option>Groceries</option>
                <option>Drinks</option>
                <option>Others</option>
              </select>
            </div>

            <div style={{ marginTop: "10px" }}>
              <label style={{ color: "#fff" }}>Amount: ₹ </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={{ marginTop: "15px", textAlign: "right" }}>
              <button style={styles.button} onClick={handleSubmit}>
                Save
              </button>
              <button
                style={{ ...styles.button, backgroundColor: "#888" }}
                onClick={() => setShowBox(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#2d2d2d",
    padding: "20px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  radio: {
    color: "#fff",
    fontSize: "14px",
  },
  select: {
    width: "100%",
    padding: "6px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "none",
  },
  input: {
    width: "100%",
    padding: "6px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    padding: "6px 12px",
    marginLeft: "8px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#00c853",
    color: "#fff",
    cursor: "pointer",
  },
};
