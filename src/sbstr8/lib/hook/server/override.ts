import { ComponentType } from 'react';
import { override } from '@/../sbstr8.config';

const useOverride = async (component: ComponentType) =>
  override ? (await override.get(component))?.default : undefined;

export default useOverride;
