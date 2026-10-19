
import { useState } from 'react'

const TransactionForm = ({
  onAddTransaction,
  editingTransaction,
  onUpdateTransaction,
  onCancelEditing,
}) => {
  const [title, setTitle] = useState(
    () => editingTransaction?.title ?? ''
  )
  const [amount, setAmount] = useState(
    () => editingTransaction ? String(editingTransaction.amount) : ''
  )
  const [type, setType] = useState(
    () => editingTransaction?.type ?? 'expense'
  )
  const [category, setCategory] = useState(
    () => editingTransaction?.category ?? 'Food'
  )
  const [date, setDate] = useState(
    () => editingTransaction?.date ?? ''
  )

  const resetForm = () => {
    setTitle('')
    setAmount('')
    setType('expense')
    setCategory('Food')
    setDate('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const transaction = {
      id: editingTransaction ? editingTransaction.id : Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      date,
    }

    if (editingTransaction) {
      onUpdateTransaction(transaction)
    } else {
      onAddTransaction(transaction)
    }

    resetForm()
  }

  const handleCancel = () => {
    resetForm()
    onCancelEditing()
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Transaction</label>
        <input
          id="title"
          type="text"
          placeholder="e.g. Groceries"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="0"
          min="0"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Income">Income</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </div>

      <button type="submit">
        {editingTransaction ? 'Save Changes' : 'Add Transaction'}
      </button>

      {editingTransaction && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}

export default TransactionForm
