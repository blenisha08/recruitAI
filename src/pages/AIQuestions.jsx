import Sidebar from "../components/Sidebar";

function AIQuestions() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h1>AI Interview Questions</h1>

        <div className="card">
          <p>1. Explain the role of an Architect?</p>
          <br />
          <p>2. Difference between AutoCAD and Revit?</p>
          <br />
          <p>3. What is BIM?</p>
        </div>
      </div>
    </div>
  );
}

export default AIQuestions;