import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();

  // If not logged in
  if (!user) {
    return <Navigate to="/" />;
  }

  // If logged in but wrong role
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
