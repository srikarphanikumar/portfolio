import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaNewspaper, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const roles = [
    'Recruiter',
    'UI Developer',
    'Backend Developer',
    'Database Developer',
    'HR Manager',
];


const jokes = {
    'Recruiter': [
        {
            setup: 'Why did the recruiter get a megaphone?',
            punchline: 'To amplify their job postings!',
        },
        {
            setup: 'How does a recruiter stay cool in the summer?',
            punchline: 'They stand next to the talent pool!',
        },
        {
            setup: 'Why did the recruiter go back to school?',
            punchline: 'To get a Master’s in candidate sourcing!',
        },
        {
            setup: 'What’s a recruiter’s favorite type of music?',
            punchline: 'Headhunter beats!',
        },
        {
            setup: 'Why do recruiters love social media?',
            punchline: 'Because they can LinkedIn with candidates!',
        },
    ],
    'UI Developer': [
        {
            setup: 'Why did the frontend developer quit his job?',
            punchline: 'He didn’t get arrays (a raise)!',
        },
        {
            setup: 'How do you comfort a JavaScript bug?',
            punchline: 'You console it!',
        },
        {
            setup: 'Why do frontend developers eat lunch alone?',
            punchline: 'Because they don’t like tables!',
        },
        {
            setup: 'What did the HTML tag say to the CSS file?',
            punchline: '"You’ve got style!"',
        },
        {
            setup: 'Why was the developer unhappy at their job?',
            punchline: 'They wanted arrays!',
        },
    ],
    'Backend Developer': [
        {
            setup: 'Why did the backend developer refuse to join the gym?',
            punchline: 'He didn’t want to deal with callbacks!',
        },
        {
            setup: 'How do backend developers greet each other?',
            punchline: '"POST Hello World!"',
        },
        {
            setup: 'Why was the server room always cold?',
            punchline: 'Because they left the Windows open!',
        },
        {
            setup: 'What do backend developers say during a race?',
            punchline: '"Ready, set, code!"',
        },
        {
            setup: 'Why do backend developers make good singers?',
            punchline: 'Because they know how to handle requests!',
        },
    ],
    'Database Developer': [
        {
            setup: 'Why did the database administrator break up with his girlfriend?',
            punchline: 'She had too many connections!',
        },
        {
            setup: 'What did the SQL query say to the database?',
            punchline: '"You fill my tables with joy!"',
        },
        {
            setup: 'Why did the database get jealous?',
            punchline: 'Because it heard the developer had a schema on the side!',
        },
        {
            setup: 'How does a database developer organize a party?',
            punchline: 'They commit to a plan and roll back if necessary!',
        },
        {
            setup: 'Why do databases make great partners?',
            punchline: 'They always ACID (assist) with transactions!',
        },
    ],
    'HR Manager': [
        {
            setup: 'Why did the HR manager bring a pencil to the meeting?',
            punchline: 'In case they needed to draw conclusions!',
        },
        {
            setup: 'How does an HR manager stay organized?',
            punchline: 'They keep everything filed away!',
        },
        {
            setup: 'Why did the HR manager visit the art gallery?',
            punchline: 'To see the employee portraits!',
        },
        {
            setup: 'What’s an HR manager’s favorite exercise?',
            punchline: 'Employee engagement!',
        },
        {
            setup: 'Why did the HR manager get a watch?',
            punchline: 'To keep track of over-time!',
        },
    ],
};

const emojis = ['😂', '🤣', '😆', '😹', '🤓', '👨‍💻', '💻', '🎉', '✨'];

const TechJokesNewspaper = () => {
    const [expandedJoke, setExpandedJoke] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const rolesPerPage = 3;

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const totalPages = Math.ceil(roles.length / rolesPerPage);
    const currentRoles = roles.slice(currentPage * rolesPerPage, (currentPage + 1) * rolesPerPage);

    const revealPunchline = (roleIndex, jokeIndex) => {
        setExpandedJoke(`${roleIndex}-${jokeIndex}`);
    };

    return (
        <div className="min-h-screen bg-[#fdf6e3] p-1 md:p-8"> {/* Solarized Light background */}
            {/* Newspaper Header */}
            <div className="bg-[#eee8d5] border-b-2 border-[#073642] mb-4 p-6 shadow-lg"> {/* Solarized Light Secondary */}
                <div className="text-center border-b-2 border-[#073642] pb-4">
                    <h1 className="font-serif text-5xl md:text-4xl font-bold mb-2 text-[#073642]">Tech Jokes Daily</h1>
                    <div className="flex items-center justify-center gap-2 text-[#657b83]">
                        <FaNewspaper />
                        <span className="text-sm">The Most Reliable Source of Tech Humor</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1 text-[#657b83]">
                        <FaCalendarAlt />
                        <span className="text-sm">{currentDate}</span>
                    </div>
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-4 mb-4">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                    disabled={currentPage === 0}
                    className={`flex items-center gap-1 px-2 py-1 rounded ${currentPage === 0
                        ? 'bg-[#eee8d5] text-[#93a1a1] cursor-not-allowed'
                        : 'bg-[#073642] text-white hover:bg-[#094252]'
                        } transition-colors`}
                >
                    <FaChevronLeft /> Previous
                </button>
                <span className="flex items-center text-[#657b83]">
                    Page {currentPage + 1} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                    disabled={currentPage === totalPages - 1}
                    className={`flex items-center gap-1 px-2 py-1 rounded ${currentPage === totalPages - 1
                        ? 'bg-[#eee8d5] text-[#93a1a1] cursor-not-allowed'
                        : 'bg-[#073642] text-white hover:bg-[#094252]'
                        } transition-colors`}
                >
                    Next <FaChevronRight />
                </button>
            </div>

            {/* Newspaper Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {currentRoles.map((role, roleIndex) => (
                    <div key={role} className="bg-[#eee8d5] p-4 border border-[#93a1a1] shadow-lg">
                        <h2 className="font-serif text-md font-bold border-b-2 border-[#073642] mb-4 pb-2 text-[#073642]">
                            {role} Times
                        </h2>
                        <div className="space-y-2">
                            {jokes[role].map((joke, jokeIndex) => (
                                <article
                                    key={jokeIndex}
                                    className="border-b border-[#93a1a1] last:border-b-0 pb-2 last:pb-0"
                                >
                                    <h3 className="font-serif text-md font-bold cursor-pointer text-[#073642] hover:text-[#268bd2] transition-colors"
                                        onClick={() => revealPunchline(roleIndex, jokeIndex)}>
                                        {joke.setup}
                                    </h3>
                                    <AnimatePresence>
                                        {expandedJoke === `${roleIndex}-${jokeIndex}` && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-[#657b83] italic">
                                                    &quot;{joke.punchline}&quot;
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <div className="flex justify-end mt-2">
                                        <button
                                            onClick={() => revealPunchline(roleIndex, jokeIndex)}
                                            className="text-sm text-[#657b83] hover:text-[#268bd2] font-serif italic transition-colors"
                                        >
                                            {expandedJoke === `${roleIndex}-${jokeIndex}` ? 'Hide' : 'Continue reading...'}
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Newspaper Footer */}
            <footer className="text-center mt-8 p-4 border-t-2 border-[#073642]">
                <p className="font-serif text-sm text-[#657b83]">
                    Tech Jokes Daily - Bringing smiles to developers since 2024
                </p>
            </footer>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
                
                .font-serif {
                    font-family: 'Playfair Display', serif;
                }
            `}</style>
        </div>
    );
};

export default TechJokesNewspaper;