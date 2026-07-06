'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        id: 1,
        company: 'Raymond James Financial',
        role: 'Sr Engineer Apps Development',
        period: 'Oct 2023 – Current',
        description: 'Led a team of 5 developers to redesign the company website, improving load times by 40%. Developed reusable components in Angular, enhancing development efficiency by 25%. Mentored junior engineers in their career development.',
        achievements: ['40% improvement in load times', '25% increase in development efficiency'],
        skills: ['Angular', 'Team Leadership', 'Performance Optimization'],
        // position on the 800×600 SVG canvas
        cx: 155, cy: 105,
        label: 'Raymond James',
        icon: '⚓',
    },
    {
        id: 2,
        company: 'Deloitte',
        role: 'Project Delivery Specialist',
        period: 'Jan 2022 – Oct 2023',
        description: 'Accelerated API response time by 50% in 2 weeks via caching and query optimisation. Oversaw Angular Material & Ag-Grid migration, boosting web traffic 50% in 6 months. Maintained 99.9% uptime.',
        achievements: ['50% faster API response', '50% web traffic boost', '99.9% uptime'],
        skills: ['Angular Material', 'API Optimisation', 'Accessibility'],
        cx: 390, cy: 175,
        label: 'Deloitte',
        icon: '🗺️',
    },
    {
        id: 3,
        company: 'Virtusa',
        role: 'Senior Frontend Developer',
        period: 'Nov 2019 – Dec 2021',
        description: 'Built a comprehensive component library boosting reusability across apps. Raised accessibility compliance (WCAG 2.0), increasing user accessibility and engagement by 20%.',
        achievements: ['Component library across multiple apps', '20% accessibility uplift', '20% engagement uplift'],
        skills: ['Angular', 'Component Libraries', 'WCAG 2.0', 'UI/UX'],
        cx: 600, cy: 110,
        label: 'Virtusa',
        icon: '🏝️',
    },
    {
        id: 4,
        company: 'Exadata Inc (Angular)',
        role: 'Frontend Developer',
        period: 'Dec 2018 – Nov 2019',
        description: 'Implemented SSO to streamline UX and data-entry. Redesigned UI with the UX team — 25% fewer errors, 15% more engagement. Sustained 95% uptime.',
        achievements: ['25% fewer user errors', '15% engagement increase', '95% uptime'],
        skills: ['Angular', 'SSO', 'UI/UX', 'Backend Integration'],
        cx: 530, cy: 360,
        label: 'Exadata (Angular)',
        icon: '🧭',
    },
    {
        id: 5,
        company: 'Exadata Inc (React)',
        role: 'Frontend Developer',
        period: 'Jun 2018 – Dec 2018',
        description: 'Shipped WCAG 2.0 compliance within 1 month (+20% accessibility). Integrated third-party analytics in 2 weeks, driving a 15% conversion uplift.',
        achievements: ['20% accessibility increase', '15% conversion uplift'],
        skills: ['ReactJS', 'Accessibility', 'Third-Party Integrations'],
        cx: 270, cy: 390,
        label: 'Exadata (React)',
        icon: '⚔️',
    },
    {
        id: 6,
        company: 'University of New Haven',
        role: 'Teaching Assistant',
        period: 'Aug 2016 – May 2018',
        description: 'Assisted professors, graded assignments, and supported students in mastering Calculus, Algebra and Trigonometry.',
        achievements: ['Improved student outcomes', 'Sparked interest in mathematics'],
        skills: ['Calculus', 'Algebra', 'Trigonometry'],
        cx: 100, cy: 330,
        label: 'UNew Haven',
        icon: '📜',
    },
];

// Dashed path through all stops in order
const pathD = experiences.map((e, i) => `${i === 0 ? 'M' : 'L'} ${e.cx} ${e.cy}`).join(' ');

