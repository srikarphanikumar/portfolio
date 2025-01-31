'use client';
import React from 'react';
import { Star, Briefcase, Code, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const MailTabs = ({ activeTab, onTabChange }) => {
    const { currentTheme } = useTheme();

    const tabs = [
        {
            id: 'featured',
            label: 'Featured',
            icon: <Star className="w-4 h-4" />,
            count: 3
        },
        {
            id: 'experience',
            label: 'Experience',
            icon: <Briefcase className="w-4 h-4" />,
            count: 4
        },
        {
            id: 'skills',
            label: 'Skills',
            icon: <Code className="w-4 h-4" />,
            count: 8
        },
        {
            id: 'contact',
            label: 'Contact',
            icon: <Phone className="w-4 h-4" />,
            count: 1
        }
    ];

    return (
        <div className={`flex border-b ${currentTheme.border} overflow-x-auto ${currentTheme.bg}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
            flex items-center px-6 py-4 border-b-2 transition-colors relative
            ${activeTab === tab.id
                            ? `border-blue-500 text-blue-500 ${currentTheme.activeHover}`
                            : `border-transparent ${currentTheme.text} ${currentTheme.hover}`
                        }
          `}
                >
                    <div className="flex items-center space-x-2">
                        {tab.icon}
                        <span>{tab.label}</span>
                        {tab.count && (
                            <span className={`ml-2 text-sm ${activeTab === tab.id ? 'text-blue-500' : currentTheme.secondaryText
                                }`}>
                                {tab.count}
                            </span>
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
};