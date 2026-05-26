'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const THEMES = [
    {
        id: 'terminal',
        name: 'Terminal',
        desc: 'Matrix-style developer terminal',
        icon: '>_',
        mono: true,
        rgb: '34,197,94',
        path: '/terminal',
    },
    {
        id: 'gmail',
        name: 'Gmail',
        desc: 'Inbox-style portfolio layout',
        icon: '✉',
        mono: false,
        rgb: '239,68,68',
        path: '/gmail',
    },
    {
        id: 'vscode',
        name: 'VS Code',
        desc: 'Code editor aesthetic',
        icon: '{ }',
        mono: true,
        rgb: '59,130,246',
        path: '/vscode',
    },
    {
        id: 'ios',
        name: 'iOS',
        desc: 'Clean mobile app experience',
        icon: '⊞',
        mono: false,
        rgb: '168,85,247',
        path: '/ios',
    },
];

const ORBS = [
    { color: 'rgba(99,102,241,0.55)',  size: 520, x: '8%',  y: '2%',  dur: 14, delay: 0   },
    { color: 'rgba(168,85,247,0.45)',  size: 420, x: '62%', y: '55%', dur: 17, delay: 2   },
    { color: 'rgba(34,197,94,0.32)',   size: 360, x: '72%', y: '0%',  dur: 20, delay: 1   },
    { color: 'rgba(236,72,153,0.35)',  size: 310, x: '0%',  y: '62%', dur: 15, delay: 3   },
    { color: 'rgba(59,130,246,0.38)',  size: 460, x: '30%', y: '25%', dur: 22, delay: 0.5 },
];

function Orb({ color, size, x, y, dur, delay }) {
    return (
        <motion.div
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                background: color,
                filter: 'blur(90px)',
                left: x,
                top: y,
                pointerEvents: 'none',
            }}
            animate={{
                x: [0, 28, -18, 12, 0],
                y: [0, -22, 28, -10, 0],
                scale: [1, 1.08, 0.94, 1.04, 1],
            }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
        />
    );
}

function ThemeCard({ theme, index, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -10, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex flex-col items-center gap-5 w-full cursor-pointer rounded-2xl p-7 text-center outline-none"
            style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 48px rgba(${theme.rgb},0.3), 0 12px 40px rgba(0,0,0,0.5)`;
                e.currentTarget.style.borderColor = `rgba(${theme.rgb},0.4)`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
        >
            {/* Icon box */}
            <div
                className="flex items-center justify-center rounded-2xl"
                style={{
                    width: 68,
                    height: 68,
                    background: `rgba(${theme.rgb},0.12)`,
                    border: `1px solid rgba(${theme.rgb},0.28)`,
                    fontSize: theme.mono ? 22 : 30,
                    color: `rgb(${theme.rgb})`,
                    fontFamily: theme.mono ? "'Fira Code', 'Cascadia Code', monospace" : 'inherit',
                    fontWeight: 700,
                    boxShadow: `0 0 20px rgba(${theme.rgb},0.15)`,
                }}
            >
                {theme.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5">
                <span
                    className="font-bold text-lg text-white"
                    style={{ textShadow: `0 0 20px rgba(${theme.rgb},0.4)` }}
                >
                    {theme.name}
                </span>
                <span className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.65)' }}>
                    {theme.desc}
                </span>
            </div>

            {/* Pill */}
            <div
                className="text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full"
                style={{
                    background: `rgba(${theme.rgb},0.1)`,
                    border: `1px solid rgba(${theme.rgb},0.22)`,
                    color: `rgb(${theme.rgb})`,
                }}
            >
                EXPLORE →
            </div>
        </motion.button>
    );
}

const ThemeSelector = () => {
    const router = useRouter();

    return (
        <div
            className="fixed inset-0 flex flex-col overflow-hidden"
            style={{ background: '#060912' }}
        >
            {/* Animated orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {ORBS.map((orb, i) => <Orb key={i} {...orb} />)}
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 py-12 gap-12">

                {/* Hero */}
                <motion.div
                    className="flex flex-col items-center gap-3 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1
                        className="font-black tracking-widest leading-tight"
                        style={{
                            fontSize: 'clamp(1.6rem, 4.5vw, 3.5rem)',
                            fontFamily: 'monospace',
                            background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 45%, #cbd5e1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        SRIKAR PHANI KUMAR MARTI
                    </h1>
                    <p className="text-slate-400 font-medium" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', letterSpacing: '0.06em' }}>
                        Senior Frontend Engineer
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                        <div className="h-px w-10 bg-white/10" />
                        <p className="text-slate-500 text-xs tracking-[0.2em] uppercase">
                            Choose your experience
                        </p>
                        <div className="h-px w-10 bg-white/10" />
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full max-w-5xl">
                    {THEMES.map((theme, i) => (
                        <ThemeCard
                            key={theme.id}
                            theme={theme}
                            index={i}
                            onClick={() => router.push(theme.path)}
                        />
                    ))}
                </div>
            </div>

            {/* Footer bar */}
            <div
                className="relative z-10 flex items-center justify-center h-14 shrink-0"
                style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                }}
            >
                <span
                    className="font-mono font-bold text-xs tracking-[0.28em]"
                    style={{
                        background: 'linear-gradient(to right, #4ade80, #60a5fa, #e879f9)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    SRIKAR PHANI KUMAR MARTI
                </span>
            </div>
        </div>
    );
};

export default ThemeSelector;
