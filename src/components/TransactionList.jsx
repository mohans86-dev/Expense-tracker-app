import TransactionCard from "./TransactionCard";

export default function TransactionList({ transactions }) {
  //   console.log(transactions);
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Transactions List</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        transactions.map((item, idx) => (
          <TransactionCard
            key={idx}
            title={item.category}
            amount={item.amount}
            type={item.type}
          />
        ))
      )}
    </div>
  );
}
