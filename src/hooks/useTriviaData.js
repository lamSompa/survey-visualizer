import { useEffect, useState } from "react";

export function useTriviaData(amount = 50) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results || []);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setQuestions([]);
      })
      .finally(() => setLoading(false));
  }, [amount]);

  return { questions, loading, error };
}
