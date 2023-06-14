// import Link from 'next/link';

interface PostProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Post = ({ children, className, style }: PostProps) => (
  <div style={style} className={className}>
    {children}
  </div>
);

export default Post;
