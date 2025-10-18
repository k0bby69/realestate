import { createContext, useEffect, useState } from "react";
import { userData } from "../lib/mockData";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  const logout = () => {
    console.log("🚪 Logging out user:", currentUser?.username);
    
    // Clear user immediately from both state and localStorage
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  // Function to refresh user data (now returns mock data)
  const refreshUser = async () => {
    if (currentUser) {
      try {
        // Simulate getting updated user data
        setCurrentUser(userData);
      } catch (error) {
        console.error("Failed to refresh user data:", error);
        // If refresh fails, keep current user data
      }
    }
  };

  // Auto-login function for demo purposes
  const demoLogin = () => {
    setCurrentUser(userData);
  };

  useEffect(() => {
    if (currentUser === null) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, refreshUser, logout, demoLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
