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
        <div className="fixed inset-0 flex w-screen h-screen overflow-hidden">
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

            {/* Center Divider with Name */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full z-30 flex items-center justify-center pointer-events-none">
                {/* Gradient line behind text */}
                <div className="absolute w-px h-full bg-gradient-to-b from-green-400 via-gray-500 to-gray-700 opacity-60" />
                {/* Name text */}
                <div
                    style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', letterSpacing: '0.2em' }}
                    className="font-mono font-bold text-lg select-none relative z-10 drop-shadow-lg"
                >
                    <span className="text-green-400" style={{ textShadow: '0 0 12px rgba(74,222,128,0.8)' }}>SRIKAR PHANI </span>
                    <span className="text-gray-700" style={{ textShadow: '0 0 12px rgba(180,180,180,0.4)' }}>KUMAR MARTI</span>
                </div>
            </div>

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
    );
};

export default ThemeSelector;