
import { Pencil, Trash2 } from 'lucide-react'

const TransactionItem = ({
  transaction,
  onDeleteTransaction,
  onEditTransaction,
}) => {
  const isIncome = transaction.type === 'income'

  return (
    <article className="transaction-item">
      <div>
        <h3>{transaction.title}</h3>
        <p>{transaction.category}</p>
      </div>

      <div>
        <strong className={isIncome ? 'income-amount' : 'expense-amount'}>
          {isIncome ? '+' : '-'}₱{transaction.amount.toLocaleString()}
        </strong>

        <p>{transaction.date}</p>

        <div className="transaction-actions">
          <button
            type="button"
            className="icon-button edit-button"
            onClick={() => onEditTransaction(transaction)}
            aria-label={`Edit ${transaction.title}`}
            title="Edit transaction"
          >
            <Pencil size={20} />
          </button>

          <button
            type="button"
            className="icon-button delete-button"
            onClick={() => onDeleteTransaction(transaction.id)}
            aria-label={`Delete ${transaction.title}`}
            title="Delete transaction"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default TransactionItem
