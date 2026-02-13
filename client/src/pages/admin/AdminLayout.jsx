import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import "../../styles/admin.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">
        <AdminNavbar />
        <div className="admin-content">
          {children}
        </div>
      </div>

    </div>
  );
};

export default AdminLayout;
