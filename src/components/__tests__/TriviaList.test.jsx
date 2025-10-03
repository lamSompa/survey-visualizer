   import { render, screen } from '@testing-library/react';
   import TriviaList from '../TriviaList';

const sampleQuestions = [
  { question: 'What is 2 &amp; 2?', correct_answer: '4', category: 'Math', difficulty: 'easy' },
  { question: 'Capital of France?', correct_answer: 'Paris', category: 'Geography', difficulty: 'medium' }
];

describe('TriviaList', () => {
  it('renders a list of trivia questions', () => {
    render(<TriviaList questions={sampleQuestions} />);
    expect(screen.getByText(/What is 2/)).toBeInTheDocument();
    expect(screen.getByText(/Capital of France/)).toBeInTheDocument();
  });

  it('renders "No results" when no questions', () => {
    render(<TriviaList questions={[]} />);
    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });

  it('decodes HTML entities in questions', () => {
    render(<TriviaList questions={[{ question: '2 &amp; 2?', correct_answer: '4' }]} />);
    expect(screen.getByText(/2 & 2\?/)).toBeInTheDocument();
  });

  it('handles malformed question objects gracefully', () => {
    render(<TriviaList questions={[{ correct_answer: '4' }, null, undefined]} />);
    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });
});
