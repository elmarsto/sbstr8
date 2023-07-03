'use client';
import { useRef, useEffect, ComponentType } from 'react';
import { override } from '@/../sbstr8.config';

export const useOverride = (component: ComponentType) => {
  const ret = useRef<ComponentType>();
  useEffect(() => {
    (async () => {
      ret.current = override
        ? (await override.get(component)).default
        : undefined;
    })();
  });
  return ret.current;
};
export default useOverride;
