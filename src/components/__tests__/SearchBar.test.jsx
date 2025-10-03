import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('renders the search input', () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    expect(screen.getByRole('textbox', { name: /search questions/i })).toBeInTheDocument();
  });

  it('calls setSearch when typing', () => {
    const setSearch = jest.fn();
    render(<SearchBar search="" setSearch={setSearch} />);
    fireEvent.change(screen.getByRole('textbox', { name: /search questions/i }), { target: { value: 'science' } });
    expect(setSearch).toHaveBeenCalledWith('science');
  });

  it('shows the current search value in the input', () => {
    render(<SearchBar search="math" setSearch={() => {}} />);
    expect(screen.getByRole('textbox', { name: /search questions/i }).value).toBe('math');
  });

  it('renders the placeholder text', () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/search questions/i)).toBeInTheDocument();
  });
});
