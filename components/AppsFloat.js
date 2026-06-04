'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaRocket, FaTimes, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

const APPS = [
    {
        name: 'CRUDly',
        url: 'https://crudly.org',
        desc: 'Turn any data model into a production-ready REST API in seconds — with docs, playgrounds, and admin tools included.',
        category: 'Dev Tool',
        status: 'Beta',
        rgb: '0,200,150',
    },
    {
        name: 'Spokn',
        url: 'https://spokn.online',
        desc: 'Speak once, create content everywhere. Voice notes transformed into blogs, tweets, and newsletters via AI.',
        category: 'AI',
        status: 'Live',
        rgb: '255,107,74',
    },
    {
        name: 'GrowthDock',
        url: 'https://growthdock.live',
        desc: 'AI workflow engine for indie founders. Brainstorm, draft, distribute, and execute content — all in one place.',
        category: 'AI SaaS',
        status: 'Live',
        rgb: '245,158,11',
    },
    {
        name: 'Tools for 99¢',
        url: 'https://toolsfor99cents.com',
        desc: 'Developer and AI tools for $0.99 each.',
        category: 'Dev Tools',
        status: 'Live',
        rgb: '129,140,248',
        tools: [
            { label: 'Dev Utilities', price: 'Free', items: ['JWT Decoder', 'UUID Generator', 'JSON → CSV'] },
            { label: 'Data Tools',    price: '$0.99', items: ['MockData Generator'] },
            { label: 'AI Content',    price: '$0.99', items: ['CaptionGen AI', 'Summarize AI', 'IdeaSpark AI'] },
        ],
    },
];

function AppRow({ app }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="rounded-xl border transition-colors duration-200"
            style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: open ? `rgba(${app.rgb},0.35)` : 'rgba(255,255,255,0.08)',
            }}
        >
            <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="font-bold text-white text-sm">{app.name}</span>
                            <span
                                className="text-xs px-2 py-0.5 rounded-full font-medium"
                                style={{ background: `rgba(${app.rgb},0.15)`, color: `rgb(${app.rgb})` }}
                            >
                                {app.category}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">
                                {app.status}
                            </span>
                        </div>
                        <p className="text-white/45 text-xs leading-relaxed">{app.desc}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-150"
                        style={{
                            background: `rgba(${app.rgb},0.12)`,
                            color: `rgb(${app.rgb})`,
                            border: `1px solid rgba(${app.rgb},0.2)`,
                        }}
                    >
                        Visit <FaExternalLinkAlt className="h-2.5 w-2.5" aria-hidden="true" />
                    </a>
                    {app.tools && (
                        <button
                            onClick={() => setOpen(o => !o)}
                            aria-expanded={open}
                            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-white/30 rounded"
                        >
                            {open ? 'Hide' : 'Show'} tools
                            <FaChevronDown aria-hidden="true" className={`h-2.5 w-2.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                        </button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {open && app.tools && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 border-t border-white/08 pt-3 space-y-3">
                            {app.tools.map(group => (
                                <div key={group.label}>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-xs font-semibold text-white/60">{group.label}</span>
                                        <span className="text-xs text-white/30">{group.price}</span>
                                    </div>
                                    <div className="space-y-1">
                                        {group.items.map(item => (
                                            <div
                                                key={item}
                                                className="text-xs text-white/50 px-3 py-1.5 rounded-lg"
                                                style={{ background: 'rgba(255,255,255,0.04)' }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function AppsFloat() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-[9997]"
                        style={{ background: 'rgba(0,0,0,0.4)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Slide panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Things I've Built"
                        className="fixed top-0 right-0 bottom-0 z-[9998] flex flex-col"
                        style={{
                            width: 'min(380px, 100vw)',
                            background: 'rgba(8,10,18,0.95)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderLeft: '1px solid rgba(255,255,255,0.08)',
                        }}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-5 py-4 shrink-0"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            <div>
                                <p className="text-white font-bold text-base">Things I&apos;ve Built</p>
                                <p className="text-white/35 text-xs mt-0.5">{APPS.length} products</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/apps"
                                    onClick={() => setOpen(false)}
                                    className="text-xs text-white/40 hover:text-white/70 transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
                                >
                                    Full page →
                                </Link>
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close apps panel"
                                    className="text-white/40 hover:text-white/80 transition-colors p-1.5 focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
                                >
                                    <FaTimes className="h-4 w-4" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        {/* App list */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                            {APPS.map(app => (
                                <AppRow key={app.name} app={app} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating trigger button */}
            <motion.button
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-haspopup="dialog"
                aria-label={open ? 'Close apps panel' : 'Open apps panel — Things I\'ve Built'}
                className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm shadow-2xl"
                style={{
                    background: 'rgba(15,18,30,0.9)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(129,140,248,0.2)' }}
                whileTap={{ scale: 0.97 }}
                animate={open ? { rotate: 15 } : { rotate: 0 }}
            >
                <FaRocket className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
                <span>My Apps</span>
            </motion.button>
        </>
    );
}
