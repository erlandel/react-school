import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRouterEmployee = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const role = useSelector(state => state.auth.role);

  if (!isAuthenticated || (role !== 'employee' && role !== 'administrator')) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};