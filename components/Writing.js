'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaRss, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PER_PAGE = 12;

function formatDate(raw) {
    if (!raw) return '';
    const d = new Date(raw);
    return isNaN(d.getTime())
        ? raw
        : d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
}

function PostCard({ post, globalIndex, pageIndex }) {
    return (
        <motion.a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-gray-800/60 border border-white/10 rounded-xl p-5 hover:border-green-400/40 hover:bg-gray-800 transition-all duration-200 cursor-pointer"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: pageIndex * 0.04 }}
        >
            {/* Index + date */}
            <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-blue-400/70">
                    [{String(globalIndex + 1).padStart(2, '0')}]
                </span>
                <span className="font-mono text-xs text-white/30">{formatDate(post.pubDate)}</span>
            </div>

            {/* Title */}
            <h2 className="text-gray-100 font-semibold text-sm leading-snug mb-3 group-hover:text-green-400 transition-colors duration-200 flex-1">
                {post.title}
            </h2>

            {/* Excerpt */}
            {post.excerpt && (
                <p className="text-white/35 text-xs leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                </p>
            )}

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/10">
                <span className="font-mono text-xs text-blue-400/40 group-hover:text-blue-400 transition-colors duration-200">
                    $ read_more
                </span>
                <FaExternalLinkAlt className="h-3 w-3 text-white/20 group-hover:text-green-400 transition-colors duration-200 flex-shrink-0" />
            </div>
        </motion.a>
    );
}

function PaginationBtn({ onClick, disabled, children }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="w-8 h-8 flex items-center justify-center rounded font-mono text-xs border border-white/10 text-white/40 hover:border-green-400/50 hover:text-green-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-150"
        >
            {children}
        </button>
    );
}

export default function WritingList({ posts }) {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(posts.length / PER_PAGE);
    const slice = posts.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

    const goTo = (p) => {
        setPage(p);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full min-h-full flex flex-col px-6 pt-8 pb-10 max-w-7xl mx-auto">
            {/* Terminal header */}
            <div className="mb-8 font-mono">
                <div className="flex items-center gap-2 text-sm mb-1">
                    <FaRss className="text-orange-400 h-3.5 w-3.5" />
                    <span className="text-green-400">~/writing</span>
                    <span className="text-white/20">·</span>
                    <a
                        href="https://mspk.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-blue-400 transition-colors"
                    >
                        mspk.substack.com
                    </a>
                </div>
                <div className="text-xs text-white/30">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 mx-2">~</span>
                    ls posts/ &nbsp;|&nbsp; wc -l
                    <span className="ml-3 text-green-400">{posts.length} articles</span>
                    <span className="text-white/20 ml-3">·</span>
                    <span className="ml-3">page {page + 1} / {totalPages}</span>
                </div>
            </div>

            {/* Grid */}
            {posts.length === 0 ? (
                <div className="font-mono text-sm text-red-400/80 border border-red-400/20 rounded-lg p-6">
                    <p>Error: could not fetch articles.</p>
                    <a
                        href="https://mspk.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-blue-400 underline mt-1 block"
                    >
                        Visit mspk.substack.com directly →
                    </a>
                </div>
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {slice.map((post, i) => (
                            <PostCard
                                key={post.link}
                                post={post}
                                globalIndex={page * PER_PAGE + i}
                                pageIndex={i}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                    <PaginationBtn onClick={() => goTo(0)} disabled={page === 0}>
                        «
                    </PaginationBtn>
                    <PaginationBtn onClick={() => goTo(page - 1)} disabled={page === 0}>
                        <FaChevronLeft className="h-3 w-3" />
                    </PaginationBtn>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-8 h-8 flex items-center justify-center rounded font-mono text-xs border transition-all duration-150 ${
                                i === page
                                    ? 'border-green-400/60 text-green-400 bg-green-400/10'
                                    : 'border-white/10 text-white/40 hover:border-green-400/50 hover:text-green-400'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <PaginationBtn onClick={() => goTo(page + 1)} disabled={page === totalPages - 1}>
                        <FaChevronRight className="h-3 w-3" />
                    </PaginationBtn>
                    <PaginationBtn onClick={() => goTo(totalPages - 1)} disabled={page === totalPages - 1}>
                        »
                    </PaginationBtn>
                </div>
            )}
        </div>
    );
}
