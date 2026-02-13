import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const role = login(formData.email, formData.password);

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "teacher") {
      navigate("/teacher/dashboard");
    } else if (role === "student") {
      navigate("/student/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  
  return (
    <div className="login-container">
      
      {/* LEFT PANEL */}
      <div className="login-left">
        <h1>EduSmart AI</h1>
        <p>AI-Powered Smart Classroom & Timetable Scheduler</p>

        <ul>
          <li>✔ Intelligent timetable generation</li>
          <li>✔ Real-time attendance tracking</li>
          <li>✔ Conflict-free scheduling</li>
          <li>✔ Advanced analytics & insights</li>
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="your.email@school.edu"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
