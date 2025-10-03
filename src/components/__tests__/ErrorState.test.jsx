import { render, screen } from '@testing-library/react';
import ErrorState from '../ErrorState';

describe('ErrorState', () => {
  it('renders the heading', () => {
    render(<ErrorState />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/404|error/i);
  });

  it('renders the error explanation', () => {
    render(<ErrorState />);
    expect(
      screen.getByText(/couldn't load the trivia data/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/check your connection/i)
    ).toBeInTheDocument();
  });

  it('has role="alert" for accessibility', () => {
    render(<ErrorState />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
