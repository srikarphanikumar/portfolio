'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInfoCircle, FaBolt, FaSearch, FaStar } from 'react-icons/fa';

const menuItems = [
    { id: 'emojis', title: 'My Life in Emojis', icon: FaInfoCircle },
    { id: 'superpowers', title: 'My Superpower Wishlist', icon: FaBolt },
    { id: 'search', title: 'My Search History', icon: FaSearch },
    { id: 'talents', title: 'Useless Talents Showcase', icon: FaStar },
];

const emojiData = [
    { emoji: '👶', text: 'Wish me \'Happy Birthday\' on: Sep 30' },
    { emoji: '🎓', text: 'MS - 2018, MBA - 2023' },
    { emoji: '💻', text: 'Working for the next 10-20 years... help!' },
    { emoji: '🌍', text: 'India to US' },
    { emoji: '🍕', text: 'Cuisines tried: \n 🇺🇸 American, 🇲🇽 Mexican, 🇮🇳 Indian (favorite), 🇮🇹 Italian (second fav), 🇹🇭 Thai, 🇯🇵 Japanese, 🇨🇳 Chinese, 🇻🇳 Vietnamese' },
];

const contentData = {
    superpowers: [
        "Time travel (but only to relive embarrassing moments)",
        "Teleportation (exclusively to places I've forgotten something)",
        "Mind reading (of pets only)",
        "Invisible (but only when no one is looking)",
        "Flying (limited to 3 feet off the ground)",
    ],
    search: [
        "how to look busy while doing nothing",
        "is it normal to talk to houseplants",
        "why does my code work when I don't touch it",
        "how many pizzas is too many pizzas",
        "can cats see ghosts",
    ],
    talents: [
        "Ability to find the end of tape rolls in record time",
        "Expert at guessing the exact amount of leftover food that fits in a container",
        "Can name all Pokemon from memory (but only the original 151)",
        "Uncanny talent for selecting the slowest checkout line",
        "Professional bubble wrap popper",
    ],
};

const EmojiItem = ({ emoji, text, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center w-full mb-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
        >
            <div className="flex-shrink-0">
                <span className="text-8xl">{emoji}</span>
            </div>
            <motion.div
                className={`relative mx-8 p-6 bg-white text-gray-800 rounded-3xl ${isEven ? 'ml-12' : 'mr-12'}`}
                style={{
                    clipPath: isEven
                        ? 'polygon(0% 0%, 100% 0%, 100% 100%, 20px 100%, 0% 50%, 20px 0%)'
                        : 'polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%, 0% 0%)',
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
                <p className="text-lg font-semibold">{text}</p>
            </motion.div>
        </motion.div>
    );
};
const About = () => {
    const [activeSection, setActiveSection] = useState(menuItems[0].id);
    const [hoveredItem, setHoveredItem] = useState(null);

    const renderContent = () => {
        switch (activeSection) {
            case 'emojis':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-start justify-start w-full"
                    >
                        {emojiData.map((item, index) => (
                            <EmojiItem key={index} emoji={item.emoji} text={item.text} index={index} />
                        ))}
                    </motion.div>
                );
            case 'superpowers':
            case 'talents':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {contentData[activeSection].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`py-6 px-16 rounded-lg shadow-lg flex flex-col items-center justify-center text-center h-full ${activeSection === 'superpowers'
                                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                                    : 'bg-gradient-to-r from-green-400 to-blue-500'
                                    }`}
                            >
                                {activeSection === 'superpowers' ? (
                                    <FaBolt className="text-yellow-300 text-4xl mb-4" />
                                ) : (
                                    <FaStar className="text-yellow-300 text-4xl mb-4" />
                                )}
                                <p className="text-lg">{item}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'search':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gray-100 w-full p-4 flex items-center">
                                <FaSearch className="text-gray-600 mr-2 text-xl" />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-0.5 h-6 bg-gray-600 text-gray-600 flex"
                                />
                            </div>
                            <ul className="py-4 w-full">
                                {contentData[activeSection].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-6 py-4 hover:bg-gray-100 cursor-pointer text-gray-800 text-lg border-b border-gray-200 last:border-b-0"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[90%] p-8 flex grow"
            >
                <div className="bg-gray-900 rounded-lg shadow-xl p-6 h-full overflow-auto">
                    {renderContent()}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[10%] bg-gray-900 shadow-lg p-6 flex flex-col items-end justify-center"
            >
                {menuItems.map((item) => (
                    <motion.button
                        key={item.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => setActiveSection(item.id)}
                        className={`relative flex items-center justify-center w-10 h-10 mb-6 rounded-full ${activeSection === item.id ? 'bg-blue-500' : 'bg-gray-700'
                            }`}
                    >
                        <item.icon className="text-lg" />
                        <AnimatePresence>
                            {hoveredItem === item.id && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: -5 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="absolute right-full mr-2 whitespace-nowrap bg-gray-700 px-2 py-1 rounded text-xs"
                                >
                                    {item.title}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};

export default About;