import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function StudentDashboard() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h1>Dashboard</h1>

      <Navbar />

<div className="stats">
  <StatCard
    title="Resume"
    value="Uploaded"
    color="#22c55e"
  />

  <StatCard
    title="Jobs"
    value="12 Recommended"
    color="#3b82f6"
  />

  <StatCard
    title="Internships"
    value="7 Recommended"
    color="#a855f7"
  />

  <StatCard
    title="Applications"
    value="5 Applied"
    color="#f59e0b"
  />
</div>

        <div className="card">
          <h2>Recommended Jobs</h2>

          <div className="job-card">
            <h3>Junior Architect</h3>
            <p>ABC Architects</p>
            <button className="btn">Apply</button>
          </div>

          <div className="job-card">
            <h3>BIM Coordinator</h3>
            <p>BuildTech Solutions</p>
            <button className="btn">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;