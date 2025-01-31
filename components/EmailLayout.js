'use client';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Star, Paperclip, X } from 'lucide-react';

export const EmailLayout = ({ emails, activeTab }) => {
    const { currentTheme } = useTheme();
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false);

    const toggleEmail = (email) => {
        if (selectedEmail?.id === email.id) {
            setSelectedEmail(null);
        } else {
            setSelectedEmail(email);
        }
    };

    return (
        <div className="flex-1 flex">
            {/* Email List */}
            <div className={`${selectedEmail && !isMobileView ? 'w-1/2' : 'w-full'
                } border-r ${currentTheme.border} overflow-auto`}>
                {emails.map((email) => (
                    <div
                        key={email.id}
                        onClick={() => toggleEmail(email)}
                        className={`flex items-center p-4 ${currentTheme.hover} cursor-pointer border-b ${currentTheme.border
                            } ${selectedEmail?.id === email.id ? currentTheme.active : ''}`}
                    >
                        <input
                            type="checkbox"
                            className="mr-2"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <Star
                            className={`w-5 h-5 ${currentTheme.text} hover:text-yellow-400 mr-2`}
                            onClick={(e) => {
                                e.stopPropagation();
                                // Add star functionality here
                            }}
                        />
                        <div className="flex-1">
                            <div className={`font-medium ${currentTheme.text}`}>{email.subject}</div>
                            <div className={`text-sm ${currentTheme.secondaryText}`}>
                                {email.preview}
                            </div>
                        </div>
                        <div className="ml-4 flex flex-col items-end">
                            <span className={`text-sm ${currentTheme.secondaryText}`}>{email.date}</span>
                            {email.attachments?.length > 0 && (
                                <Paperclip className={`w-4 h-4 ${currentTheme.secondaryText} mt-1`} />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Email Content */}
            {selectedEmail && (
                <div className={`${isMobileView ? 'fixed inset-0 z-50' : 'w-1/2'
                    } ${currentTheme.bg} overflow-auto relative`}>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className={`text-xl font-bold ${currentTheme.text}`}>
                                {selectedEmail.subject}
                            </h2>
                            <button
                                onClick={() => setSelectedEmail(null)}
                                className={`p-2 rounded-full ${currentTheme.hover} ml-4`}
                            >
                                <X className={`w-5 h-5 ${currentTheme.text}`} />
                            </button>
                        </div>
                        <div className={`${currentTheme.text} space-y-4`}>
                            <div className="prose max-w-none prose-invert" dangerouslySetInnerHTML={{ __html: selectedEmail.content }} />
                            {selectedEmail.attachments && (
                                <div className="mt-4">
                                    <h3 className={`font-medium ${currentTheme.text} mb-2`}>Attachments</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedEmail.attachments.map((attachment, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center p-2 rounded ${currentTheme.button} ${currentTheme.buttonHover}`}
                                            >
                                                <Paperclip className={`w-4 h-4 ${currentTheme.text} mr-2`} />
                                                <span className={currentTheme.text}>{attachment.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};