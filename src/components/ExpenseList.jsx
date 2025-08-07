import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
  transactions,
  onDelete,
  onUpdate,
  onClear,
}) {
  return (
    <div className="expense-list">
      <ul>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          transactions.map((item) => (
            <ExpenseItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))
        )}
      </ul>
      {transactions.length > 0 && (
        <button className="clear-btn" onClick={onClear}>
          Clear All
        </button>
      )}
    </div>
  );
}
