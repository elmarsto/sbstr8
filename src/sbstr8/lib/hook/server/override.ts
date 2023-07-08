import { override } from '@/../sbstr8.config';

const useOverride = async (obj: object) =>
  override ? (await override.get(obj))?.default || obj : obj;

export default useOverride;
