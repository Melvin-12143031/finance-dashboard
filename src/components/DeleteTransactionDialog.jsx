
import { Trash2 } from 'lucide-react'

const DeleteTransactionDialog = ({
  transaction,
  onCancel,
  onConfirm,
}) => {
  if (!transaction) return null

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onCancel()
        }
      }}
    >
      <section
        className="confirmation-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <div className="confirmation-icon">
          <Trash2 size={24} />
        </div>

        <h2 id="delete-dialog-title">Delete Transaction?</h2>

        <p id="delete-dialog-description">
          Are you sure you want to delete{' '}
          <strong>{transaction.title}</strong>?
          This action cannot be undone.
        </p>

        <div className="confirmation-actions">
          <button
            type="button"
            className="cancel-delete-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="confirm-delete-button"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  )
}

export default DeleteTransactionDialog
