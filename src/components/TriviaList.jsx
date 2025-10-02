import { useTriviaData } from "../hooks/useTriviaData";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function TriviaList() {
  const { questions, loading, error } = useTriviaData(50);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load trivia.</div>;

  return (
    <ul>
      {questions.map((q, idx) => (
        <li key={idx}>{decodeHtml(q.question)}</li>
      ))}
    </ul>
  );
}
