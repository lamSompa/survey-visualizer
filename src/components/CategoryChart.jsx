import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useCategoryStats } from "../hooks/useCategoryStats";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function CategoryChart() {
  const { categoryStats, loading, error } = useCategoryStats(50);

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div>Failed to load chart data.</div>;
  if (!categoryStats.length) return <div>No data to display.</div>;

  // Decode category names for display
  const decodedData = categoryStats.map(item => ({
    ...item,
    category: decodeHtml(item.category)
  }));

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={decodedData} margin={{ top: 16, right: 32, left: 0, bottom: 32 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" angle={-20} textAnchor="end" interval={0} height={80} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
