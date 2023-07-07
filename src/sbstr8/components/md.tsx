import ccn from '@sindresorhus/class-names';
import { useRemarkSync } from 'react-remark';

export interface MdProps {
  children?: string | string[];
  className?: string;
  style?: React.CSSProperties;
}
// TODO: use same codepath as mdx-components.tsx
export const Md = ({ children, className, style }: MdProps) => {
  let markdown = '';
  if (
    typeof children === 'object' &&
    Array.isArray(children) &&
    children.length > 0
  ) {
    markdown = children.join();
  } else if (typeof children === 'string') {
    markdown = children;
  }
  const md = useRemarkSync(markdown, {
    // TODO: investigate type errors. Following example at https://github.com/remarkjs/react-remark#readme
    // @ts-ignore
    remarkPlugins: [],
    remarkToRehypeOptions: { allowDangerousHtml: true }, // TODO: is this safe? R&D
    // TODO: use S8 elements like in mdx-components.tsx
  });
  return (
    <span className={ccn('s8-md', className)} style={style}>
      {md}
    </span>
  );
};
export default Md;
