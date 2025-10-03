import { render, screen } from '@testing-library/react';
import CategoryChart from '../CategoryChart';

const sampleQuestions = [
  { category: 'Science' },
  { category: 'Math' }
];

describe('CategoryChart', () => {
  it('renders the chart container and caption', () => {
    render(<CategoryChart questions={sampleQuestions} />);
    expect(screen.getByLabelText(/questions by category/i)).toBeInTheDocument();
    expect(screen.getByText(/distribution of questions by category/i)).toBeInTheDocument();
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });

  it('renders "No data to display" when no questions', () => {
    render(<CategoryChart questions={[]} />);
    expect(screen.getByText(/no data to display/i)).toBeInTheDocument();
  });
});
