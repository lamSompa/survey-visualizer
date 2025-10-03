import { decodeHtml } from "../utils/decodeHtml";

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div>
      {/* Visually hidden label for accessibility */}
      <label htmlFor="category-dropdown" style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}>
        Select category
      </label>
      <select
        id="category-dropdown"
        className="category-dropdown"
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {decodeHtml(cat)}
          </option>
        ))}
      </select>
    </div>
  );
}
