import * as React from 'react';
import type { MDXComponents } from 'mdx/types';
import Link from '@/components/link';
import Image from '@/components/image';

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
    a: Link,
    img: (
      props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
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
