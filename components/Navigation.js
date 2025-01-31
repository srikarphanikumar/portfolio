'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope, FaFolder, FaArrowLeft } from 'react-icons/fa';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navItems = [
        { name: 'Home', path: '/terminal', icon: FaHome },
        { name: 'About', path: '/terminal/about', icon: FaUser },
        { name: 'Skills', path: '/terminal/skills', icon: FaCogs },
        { name: 'Experience', path: '/terminal/projects', icon: FaBriefcase },
        { name: 'Projects', path: '/terminal/portfolio', icon: FaFolder },
        { name: 'Contact', path: '/terminal/contact', icon: FaEnvelope }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg">
            <nav className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between md:justify-center">
                    {/* Theme Switcher Button - Always visible */}
                    <Link href="/">
                        <motion.span
                            className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-300 mr-4 md:absolute md:left-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaArrowLeft className="h-4 w-4 mr-2" />
                            <span className="text-sm">Theme Switcher</span>
                        </motion.span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            className="text-green-300 p-2"
                            onClick={() => setIsOpen(!isOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {(!isMobile || isOpen) && (
                        <motion.ul
                            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 bg-gray-900 md:bg-transparent p-4 md:p-0"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.li key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link href={item.path}>
                                        <motion.span
                                            className="flex flex-col items-center text-green-300 hover:text-green-100 transition-colors duration-300"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <span className="sr-only">{item.name}</span>
                                            <item.icon className="h-6 w-6" />
                                            <span className="text-xs mt-1">{item.name}</span>
                                        </motion.span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navigation;