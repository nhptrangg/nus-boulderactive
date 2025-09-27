'use client';

import { useCallback, useEffect, useState } from 'react';

export default function usePersistedState(key: string, defaultValue: string[]) {
  const [state, setState] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  const updateState = useCallback(
    (id: string) => {
      setState(prev => (prev.includes(id) ? prev : [...prev, id]));
    },
    [state, setState],
  );

  return [state, updateState] as const;
}
