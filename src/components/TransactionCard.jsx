export default function TransactionCard({ title, amount, type }) {
  // console.log("title:", title);
  // console.log("amount:", amount);
  // console.log("type:", type);
  return (
    <div style={styles.card}>
      <span>{type === "add" ? "Amount added" : title}</span>
      <span
        style={{ color: type === "add" ? "green" : "red", fontWeight: "bold" }}
      >
        {type === "add" ? "+" : "-"}₹{amount}
      </span>
      <div
        style={{
          ...styles.bar,
          backgroundColor: type === "add" ? "green" : "red",
        }}
      />
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: "8px 10px",
    margin: "8px 0",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "8px",
    boxShadow: "0 0 4px rgba(0,0,0,0.1)",
  },
  bar: {
    position: "absolute",
    width: "4px",
    height: "100%",
    right: 0,
    top: 0,
    borderRadius: "0 8px 8px 0",
  },
};
