import Sidebar from "../components/Sidebar";

function UploadResume() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h1>Upload Resume</h1>

        <div className="card">
          <input type="file" />
          <br /><br />
          <button className="btn">Upload</button>
        </div>
      </div>
    </div>
  );
}

export default UploadResume;