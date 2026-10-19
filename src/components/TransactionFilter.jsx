
const TransactionFilter = ({ filter, onFilterChange }) => {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Income', value: 'income' },
    { label: 'Expenses', value: 'expense' },
  ]

  return (
    <div className="transaction-filter">
      {filters.map((item) => (
        <button
          key={item.value}
          type="button"
          className={
            filter === item.value
              ? 'filter-button active'
              : 'filter-button'
          }
          onClick={() => onFilterChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default TransactionFilter
