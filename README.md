---

# Survey Visualizer

Survey Visualizer is a React + Vite application for exploring trivia data from the [Open Trivia DB API](https://opentdb.com).  
It allows users to visualize question distributions by category and difficulty, search and filter questions, and interact with clear, responsive charts.

---

## Live Demo

[https://lamSompa.github.io/survey-visualizer](https://lamSompa.github.io/survey-visualizer)

---

## Project Overview

- View all trivia categories available in the dataset.
- Visualize question distributions by category and by difficulty using [Recharts](https://recharts.org/).
- Filter questions by category and difficulty.
- Search trivia questions by keyword.
- Responsive and accessible UI built with React functional components and hooks.
- Tested with Jest and React Testing Library for robust coverage.

---

## Features

- **Category Filter:** Select a trivia category to filter questions and update charts.
- **Difficulty Filter:** Focus on easy, medium, or hard questions.
- **Interactive Charts:** See real-time updates in category and difficulty distributions.
- **Question List:** Browse, search, and filter questions with instant feedback.
- **Robust Testing:** Includes unit and integration tests, with CSS modules mocked for full compatibility.

---

## Tech Stack

- [React](https://react.dev/) (functional components, hooks)
- [Vite](https://vitejs.dev/) (fast build tooling)
- [Recharts](https://recharts.org/) (charts and visualizations)
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (testing)
- [Open Trivia DB API](https://opentdb.com) (data source)

---

## Installation & Development

```bash
git clone https://github.com/lamSompa/survey-visualizer.git
cd survey-visualizer
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app locally.

---

## Running Tests

```bash
npm run test
```

To check code coverage:

```bash
npm run test -- --coverage
```

---

## Deployment

The app is deployed using [GitHub Pages](https://pages.github.com/):

1. Build and deploy:
    ```bash
    npm run deploy
    ```
2. The site is published at [https://lamSompa.github.io/survey-visualizer](https://lamSompa.github.io/survey-visualizer).

---

## Project Structure

```
survey-visualizer/
├── public/
├── src/
│   ├── components/
│   │   ├── CategoryChart.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── DifficultyChart.jsx
│   │   ├── ErrorState.jsx
│   │   ├── SearchBar.jsx
│   │   └── TriviaList.jsx
│   ├── hooks/
│   │   └── useTriviaData.js
│   ├── utils/
│   │   └── decodeHtml.js
│   ├── App.jsx
│   └── App.css
├── package.json
├── vite.config.js
└── ...
```

---

## Clean Code & Best Practices

- Separation of concerns: Logic is modularized into components and custom hooks.
- Type-safe data handling: API responses are validated and errors are handled gracefully.
- Consistent naming: Components and functions follow clear, descriptive naming conventions.
- Testing: All core logic is covered by unit and integration tests.
- Accessibility: Semantic HTML and ARIA labels are used where appropriate.

---

## Integration Guidance

To integrate Survey Visualizer into a larger codebase, modularize it as a self-contained component or route. Ensure UI consistency with your global design system, and abstract API/data logic for reuse. For large datasets, consider pagination or virtualization. Test integration points to maintain performance and reliability.

---

## License

This project is for demonstration and educational purposes only.  
Not affiliated with JetBrains or Open Trivia DB.

---

Made by [lamSompa](https://github.com/lamSompa)

---
