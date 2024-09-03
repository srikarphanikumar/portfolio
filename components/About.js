'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const skills = [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'HTML', level: 95 },
        { name: 'Node.js', level: 75 },
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-4xl font-bold mb-8 text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Srikar Phani Kumar Marti
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-300 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Passionate frontend developer with a knack for creating intuitive and engaging user experiences. My journey in web development has been driven by curiosity and a love for solving complex problems with elegant solutions.
                </motion.p>

                <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="bg-white bg-opacity-10 p-4 rounded-lg"
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -50 }
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <p className="text-white mb-2">{skill.name}</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <motion.div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 bg-white bg-opacity-10 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-white">Fun Fact</h3>
                    <p className="text-gray-300">
                        When I am not coding, you can find me [insert your hobby or interesting fact about yourself]!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;