'use client';
import { useEffect } from 'react';

const OnMount = () => {
  useEffect(() => {
    sessionStorage.setItem('isLoaded', 'true');
  }, []);

  return <></>;
};

export default OnMount;
