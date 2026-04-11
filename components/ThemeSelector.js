'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { GmailAnimation, MatrixRain } from './Animations';

const ThemeSelector = () => {
    const router = useRouter();

    const handleThemeSelect = (theme) => {
        if (theme === 'terminal') {
            router.push('/terminal');
        } else {
            router.push('/gmail');
        }
    };

    return (
        <div className="fixed inset-0 flex flex-col w-screen h-screen overflow-hidden">
            {/* Main split area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Terminal Theme Side */}
                <motion.div
                    className="w-1/2 h-full bg-black relative cursor-pointer"
                    whileHover={{ width: '50%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={() => handleThemeSelect('terminal')}
                >
                    <MatrixRain />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h2 className="text-green-500 text-5xl font-bold font-mono">
                            Terminal Inspired View
                        </h2>
                    </div>
                </motion.div>

                {/* Gmail Theme Side */}
                <motion.div
                    className="w-1/2 h-full relative cursor-pointer"
                    whileHover={{ width: '50%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={() => handleThemeSelect('gmail')}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50" />
                    <GmailAnimation />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-gray-800 text-5xl font-bold font-mono">
                            Gmail Inspired View
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