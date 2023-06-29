import rootMaker from '@/sbstr8/components/page/root';
import FirstPost from '@/app/posts/first-post';

export default rootMaker({
  primary: [{ post: FirstPost, link: '/posts/first-post' }],
});
