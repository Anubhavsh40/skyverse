import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        <h2>EduSmart </h2>
        <span>Admin Portal</span>
      </div>

      <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/teachers">Teachers</NavLink>
        <NavLink to="/admin/students">Students</NavLink>
        <NavLink to="/admin/subjects">Subjects</NavLink>
        <NavLink to="/admin/classrooms">Classrooms</NavLink>
        <NavLink to="/admin/timetable">Timetable</NavLink>
        <NavLink to="/admin/attendance">Attendance</NavLink>
        <NavLink to="/admin/settings">Settings</NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-btn">Logout</button>
      </div>

    </div>
  );
};

export default AdminSidebar;
