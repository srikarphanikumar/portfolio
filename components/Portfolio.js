'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaStackOverflow, FaGithub, FaNpm, FaGamepad, FaImage, FaFileDownload, FaMedium, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NavigationCard = ({ title, content, accentColor, variant }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % content.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);
    };

    return (
        <div className={`
      w-full max-w-md mx-auto
      rounded-xl overflow-hidden
      bg-gray-900/80 backdrop-blur-md
      border border-gray-700/30
      shadow-lg
    `}>
            {/* Header */}
            <div className={`
        px-6 py-4 border-b border-gray-700/30
        ${variant === 'featured' ? 'bg-emerald-900/20' :
                    variant === 'npm' ? 'bg-rose-900/20' :
                        variant === 'article' ? 'bg-purple-900/20' :
                            'bg-gray-800/40'}
      `}>
                <h2 className={`
          text-xl font-bold
          ${variant === 'featured' ? 'text-emerald-400' :
                        variant === 'npm' ? 'text-rose-400' :
                            variant === 'article' ? 'text-purple-400' :
                                'text-gray-400'}
        `}>
                    {title}
                </h2>
            </div>

            {/* Content */}
            <div className="relative h-[150px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="absolute inset-0 p-6"
                    >
                        <div className="flex items-start space-x-4">
                            <div className={`text-2xl
                ${variant === 'featured' ? 'text-emerald-400' :
                                    variant === 'npm' ? 'text-rose-400' :
                                        variant === 'article' ? 'text-purple-400' :
                                            'text-gray-400'}
              `}>
                                {content[currentIndex].icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {content[currentIndex].title}
                                </h3>
                                <p className="text-sm text-gray-400 mt-2">
                                    {content[currentIndex].description}
                                </p>
                                <a
                                    href={content[currentIndex].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    inline-flex items-center space-x-2 mt-4
                    ${variant === 'featured' ? 'text-emerald-400 hover:text-emerald-300' :
                                            variant === 'npm' ? 'text-rose-400 hover:text-rose-300' :
                                                variant === 'article' ? 'text-purple-400 hover:text-purple-300' :
                                                    'text-gray-400 hover:text-gray-300'}
                    transition-colors duration-300
                  `}
                                >
                                    <span>{content[currentIndex].hyperLinkTitle}</span>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 3h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="px-6 py-4 border-t border-gray-700/30 flex justify-between items-center">
                <button
                    onClick={handlePrev}
                    className={`
            p-2 rounded-lg transition-colors duration-300
            ${variant === 'featured' ? 'hover:bg-emerald-900/20' :
                            variant === 'npm' ? 'hover:bg-rose-900/20' :
                                variant === 'article' ? 'hover:bg-purple-900/20' :
                                    'hover:bg-gray-800/40'}
          `}
                >
                    <FaChevronLeft className={`
            ${variant === 'featured' ? 'text-emerald-400' :
                            variant === 'npm' ? 'text-rose-400' :
                                variant === 'article' ? 'text-purple-400' :
                                    'text-gray-400'}
          `} />
                </button>
                <span className="text-sm text-gray-400">
                    {currentIndex + 1} / {content.length}
                </span>
                <button
                    onClick={handleNext}
                    className={`
            p-2 rounded-lg transition-colors duration-300
            ${variant === 'featured' ? 'hover:bg-emerald-900/20' :
                            variant === 'npm' ? 'hover:bg-rose-900/20' :
                                variant === 'article' ? 'hover:bg-purple-900/20' :
                                    'hover:bg-gray-800/40'}
          `}
                >
                    <FaChevronRight className={`
            ${variant === 'featured' ? 'text-emerald-400' :
                            variant === 'npm' ? 'text-rose-400' :
                                variant === 'article' ? 'text-purple-400' :
                                    'text-gray-400'}
          `} />
                </button>
            </div>
        </div>
    );
};

const Portfolio = () => {

    const professionalProfiles = [
        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            description: "Connect with me professionally",
            link: "https://www.linkedin.com/in/mspkumar",
            hyperLinkTitle: 'Connect with me!',
            variant: 'featured'
        },
        {
            icon: <FaStackOverflow />,
            title: "Stack Overflow",
            description: "Check out my contributions",
            link: "https://stackoverflow.com/users/15034752",
            hyperLinkTitle: 'Connect with me!',
            variant: 'featured'
        },
        {
            icon: <FaGithub />,
            title: "GitHub",
            description: "Explore my open-source projects",
            link: "https://github.com/srikarphanikumar",
            hyperLinkTitle: 'Connect with me!',
            variant: 'featured'
        },
        {
            icon: <FaMedium />,
            title: "Medium",
            description: "Read my technical articles and tutorials",
            link: "https://medium.com/@srikar.vamsi",
            hyperLinkTitle: 'Follow me!',
            variant: 'featured'
        }
    ];

    const npmPackages = [
        {
            icon: <FaNpm />,
            title: "typescript-utilitys",
            description: "TypeScript utilities",
            link: "https://www.npmjs.com/package/typescript-utilitys",
            hyperLinkTitle: 'View Package',
            variant: 'npm'
        },
        {
            icon: <FaNpm />,
            title: "scss-utilitys",
            description: "SCSS utilities",
            link: "https://www.npmjs.com/package/scss-utilitys",
            hyperLinkTitle: 'View Package',
            variant: 'npm'
        },
        {
            icon: <FaNpm />,
            title: "@poly-kit/number-utils",
            description: "Number utilities for JavaScript, TypeScript, React and Angular",
            link: "https://www.npmjs.com/package/@poly-kit/number-utils",
            hyperLinkTitle: 'View Package',
            variant: 'npm'
        },
        {
            icon: <FaNpm />,
            title: "@parsekit/string-to-boolean",
            description: "Convert strings to boolean values with extensive options",
            link: "https://www.npmjs.com/package/@parsekit/string-to-boolean",
            hyperLinkTitle: 'View Package',
            variant: 'npm'
        },
        {
            icon: <FaNpm />,
            title: "zapid",
            description: "Generate unique, random IDs with built-in safety measures",
            link: "https://www.npmjs.com/package/zapid",
            hyperLinkTitle: 'View Package',
            variant: 'npm'
        }
    ];

    const articles = [
        {
            icon: <FaMedium />,
            title: "Top 20 1-Liners in TypeScript",
            description: "TypeScript one-liners to make your life 10x more productive",
            link: "https://medium.com/@srikar.vamsi/top-20-1-liners-in-typescript-to-make-your-life-10x-more-productive-b4d1fa7a2164",
            hyperLinkTitle: 'Read Article',
            variant: 'article'
        },
        {
            icon: <FaMedium />,
            title: "String to Boolean Conversion Guide",
            description: "Converting strings to booleans made easy with parsekit/string-to-boolean",
            link: "https://medium.com/@srikar.vamsi/converting-strings-to-booleans-made-easy-with-parsekit-string-to-boolean-2aa227f9e7a5",
            hyperLinkTitle: 'Read Article',
            variant: 'article'
        },
        {
            icon: <FaMedium />,
            title: "Supercharge Apps with poly-kit/number-utils",
            description: "Enhance your applications with powerful number utilities",
            link: "https://medium.com/@srikar.vamsi/supercharge-your-apps-with-poly-kit-number-utils-884ae0b04a1e",
            hyperLinkTitle: 'Read Article',
            variant: 'article'
        },
        {
            icon: <FaMedium />,
            title: "Zapid: ID Generation Reinvented",
            description: "ID generation with crypto-grade security",
            link: "https://medium.com/@srikar.vamsi/zapid-id-generation-reinvented-with-crypto-grade-security-a55ef6481f87",
            hyperLinkTitle: 'Read Article',
            variant: 'article'
        }
    ];

    const projects = [
        {
            icon: <FaGamepad />,
            title: "Snake Game",
            description: "A classic game reimagined",
            link: "https://snake-game-five-gamma.vercel.app/",
            hyperLinkTitle: 'Play the game',
            variant: 'default'
        },
        {
            icon: <FaImage />,
            title: "Image Enhancer",
            description: "TensorFlow-powered image processing",
            link: "https://image-enhancer-blush.vercel.app/",
            hyperLinkTitle: 'View Project',
            variant: 'default'
        }
    ];

    const sections = [
        {
            title: 'Professional Profiles',
            content: professionalProfiles,
            variant: 'featured'
        },
        {
            title: 'NPM Packages',
            content: npmPackages,
            variant: 'npm'
        },
        {
            title: 'Articles',
            content: articles,
            variant: 'article'
        },
        {
            title: 'Projects',
            content: projects,
            variant: 'default'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 py-10 px-4 -mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <NavigationCard
                            key={index}
                            title={section.title}
                            content={section.content}
                            variant={section.variant}
                        />
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <a
                        href="/Srikar-Phani-Kumar-M-Resume.pdf"
                        download
                        className="
              inline-flex items-center px-6 py-3 
              bg-emerald-600 hover:bg-emerald-700 
              text-white text-lg font-medium rounded-xl 
              transition-colors duration-300
              shadow-lg hover:shadow-xl
            "
                    >
                        <FaFileDownload className="mr-2" />
                        Download Resume
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;