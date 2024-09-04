'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAngular, FaJenkins, FaAccessibleIcon, FaAws, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiBootstrap, SiSass, SiMysql, SiTypescript, SiGit, SiRedux, SiFirebase, SiMongodb } from 'react-icons/si';
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

const SkillElement = ({ skill, index, onHover, onTouch }) => {
    if (!skill) return null;
    return (
        <motion.div
            className="w-20 h-20 m-1 rounded-lg flex flex-col items-center justify-center cursor-pointer"
            style={{ backgroundColor: skill.color + '33' }}
            whileHover={{ scale: 1.1, backgroundColor: skill.color }}
            onHoverStart={() => onHover(skill)}
            onHoverEnd={() => onHover(null)}
            onTouchStart={() => onTouch(skill)}
            onTouchEnd={() => onTouch(null)}
        >
            {skill.icon && <skill.icon className="text-2xl mb-1" style={{ color: skill.color }} />}
            <div className="text-xs font-bold text-center">{skill.name}</div>
        </motion.div>
    );
};

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInteraction = (skill) => {
        if (isMobile) {
            setHoveredSkill(prevSkill => prevSkill === skill ? null : skill);
        } else {
            setHoveredSkill(skill);
        }
    };

    const leftSkills = skills.slice(0, 7);
    const rightSkills = skills.slice(7, 14);
    const bottomSkills = skills.slice(14);

    return (
        <div className="w-full h-full flex flex-col justify-between p-2 mt-[-1]">
            <div className="flex-1 flex justify-between">
                {/* Left column */}
                <div className="w-1/4 flex flex-col justify-between items-end">
                    {leftSkills.map((skill, index) => (
                        <SkillElement key={skill.name} skill={skill} index={index} onHover={handleInteraction} onTouch={handleInteraction} />
                    ))}
                </div>

                {/* Center area */}
                <div className="w-1/2 flex items-center justify-center px-4">
                    {hoveredSkill && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full h-64 rounded-lg p-4 flex flex-col items-center justify-center"
                            style={{ backgroundColor: hoveredSkill.color }}
                        >
                            {hoveredSkill.icon && <hoveredSkill.icon className="text-6xl mb-4 text-white" />}
                            <h3 className="text-2xl font-bold mb-2 text-white">{hoveredSkill.name}</h3>
                            <p className="text-lg mb-2 text-white">Category: {hoveredSkill.category}</p>
                            <p className="text-lg text-white">Proficiency: {hoveredSkill.proficiency}%</p>
                        </motion.div>
                    )}
                </div>

                {/* Right column */}
                <div className="w-1/4 flex flex-col justify-between items-start">
                    {rightSkills.map((skill, index) => (
                        <SkillElement key={skill.name} skill={skill} index={index + 7} onHover={handleInteraction} onTouch={handleInteraction} />
                    ))}
                </div>
            </div>

            {/* Bottom row */}
            <div className="flex justify-center mt-[-4rem]">
                {bottomSkills.map((skill, index) => (
                    <SkillElement key={skill.name} skill={skill} index={index + 14} onHover={handleInteraction} onTouch={handleInteraction} />
                ))}
            </div>
        </div>
    );
};

export default Skills;