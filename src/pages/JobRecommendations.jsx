import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

function JobRecommendations() {
  const jobs = [
    {
      title: "Junior Architect",
      company: "ABC Architects",
    },
    {
      title: "Architectural Designer",
      company: "DesignHub",
    },
  ];

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h1>Job Recommendations</h1>

        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>

            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobRecommendations;