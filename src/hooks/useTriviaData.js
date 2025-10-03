import { useEffect, useState } from "react";

export function useTriviaData(amount = 50) {
  const [triviaQuestions, setTriviaQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
      .then(response => response.json())
      .then(data => {
        setTriviaQuestions(data.results || []);
        setFetchError(null);
      })
      .catch(error => {
        setFetchError(error);
        setTriviaQuestions([]);
      })
      .finally(() => setIsLoading(false));
  }, [amount]);

  return { triviaQuestions, isLoading, fetchError };
}
