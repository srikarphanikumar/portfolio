'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaRss } from 'react-icons/fa';

function formatDate(pubDate) {
    if (!pubDate) return '';
    const d = new Date(pubDate);
    return isNaN(d.getTime())
        ? pubDate
        : d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
}

function PostCard({ post, index }) {
    return (
        <motion.a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
        >
            <div className="border border-white/10 rounded-lg p-4 hover:border-[#A6E3A1]/40 hover:bg-white/5 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[#89B4FA] text-xs font-mono">
                        [{String(index + 1).padStart(2, '0')}]&nbsp;&nbsp;
                        <span className="text-white/40">{formatDate(post.pubDate)}</span>
                    </span>
                    <FaExternalLinkAlt className="text-white/20 group-hover:text-[#A6E3A1] transition-colors duration-200 h-3 w-3 flex-shrink-0" />
                </div>

                <h2 className="text-[#CDD6F4] font-mono font-semibold text-sm mb-2 group-hover:text-[#A6E3A1] transition-colors duration-200 leading-snug">
                    {post.title}
                </h2>

                {post.excerpt && (
                    <p className="text-white/40 font-mono text-xs leading-relaxed line-clamp-2">
                        {post.excerpt}{post.excerpt.length >= 180 ? '…' : ''}
                    </p>
                )}

                <div className="mt-3 text-[#89B4FA]/60 font-mono text-xs group-hover:text-[#89B4FA] transition-colors duration-200">
                    $ open {post.link.replace('https://', '')}
                </div>
            </div>
        </motion.a>
    );
}

export default function WritingList({ posts }) {
    return (
        <div className="bg-[#fdf6e3] p-4 rounded-lg shadow-2xl w-full max-w-4xl mx-auto flex flex-col min-h-[80vh]">
            {/* Traffic lights */}
            <div className="flex items-center mb-4 bg-[#181825] px-3 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[#F38BA8] mr-2" />
                <div className="w-3 h-3 rounded-full bg-[#FAB387] mr-2" />
                <div className="w-3 h-3 rounded-full bg-[#A6E3A1] mr-4" />
                <span className="text-white/30 font-mono text-xs flex items-center gap-2">
                    <FaRss className="h-3 w-3 text-[#FAB387]" />
                    ~/writing — mspk.substack.com
                </span>
            </div>

            {/* Terminal body */}
            <div className="flex-1 bg-[#181825] rounded-lg p-4 font-mono text-sm overflow-auto">
                {/* Header command */}
                <div className="mb-4 text-xs text-white/50 border-b border-white/10 pb-3">
                    <span className="text-[#A6E3A1]">➜</span>
                    <span className="text-[#89B4FA] mx-2">~</span>
                    <span className="text-[#CDD6F4]">curl -s mspk.substack.com/feed | parse-rss</span>
                    <div className="mt-1 text-white/30">
                        {posts.length > 0
                            ? `> ${posts.length} article${posts.length !== 1 ? 's' : ''} found`
                            : '> error: could not reach feed — showing cached result'}
                    </div>
                </div>

                {posts.length === 0 ? (
                    <div className="text-[#F38BA8] text-xs font-mono p-4 border border-[#F38BA8]/20 rounded">
                        <p>Error: unable to fetch articles at this time.</p>
                        <p className="text-white/40 mt-1">Visit <a href="https://mspk.substack.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#89B4FA]">mspk.substack.com</a> directly.</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {posts.map((post, i) => (
                            <PostCard key={post.link} post={post} index={i} />
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-6 pt-3 border-t border-white/10 text-white/20 text-xs">
                    <span className="text-[#A6E3A1]">➜</span>
                    <span className="text-[#89B4FA] mx-2">~</span>
                    <span className="animate-pulse">▋</span>
                </div>
            </div>
        </div>
    );
}
