'use client';
import React from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FilePreview = ({ url, type, onClose }) => {
    const { currentTheme } = useTheme();

    if (!url) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`relative w-full max-w-4xl h-[80vh] ${currentTheme.bg} p-4 rounded-lg`}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="w-full h-full overflow-auto">
                    {type === 'image' && (
                        <img src={url} alt="Preview" className="max-w-full h-auto" />
                    )}
                    {type === 'pdf' && (
                        <iframe src={url} className="w-full h-full" title="PDF Preview" />
                    )}
                    {type === 'other' && (
                        <div className="flex items-center justify-center h-full">
                            <p className={`${currentTheme.text}`}>
                                Preview not available for this file type
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
