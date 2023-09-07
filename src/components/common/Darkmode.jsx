import React, { useEffect, useState } from 'react';
import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

export default function Darkmode() {
  const location = useLocation();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`absolute right-20 xl:fixed xl:top-10 xl:right-20 ${location?.pathname === '/' ? 'top-[270px]' : 'top-60'}`}>
      <button type="button" onClick={handleThemeSwitch}>
        {theme === 'dark'
          ? <BsFillCloudMoonFill className="text-2xl xl:text-5xl text-fourty-colors" />
          : <BsFillCloudSunFill className="text-2xl xl:text-5xl text-fourty-colors" />}
      </button>
    </div>
  );
}
