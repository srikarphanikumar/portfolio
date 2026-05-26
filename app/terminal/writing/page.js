import WritingList from '../../../components/Writing';

export const revalidate = 86400;

function extractCDATA(content, tag) {
    const re = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
    const m = content.match(re);
    return m ? m[1].trim() : null;
}

function extractTag(content, tag) {
    const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
    const m = content.match(re);
    return m ? m[1].trim() : null;
}

function stripHtml(html) {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function getPosts() {
    try {
        const res = await fetch('https://mspk.substack.com/feed', {
            next: { revalidate: 86400 },
        });
        if (!res.ok) return [];

        const xml = await res.text();
        const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

        return itemMatches.map((m) => {
            const raw = m[1];
            const title = extractCDATA(raw, 'title') ?? extractTag(raw, 'title') ?? 'Untitled';
            const link = extractTag(raw, 'link') ?? '';
            const pubDate = extractTag(raw, 'pubDate') ?? '';
            const descRaw = extractCDATA(raw, 'description') ?? extractTag(raw, 'description') ?? '';
            const excerpt = stripHtml(descRaw).slice(0, 180).trimEnd();

            return { title, link, pubDate, excerpt };
        }).filter((p) => p.link);
    } catch {
        return [];
    }
}

export default async function WritingPage() {
    const posts = await getPosts();
    return <WritingList posts={posts} />;
}
