import React, { Suspense } from 'react';
import Loading from '../common/Loading';

export default function RouterSuspense({ children }) {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><Loading /></div>}>
      {children}
    </Suspense>
  );
}
