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
  const routes = [
    {
      path: '/',
      element: <Login />,
      RequireAuth: false,
    },
    {
      path: '/register',
      element: <Register />,
      RequireAuth: false,
    },
    {
      path: '/home',
      element: <Home />,
      RequireAuth: true,
    },
  ];

  return (
    <AuthProvider>
      <div className="grid grid-cols-1 gap-10 py-[1%] xl:w-[1500px] mx-auto">
        {location.pathname !== '/' && location.pathname !== '/register' && <Nav />}

        <Routes>
          {
            routes?.map((route, i) => {
              if (route.RequireAuth) {
                return (
                  <Route element={<RequireAuth />} key={i}>
                    <Route
                      path={route.path}
                      element={(
                        <RouterSuspense>
                          {route.element}
                        </RouterSuspense>
                    )}
                    />
                  </Route>
                );
              }
              return (
                <Route element={<NoAuth />} key={i}>
                  <Route
                    path={route.path}
                    element={(
                      <RouterSuspense>
                        {route.element}
                      </RouterSuspense>
                  )}
                  />
                </Route>
              );
            })
          }
        </Routes>
      </div>
    </AuthProvider>
  );
}
