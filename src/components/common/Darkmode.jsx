import React from 'react';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

export default function Darkmode() {
  const location = useLocation();

  return (
    <div className={`absolute right-20 xl:fixed xl:top-10 xl:right-20 ${location?.pathname === '/' ? 'top-[270px]' : 'top-60'}`}>
      <button type="button">
        <BsFillCloudSunFill className="text-2xl xl:text-5xl text-fourty-colors" />
      </button>
    </div>
  );
}
