'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const MatrixRain = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="matrix-rain animate-matrix-rain">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className="text-green-500 opacity-50 text-xl font-mono">
                        {'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('').join('\n')}
                    </div>
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
        } else {
            router.push('/gmail');
        }
    };

    return (
        <div className="fixed inset-0 flex w-screen h-screen overflow-hidden">
            {/* Terminal Theme Side */}
            <motion.div
                className="w-1/2 h-full bg-black relative cursor-pointer"
                whileHover={{ width: '55%' }}
                onClick={() => handleThemeSelect('terminal')}
            >
                <MatrixRain />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="text-green-500 text-4xl font-bold font-mono">
                        Terminal Inspired View
                    </h2>
                </div>
            </motion.div>

            {/* Gmail Theme Side */}
            <motion.div
                className="w-1/2 h-full bg-gradient-to-br from-red-100 to-red-50 relative cursor-pointer"
                whileHover={{ width: '55%' }}
                onClick={() => handleThemeSelect('gmail')}
            >
                <div className="absolute inset-0 bg-white/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-gray-800 text-4xl font-bold">
                        Gmail Inspired View
                    </h2>
                </div>
            </motion.div>

            <style jsx global>{`
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          white-space: pre;
          transform: translateY(-50%);
          user-select: none;
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(50%); }
        }
        
        .animate-matrix-rain {
          animation: matrix-rain 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default ThemeSelector;