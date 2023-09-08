import React, { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import RouterSuspense from '@/components/router/Router';
import { NoAuth, RequireAuth } from '@/hooks/RouterValidation';
import Nav from '@/components/common/Nav';
import AuthProvider from '@/context/authContext';

const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));
const Register = lazy(() => import('@/pages/Register'));

export default function Routers() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="grid grid-cols-1 gap-10 py-[1%] xl:w-[1500px] mx-auto">
        {location.pathname !== '/' && location.pathname !== '/register' ? <Nav /> : ''}

        <Routes>
          <Route element={<NoAuth />}>
            <Route
              path="/"
              element={(
                <RouterSuspense>
                  <Login />
                </RouterSuspense>
          )}
            />
            <Route
              path="/register"
              element={(
                <RouterSuspense>
                  <Register />
                </RouterSuspense>
            )}
            />
          </Route>

          <Route element={<RequireAuth />}>
            <Route
              path="/home"
              element={(
                <RouterSuspense>
                  <Home />
                </RouterSuspense>
          )}
            />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
