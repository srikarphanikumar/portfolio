'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    const helpContent = {
        type: 'success',
        content: {
            heading: 'Available Commands',
            content: [
                { cmd: 'help', desc: 'Show this help message' },
                { cmd: 'about', desc: 'Learn about me' },
                { cmd: 'skills', desc: 'View technical skills' },
                { cmd: 'projects', desc: 'See major projects' },
                { cmd: 'contact', desc: 'Get contact info' },
                { cmd: 'clear', desc: 'Clear terminal' },
                { cmd: 'coffee', desc: 'Get caffeinated ☕️' },
                { cmd: 'weather', desc: 'Check my mood' },
                { cmd: 'cat', desc: 'Meet ASCII cat' },
                { cmd: 'sudo', desc: 'Try your luck 😉' }
            ],
            footer: 'Tip: Use Tab for autocompletion and arrow keys for command history!'
        }
    };

    const commands = {
        help: {
            description: 'List all available commands',
            execute: () => ({
                output: {
                    heading: 'Available Commands',
                    content: [
                        { cmd: 'help', desc: 'Show this help message' },
                        { cmd: 'about', desc: 'Learn about me' },
                        { cmd: 'skills', desc: 'View technical skills' },
                        { cmd: 'projects', desc: 'See major projects' },
                        { cmd: 'contact', desc: 'Get contact info' },
                        { cmd: 'clear', desc: 'Clear terminal' },
                        { cmd: 'coffee', desc: 'Get caffeinated ☕️' },
                        { cmd: 'weather', desc: 'Check my mood' },
                        { cmd: 'cat', desc: 'Meet ASCII cat' },
                        { cmd: 'sudo', desc: 'Try your luck 😉' }
                    ],
                    footer: 'Tip: Use Tab for autocompletion and arrow keys for command history!'
                },
                type: 'success'
            })
        },
        about: {
            description: 'Learn about me',
            execute: () => ({
                output: {
                    heading: 'About Me',
                    content: [
                        { label: 'Name', value: 'Srikar Phani Kumar Marti' },
                        { label: 'Role', value: 'Frontend Developer' },
                        { label: 'Education', value: 'MS, MBA' },
                        { label: 'Location', value: 'US (Originally India)' },
                        { label: 'Passion', value: 'Creating elegant apps' }
                    ],
                    footer: "Type 'about --detailed' for more info"
                },
                type: 'success'
            })
        },
        skills: {
            description: 'View technical skills',
            execute: () => ({
                output: {
                    heading: 'Technical Skills',
                    content: [
                        { category: 'Frontend', skills: ['Angular', 'React.js', 'Next.js', 'TypeScript', 'Tailwind'] },
                        { category: 'Backend', skills: ['Node.js', 'Python', 'Java'] },
                        { category: 'Database', skills: ['MongoDB', 'SQL'] },
                        { category: 'Other', skills: ['Git', 'Docker', 'AWS', 'REST APIs'] }
                    ],
                    footer: "Type 'skills --level' for expertise"
                },
                type: 'success'
            })
        },
        projects: {
            description: 'See major projects',
            execute: () => ({
                output: {
                    heading: 'Featured Projects',
                    content: [
                        {
                            project: 'typescript-utilitys',
                            details: ['NPM Package for TypeScript Utilities']
                        },
                        {
                            project: 'scss-utilitys',
                            details: ['NPM Package for SASS Utilities']
                        },
                        {
                            project: '@parsekit',
                            details: ['NPM Package for Converting String type Boolean values to actual Boolean']
                        },
                        {
                            project: '@poly-kit',
                            details: ['A single NPM number utils package for Angular/React/JS/TS']
                        },
                        {
                            project: 'zapid',
                            details: ['A Zero Dependency Random ID Generator']
                        }
                    ],
                    footer: "Type 'projects --detailed' for more info"
                },
                type: 'success'
            })
        },
        contact: {
            description: 'Get contact information',
            execute: () => ({
                output: {
                    heading: 'Contact Info',
                    content: [
                        { label: 'Email', value: 'srikar.vamsi@gmail.com' },
                        { label: 'LinkedIn', value: 'linkedin.com/in/mspkumar' },
                        { label: 'GitHub', value: 'github.com/srikarphanikumar' },
                        { label: 'Website', value: 'mspke.me' }
                    ]
                },
                type: 'success'
            })
        },
        weather: {
            description: 'Check mood weather',
            execute: () => ({
                output: {
                    heading: 'Mood Forecast',
                    content: [
                        { label: 'Temperature', value: 'Hot for coding 🔥' },
                        { label: 'Condition', value: 'Raining ideas 🌧' },
                        { label: 'Wind', value: 'Blowing away bugs 🌪' },
                        { label: 'Visibility', value: 'Clear vision ✨' }
                    ]
                },
                type: 'success'
            })
        },
        coffee: {
            description: 'Get coffee',
            execute: () => ({
                output: {
                    heading: 'Coffee Break',
                    content: [
                        { value: '☕️ Brewing your coffee...' },
                        { value: '[====================] 100%' },
                        { value: 'Energy +100! Ready to code! ⚡️' }
                    ]
                },
                type: 'success'
            })
        },
        cat: {
            description: 'Show ASCII cat',
            execute: () => ({
                output: {
                    heading: 'Debug Cat',
                    content: [
                        { value: '/\\___/\\' },
                        { value: '(  o o  )' },
                        { value: '(  =^=  )' },
                        { value: ' (--m--)' },
                        { value: 'Meow! Need help? 🐱' }
                    ]
                },
                type: 'success'
            })
        },
        clear: {
            description: 'Clear the terminal',
            execute: () => {
                setHistory([
                    {
                        type: 'success',
                        content: {
                            heading: 'Welcome',
                            content: [{ value: "Welcome to my interactive terminal! 👋 Type 'help' to see available commands." }]
                        }
                    },
                    helpContent
                ]);
                return { output: '', type: 'clear' };
            }
        },
        sudo: {
            description: 'Try to get admin access',
            execute: () => ({
                output: {
                    heading: 'Access Denied',
                    content: [
                        { value: 'Nice try! But no sudo here! 😄' },
                        { value: 'Permission denied (too awesome)' }
                    ]
                },
                type: 'error'
            })
        }
    };

    const getAutoComplete = (partial) => {
        if (!partial) return '';
        const matches = Object.keys(commands).filter(cmd => cmd.startsWith(partial));
        return matches.length === 1 ? matches[0] : '';
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const completion = getAutoComplete(input);
            if (completion) setInput(completion);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    const executeCommand = (cmd) => {
        const [command, ...args] = cmd.trim().split(' ');
        const commandObj = commands[command];

        if (commandObj) {
            return commandObj.execute(args);
        } else {
            return {
                output: `Command not found: ${command}. Type 'help' for available commands.`,
                type: 'error'
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const result = executeCommand(input);

        if (result.type !== 'clear') {
            setHistory(prev => [...prev,
            { type: 'input', content: input },
            { type: result.type, content: result.output }
            ]);
        }

        setCommandHistory(prev => [...prev, input]);
        setInput('');
        setHistoryIndex(-1);
    };

    const renderCommandOutput = (entry) => {
        if (entry.type === 'input') {
            return (
                <div className="flex">
                    <span className="text-[#A6E3A1]">➜</span>
                    <span className="text-[#89B4FA] mx-2">~</span>
                    <span>{entry.content}</span>
                </div>
            );
        }

        if (typeof entry.content === 'string') {
            return <div className={entry.type === 'error' ? 'text-[#F38BA8]' : 'text-[#CDD6F4]'}>{entry.content}</div>;
        }

        const output = entry.content;
        return (
            <div className="my-2">
                <div className="border border-dashed border-white/20">
                    {output.heading && (
                        <div className="border-b border-dashed border-white/40 px-4 py-2">
                            {output.heading}
                        </div>
                    )}
                    <div className="px-4 py-2 space-y-1">
                        {output.content.map((item, index) => {
                            if (item.cmd) {
                                return (
                                    <div key={index} className="flex">
                                        <span className="w-20">{item.cmd}</span>
                                        <span className="text-white/60 mx-2">| |</span>
                                        <span>{item.desc}</span>
                                    </div>
                                );
                            }
                            if (item.category) {
                                return (
                                    <div key={index} className="flex">
                                        <span className="w-20">{item.category}</span>
                                        <span className="text-white/60 mx-2">| |</span>
                                        <span>{item.skills.join(', ')}</span>
                                    </div>
                                );
                            }
                            if (item.project) {
                                return (
                                    <div key={index} className="space-y-1">
                                        <div className="flex">
                                            <span className="w-40">{item.project}</span>
                                            <span className="text-white/60 mx-2">| |</span>
                                            <span>{item.details.join(' | ')}</span>
                                        </div>
                                    </div>
                                );
                            }
                            if (item.label) {
                                return (
                                    <div key={index} className="flex">
                                        <span className="w-20">{item.label}</span>
                                        <span className="text-white/60 mx-2">| |</span>
                                        <span>{item.value}</span>
                                    </div>
                                );
                            }
                            return (
                                <div key={index} className="flex">
                                    <span>{item.value}</span>
                                </div>
                            );
                        })}
                    </div>
                    {output.footer && (
                        <div className="border-t border-dashed border-white/40 px-4 py-2 text-sm text-white/60">
                            {output.footer}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        setHistory([{
            type: 'success',
            content: {
                heading: 'Welcome',
                content: [{ value: "Welcome to my interactive terminal! 👋 Type 'help' to see available commands." }]
            }
        }]);
    }, []);

    return (
        <div className="bg-[#fdf6e3] p-4 rounded-lg shadow-2xl w-full max-w-4xl mx-auto h-[80vh] flex flex-col">
            <div className="flex items-center mb-4 bg-[#181825] p-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[#F38BA8] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#FAB387] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#A6E3A1]"></div>
            </div>

            <div
                ref={terminalRef}
                className="flex-1 overflow-auto font-mono text-sm text-[#CDD6F4] mb-4 p-2 bg-[#181825] rounded-lg"
            >
                {history.map((entry, index) => (
                    <div key={index} className="mb-2">
                        {renderCommandOutput(entry)}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center bg-[#181825] p-2 rounded-lg">
                <span className="text-[#A6E3A1]">➜</span>
                <span className="text-[#89B4FA] mx-2">~</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-[#CDD6F4] font-mono"
                    autoFocus
                />
            </form>
        </div>
    );
};

export default About;