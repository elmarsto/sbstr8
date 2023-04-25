// import Link from 'next/link';

interface PostProps {
  children: React.ReactNode;
}

export default function Post({ children }: PostProps) {
  return <div>{children}</div>;
}
