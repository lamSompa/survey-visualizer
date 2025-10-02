import { useMemo } from "react";
import { useTriviaData } from "./useTriviaData";

export function useCategoryStats(amount = 50) {
  const { questions, loading, error } = useTriviaData(amount);

  const categoryStats = useMemo(() => {
    const stats = {};
    questions.forEach(q => {
      stats[q.category] = (stats[q.category] || 0) + 1;
    });
    return Object.entries(stats).map(([category, count]) => ({
      category,
      count,
    }));
  }, [questions]);

  return { categoryStats, loading, error };
}
