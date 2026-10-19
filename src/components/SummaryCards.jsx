const SummaryCards = ({ transactions }) => {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0)

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0)

  const balance = totalIncome - totalExpenses

  return (
    <section className="summary-cards">
      <article className="summary-card">
        <p>Total Balance</p>
        <h2>₱{balance.toLocaleString()}</h2>
      </article>

      <article className="summary-card">
        <p>Total Income</p>
        <h2>₱{totalIncome.toLocaleString()}</h2>
      </article>

      <article className="summary-card">
        <p>Total Expenses</p>
        <h2>₱{totalExpenses.toLocaleString()}</h2>
      </article>
    </section>
  )
}

export default SummaryCards