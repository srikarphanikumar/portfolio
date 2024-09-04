'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaStackOverflow, FaGithub, FaNpm, FaGamepad, FaImage, FaFileDownload } from 'react-icons/fa';

const PortfolioItem = ({
    icon, title, description, link, hyperLinkTitle
}) => (
    <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <motion.div
            className="text-4xl mb-4 text-green-400"
            initial={{ rotateY: 0 }}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
        >
            {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors duration-300"
        >
            {hyperLinkTitle}
        </a>
    </motion.div>
);

const Portfolio = () => {
    const portfolioItems = [
        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            description: "Connect with me professionally",
            link: "https://www.linkedin.com/in/mspkumar",
            hyperLinkTitle: 'Connect with me!'
        },
        {
            icon: <FaStackOverflow />,
            title: "Stack Overflow",
            description: "Check out my contributions",
            link: "https://stackoverflow.com/users/15034752",
            hyperLinkTitle: 'Connect with me!'
        },
        {
            icon: <FaGithub />,
            title: "GitHub",
            description: "Explore my open-source projects",
            link: "https://github.com/srikarphanikumar",
            hyperLinkTitle: 'Connect with me!'
        },
        {
            icon: <FaNpm />,
            title: "typescript-utilitys",
            description: "TypeScript utilities",
            link: "https://www.npmjs.com/package/typescript-utilitys",
            hyperLinkTitle: 'View Project'
        },
        {
            icon: <FaNpm />,
            title: "scss-utilitys",
            description: "ScSS utilities",
            link: "https://www.npmjs.com/package/scss-utilitys",
            hyperLinkTitle: 'View Project'
        },
        {
            icon: <FaGamepad />,
            title: "Snake Game",
            description: "A classic game reimagined",
            link: "https://snake-game-five-gamma.vercel.app/",
            hyperLinkTitle: 'Play the game'
        },
        {
            icon: <FaImage />,
            title: "Image Enhancer",
            description: "TensorFlow-powered image processing",
            link: "https://image-enhancer-blush.vercel.app/",
            hyperLinkTitle: 'View Project'
        }
    ];

    return (
        <motion.div
            className="min-h-screen bg-gray-900 text-white py-10 px-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                >
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} {...item} />
                    ))}
                </motion.div>
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href="../public/Srikar-Phani-Kumar-M.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
                    >
                        <FaFileDownload className="mr-2" />
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Portfolio;