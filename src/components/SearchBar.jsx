export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      {/* Visually hidden label for accessibility */}
      <label htmlFor="search-input" style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}>
        Search trivia questions
      </label>
      <input
        id="search-input"
        placeholder="Search questions..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        aria-label="Search questions"
      />
    </div>
  );
}
