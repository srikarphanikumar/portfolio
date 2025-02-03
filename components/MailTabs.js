'use client';
import React from 'react';
import { Mail, User, Code, Briefcase, FolderOpen, Phone, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const iconMap = {
    Mail: Mail,
    User: User,
    Code: Code,
    Briefcase: Briefcase,
    FolderOpen: FolderOpen,
    Phone: Phone,
    Star: Star
};

export const MailTabs = ({ tabs, activeTab, onTabChange }) => {
    const { currentTheme } = useTheme();

    return (
        <div className={`flex border-b ${currentTheme.border} overflow-x-auto ${currentTheme.secondaryBg}`}>
            {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];

                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            flex items-center px-6 py-4 border-b-2 transition-colors relative whitespace-nowrap
                            ${activeTab === tab.id
                                ? currentTheme.activeTab
                                : `border-transparent ${currentTheme.text} ${currentTheme.hover}`
                            }
                        `}
                    >
                        <div className="flex items-center space-x-2">
                            {IconComponent && (
                                <IconComponent
                                    className={`w-4 h-4 ${activeTab === tab.id ? currentTheme.accent || currentTheme.text : currentTheme.text}`}
                                />
                            )}
                            <span>{tab.label}</span>
                            {tab.count && (
                                <span className={`ml-2 text-sm ${activeTab === tab.id ? currentTheme.accent || currentTheme.text : currentTheme.secondaryText}`}>
                                    {tab.count}
                                </span>
                            )}
                        </div>
                    </button>
                );
            })}
        </div>
    );
};