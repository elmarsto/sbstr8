'use client';
import { useRef, useEffect, ComponentType } from 'react';
import { override } from '@/../sbstr8.config';

export const useOverride = (component: ComponentType<any>) => {
  const ret = useRef<ComponentType>(component);
  useEffect(() => {
    (async () => {
      ret.current = override
        ? (await override.get(component)).default || component
        : component;
    })();
  });
  return ret.current;
};
export default useOverride;
