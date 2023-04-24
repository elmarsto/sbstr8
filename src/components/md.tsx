import { useRemarkSync } from 'react-remark';

export const Md = ({ children }: { children: string }) => {
  const md = useRemarkSync(children);
  return <span>{md}</span>;
};
