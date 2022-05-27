import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { users, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  else if (!users.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
else{
    return children;
}
};

export default PrivateRoute;
