'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const skills = [
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#1572B6" },
    { icon: FaJs, color: "#F7DF1E" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: FaAngular, color: "#DD0031" },
    { icon: FaVuejs, color: "#4FC08D" },
    { icon: SiTailwindcss, color: "#06B6D4" },
    { icon: SiNextdotjs, color: "#000000" },
    { icon: SiTypescript, color: "#3178C6" },
    { icon: FaNodeJs, color: "#339933" },
];

const HeroContent = () => {
    return (
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h1
                className="text-4xl md:text-6xl mb-4 text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="font-mono">Srikar Phani Kumar </span>
                <span className="font-cursive">Marti</span>
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl mb-8 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Frontend Developer
            </motion.p>
            <motion.div
                className="flex overflow-hidden mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <motion.div
                    className="flex space-x-8 items-center"
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
                            <skill.icon className="h-12 w-12" style={{ color: skill.color }} />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Link href="/about">
                    <span className="inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105">
                        Learn More About Me
                    </span>
                </Link>
            </motion.div>
        </div>
    );
};

export default HeroContent;