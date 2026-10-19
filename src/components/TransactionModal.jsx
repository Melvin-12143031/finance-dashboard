
import TransactionForm from './TransactionForm'

const TransactionModal = ({
    editingTransaction,
    onAddTransaction,
    onUpdateTransaction,
    onClose,
    onCancelEditing,
}) => {
    return (
        <div
            className="modal-overlay"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose()
                }
            }}
        >
            <section
                className="transaction-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="transaction-modal-title"
            >
                <div className="modal-header">
                    <h2 id="transaction-modal-title">
                        {editingTransaction
                            ? 'Edit Transaction'
                            : 'Add Transaction'}
                    </h2>

                    <button
                        type="button"
                        className="modal-close-button"
                        onClick={onClose}
                        aria-label="Close dialog"
                    >
                        ×
                    </button>
                </div>

                <TransactionForm
                    onAddTransaction={onAddTransaction}
                    editingTransaction={editingTransaction}
                    onUpdateTransaction={onUpdateTransaction}
                    onCancelEditing={onCancelEditing}
                />
                
            </section>
        </div>
    )
}

export default TransactionModal
