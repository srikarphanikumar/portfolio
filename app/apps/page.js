'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaChevronDown, FaRocket } from 'react-icons/fa';

const APPS = [
    {
        name: 'CRUDly',
        url: 'https://crudly.org',
        tagline: 'Turn any data model into a production-ready REST API in seconds.',
        desc: 'Instantly generates APIs, documentation, playgrounds, logs, webhooks, and admin tools — so you can build backends without writing backend code.',
        category: 'Dev Tool',
        status: 'Beta',
        rgb: '0,200,150',
        icon: '⚡',
    },
    {
        name: 'Spokn',
        url: 'https://spokn.online',
        tagline: 'Speak once. Create content everywhere.',
        desc: 'Record a short voice note and let AI transform it into platform-ready content — blogs, tweets, newsletters, and more.',
        category: 'AI',
        status: 'Live',
        rgb: '255,107,74',
        icon: '🎙️',
    },
    {
        name: 'GrowthDock',
        url: 'https://growthdock.live',
        tagline: 'Ship content. Grow your SaaS. Without thinking like a marketer.',
        desc: 'The AI workflow engine for indie founders. Brainstorm, draft, distribute, and execute content — all in one place.',
        category: 'AI SaaS',
        status: 'Live',
        rgb: '245,158,11',
        icon: '🚀',
    },
    {
        name: 'Tools for 99¢',
        url: 'https://toolsfor99cents.com',
        tagline: 'Useful developer and AI tools for $0.99 each.',
        desc: 'A growing collection of micro-tools for developers and creators. Pay once, use forever.',
        category: 'Dev Tools',
        status: 'Live',
        rgb: '129,140,248',
        icon: '🛠️',
        tools: [
            { label: 'Dev Utilities', price: 'Free',  items: ['JWT Decoder', 'UUID Generator', 'JSON → CSV'] },
            { label: 'Data Tools',    price: '$0.99', items: ['MockData Generator'] },
            { label: 'AI Content',    price: '$0.99', items: ['CaptionGen AI', 'Summarize AI', 'IdeaSpark AI'] },
        ],
    },
];

const ORBS = [
    { color: 'rgba(0,200,150,0.2)',   size: 450, x: '5%',  y: '10%', dur: 16, delay: 0   },
    { color: 'rgba(129,140,248,0.2)', size: 500, x: '60%', y: '50%', dur: 20, delay: 1   },
    { color: 'rgba(255,107,74,0.15)', size: 380, x: '75%', y: '5%',  dur: 18, delay: 2   },
    { color: 'rgba(245,158,11,0.15)', size: 350, x: '0%',  y: '65%', dur: 22, delay: 0.5 },
];

function Orb({ color, size, x, y, dur, delay }) {
    return (
        <motion.div
            style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', background: color, filter: 'blur(80px)', left: x, top: y, pointerEvents: 'none' }}
            animate={{ x: [0, 24, -16, 10, 0], y: [0, -18, 24, -8, 0], scale: [1, 1.06, 0.96, 1.03, 1] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
        />
    );
}

function AppCard({ app, index }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
            className="rounded-2xl flex flex-col"
            style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1px solid rgba(${app.rgb},0.2)`,
                boxShadow: `0 0 40px rgba(${app.rgb},0.07)`,
            }}
        >
            <div className="p-6 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                        style={{ background: `rgba(${app.rgb},0.12)`, border: `1px solid rgba(${app.rgb},0.2)` }}
                    >
                        {app.icon}
                    </div>
                    <div className="flex items-center gap-2">
                        <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: `rgba(${app.rgb},0.12)`, color: `rgb(${app.rgb})` }}
                        >
                            {app.category}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/50 font-medium">
                            {app.status}
                        </span>
                    </div>
                </div>

                {/* Name + tagline */}
                <h2 className="text-white font-bold text-xl mb-1">{app.name}</h2>
                <p className="font-medium text-sm mb-2" style={{ color: `rgb(${app.rgb})` }}>{app.tagline}</p>
                <p className="text-white/45 text-sm leading-relaxed flex-1">{app.desc}</p>

                {/* CTA */}
                <div className="flex items-center gap-3 mt-5">
                    <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 hover:opacity-90"
                        style={{ background: `rgba(${app.rgb},0.15)`, color: `rgb(${app.rgb})`, border: `1px solid rgba(${app.rgb},0.25)` }}
                    >
                        Visit site <FaExternalLinkAlt className="h-3 w-3" />
                    </a>
                    {app.tools && (
                        <button
                            onClick={() => setExpanded(e => !e)}
                            className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
                        >
                            {expanded ? 'Hide' : 'View'} tools
                            <FaChevronDown className={`h-3 w-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                    )}
                </div>
            </div>

            {/* Expandable tools */}
            <AnimatePresence>
                {expanded && app.tools && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div
                            className="px-6 pb-6 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3"
                            style={{ borderTop: `1px solid rgba(${app.rgb},0.12)` }}
                        >
                            {app.tools.map(group => (
                                <div key={group.label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold text-white/70 uppercase tracking-wider">{group.label}</span>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `rgba(${app.rgb},0.12)`, color: `rgb(${app.rgb})` }}>{group.price}</span>
                                    </div>
                                    <div className="space-y-1.5">
                                        {group.items.map(item => (
                                            <div key={item} className="text-xs text-white/50 py-1 px-2 rounded-lg bg-white/[0.03]">{item}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function AppsPage() {
    return (
        <div className="fixed inset-0 overflow-auto" style={{ background: '#060912' }}>
            {/* Orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {ORBS.map((orb, i) => <Orb key={i} {...orb} />)}
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-5 py-10">
                {/* Back nav */}
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <Link
                        href="/select"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-10"
                    >
                        <FaArrowLeft className="h-3 w-3" />
                        Back to portfolio
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <FaRocket className="text-indigo-400 h-5 w-5" />
                        <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase">Products</span>
                    </div>
                    <h1
                        className="font-black tracking-tight leading-none mb-4"
                        style={{
                            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                            background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 60%, #cbd5e1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Things I&apos;ve Built
                    </h1>
                    <p className="text-white/40 text-base max-w-xl leading-relaxed">
                        Products shipping to real users — from API generators to AI content tools. All built solo, nights and weekends.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {APPS.map((app, i) => (
                        <AppCard key={app.name} app={app} index={i} />
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    className="mt-14 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <p className="text-white/20 text-xs font-mono tracking-widest uppercase">More shipping soon</p>
                </motion.div>
            </div>
        </div>
    );
}
