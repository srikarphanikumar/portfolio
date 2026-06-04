import WritingList from '../../../components/Writing';

export const revalidate = 86400;

export const metadata = { title: 'Writing' };

async function getPosts() {
    try {
        // Substack RSS is capped at 20 items; API returns up to 50
        const res = await fetch('https://mspk.substack.com/api/v1/posts?limit=50', {
            next: { revalidate: 86400 },
        });
        if (!res.ok) throw new Error('fetch failed');

        const data = await res.json();
        return data
            .map((p) => ({
                title: p.title ?? 'Untitled',
                link: p.canonical_url ?? '',
                pubDate: p.post_date ?? '',
                excerpt: p.subtitle ?? p.truncated_body_text ?? '',
            }))
            .filter((p) => p.link);
    } catch {
        return [];
    }
}

export default async function WritingPage() {
    const posts = await getPosts();
    return <WritingList posts={posts} />;
}
