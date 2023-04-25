import { useRemarkSync } from 'react-remark';
import remarkGfm from 'remark-gfm';
import remarkGemoji from 'remark-gemoji';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import components from './md-components';

export const Md = ({ children }: { children: string }) => {
  const md = useRemarkSync(children, {
    // TODO: investigate type errors. Following example at https://github.com/remarkjs/react-remark#readme
    // @ts-ignore
    remarkPlugins: [remarkGfm, remarkGemoji],
    // @ts-ignore
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    remarkToRehypeOptions: { allowDangerousHtml: true }, // TODO: is this safe? R&D
    rehypeReactOptions: { components },
  });
  return <span>{md}</span>;
};
