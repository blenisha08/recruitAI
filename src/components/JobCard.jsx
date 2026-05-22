function JobCard({
  title,
  company,
  location,
  type,
  skills,
  buttonText,
}) {
  return (
    <div
      className="job-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3>{title}</h3>

        <p style={{ marginTop: "5px", color: "gray" }}>
          {company}
        </p>

        <p style={{ marginTop: "5px" }}>
          {location} | {type}
        </p>

        <p
          style={{
            marginTop: "10px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          <strong>Skills:</strong> {skills}
        </p>
      </div>

      <button className="btn">
        {buttonText}
      </button>
    </div>
  );
}

export default JobCard;