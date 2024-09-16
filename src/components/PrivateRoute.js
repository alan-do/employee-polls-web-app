import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;