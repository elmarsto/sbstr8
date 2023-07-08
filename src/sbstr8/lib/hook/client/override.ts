'use client';
import { useRef, useEffect } from 'react';
import { override } from '@/../sbstr8.config';

export const useOverride = (obj: object) => {
  const ret = useRef<object>(obj);
  useEffect(() => {
    (async () => {
      ret.current = override ? (await override.get(obj)).default || obj : obj;
    })();
  });
  return ret.current;
};
export default useOverride;
