import { ComponentType } from 'react';
import { override } from '@/../sbstr8.config';

const useOverride = async (component: ComponentType<any>) =>
  override ? (await override.get(component))?.default || component : component;

export default useOverride;
