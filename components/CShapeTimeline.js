'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        id: 1,
        company: 'Raymond James Financial',
        role: 'Sr Engineer Apps Development',
        period: 'Oct 2023 – Current',
        description: 'Led a team of 5 developers to redesign the company website, improving load times by 40%. Developed reusable components in Angular, enhancing development efficiency by 25%. Mentored junior engineers, providing guidance and support in their career development.',
        achievements: ['40% improvement in load times', '25% increase in development efficiency'],
        skills: ['Angular', 'Team Leadership', 'Performance Optimization'],
        icon: '⚓',
    },
    {
        id: 2,
        company: 'Deloitte',
        role: 'Project Delivery Specialist',
        period: 'Jan 2022 – Oct 2023',
        description: 'Accelerated API response time by 50% in 2 weeks by implementing caching and optimizing queries. Oversaw HTML to Angular Material & Ag-grid migration, implementing best practices and accessibility standards which resulted in improved navigation & 50% web traffic boost in 6 months. Resolved critical production issues with a turnaround time of less than 24 hours, maintaining a 99.9% uptime.',
        achievements: ['50% faster API response time', '50% increase in web traffic', '99.9% uptime'],
        skills: ['Angular Material', 'API Optimization', 'Accessibility', 'Issue Resolution'],
        icon: '🗺️',
    },
    {
        id: 3,
        company: 'Virtusa',
        role: 'Senior Frontend Developer',
        period: 'Nov 2019 – Dec 2021',
        description: 'Developed and integrated a comprehensive component library, boosting reusability and efficiency across multiple applications. Improved application accessibility compliance by implementing WCAG 2.0 standards, resulting in a 20% increase in user accessibility. Increased user engagement by 20% by implementing interactive UI elements with Angular.',
        achievements: ['Boosted reusability with component library', '20% increase in user accessibility', '20% increase in user engagement'],
        skills: ['Angular', 'Component Libraries', 'Accessibility', 'UI/UX'],
        icon: '🏝️',
    },
    {
        id: 4,
        company: 'Exadata Inc',
        role: 'Frontend Developer (Angular)',
        period: 'Dec 2018 – Nov 2019',
        description: 'Implemented SSO to streamline user experience and increase efficiency in data entry processes. Coordinated with the UX team to redesign the user interface, resulting in a 25% decrease in user errors and a 15% increase in user engagement. Managed a 95% uptime for all web applications through robust backend integration.',
        achievements: ['25% decrease in user errors', '15% increase in user engagement', '95% uptime'],
        skills: ['Angular', 'SSO Implementation', 'UI/UX', 'Backend Integration'],
        icon: '🧭',
    },
    {
        id: 5,
        company: 'Exadata Inc',
        role: 'Frontend Developer (ReactJS)',
        period: 'Jun 2018 – Dec 2018',
        description: 'Improved app accessibility compliance by implementing WCAG 2.0 standards within 1 month, resulting in a 20% increase in user accessibility. Completed integration of a third-party analytics app in 2 weeks, providing insights that led to a 15% increase in conversion rates.',
        achievements: ['20% increase in user accessibility', '15% increase in conversion rates'],
        skills: ['ReactJS', 'Accessibility', 'Third-Party Integrations'],
        icon: '⚔️',
    },
    {
        id: 6,
        company: 'University of New Haven',
        role: 'Teaching Assistant',
        period: 'Aug 2016 – May 2018',
        description: 'Assisted professors in teaching, grading assignments, and providing support to students in understanding complex mathematical concepts.',
        achievements: ['Improved student outcomes', 'Sparked interest in mathematics'],
        skills: ['Calculus', 'Algebra', 'Trigonometry'],
        icon: '📜',
    },
];

