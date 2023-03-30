// import Link from 'next/link';
import { Tokens } from '../../.mirrorful/theme';

interface PostProps {
  children: React.ReactNode;
}

export default function Post({ children }: PostProps) {
  return <div style={{ color: Tokens.colors.blue.base }}>{children}</div>;
}
