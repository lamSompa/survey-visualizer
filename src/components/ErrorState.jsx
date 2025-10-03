export default function ErrorState() {
  return (
    <div className="error-state" role="alert">
      <h2>404 / Error</h2>
      <div>
        Sorry, we couldn't load the trivia data.<br />
        Please check your connection or try again later.
      </div>
    </div>
  );
}