/* ── Compass Rose SVG ── */
function CompassRose() {
    return (
        <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
            <circle cx="60" cy="60" r="58" fill="none" stroke="#92723a" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="48" fill="none" stroke="#92723a" strokeWidth="0.8" strokeDasharray="4 3" />
            {/* Cardinal spikes */}
            {[0, 90, 180, 270].map((deg, i) => {
                const r = deg * Math.PI / 180;
                const tip = { x: 60 + Math.sin(r) * 50, y: 60 - Math.cos(r) * 50 };
                const lft = { x: 60 + Math.sin(r - Math.PI / 2) * 10, y: 60 - Math.cos(r - Math.PI / 2) * 10 };
                const rgt = { x: 60 + Math.sin(r + Math.PI / 2) * 10, y: 60 - Math.cos(r + Math.PI / 2) * 10 };
                return (
                    <polygon key={deg}
                        points={`${tip.x},${tip.y} ${lft.x},${lft.y} ${rgt.x},${rgt.y}`}
                        fill={i === 0 ? '#c0392b' : '#d4a855'}
                        stroke="#92723a" strokeWidth="0.8"
                    />
                );
            })}
            {/* Intercardinal spikes */}
            {[45, 135, 225, 315].map((deg) => {
                const r = deg * Math.PI / 180;
                const tip = { x: 60 + Math.sin(r) * 35, y: 60 - Math.cos(r) * 35 };
                const lft = { x: 60 + Math.sin(r - Math.PI / 2) * 7, y: 60 - Math.cos(r - Math.PI / 2) * 7 };
                const rgt = { x: 60 + Math.sin(r + Math.PI / 2) * 7, y: 60 - Math.cos(r + Math.PI / 2) * 7 };
                return (
                    <polygon key={deg}
                        points={`${tip.x},${tip.y} ${lft.x},${lft.y} ${rgt.x},${rgt.y}`}
                        fill="#c9a84c" stroke="#92723a" strokeWidth="0.8"
                    />
                );
            })}
            <circle cx="60" cy="60" r="8" fill="#f0e4c4" stroke="#92723a" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="3" fill="#92723a" />
            {/* Labels */}
            {[['N', 60, 10], ['S', 60, 114], ['W', 6, 64], ['E', 114, 64]].map(([l, x, y]) => (
                <text key={l} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
                    fontSize="11" fontWeight="bold" fontFamily="serif" fill="#5c3a1a">{l}</text>
            ))}
        </svg>
    );
}

/* ── X marker ── */
function XMark({ active }) {
    return (
        <svg viewBox="0 0 32 32" className="w-8 h-8 flex-shrink-0" aria-hidden="true">
            <line x1="4" y1="4" x2="28" y2="28" stroke={active ? '#8B0000' : '#6b4c1e'} strokeWidth="4" strokeLinecap="round" />
            <line x1="28" y1="4" x2="4" y2="28" stroke={active ? '#8B0000' : '#6b4c1e'} strokeWidth="4" strokeLinecap="round" />
        </svg>
    );
}

/* ── Dashed path connecting stops ── */
function TreasurePath({ count }) {
    // Simple S-shaped dashed vertical path on the left column
    const h = 100 / (count - 1);
    const points = Array.from({ length: count }, (_, i) => {
        const y = 8 + i * h * 0.84;
        const x = i % 2 === 0 ? 30 : 70;
        return `${x},${y}`;
    }).join(' ');

    return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <polyline points={points}
                fill="none" stroke="#92723a" strokeWidth="1.5"
                strokeDasharray="5 4" strokeLinecap="round" strokeLinejoin="round"
            />
            {Array.from({ length: count }, (_, i) => {
                const y = 8 + i * h * 0.84;
                const x = i % 2 === 0 ? 30 : 70;
                return <circle key={i} cx={x} cy={y} r="2.5" fill="#92723a" />;
            })}
        </svg>
    );
}

