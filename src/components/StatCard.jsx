function StatCard({ title, value, color }) {
  return (
    <div
      className="stat-card"
      style={{
        borderLeft: `5px solid ${color}`,
      }}
    >
      <h3>{title}</h3>

      <h1 style={{ marginTop: "10px" }}>{value}</h1>
    </div>
  );
}

export default StatCard;