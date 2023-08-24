import { useState } from 'react';

const SESSION_STORAGE_KEY = 'applicationHasLoaded';

interface useSessionStorage {
  hasSession: boolean;
  setSession: () => void;
}

export const useSessionStorage = () => {
  const [hasSession, setHasSessionState] = useState<boolean>(
    sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true'
  );

  const setSession = () => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    setHasSessionState(true);
  };

  return { hasSession, setSession };
};
