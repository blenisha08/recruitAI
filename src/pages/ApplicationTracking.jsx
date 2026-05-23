import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ApplicationTable from "../components/ApplicationTable";

function ApplicationTracking() {
  const applications = [
    {
      company: "ABC Architects",
      role: "Junior Architect",
      status: "Applied",
    },
    {
      company: "BuildTech",
      role: "BIM Coordinator",
      status: "Shortlisted",
    },
    {
      company: "UrbanWorks",
      role: "Architect Intern",
      status: "Rejected",
    },
  ];

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h1 style={{ marginTop: "20px" }}>
          Application Tracking
        </h1>

        <ApplicationTable
          applications={applications}
        />
      </div>
    </div>
  );
}

export default ApplicationTracking;