import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

export default function DifficultyChart({ questions }) {
const stats = { easy: 0, medium: 0, hard: 0 };
questions.forEach((q) => {
  if (!q || !q.difficulty) return;
  if (["easy", "medium", "hard"].includes(q.difficulty)) {
    stats[q.difficulty] = (stats[q.difficulty] || 0) + 1;
  }
});

  const data = Object.entries(stats).map(([difficulty, count]) => ({
    difficulty: difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
    count,
  }));

  if (!data.some(item => item.count > 0)) return <div>No data to display.</div>;

  return (
    <figure>
      <figcaption>
        Bar chart showing the distribution of questions by difficulty (Easy, Medium, Hard).
      </figcaption>
      <div style={{ width: "100%", overflowX: "auto" }} aria-label="Questions by difficulty">
        <div style={{ minWidth: 700 }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 16, right: 32, left: 0, bottom: 32 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis
                dataKey="difficulty"
                tick={{ fill: "#fff", fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                axisLine={{ stroke: "#E62F78" }}
                tick={{ fill: "#fff", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "#E62F78", opacity: 0.15 }}
                contentStyle={{
                  background: "#232946",
                  border: "1px solid #E62F78",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace"
                }}
                labelStyle={{ color: "#E62F78", fontWeight: "bold" }}
              />
              <Bar dataKey="count" fill="#69D5B1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </figure>
  );
}