function CompassRose({ x, y, size = 70 }) {
    const s = size / 2;
    return (
        <g transform={`translate(${x},${y})`} aria-hidden="true">
            <circle r={s} fill="#e8d090" stroke="#8a6520" strokeWidth="1.5" opacity="0.9" />
            <circle r={s * 0.82} fill="none" stroke="#8a6520" strokeWidth="0.6" strokeDasharray="3 2" />
            {[0, 90, 180, 270].map((deg, i) => {
                const r = deg * Math.PI / 180;
                const tx = Math.sin(r) * s * 0.85, ty = -Math.cos(r) * s * 0.85;
                const lx = Math.sin(r - Math.PI / 2) * s * 0.18, ly = -Math.cos(r - Math.PI / 2) * s * 0.18;
                const rx = Math.sin(r + Math.PI / 2) * s * 0.18, ry = -Math.cos(r + Math.PI / 2) * s * 0.18;
                return <polygon key={deg} points={`${tx},${ty} ${lx},${ly} ${rx},${ry}`}
                    fill={i === 0 ? '#9b2335' : '#c9942a'} stroke="#7a4e10" strokeWidth="0.6" />;
            })}
            {[45, 135, 225, 315].map(deg => {
                const r = deg * Math.PI / 180;
                const tx = Math.sin(r) * s * 0.58, ty = -Math.cos(r) * s * 0.58;
                const lx = Math.sin(r - Math.PI / 2) * s * 0.12, ly = -Math.cos(r - Math.PI / 2) * s * 0.12;
                const rx = Math.sin(r + Math.PI / 2) * s * 0.12, ry = -Math.cos(r + Math.PI / 2) * s * 0.12;
                return <polygon key={deg} points={`${tx},${ty} ${lx},${ly} ${rx},${ry}`}
                    fill="#c9942a" stroke="#7a4e10" strokeWidth="0.5" />;
            })}
            <circle r={s * 0.14} fill="#f5e4b0" stroke="#7a4e10" strokeWidth="1" />
            <circle r={s * 0.05} fill="#7a4e10" />
            {[['N', 0, -s * 0.92], ['S', 0, s * 0.97], ['W', -s * 0.96, 0], ['E', s * 0.96, 0]].map(([l, lx, ly]) => (
                <text key={l} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
                    fontSize={s * 0.28} fontWeight="bold" fontFamily="Georgia,serif" fill="#3d1f00">{l}</text>
            ))}
        </g>
    );
}

function Island({ x, y, r = 28 }) {
    return (
        <g transform={`translate(${x},${y})`} aria-hidden="true">
            <ellipse rx={r} ry={r * 0.55} fill="#c9a84c" stroke="#8a6520" strokeWidth="1" opacity="0.7" />
            <ellipse rx={r * 0.6} ry={r * 0.35} cy={-2} fill="#b8973e" opacity="0.6" />
            {/* palm trunk */}
            <line x1="0" y1="-3" x2="-4" y2={-r * 0.7} stroke="#7a5c2e" strokeWidth="2" />
            <line x1="0" y1="-3" x2="3" y2={-r * 0.65} stroke="#7a5c2e" strokeWidth="1.5" />
            {/* fronds */}
            {[[-18, -r * 0.85], [4, -r * 0.9], [-8, -r * 1.05]].map(([fx, fy], i) => (
                <line key={i} x1="-3" y1={-r * 0.7} x2={fx} y2={fy}
                    stroke="#3a7a2a" strokeWidth="2" strokeLinecap="round" />
            ))}
        </g>
    );
}

function Wave({ x, y, w = 30 }) {
    return (
        <g transform={`translate(${x},${y})`} aria-hidden="true" opacity="0.45">
            <path d={`M0 0 Q${w * 0.25} ${-6} ${w * 0.5} 0 Q${w * 0.75} 6 ${w} 0`}
                fill="none" stroke="#5a7fa8" strokeWidth="1.8" strokeLinecap="round" />
            <path d={`M0 6 Q${w * 0.25} 0 ${w * 0.5} 6 Q${w * 0.75} 12 ${w} 6`}
                fill="none" stroke="#5a7fa8" strokeWidth="1.2" strokeLinecap="round" />
        </g>
    );
}

