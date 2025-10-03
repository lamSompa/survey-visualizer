import "./App.css";
import { useTriviaData } from "./hooks/useTriviaData";
import CategoryChart from "./components/CategoryChart";
import DifficultyChart from "./components/DifficultyChart";
import TriviaList from "./components/TriviaList";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import ErrorState from "./components/ErrorState";
import { useState } from "react";

const SECTIONS = [
  { name: "Category", label: "By Category" },
  { name: "Difficulty", label: "By Difficulty" },
  { name: "Questions", label: "Questions" }
];

export default function App() {
  const { triviaQuestions, isLoading, fetchError } = useTriviaData(50);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [section, setSection] = useState("Category");
  const [search, setSearch] = useState("");

  const categories = ["All", ...Array.from(new Set(triviaQuestions.map(q => q.category)))];

  const filteredQuestions = triviaQuestions
    .filter(q =>
      selectedCategory === "All" ? true : q.category === selectedCategory
    )
    .filter(q =>
      search.trim() === "" ? true : q.question.toLowerCase().includes(search.trim().toLowerCase())
    );

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="navbar" role="navigation">
        <span className="navbar-title">Survey Visualizer</span>
        <div className="navbar-links">
          {SECTIONS.map(s => (
            <button
              key={s.name}
              className={section === s.name ? "active" : ""}
              onClick={() => setSection(s.name)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>
      <main id="main-content" role="main">
        <section className="main-container">
          <h1>Trivia Questions</h1>
          <div className="filter-bar">
            <span className="filter-label">Filter by category</span>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <SearchBar search={search} setSearch={setSearch} />
          </div>
          {isLoading && <p>Loading questions…</p>}
          {fetchError && <ErrorState />}
          {!isLoading && !fetchError && (
            <>
              {section === "Category" && (
                <>
                  <h2>Questions by Category</h2>
                  <div className="chart-card">
                    <CategoryChart questions={filteredQuestions} />
                  </div>
                  <TriviaList questions={filteredQuestions} />
                </>
              )}
              {section === "Difficulty" && (
                <>
                  <h2>Questions by Difficulty</h2>
                  <div className="chart-card">
                    <DifficultyChart questions={filteredQuestions} />
                  </div>
                  <TriviaList questions={filteredQuestions} />
                </>
              )}
              {section === "Questions" && (
                <>
                  <h2>Questions</h2>
                  <TriviaList questions={filteredQuestions} />
                </>
              )}
            </>
          )}
        </section>
        <footer>
          &copy; {new Date().getFullYear()} Abeiku Sompa Nyarko-Lartey
        </footer>
      </main>
    </>
  );
}
