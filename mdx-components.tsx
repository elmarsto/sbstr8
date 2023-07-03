import { ImgHTMLAttributes } from 'react';
import type { MDXComponents } from 'mdx/types';
import Link from '@/sbstr8/components/link';
import Image from '@/sbstr8/components/image';
import Pre from '@/sbstr8/components/pre';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-bold text-xl">{children}</h1>,
    h2: ({ children }) => <h2 className="font-semibold text-lg">{children}</h2>,
    h3: ({ children }) => <h3 className="font-semibold text-lg">{children}</h3>,
    h4: ({ children }) => <h4 className="font-semibold text-md">{children}</h4>,
    h5: ({ children }) => <h4 className="font-semibold text-sm">{children}</h4>,
    h6: ({ children }) => <h4 className="font-semibold text-xs">{children}</h4>,
    ...components,
    a: ({ href, children, className, style }) => (
      <Link href={href} style={style} className={className}>
        {children}
      </Link>
    ),
    pre: Pre,
    img: (
      props: React.DetailedHTMLProps<
        ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >,
    ) => (
      <Image
        alt={props.alt || ''}
        src={props.src || '#'}
        width={typeof props.width === 'number' ? props.width : 256}
        height={typeof props.height === 'number' ? props.height : 256}
      />
    ),
  };
}
