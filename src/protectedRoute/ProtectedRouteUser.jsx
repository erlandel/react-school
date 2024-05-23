import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRouteUser = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
 

 return !isAuthenticated  ? <Navigate to="/Login" /> : <Outlet />;
};
