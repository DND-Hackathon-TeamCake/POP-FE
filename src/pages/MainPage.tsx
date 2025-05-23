'use client'
import useLocation from '@/hooks/useLocation';
import React, { useEffect } from 'react';

const MainPage = () => {
  const { location, error, depthName } = useLocation();

  useEffect(() => {
    if (location) {
      console.log(location);
    }
    if (depthName) {
      console.log(depthName);
    }
    if (error) {
      console.log("위치 권한 허용해라");
    }
  }, [location, error])
  return (
    <div>

    </div>
  );
};

export default MainPage;