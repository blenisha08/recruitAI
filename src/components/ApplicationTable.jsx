function ApplicationTable({ applications }) {
  return (
    <div className="card">
      <table width="100%">
        <thead>
          <tr>
            <th align="left">Company</th>
            <th align="left">Role</th>
            <th align="left">Status</th>
            <th align="left">Applied On</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.company}</td>
              <td>{app.role}</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    borderRadius: "8px",
                    background:
                      app.status === "Applied"
                        ? "#dbeafe"
                        : app.status === "Shortlisted"
                        ? "#dcfce7"
                        : "#fee2e2",
                    color:
                      app.status === "Applied"
                        ? "#2563eb"
                        : app.status === "Shortlisted"
                        ? "#16a34a"
                        : "#dc2626",
                  }}
                >
                  {app.status}
                </span>
              </td>

              <td>{app.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationTable;