
const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        className="transaction-search"
        type="search"
        placeholder="Search transactions..."
        aria-label="Search transactions"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      {search && (
        <button
          type="button"
          className="clear-search-button"
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
          title="Clear search"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBar
