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