
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import './App.css'

import AppToaster from './components/AppToaster'
import DashboardHeader from './components/DashboardHeader'
import DeleteTransactionDialog from './components/DeleteTransactionDialog'
import SummaryCards from './components/SummaryCards'
import TransactionList from './components/TransactionList'
import TransactionModal from './components/TransactionModal'

import initialTransactions from './data/transactions'
import useLocalStorage from './hooks/useLocalStorage'
import Footer from './components/Footer'

const App = () => {
  // Transaction data and UI state
  const [transactions, setTransactions] = useLocalStorage(
    'finance-dashboard-transactions',
    initialTransactions
  )

  const [editingTransaction, setEditingTransaction] = useState(null)
  const [transactionToDelete, setTransactionToDelete] = useState(null)

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Transaction handlers
  const addTransaction = (transaction) => {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      transaction,
    ])

    setIsFormOpen(false)
    toast.success('Transaction added successfully!')
  }

  const updateTransaction = (updatedTransaction) => {
    setTransactions((currentTransactions) =>
      currentTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    )

    setIsFormOpen(false)
    setEditingTransaction(null)

    toast.success('Transaction updated successfully!')
  }

  const deleteTransaction = (id) => {
    setTransactions((currentTransactions) =>
      currentTransactions.filter(
        (transaction) => transaction.id !== id
      )
    )

    toast.success('Transaction deleted successfully!')
  }

  // Modal handlers
  const openAddModal = () => {
    setEditingTransaction(null)
    setIsFormOpen(true)
  }

  const openEditModal = (transaction) => {
    setEditingTransaction(transaction)
    setIsFormOpen(true)
  }

  const closeFormModal = () => {
    setIsFormOpen(false)
    setEditingTransaction(null)
  }

  const cancelEditing = () => {
    setEditingTransaction(null)
    setIsFormOpen(false)
  }

  // Delete confirmation handlers
  const requestTransactionDeletion = (id) => {
    const transaction = transactions.find((item) => item.id === id)
    setTransactionToDelete(transaction ?? null)
  }

  const confirmTransactionDeletion = () => {
    if (!transactionToDelete) return

    deleteTransaction(transactionToDelete.id)
    setTransactionToDelete(null)
  }

  const cancelTransactionDeletion = () => {
    setTransactionToDelete(null)
  }

  return (
    <main>
      <AppToaster />

      <DashboardHeader onAddClick={openAddModal} />

      <SummaryCards transactions={transactions} />

      <TransactionList
        transactions={transactions}
        onDeleteTransaction={requestTransactionDeletion}
        onEditTransaction={openEditModal}
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
      />

      {isFormOpen && (
        <TransactionModal
          editingTransaction={editingTransaction}
          onAddTransaction={addTransaction}
          onUpdateTransaction={updateTransaction}
          onClose={closeFormModal}
          onCancelEditing={cancelEditing}
        />
      )}

      <DeleteTransactionDialog
        transaction={transactionToDelete}
        onCancel={cancelTransactionDeletion}
        onConfirm={confirmTransactionDeletion}
      />

      <Footer />
      
    </main>
  )
}

export default App