function Mountain({ x, y, h = 38, w = 28 }) {
    return (
        <g transform={`translate(${x},${y})`} aria-hidden="true" opacity="0.55">
            <polygon points={`0,0 ${-w * 0.6},${h} ${w * 0.6},${h}`}
                fill="#9b8060" stroke="#7a5c30" strokeWidth="1" />
            <polygon points={`0,0 ${-w * 0.2},${h * 0.35} ${w * 0.2},${h * 0.35}`}
                fill="#e8dcc8" />
            <polygon points={`${w * 0.3},${h * 0.2} ${w * 0.05},${h * 0.55} ${w * 0.55},${h * 0.55}`}
                fill="#8a7050" stroke="#7a5c30" strokeWidth="0.8" />
        </g>
    );
}

function XMarker({ exp, active, onClick }) {
    const size = 14;
    return (
        <g
            transform={`translate(${exp.cx},${exp.cy})`}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-label={`${exp.company} – click for details`}
            aria-pressed={active}
        >
            {/* Pulse ring when active */}
            {active && (
                <motion.circle r={22} fill="none" stroke="#8B0000" strokeWidth="1.5"
                    initial={{ r: 14, opacity: 1 }} animate={{ r: 26, opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                />
            )}
            {/* Ground circle */}
            <circle r={18} fill={active ? '#f5e4b0' : '#e8d090'}
                stroke={active ? '#8B0000' : '#8a6520'} strokeWidth={active ? 2 : 1.5} opacity="0.92" />
            {/* X mark */}
            <line x1={-size * 0.55} y1={-size * 0.55} x2={size * 0.55} y2={size * 0.55}
                stroke={active ? '#8B0000' : '#6b3a10'} strokeWidth={active ? 3.5 : 2.5} strokeLinecap="round" />
            <line x1={size * 0.55} y1={-size * 0.55} x2={-size * 0.55} y2={size * 0.55}
                stroke={active ? '#8B0000' : '#6b3a10'} strokeWidth={active ? 3.5 : 2.5} strokeLinecap="round" />
            {/* Label */}
            <text y={30} textAnchor="middle" fontSize="8.5" fontFamily="Georgia,serif"
                fontWeight="bold" fill="#3d1f00" stroke="#f5e4b0" strokeWidth="2.5" paintOrder="stroke">
                {exp.label}
            </text>
            <text y={30} textAnchor="middle" fontSize="8.5" fontFamily="Georgia,serif"
                fontWeight="bold" fill="#3d1f00">
                {exp.label}
            </text>
        </g>
    );
}

export default function CShapeTimeline() {
    const [selected, setSelected] = useState(null);
    const active = experiences.find(e => e.id === selected);
    const svgRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e) => {
            if (svgRef.current && !svgRef.current.contains(e.target)) setSelected(null);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const toggle = (id) => setSelected(prev => prev === id ? null : id);

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-6 px-2 overflow-auto"
            style={{ background: 'linear-gradient(135deg,#1a1008 0%,#0d0a04 100%)' }}>

            {/* Outer frame */}
            <div className="relative w-full max-w-5xl"
                style={{ boxShadow: '0 0 0 6px #5c3a1a, 0 0 0 10px #3d1f00, 0 24px 64px rgba(0,0,0,0.85)', borderRadius: 12 }}>

                {/* Parchment SVG map */}
                <svg
                    ref={svgRef}
                    viewBox="0 0 800 550"
                    className="w-full h-auto block rounded-xl"
                    style={{ background: 'linear-gradient(155deg,#f2e5b8 0%,#e4cb88 35%,#d6b96a 70%,#c9a84c 100%)' }}
                    aria-label="Career experience map — click an X marker to read details"
                    role="img"
                >
                    {/* Aged noise overlay */}
                    <defs>
                        <filter id="paper">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
                            <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
                            <feBlend in="SourceGraphic" in2="grey" mode="multiply" result="blend" />
                            <feComponentTransfer in="blend">
                                <feFuncA type="linear" slope="0.85" />
                            </feComponentTransfer>
                        </filter>
                        <filter id="worn">
                            <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="5" result="t" seed="8" />
                            <feDisplacementMap in="SourceGraphic" in2="t" scale="4" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                    </defs>

                    {/* Torn edge effect */}
                    <rect x="0" y="0" width="800" height="550" fill="none"
                        stroke="#b8973e" strokeWidth="10" rx="10" />
                    <rect x="6" y="6" width="788" height="538" fill="none"
                        stroke="#92723a" strokeWidth="1.5" strokeDasharray="8 5" rx="8" />

                    {/* Decorative corner flourishes */}
                    {[[14, 14, 0], [786, 14, 90], [786, 536, 180], [14, 536, 270]].map(([cx, cy, rot], i) => (
                        <g key={i} transform={`translate(${cx},${cy}) rotate(${rot})`} aria-hidden="true" opacity="0.6">
                            <path d="M0 0 L28 0 L0 28 Z" fill="#92723a" />
                            <path d="M6 0 L22 0 L0 22 L0 6 Z" fill="#f2e5b8" />
                        </g>
                    ))}

                    {/* Title banner */}
                    <rect x="220" y="14" width="360" height="48" rx="6"
                        fill="#c9a84c" stroke="#8a6520" strokeWidth="1.5" opacity="0.6" />
                    <text x="400" y="32" textAnchor="middle" fontFamily="Georgia,serif"
                        fontSize="9" letterSpacing="4" fill="#5c3a1a" opacity="0.9">
                        ✦ THE CHRONICLES OF ✦
                    </text>
                    <text x="400" y="52" textAnchor="middle" fontFamily="Georgia,serif"
                        fontSize="20" fontWeight="bold" fill="#3d1f00">
                        Srikar&apos;s Adventure Map
                    </text>

                    {/* Decorative waves scattered */}
                    {[[480, 290], [560, 440], [350, 460], [650, 320], [80, 200], [700, 230], [460, 510], [170, 470]].map(([x, y], i) => (
                        <Wave key={i} x={x} y={y} w={i % 2 === 0 ? 36 : 26} />
                    ))}

                    {/* Mountains top-right */}
                    <Mountain x={680} y={60} h={55} w={40} />
                    <Mountain x={715} y={72} h={42} w={30} />
                    <Mountain x={650} y={75} h={38} w={28} />

                    {/* Mountains bottom-left */}
                    <Mountain x={60} y={400} h={45} w={34} />
                    <Mountain x={95} y={415} h={35} w={26} />

                    {/* Decorative islands (not markers) */}
                    <Island x={450} y={470} r={22} />
                    <Island x={720} y={390} r={18} />
                    <Island x={310} y={500} r={16} />

                    {/* Ship — bottom right */}
                    <g transform="translate(670,440)" aria-hidden="true" opacity="0.65">
                        <rect x="-28" y="10" width="56" height="14" rx="6" fill="#7a5c30" stroke="#5c3a18" strokeWidth="1" />
                        <line x1="0" y1="10" x2="0" y2="-28" stroke="#5c3a18" strokeWidth="2" />
                        <polygon points="0,-26 28,-10 0,-2" fill="#f5e4b0" stroke="#8a6520" strokeWidth="0.8" opacity="0.85" />
                        <polygon points="0,-12 18,0 0,4" fill="#e8d090" stroke="#8a6520" strokeWidth="0.6" opacity="0.8" />
                        <polygon points="-2,-26 -20,-14 -2,-8" fill="#f5e4b0" stroke="#8a6520" strokeWidth="0.6" opacity="0.7" />
                    </g>

                    {/* Compass rose */}
                    <CompassRose x={105} y={195} size={72} />

                    {/* Dashed path connecting markers */}
                    <path d={pathD} fill="none" stroke="#7a5c30" strokeWidth="2"
                        strokeDasharray="8 5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"
                        filter="url(#worn)" />

                    {/* X markers */}
                    {experiences.map(exp => (
                        <XMarker key={exp.id} exp={exp}
                            active={selected === exp.id}
                            onClick={() => toggle(exp.id)} />
                    ))}

                    {/* Subtle instruction */}
                    <text x="400" y="538" textAnchor="middle" fontFamily="Georgia,serif" fontSize="8.5"
                        fill="#7a5c30" fontStyle="italic" opacity="0.8">
                        ✦ Click an X to uncover the tale ✦
                    </text>
                </svg>

                {/* Floating detail scroll */}
                <AnimatePresence>
                    {active && (
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, scale: 0.88, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.88, y: 12 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="absolute inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[520px] z-30 rounded-2xl overflow-hidden"
                            style={{
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                left: '50%',
                                background: 'linear-gradient(155deg,#f8f0d4 0%,#eddfa6 100%)',
                                border: '3px solid #8a6520',
                                boxShadow: '0 0 0 5px #5c3a1a, 0 20px 50px rgba(0,0,0,0.75)',
                            }}
                            role="dialog"
                            aria-modal="true"
                            aria-label={`Details for ${active.company}`}
                        >
                            {/* Scroll top curl */}
                            <div className="h-3 w-full" style={{ background: 'linear-gradient(#c9a84c,#e8d090)' }} aria-hidden="true" />

                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-4xl flex-shrink-0" aria-hidden="true">{active.icon}</span>
                                        <div>
                                            <h2 className="text-xl font-bold leading-tight"
                                                style={{ color: '#3d1f00', fontFamily: 'Georgia,serif' }}>
                                                {active.company}
                                            </h2>
                                            <p className="text-sm font-semibold mt-0.5"
                                                style={{ color: '#8B4513', fontFamily: 'Georgia,serif' }}>
                                                {active.role}
                                            </p>
                                            <p className="text-xs italic mt-0.5"
                                                style={{ color: '#92723a', fontFamily: 'Georgia,serif' }}>
                                                {active.period}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelected(null)}
                                        aria-label="Close details"
                                        className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-amber-700"
                                        style={{ background: 'rgba(92,58,26,0.15)', color: '#5c3a1a' }}
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-2 mb-4" aria-hidden="true">
                                    <div className="flex-1 border-t border-dashed" style={{ borderColor: '#c4a46b' }} />
                                    <span style={{ color: '#92723a', fontSize: 12 }}>✦</span>
                                    <div className="flex-1 border-t border-dashed" style={{ borderColor: '#c4a46b' }} />
                                </div>

                                {/* Description */}
                                <ul className="space-y-1.5 mb-4 list-none p-0">
                                    {active.description.split('.').filter(s => s.trim()).map((s, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm"
                                            style={{ color: '#3d1f00', fontFamily: 'Georgia,serif', lineHeight: 1.55 }}>
                                            <span style={{ color: '#92723a', flexShrink: 0 }}>›</span>
                                            {s.trim()}.
                                        </li>
                                    ))}
                                </ul>

                                {/* Achievements */}
                                <div className="mb-4 p-3 rounded-lg border border-dashed"
                                    style={{ borderColor: '#c4a46b', background: 'rgba(139,69,19,0.07)' }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{ color: '#8B0000', fontFamily: 'Georgia,serif' }}>
                                        ☠ Treasures Claimed
                                    </p>
                                    <ul className="space-y-1 list-none p-0">
                                        {active.achievements.map((a, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs"
                                                style={{ color: '#3d1f00', fontFamily: 'Georgia,serif' }}>
                                                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                                                    <line x1="2" y1="2" x2="14" y2="14" stroke="#8B0000" strokeWidth="2.5" strokeLinecap="round" />
                                                    <line x1="14" y1="2" x2="2" y2="14" stroke="#8B0000" strokeWidth="2.5" strokeLinecap="round" />
                                                </svg>
                                                {a}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skills */}
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{ color: '#5c3a1a', fontFamily: 'Georgia,serif' }}>
                                        ⚔ Tools of the Trade
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {active.skills.map((sk, i) => (
                                            <span key={i} className="px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                                                style={{ background: 'rgba(92,58,26,0.1)', borderColor: '#92723a', color: '#3d1f00', fontFamily: 'Georgia,serif' }}>
                                                {sk}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Scroll bottom curl */}
                            <div className="h-3 w-full" style={{ background: 'linear-gradient(#e8d090,#c9a84c)' }} aria-hidden="true" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
