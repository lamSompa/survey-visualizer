import { render, screen, fireEvent, waitFor } from '@testing-library/react';
   import App from './App.jsx';


// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

const mockQuestions = [
  { question: 'Capital of France?', category: 'Geography', difficulty: 'easy' },
  { question: '2+2?', category: 'Math', difficulty: 'easy' },
];

describe('App integration', () => {
  it('renders trivia questions after loading', async () => {
    fetch.mockResolvedValueOnce({ json: async () => ({ results: mockQuestions }) });
    render(<App />);
    // Wait for questions to appear
    await waitFor(() => expect(screen.getByText(/Capital of France/i)).toBeInTheDocument());
    expect(screen.getByText(/2\+2/i)).toBeInTheDocument();
  });

  it('filters questions by search', async () => {
    fetch.mockResolvedValueOnce({ json: async () => ({ results: mockQuestions }) });
    render(<App />);
    await waitFor(() => expect(screen.getByText(/Capital of France/i)).toBeInTheDocument());
    // Type in search bar
    fireEvent.change(screen.getByRole('textbox', { name: /search/i }), { target: { value: 'france' } });
    expect(screen.getByText(/Capital of France/i)).toBeInTheDocument();
    expect(screen.queryByText(/2\+2/i)).not.toBeInTheDocument();
  });

  it('shows error state on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('API is down'));
    render(<App />);
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument());
    expect(screen.getByText(/couldn't load the trivia data/i)).toBeInTheDocument();
  });
});
