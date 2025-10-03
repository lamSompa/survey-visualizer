import { render, screen } from '@testing-library/react';
import DifficultyChart from '../DifficultyChart';

global.ResizeObserver = global.ResizeObserver || class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const sampleQuestions = [
  { difficulty: 'easy' },
  { difficulty: 'medium' },
  { difficulty: 'hard' },
  { difficulty: 'medium' },
];

describe('DifficultyChart', () => {
  it('renders the chart container and caption', () => {
    render(<DifficultyChart questions={sampleQuestions} />);
    expect(screen.getByLabelText(/questions by difficulty/i)).toBeInTheDocument();
    expect(screen.getByText(/distribution of questions by difficulty/i)).toBeInTheDocument();
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });

  it('renders "No data to display" when no questions', () => {
    render(<DifficultyChart questions={[]} />);
    expect(screen.getByText(/no data to display/i)).toBeInTheDocument();
  });

  it('renders with varied difficulties', () => {
    render(<DifficultyChart questions={[
      { difficulty: 'easy' },
      { difficulty: 'medium' },
      { difficulty: 'hard' },
      { difficulty: 'hard' }
    ]} />);
    expect(screen.getByLabelText(/questions by difficulty/i)).toBeInTheDocument();
  });

  it('handles malformed data gracefully', () => {
    render(<DifficultyChart questions={[
      { difficulty: 'easy' },
      {},
      { difficulty: undefined },
      null
    ]} />);
    expect(screen.getByLabelText(/questions by difficulty/i)).toBeInTheDocument();
  });
});
