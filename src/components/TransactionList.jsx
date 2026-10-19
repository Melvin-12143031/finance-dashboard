import TransactionItem from './TransactionItem'
import SearchBar from './SearchBar'
import TransactionFilter from './TransactionFilter'

const TransactionList = ({
    transactions,
    onDeleteTransaction,
    onEditTransaction,
    search,
    onSearchChange,
    filter,
    onFilterChange,
}) => {


    const filteredTransactions = transactions.filter((transaction) => {
        const searchTerm = search.toLowerCase().trim()

        const matchesSearch =
            transaction.title.toLowerCase().includes(searchTerm) ||
            transaction.category.toLowerCase().includes(searchTerm)

        const matchesFilter =
            filter === 'all' || transaction.type === filter

        return matchesSearch && matchesFilter
    })



    return (
        <section className="transaction-list">
            <div className="section-header">

                <div>
                    <p className="section-eyebrow">RECENT ACTIVITY</p>
                    <h2>Transactions</h2>
                </div>

                <SearchBar
                    search={search}
                    onSearchChange={onSearchChange}
                />

                <TransactionFilter
                    filter={filter}
                    onFilterChange={onFilterChange}
                />

            </div>

            {filteredTransactions.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">₱</div>

                    <h3>
                        {transactions.length === 0
                            ? 'No transactions yet'
                            : 'No matching transactions'}
                    </h3>

                    <p>
                        {transactions.length === 0
                            ? 'Add your first transaction to start tracking your finances.'
                            : 'Try another search term or check your spelling.'}
                    </p>

                </div>
            ) : (
                <div className="transactions">
                    {filteredTransactions.map((transaction) => (
                        <TransactionItem
                            key={transaction.id}
                            transaction={transaction}
                            onDeleteTransaction={onDeleteTransaction}
                            onEditTransaction={onEditTransaction}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default TransactionList