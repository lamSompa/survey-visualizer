import { renderHook } from '@testing-library/react';
import { waitFor } from '@testing-library/react'; // <-- ADD THIS
import { useTriviaData } from '../useTriviaData';

beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

describe('useTriviaData', () => {
  it('returns loading initially', () => {
    fetch.mockResolvedValueOnce({ json: async () => ({ results: [] }) });
    const { result } = renderHook(() => useTriviaData());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.triviaQuestions).toEqual([]);
    expect(result.current.fetchError).toBe(null);
  });

  it('returns trivia questions on success', async () => {
    const mockResults = [{ question: "Q1" }, { question: "Q2" }];
    fetch.mockResolvedValueOnce({ json: async () => ({ results: mockResults }) });
    const { result } = renderHook(() => useTriviaData(2));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.triviaQuestions).toEqual(mockResults);
    expect(result.current.fetchError).toBe(null);
  });

  it('returns error on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));
    const { result } = renderHook(() => useTriviaData());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.fetchError).toBeInstanceOf(Error);
    expect(result.current.triviaQuestions).toEqual([]);
  });
});
