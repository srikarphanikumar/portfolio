'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaAngular,
    FaVuejs,
    FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const skills = [
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#1572B6" },
    { icon: FaJs, color: "#F7DF1E" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: FaAngular, color: "#DD0031" },
    { icon: FaVuejs, color: "#4FC08D" },
    { icon: SiTailwindcss, color: "#06B6D4" },
    { icon: SiNextdotjs, color: "#ffffff" },
    { icon: SiTypescript, color: "#3178C6" },
    { icon: FaNodeJs, color: "#339933" },
];

const HeroContent = () => {
    const fullName = "Srikar Phani Kumar Marti";
    const [displayedName, setDisplayedName] = useState('');

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullName.length) {
                setDisplayedName(fullName.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Faster typing speed

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-4">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-4xl md:text-6xl mb-4 text-green-300">
                    <span className="font-['Space_Mono']">{displayedName.slice(0, -5)}</span>
                    <span className="font-cursive">{displayedName.slice(-5)}</span>
                    <span className="animate-blink">|</span>
                </h1>
                <motion.p
                    className="font-['Space_Mono'] text-xl md:text-2xl mb-8 text-yellow-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Frontend Developer
                </motion.p>
                <motion.div
                    className="w-full overflow-hidden mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div
                        className="flex justify-center space-x-4 md:space-x-8"
                        animate={{
                            x: [0, -100 * skills.length],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: skills.length * 2,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="flex-shrink-0">
                                <skill.icon className="h-8 w-8 md:h-12 md:w-12" style={{ color: skill.color }} />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative inline-block"
                >
                    <Link href="/about">
                        <span className="inline-block font-['Space_Mono'] text-lg px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full relative overflow-hidden transition-all duration-300 hover:text-white group">
                            <span className="relative z-10">Learn More About Me</span>
                            <span className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                    </Link>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroContent;