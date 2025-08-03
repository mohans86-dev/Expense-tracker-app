export default function Card({ title, amount, type }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "5px",
    width: "180px",
    height: "83px",
    textAlign: "center",
    boxShadow: "0 0 6px rgba(0, 0, 0, 0.1)",
  };

  const amountStyle = {
    fontWeight: "bold",
    color: type === "income" ? "green" : "red",
    fontSize: "20px",
    marginTop: "8px",
  };

  return (
    <div style={cardStyle}>
      <p>{title}</p>
      <p style={amountStyle}>₹{amount}</p>
    </div>
  );
}
