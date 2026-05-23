import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import UploadResume from "./pages/UploadResume";
import JobRecommendations from "./pages/JobRecommendations";
import InternshipRecommendations from "./pages/InternshipRecommendations";
import AIQuestions from "./pages/AIQuestions";
import ApplicationTracking from "./pages/ApplicationTracking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Student Dashboard */}
        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        {/* Company Dashboard */}
        <Route
          path="/company/dashboard"
          element={<CompanyDashboard />}
        />

        {/* Upload Resume */}
        <Route
          path="/student/upload"
          element={<UploadResume />}
        />

        {/* Job Recommendations */}
        <Route
          path="/student/jobs"
          element={<JobRecommendations />}
        />

        {/* Internship Recommendations */}
        <Route
          path="/student/internships"
          element={<InternshipRecommendations />}
        />

        {/* AI Interview Questions */}
        <Route
          path="/student/ai-questions"
          element={<AIQuestions />}
        />

        {/* Application Tracking */}
        <Route
          path="/student/applications"
          element={<ApplicationTracking />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;