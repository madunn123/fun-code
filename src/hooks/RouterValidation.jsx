import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function RequireAuth() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    user
      ? <Outlet />
      : <Navigate to="/" />
  );
}

export function NoAuth() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    !user
      ? <Outlet />
      : <Navigate to="/home" />
  );
}
