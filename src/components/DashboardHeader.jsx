
const DashboardHeader = ({ onAddClick }) => {
  return (
    <header className="dashboard-header">
      <div>
        <p className="section-eyebrow">PERSONAL FINANCE</p>
        <h1>Finance Dashboard</h1>
        <p>Track your money with clarity.</p>
      </div>

      <button
        type="button"
        className="add-transaction-button"
        onClick={onAddClick}
      >
        + Add Transaction
      </button>
    </header>
  )
}

export default DashboardHeader
