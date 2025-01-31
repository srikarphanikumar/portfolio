'use client';
import React from 'react';
import { File, Image, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AttachmentPreview = ({ attachment, onClick }) => {
    const { currentTheme } = useTheme();

    const getIcon = () => {
        switch (attachment.type) {
            case 'image':
                return <Image className="w-5 h-5" />;
            case 'pdf':
                return <FileText className="w-5 h-5" />;
            default:
                return <File className="w-5 h-5" />;
        }
    };

    return (
        <button
            onClick={() => onClick(attachment)}
            className={`flex items-center space-x-2 p-2 rounded ${currentTheme.hover}`}
        >
            {getIcon()}
            <span className={currentTheme.text}>{attachment.name}</span>
        </button>
    );
};