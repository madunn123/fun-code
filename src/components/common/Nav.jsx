import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useLogin from '@/hooks/useLogin';

export default function Nav() {
  const { handleLogout } = useLogin();
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    function changeStickyNav() {
      if (window.scrollY > 0) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    }

    window.addEventListener('scroll', changeStickyNav);
  });

  return (
    <nav className={`navbar dark:bg-fourty-colors flex flex-row items-center justify-between p-5 px-12 ${stickyNav ? 'sticky top-2.5 z-50' : 'relative'}`}>
      <div className="logo">
        <h1 className="m-0 text-2xl font-bold text-fourty-colors">
          X.
          <b className="text-secondary-colors">TDOs</b>
        </h1>
      </div>

      <div className="flex flex-row items-center gap-16 text-sm uppercase text-main-colors">
        <NavLink to="/" className="duration-300 hover:text-fourty-colors">how it works?</NavLink>
        <NavLink to="/" className="duration-300 hover:text-fourty-colors">develop</NavLink>
        <NavLink to="/" className="duration-300 hover:text-fourty-colors">docs</NavLink>
        <NavLink to="/" className="duration-300 hover:text-fourty-colors">blog</NavLink>
        <NavLink to="/" className="duration-300 hover:text-fourty-colors">about</NavLink>
      </div>

      <button
        type="button"
        className="text-sm uppercase duration-300 text-main-colors hover:text-fourty-colors"
        onClick={handleLogout}
      >
        logout
      </button>
    </nav>
  );
}
