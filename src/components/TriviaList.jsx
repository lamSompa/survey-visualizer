import { decodeHtml } from "../utils/decodeHtml";

export default function TriviaList({ questions }) {
  return (
    <ul className="trivia-list" aria-label="Trivia questions">
      {questions.map((q, idx) => (
        <li key={idx} className="trivia-card">
          {decodeHtml(q.question)}
        </li>
      ))}
    </ul>
  );
}
