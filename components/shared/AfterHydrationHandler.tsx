'use client';
import { useEffect } from 'react';

const AfterHydrationHandler = () => {
  useEffect(() => {
    sessionStorage.setItem('isLoaded', 'true');
  }, []);
  return <></>;
};

export default AfterHydrationHandler;
