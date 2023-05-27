import meta from './meta.json';
import Post from './post';
import { PageHeader } from '@/components/page';

export default async () => (
  <>
    <nav>
      <PageHeader />
    </nav>
    <main>
      <article>
        <h2>{meta.title}</h2>
        <h3>Created {meta.created}</h3>
        <Post />
      </article>
    </main>
  </>
);
