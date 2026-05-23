import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>RecruitAI</h2>

      <ul>
        <li><Link to="/student/dashboard">Dashboard</Link></li>
        <li><Link to="/student/upload">Upload Resume</Link></li>
        <li><Link to="/student/jobs">Job Recommendation</Link></li>
        <li><Link to="/student/internships">Internships</Link></li>
        <li><Link to="/student/ai-questions">AI Questions</Link></li>
        <li><Link to="/student/applications">Application Tracking</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;