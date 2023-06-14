import { useRemarkSync } from 'react-remark';
import remarkGemoji from 'remark-gemoji';
import components from './md-components';

export interface MdProps {
  children?: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

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
    remarkPlugins: [remarkGemoji],
    remarkToRehypeOptions: { allowDangerousHtml: true }, // TODO: is this safe? R&D
    rehypeReactOptions: { components },
  });
  return (
    <span className={className} style={style}>
      {md}
    </span>
  );
};
export default Md;
