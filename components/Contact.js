'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaComment, FaLaugh } from 'react-icons/fa';
import TechJokesNewspaper from './DadJokes';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const PaperAirplaneAnimation = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path
            d="M10 50 L90 10 L50 90 L45 55 L10 50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsAnimating(true);

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        }

        setTimeout(() => {
            setIsSubmitting(false);
            setIsAnimating(false);
        }, 2000);
    };

    return (
        <section id="contact" className="h-screen overflow-hidden -mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <TechJokesNewspaper />
                <div className="relative bg-gray-800 p-8 flex items-center overflow-hidden">
                    {/* Animated Wave Background */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            className="absolute bottom-0 left-0 w-full"
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 1440 320"
                                preserveAspectRatio="none"
                            >
                                <motion.path
                                    fill="rgba(16, 185, 129, 0.1)"
                                    d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,202.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                    animate={{
                                        d: [
                                            "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,202.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                            "M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,101.3C672,85,768,107,864,128C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                        ],
                                    }}
                                    transition={{
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.path
                                    fill="rgba(16, 185, 129, 0.15)"
                                    d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                    animate={{
                                        d: [
                                            "M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                            "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,165.3C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                        ],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Form Content */}
                    <div className="w-full max-w-md mx-auto relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold mb-8 text-emerald-400 text-center"
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg shadow-xl p-8"
                        >
                            {/* Your existing form fields */}
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-emerald-400">
                                    <FaUser className="inline mr-2" />
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-700 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-emerald-400">
                                    <FaEnvelope className="inline mr-2" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-700 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-emerald-400">
                                    <FaComment className="inline mr-2" />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-700 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-emerald-500 text-white px-4 py-3 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 flex items-center justify-center transition-colors duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    isAnimating ? (
                                        <PaperAirplaneAnimation />
                                    ) : (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        >
                                            ⚙️
                                        </motion.div>
                                    )
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>
                            {submitStatus === 'success' && (
                                <p className="mt-4 text-emerald-400 text-center">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="mt-4 text-red-400 text-center">Error sending message. Please try again.</p>
                            )}
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;