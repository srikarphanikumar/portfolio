'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAngular, FaJenkins, FaAccessibleIcon } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiBootstrap, SiSass, SiMysql, SiTypescript, SiGit, SiDocker, SiRedux } from 'react-icons/si';
import { MdOutlineMaterialUI } from 'react-icons/md';
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
    { name: 'Docker', icon: SiDocker, category: 'Tool', color: '#2496ED', proficiency: 75 },
    { name: 'a11y', icon: FaAccessibleIcon, category: 'Frontend', color: '#0076C0', proficiency: 82 },
    { name: 'Jenkins', icon: FaJenkins, category: 'Tool', color: '#D33833', proficiency: 78 },
    { name: 'Material UI', icon: MdOutlineMaterialUI, category: 'Styling', color: '#0081CB', proficiency: 86 },
    { name: 'ngRx', icon: TbBrandReactNative, category: 'Frontend', color: '#BA2BD2', proficiency: 79 },
    { name: 'Redux', icon: SiRedux, category: 'Frontend', color: '#764ABC', proficiency: 84 }
];

const SkillElement = ({ skill, index, onHover }) => {
    if (!skill) return null;
    return (
        <motion.div
            className="w-20 h-20 m-1 rounded-lg flex flex-col items-center justify-center cursor-pointer"
            style={{ backgroundColor: skill.color + '33' }}
            whileHover={{ scale: 1.1, backgroundColor: skill.color }}
            onHoverStart={() => onHover(skill)}
            onHoverEnd={() => onHover(null)}
        >
            {skill.icon && <skill.icon className="text-2xl mb-1" style={{ color: skill.color }} />}
            <div className="text-xs font-bold text-center">{skill.name}</div>
            {/* <div className="text-xs">{index + 1}</div> */}
        </motion.div>
    );
};

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const leftSkills = skills.slice(0, 7);
    const bottomSkills = skills.slice(7, 13);
    const rightSkills = skills.slice(13);

    return (
        <div className="w-full h-full flex flex-col justify-between p-4 mt-[-1]">
            <div className="flex-1 flex justify-between">
                {/* Left column */}
                <div className="w-1/4 flex flex-col justify-evenly items-end">
                    {leftSkills.map((skill, index) => (
                        <SkillElement key={skill.name} skill={skill} index={index} onHover={setHoveredSkill} />
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
                <div className="w-1/4 flex flex-col justify-evenly items-start">
                    {rightSkills.map((skill, index) => (
                        <SkillElement key={skill.name} skill={skill} index={index + 13} onHover={setHoveredSkill} />
                    ))}
                </div>
            </div>

            {/* Bottom row */}
            <div className="flex justify-center mt-4">
                {bottomSkills.map((skill, index) => (
                    <SkillElement key={skill.name} skill={skill} index={index + 7} onHover={setHoveredSkill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;