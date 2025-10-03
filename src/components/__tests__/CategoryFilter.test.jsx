import { render, screen, fireEvent } from '@testing-library/react';
import CategoryFilter from '../CategoryFilter';

const categories = ['Science', 'Math', 'History'];

describe('CategoryFilter', () => {
  it('renders all category options', () => {
    render(
      <CategoryFilter
        categories={categories}
        selectedCategory=""
        setSelectedCategory={() => {}}
      />
    );
    categories.forEach(cat => {
      expect(screen.getByRole('option', { name: cat })).toBeInTheDocument();
    });
  });

  it('calls setSelectedCategory when a category is selected', () => {
    const setSelectedCategory = jest.fn();
    render(
      <CategoryFilter
        categories={categories}
        selectedCategory=""
        setSelectedCategory={setSelectedCategory}
      />
    );
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Math' } });
    expect(setSelectedCategory).toHaveBeenCalledWith('Math');
  });

  it('handles empty categories gracefully', () => {
    render(
      <CategoryFilter
        categories={[]}
        selectedCategory=""
        setSelectedCategory={() => {}}
      />
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    // Should have no options
    expect(screen.queryAllByRole('option').length).toBe(0);
  });

  it('renders with an initial selected value', () => {
    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="History"
        setSelectedCategory={() => {}}
      />
    );
    expect(screen.getByRole('combobox').value).toBe('History');
  });
});
