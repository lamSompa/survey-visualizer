import { decodeHtml } from "../utils/decodeHtml";

export default function TriviaList({ questions }) {
  const validQuestions = Array.isArray(questions)
    ? questions.filter(q => q && typeof q.question === "string")
    : [];

  if (validQuestions.length === 0) {
    return <div>No results</div>;
  }

  return (
    <ul aria-label="Trivia questions" className="trivia-list">
      {validQuestions.map((q, idx) => (
        <li key={idx} className="trivia-card">
          {decodeHtml(q.question)}
        </li>
      ))}
    </ul>
  );
}
