import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext) || {};  // safely access user

  if (!user) {
    // Redirect to login if no user is logged in
    return <Navigate to="/login" />;
  }

  // Check if the user's role is allowed for this route
  if (!allowedRoles.includes(user.role)) {
    // Redirect to homepage or another page if the user doesn't have permission
    return <Navigate to="/" />;
  }
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;  // Render the protected route's component
};

export default PrivateRoute;