import Sidebar from "../components/Sidebar";

function InternshipRecommendations() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h1>Internships</h1>

        <div className="job-card">
          <h3>Architecture Intern</h3>
          <p>Studio Lotus</p>
          <button className="btn">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default InternshipRecommendations;