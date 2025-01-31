// components/EmailLayout.jsx
'use client';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Star, Paperclip } from 'lucide-react';

export const EmailLayout = ({ emails, activeTab }) => {
    const { currentTheme } = useTheme();
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false);

    return (
        <div className="flex-1 flex">
            {/* Email List - Takes full width on mobile when no email is selected */}
            <div className={`${selectedEmail && !isMobileView ? 'w-1/2' : 'w-full'
                } border-r ${currentTheme.border} overflow-auto`}>
                {emails.map((email) => (
                    <div
                        key={email.id}
                        onClick={() => setSelectedEmail(email)}
                        className={`flex items-center p-4 ${currentTheme.hover} cursor-pointer border-b ${currentTheme.border
                            } ${selectedEmail?.id === email.id ? currentTheme.bg : ''}`}
                    >
                        <input type="checkbox" className="mr-2" />
                        <Star className={`w-5 h-5 ${currentTheme.text} hover:text-yellow-400 mr-2`} />
                        <div className="flex-1">
                            <div className={`font-medium ${currentTheme.text}`}>{email.subject}</div>
                            <div className={`text-sm ${currentTheme.text} opacity-75`}>
                                {email.preview}
                            </div>
                        </div>
                        <div className="ml-4 flex flex-col items-end">
                            <span className={`text-sm ${currentTheme.text}`}>{email.date}</span>
                            {email.attachments?.length > 0 && (
                                <Paperclip className={`w-4 h-4 ${currentTheme.text} mt-1`} />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Email Content - Only shows when email is selected */}
            {selectedEmail && (
                <div className={`${isMobileView ? 'fixed inset-0 z-50' : 'w-1/2'
                    } ${currentTheme.bg} overflow-auto`}>
                    <div className="p-4">
                        {isMobileView && (
                            <button
                                onClick={() => setSelectedEmail(null)}
                                className={`mb-4 p-2 rounded-full ${currentTheme.hover}`}
                            >
                                <ArrowLeft className={`w-6 h-6 ${currentTheme.text}`} />
                            </button>
                        )}
                        <h2 className={`text-xl font-bold ${currentTheme.text} mb-4`}>
                            {selectedEmail.subject}
                        </h2>
                        <div className={`${currentTheme.text} space-y-4`}>
                            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedEmail.content }} />
                            {selectedEmail.attachments && (
                                <div className="mt-4">
                                    <h3 className={`font-medium ${currentTheme.text} mb-2`}>Attachments</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedEmail.attachments.map((attachment, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center p-2 rounded ${currentTheme.hover}`}
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