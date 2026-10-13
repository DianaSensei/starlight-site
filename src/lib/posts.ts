import { getCollection } from 'astro:content';

/**
 * Posts that may be shown, newest first. Drafts and hidden posts are dropped
 * at build time; future-dated and expired posts are filtered in the browser
 * (see PostList.astro) so they appear and disappear without a rebuild.
 */
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft && !data.hidden);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
