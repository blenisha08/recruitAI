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
      <Navbar />

<h1 style={{ marginTop: "20px" }}>
  Application Tracking
</h1>

<ApplicationTable applications={applications} />

      <div className="main">
        <h1>Application Tracking</h1>

        <div className="card">
          <table width="100%">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app, index) => (
                <tr key={index}>
                  <td>{app.company}</td>
                  <td>{app.role}</td>
                  <td>{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApplicationTracking;