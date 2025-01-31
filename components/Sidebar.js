'use client';
import React from 'react';
import { Mail, User, Code, Briefcase, FolderOpen, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Sidebar = () => {
    const { currentTheme } = useTheme();

    const menuItems = [
        { icon: <Mail className="w-5 h-5" />, label: 'Home', count: 6 },
        { icon: <User className="w-5 h-5" />, label: 'About', count: 2 },
        { icon: <Code className="w-5 h-5" />, label: 'Skills', count: 8 },
        { icon: <Briefcase className="w-5 h-5" />, label: 'Experience', count: 4 },
        { icon: <FolderOpen className="w-5 h-5" />, label: 'Projects', count: 5 },
        { icon: <Phone className="w-5 h-5" />, label: 'Contact' }
    ];

    return (
        <div className={`w-64 ${currentTheme.sidebar} h-full p-4`}>
            <div className="space-y-1">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`
              flex items-center space-x-3 p-2 rounded-lg cursor-pointer
              ${currentTheme.hover} transition-colors duration-150
            `}
                    >
                        <span className={currentTheme.text}>{item.icon}</span>
                        <span className={`flex-1 ${currentTheme.text}`}>{item.label}</span>
                        {item.count && (
                            <span className={`text-sm ${currentTheme.secondaryText}`}>
                                {item.count}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};