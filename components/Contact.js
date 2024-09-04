'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

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
        }, 2000); // Adjust this timing as needed
    };

    return (
        <section id="contact" className="bg-gradient-to-br from-blue-500 to-purple-600 py-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-white text-center"
                >
                    Get in Touch
                </motion.h2>
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8"
                >
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                            <FaUser className="inline mr-2" />
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                            <FaEnvelope className="inline mr-2" />
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                            <FaComment className="inline mr-2" />
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
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
                        <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="mt-4 text-red-600 text-center">Error sending message. Please try again.</p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;