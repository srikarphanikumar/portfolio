'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Star, Paperclip, X } from 'lucide-react';
import EmailContent from './EmailContent';

export const EmailLayout = ({
    emails,
    activeTab,
    selectedEmailId,
    onEmailSelect
}) => {
    const { currentTheme } = useTheme();
    const [isMobileView, setIsMobileView] = useState(false);
    const selectedEmail = emails.find(email => email.id === selectedEmailId);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="flex-1 flex min-h-0">
            {/* Email List */}
            <div
                role="tabpanel"
                aria-label="Email list"
                className={`
                ${selectedEmail && !isMobileView ? 'w-1/2' : 'w-full'}
                ${selectedEmail && isMobileView ? 'hidden' : 'block'}
                border-r ${currentTheme.border} overflow-auto
                ${currentTheme.secondaryBg}
                flex flex-col min-h-0
            `}>
                <ul role="list" className="list-none m-0 p-0">
                {emails.map((email) => (
                    <li key={email.id}>
                    <button
                        onClick={() => onEmailSelect(email.id)}
                        aria-pressed={selectedEmailId === email.id}
                        aria-label={`Open email: ${email.subject}`}
                        className={`
                            w-full flex items-center p-4 cursor-pointer text-left
                            ${selectedEmailId === email.id ? currentTheme.activeMailItem : currentTheme.mailItem}
                            transition-colors duration-150
                            focus:outline-none focus:ring-2 focus:ring-inset
                        `}
                    >
                        <input
                            type="checkbox"
                            aria-label={`Select email: ${email.subject}`}
                            className="mr-2 accent-current"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            aria-label={`Star email: ${email.subject}`}
                            onClick={(e) => e.stopPropagation()}
                            className="focus:outline-none focus:ring-2 rounded mr-2"
                        >
                        <Star
                            className={`w-5 h-5 ${currentTheme.text} hover:text-yellow-400 transition-colors`}
                            aria-hidden="true"
                        />
                        </button>
                        <div className="flex-1 min-w-0">
                            <div className={`font-medium ${currentTheme.text} truncate`}>
                                {email.subject}
                            </div>
                            <div className={`text-sm ${currentTheme.secondaryText} line-clamp-1`}>
                                {email.preview}
                            </div>
                        </div>
                        <div className="ml-4 flex flex-col items-end flex-shrink-0">
                            <span className={`text-sm ${currentTheme.secondaryText}`}>
                                {email.date}
                            </span>
                            {email.attachments?.length > 0 && (
                                <Paperclip className={`w-4 h-4 ${currentTheme.text} mt-1`} />
                            )}
                        </div>
                    </button>
                    </li>
                ))}
                </ul>
            </div>

            {/* Email Content */}
            {selectedEmail && (
                <div className={`
                    ${isMobileView ? 'fixed inset-0 z-50' : 'w-1/2'}
                    ${currentTheme.secondaryBg} overflow-auto relative
                    flex flex-col min-h-0
                `}>
                    <div className="p-6 flex flex-col min-h-full">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className={`text-xl font-bold ${currentTheme.text}`}>
                                {selectedEmail.subject}
                            </h2>
                            <button
                                onClick={() => onEmailSelect(null)}
                                aria-label="Close email"
                                className={`p-2 rounded-lg ${currentTheme.button} ${currentTheme.buttonHover} focus:outline-none focus:ring-2`}
                            >
                                <X className={`w-5 h-5 ${currentTheme.text}`} aria-hidden="true" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-auto">
                            <EmailContent content={selectedEmail.content} />
                        </div>

                        {selectedEmail.attachments && (
                            <div className="mt-6">
                                <h3 className={`font-medium ${currentTheme.text} mb-3`}>
                                    Attachments
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedEmail.attachments.map((attachment, index) => (
                                        <div
                                            key={index}
                                            className={`
                                                flex items-center p-2 rounded-lg
                                                ${currentTheme.button} ${currentTheme.buttonHover}
                                                transition-colors duration-150
                                            `}
                                        >
                                            <Paperclip className={`w-4 h-4 ${currentTheme.text} mr-2`} />
                                            <span className={currentTheme.text}>
                                                {attachment.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};