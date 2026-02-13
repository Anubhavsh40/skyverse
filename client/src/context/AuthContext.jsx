import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@gmail.com") {
      setUser({ email, role: "admin" });
      return "admin";
    }

    if (email === "teacher@gmail.com") {
      setUser({ email, role: "teacher" });
      return "teacher";
    }

    if (email === "student@gmail.com") {
      setUser({ email, role: "student" });
      return "student";
    }

    return null;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