export default function CShapeTimeline() {
    const [selected, setSelected] = useState(experiences[0].id);
    const active = experiences.find(e => e.id === selected);

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-start py-6 px-3 overflow-auto"
            style={{ background: 'linear-gradient(135deg,#1a1008 0%,#0d0a04 100%)' }}
        >
            {/* Parchment card */}
            <div
                className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                style={{
                    background: 'linear-gradient(160deg,#f5e9c8 0%,#e8d4a0 40%,#dbc88a 100%)',
                    border: '4px solid #92723a',
                    boxShadow: '0 0 0 8px #5c3a1a, 0 20px 60px rgba(0,0,0,0.8)',
                    minHeight: '80vh',
                }}
            >
                {/* Aged texture overlay */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'multiply',
                    }}
                />

                {/* Header banner */}
                <div className="relative z-10 text-center py-5 border-b-2 border-dashed"
                    style={{ borderColor: '#92723a' }}>
                    <p className="text-xs tracking-[0.4em] uppercase font-serif" style={{ color: '#92723a' }}>
                        ✦ The Chronicles of ✦
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold font-serif mt-1" style={{ color: '#3d1f00' }}>
                        Srikar&apos;s Adventure Map
                    </h1>
                    <p className="text-xs tracking-widest mt-1 font-serif italic" style={{ color: '#7a5c2e' }}>
                        — A Career Expedition, Charted —
                    </p>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row flex-1 gap-0">

                    {/* ── Left: Stop list ── */}
                    <div className="relative md:w-72 flex-shrink-0 border-r-2 border-dashed overflow-y-auto"
                        style={{ borderColor: '#92723a', maxHeight: '70vh' }}>
                        <TreasurePath count={experiences.length} />

                        <ul role="list" className="relative z-10 p-4 space-y-3 list-none m-0">
                            {experiences.map((exp, i) => {
                                const isActive = selected === exp.id;
                                return (
                                    <li key={exp.id}>
                                        <button
                                            onClick={() => setSelected(exp.id)}
                                            aria-pressed={isActive}
                                            aria-label={`View ${exp.company} – ${exp.role}`}
                                            className="w-full text-left focus:outline-none focus:ring-2 focus:ring-amber-700 rounded-lg"
                                        >
                                            <motion.div
                                                animate={{
                                                    backgroundColor: isActive ? 'rgba(139,69,19,0.15)' : 'rgba(146,114,58,0.06)',
                                                    borderColor: isActive ? '#8B4513' : 'rgba(146,114,58,0.3)',
                                                    scale: isActive ? 1.02 : 1,
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="flex items-center gap-3 p-3 rounded-lg border-2"
                                            >
                                                <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
                                                    {isActive
                                                        ? <XMark active />
                                                        : <span className="text-xl leading-none">{exp.icon}</span>
                                                    }
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-bold text-sm leading-tight truncate"
                                                        style={{ color: isActive ? '#3d1f00' : '#5c3a1a', fontFamily: 'Georgia, serif' }}>
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-xs mt-0.5" style={{ color: isActive ? '#7a3b00' : '#92723a' }}>
                                                        {exp.period}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Compass Rose */}
                        <div className="sticky bottom-3 flex justify-center pointer-events-none">
                            <div className="w-20 h-20 opacity-70">
                                <CompassRose />
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Detail scroll ── */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-8" style={{ maxHeight: '70vh' }}>
                        <AnimatePresence mode="wait">
                            {active && (
                                <motion.article
                                    key={active.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    aria-label={`Details for ${active.company}`}
                                >
                                    {/* Scroll header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <span className="text-5xl flex-shrink-0" aria-hidden="true">{active.icon}</span>
                                        <div>
                                            <h2 className="text-2xl font-bold font-serif leading-tight"
                                                style={{ color: '#3d1f00' }}>
                                                {active.company}
                                            </h2>
                                            <p className="text-base font-semibold font-serif mt-0.5"
                                                style={{ color: '#8B4513' }}>
                                                {active.role}
                                            </p>
                                            <p className="text-sm italic mt-0.5"
                                                style={{ color: '#92723a', fontFamily: 'Georgia, serif' }}>
                                                {active.period}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: '#c4a46b' }} />
                                        <span style={{ color: '#92723a' }}>✦</span>
                                        <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: '#c4a46b' }} />
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-2 mb-6 list-none p-0">
                                        {active.description.split('.').filter(s => s.trim()).map((s, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1 flex-shrink-0" style={{ color: '#92723a' }}>›</span>
                                                <span className="text-sm leading-relaxed"
                                                    style={{ color: '#3d1f00', fontFamily: 'Georgia, serif' }}>
                                                    {s.trim()}.
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Achievements */}
                                    <div className="mb-5 p-4 rounded-lg border-2 border-dashed"
                                        style={{ borderColor: '#c4a46b', background: 'rgba(139,69,19,0.07)' }}>
                                        <h3 className="text-xs uppercase tracking-widest font-bold mb-3"
                                            style={{ color: '#8B0000', fontFamily: 'Georgia, serif' }}>
                                            ☠ Treasures Claimed
                                        </h3>
                                        <ul className="space-y-1.5 list-none p-0">
                                            {active.achievements.map((a, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm"
                                                    style={{ color: '#3d1f00', fontFamily: 'Georgia, serif' }}>
                                                    <XMark active />
                                                    {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h3 className="text-xs uppercase tracking-widest font-bold mb-3"
                                            style={{ color: '#5c3a1a', fontFamily: 'Georgia, serif' }}>
                                            ⚔ Tools of the Trade
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {active.skills.map((sk, i) => (
                                                <span key={i}
                                                    className="px-3 py-1 rounded-full text-xs font-semibold border"
                                                    style={{
                                                        background: 'rgba(92,58,26,0.12)',
                                                        borderColor: '#92723a',
                                                        color: '#3d1f00',
                                                        fontFamily: 'Georgia, serif',
                                                    }}>
                                                    {sk}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 text-center py-3 border-t-2 border-dashed"
                    style={{ borderColor: '#92723a' }}>
                    <p className="text-xs italic font-serif" style={{ color: '#92723a' }}>
                        ✦ Here be dragons… and great code ✦
                    </p>
                </div>

                {/* Corner decorations */}
                {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} pointer-events-none`} aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-40">
                            <path d="M2 2 L10 2 L2 10 Z" fill="#92723a" />
                            <path d="M22 2 L14 2 L22 10 Z" fill="#92723a" />
                            <path d="M2 22 L10 22 L2 14 Z" fill="#92723a" />
                            <path d="M22 22 L14 22 L22 14 Z" fill="#92723a" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}
