import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import authentication context

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Check if user is logged in

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
