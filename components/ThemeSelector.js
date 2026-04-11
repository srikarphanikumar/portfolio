'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { GmailAnimation, MatrixRain } from './Animations';

// Fake VS Code decoration lines shown in the background of the VS Code panel
const VSCodeLines = () => (
    <div
        style={{
            position: 'absolute',
            inset: 0,
            padding: '40px 32px',
            fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
            fontSize: '12px',
            lineHeight: '20px',
            overflow: 'hidden',
            opacity: 0.35,
            pointerEvents: 'none',
            userSelect: 'none',
        }}
    >
        <div><span style={{ color: '#6a9955' }}>{'// portfolio/about.js'}</span></div>
        <div><span style={{ color: '#569cd6' }}>export</span><span style={{ color: '#d4d4d4' }}> </span><span style={{ color: '#569cd6' }}>const</span><span style={{ color: '#d4d4d4' }}> </span><span style={{ color: '#9cdcfe' }}>developer</span><span style={{ color: '#d4d4d4' }}> = {'{'}</span></div>
        <div><span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span><span style={{ color: '#9cdcfe' }}>name</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#ce9178' }}>{'"'}Srikar Phani Kumar Marti{'"'}</span><span style={{ color: '#d4d4d4' }}>,</span></div>
        <div><span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span><span style={{ color: '#9cdcfe' }}>role</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#ce9178' }}>{'"'}Senior Frontend Engineer{'"'}</span><span style={{ color: '#d4d4d4' }}>,</span></div>
        <div><span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span><span style={{ color: '#9cdcfe' }}>skills</span><span style={{ color: '#d4d4d4' }}>: [</span><span style={{ color: '#ce9178' }}>{'"'}React{'"'}</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#ce9178' }}>{'"'}Angular{'"'}</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#ce9178' }}>{'"'}TypeScript{'"'}</span><span style={{ color: '#d4d4d4' }}>],</span></div>
        <div><span style={{ color: '#d4d4d4' }}>{'};'}</span></div>
        <div style={{ marginTop: '8px' }}><span style={{ color: '#6a9955' }}>{'// portfolio/experience.js'}</span></div>
        <div><span style={{ color: '#569cd6' }}>const</span><span style={{ color: '#d4d4d4' }}> </span><span style={{ color: '#9cdcfe' }}>experience</span><span style={{ color: '#d4d4d4' }}> = [{'{'}</span></div>
        <div><span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span><span style={{ color: '#9cdcfe' }}>company</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#ce9178' }}>{'"'}Raymond James{'"'}</span><span style={{ color: '#d4d4d4' }}>,</span></div>
        <div><span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span><span style={{ color: '#9cdcfe' }}>impact</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#b5cea8' }}>40</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#6a9955' }}>{'// % faster'}</span></div>
        <div><span style={{ color: '#d4d4d4' }}>{'};]'}</span></div>
        <div style={{ marginTop: '8px' }}><span style={{ color: '#6a9955' }}>{'// portfolio/skills.js'}</span></div>
        <div><span style={{ color: '#569cd6' }}>const</span><span style={{ color: '#d4d4d4' }}> </span><span style={{ color: '#9cdcfe' }}>skills</span><span style={{ color: '#d4d4d4' }}> = {'{'}</span></div>
        <div><span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span><span style={{ color: '#9cdcfe' }}>React</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#b5cea8' }}>92</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#9cdcfe' }}>TypeScript</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#b5cea8' }}>85</span><span style={{ color: '#d4d4d4' }}>,</span></div>
        <div><span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span><span style={{ color: '#9cdcfe' }}>Angular</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#b5cea8' }}>80</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#9cdcfe' }}>Node</span><span style={{ color: '#d4d4d4' }}>: </span><span style={{ color: '#b5cea8' }}>85</span><span style={{ color: '#d4d4d4' }}>,</span></div>
        <div><span style={{ color: '#d4d4d4' }}>{'};'}</span></div>
    </div>
);

// Fake iOS app icons shown as decoration in the iOS panel
const IOSDecoration = () => {
    const fakeApps = [
        { emoji: '🏠', gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E53)' },
        { emoji: '👤', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
        { emoji: '⌨️', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
        { emoji: '💼', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
        { emoji: '📁', gradient: 'linear-gradient(135deg, #4facfe, #a18cd1)' },
        { emoji: '✉️', gradient: 'linear-gradient(135deg, #fda085, #f6d365)' },
    ];

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            opacity: 0.35,
            pointerEvents: 'none',
            userSelect: 'none',
        }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {fakeApps.map((app, i) => (
                    <div key={i} style={{
                        width: 44,
                        height: 44,
                        borderRadius: '22%',
                        background: app.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                    }}>{app.emoji}</div>
                ))}
            </div>
        </div>
    );
};

const ThemeSelector = () => {
    const router = useRouter();

    const handleThemeSelect = (theme) => {
        if (theme === 'terminal') {
            router.push('/terminal');
        } else if (theme === 'gmail') {
            router.push('/gmail');
        } else if (theme === 'ios') {
            router.push('/ios');
        } else {
            router.push('/vscode');
        }
    };

    return (
        <div className="fixed inset-0 flex flex-col w-screen h-screen overflow-hidden">
            {/* Main split area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Terminal Theme Side */}
                <motion.div
                    className="h-full bg-black relative cursor-pointer"
                    style={{ width: '25%' }}
                    whileHover={{ width: '35%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={() => handleThemeSelect('terminal')}
                >
                    <MatrixRain />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h2 className="text-green-500 text-4xl font-bold font-mono text-center px-4">
                            Terminal Inspired View
                        </h2>
                    </div>
                </motion.div>

                {/* Gmail Theme Side */}
                <motion.div
                    className="h-full relative cursor-pointer"
                    style={{ width: '25%' }}
                    whileHover={{ width: '35%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={() => handleThemeSelect('gmail')}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50" />
                    <GmailAnimation />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-gray-800 text-4xl font-bold font-mono text-center px-4">
                            Gmail Inspired View
                        </h2>
                    </div>
                </motion.div>

                {/* VS Code Theme Side */}
                <motion.div
                    className="h-full relative cursor-pointer overflow-hidden"
                    style={{ width: '25%', backgroundColor: '#1e1e1e', borderLeft: '1px solid #404040' }}
                    whileHover={{ width: '35%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={() => handleThemeSelect('vscode')}
                >
                    <VSCodeLines />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h2
                            className="text-4xl font-bold font-mono text-center px-4"
                            style={{ color: '#569cd6' }}
                        >
                            VS Code Inspired View
                        </h2>
                    </div>
                </motion.div>

                {/* iOS Theme Side */}
                <motion.div
                    className="h-full relative cursor-pointer overflow-hidden"
                    style={{ width: '25%', background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #533483)', borderLeft: '1px solid rgba(255,255,255,0.1)' }}
                    whileHover={{ width: '35%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={() => handleThemeSelect('ios')}
                >
                    <IOSDecoration />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h2
                            className="text-4xl font-bold font-mono text-center px-4"
                            style={{ color: 'white' }}
                        >
                            iOS Inspired View
                        </h2>
                    </div>
                </motion.div>
            </div>

            {/* Bottom name bar */}
            <div className="w-full h-20 flex items-center justify-center z-30 pointer-events-none" style={{ background: 'linear-gradient(to right, #1a1a2e, #16213e, #0f3460, #533483)' }}>
                <span className="font-mono font-bold text-xl tracking-[0.3em]" style={{ background: 'linear-gradient(to right, #4ade80, #60a5fa, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    SRIKAR PHANI KUMAR MARTI
                </span>
            </div>
        </div>
    );
};

export default ThemeSelector;