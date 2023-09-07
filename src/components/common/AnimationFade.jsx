import Aos from 'aos';
import React, { useEffect } from 'react';

export default function AnimationFade({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="50"
      data-aos-easing="ease-in-sine"
    >
      {children}
    </div>
  );
}
