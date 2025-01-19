'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAngular,
    FaAws, FaDocker, FaJenkins, FaAccessibleIcon,
} from 'react-icons/fa';
import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiGit, SiMongodb,
    SiBootstrap, SiSass, SiMysql, SiRedux, SiFirebase
} from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbBrandReactNative } from 'react-icons/tb';

const skills = [
    { name: 'HTML', icon: FaHtml5, category: 'Frontend', color: '#E34F26', proficiency: 90 },
    { name: 'CSS', icon: FaCss3Alt, category: 'Frontend', color: '#1572B6', proficiency: 85 },
    { name: 'JavaScript', icon: FaJs, category: 'Frontend', color: '#F7DF1E', proficiency: 88 },
    { name: 'React', icon: FaReact, category: 'Frontend', color: '#61DAFB', proficiency: 92 },
    { name: 'Angular', icon: FaAngular, category: 'Frontend', color: '#DD0031', proficiency: 80 },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#000000', proficiency: 78 },
    { name: 'Node.js', icon: FaNodeJs, category: 'Backend', color: '#339933', proficiency: 85 },
    { name: 'SQL', icon: SiMysql, category: 'Backend', color: '#4479A1', proficiency: 82 },
    { name: 'Tailwind', icon: SiTailwindcss, category: 'Styling', color: '#38B2AC', proficiency: 88 },
    { name: 'Bootstrap', icon: SiBootstrap, category: 'Styling', color: '#7952B3', proficiency: 85 },
    { name: 'SASS', icon: SiSass, category: 'Styling', color: '#CC6699', proficiency: 80 },
    { name: 'TypeScript', icon: SiTypescript, category: 'Language', color: '#3178C6', proficiency: 85 },
    { name: 'Git', icon: SiGit, category: 'Tool', color: '#F05032', proficiency: 88 },
    { name: 'Docker', icon: FaDocker, category: 'Tool', color: '#2496ED', proficiency: 75 },
    { name: 'a11y', icon: FaAccessibleIcon, category: 'Frontend', color: '#0076C0', proficiency: 82 },
    { name: 'Jenkins', icon: FaJenkins, category: 'Tool', color: '#D33833', proficiency: 78 },
    { name: 'UI/UX', icon: MdOutlineDesignServices, category: 'Design', color: '#0081CB', proficiency: 86 },
    { name: 'React Native', icon: TbBrandReactNative, category: 'Mobile', color: '#61DAFB', proficiency: 79 },
    { name: 'Redux', icon: SiRedux, category: 'Frontend', color: '#764ABC', proficiency: 84 },
    { name: 'AWS', icon: FaAws, category: 'Cloud', color: '#FF9900', proficiency: 75 },
    { name: 'Firebase', icon: SiFirebase, category: 'Backend', color: '#FFCA28', proficiency: 80 },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: '#47A248', proficiency: 78 },
];

const SkillPath = () => {
    const radius = 300; // Radius of the circular path

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center -mt-20">
            {/* <h1 className="absolute top-10 text-white text-4xl font-bold">My Skills</h1> */}
            <motion.div
                className="relative w-[800px] h-[800px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {skills.map((skill, index) => {
                    // Distribute skills along the circle
                    const angle = (index / skills.length) * Math.PI * 2;
                    const x = Math.cos(angle) * radius + 400; // Centered at (400, 400)
                    const y = Math.sin(angle) * radius + 400;

                    return (
                        <motion.div
                            key={skill.name}
                            className="absolute flex flex-col items-center"
                            style={{ left: `${x}px`, top: `${y}px` }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <skill.icon
                                className="text-4xl mb-2"
                                style={{ color: skill.color }}
                            />
                            <motion.span
                                className="text-sm text-white font-semibold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {skill.name}
                            </motion.span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default SkillPath;
