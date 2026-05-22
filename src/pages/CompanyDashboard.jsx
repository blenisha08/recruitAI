function CompanyDashboard() {
  const students = [
    {
      name: "Ananya",
      role: "Junior Architect",
    },
    {
      name: "Rahul",
      role: "BIM Coordinator",
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Company Panel</h2>
      </div>

      <div className="main">
        <h1>Company Dashboard</h1>

        <div className="card">
          <h2>Add Recruitment</h2>

          <input
            type="text"
            placeholder="Job Title"
            style={{ padding: "10px", width: "100%" }}
          />

          <br /><br />

          <textarea
            placeholder="Job Description"
            style={{ width: "100%", height: "100px" }}
          ></textarea>

          <br /><br />

          <button className="btn">Post Job</button>
        </div>

        <div className="card">
          <h2>Student Applications</h2>

          {students.map((student, index) => (
            <div className="job-card" key={index}>
              <h3>{student.name}</h3>
              <p>{student.role}</p>

              <button className="btn">Shortlist</button>

              <button
                className="btn"
                style={{ marginLeft: "10px", background: "red" }}
              >
                Reject
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;