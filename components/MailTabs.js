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
        <div
            role="tablist"
            aria-label="Portfolio sections"
            className={`flex border-b ${currentTheme.border} overflow-x-auto ${currentTheme.secondaryBg}`}
        >
            {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`tabpanel-${tab.id}`}
                        id={`tab-${tab.id}`}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            flex items-center px-6 py-4 border-b-2 transition-colors relative whitespace-nowrap
                            focus:outline-none focus:ring-2 focus:ring-inset
                            ${isActive
                                ? currentTheme.activeTab
                                : `border-transparent ${currentTheme.text} ${currentTheme.hover}`
                            }
                        `}
                    >
                        <div className="flex items-center space-x-2">
                            {IconComponent && (
                                <IconComponent
                                    aria-hidden="true"
                                    className={`w-4 h-4 ${isActive ? currentTheme.accent || currentTheme.text : currentTheme.text}`}
                                />
                            )}
                            <span>{tab.label}</span>
                            {tab.count && (
                                <span className={`ml-2 text-sm ${isActive ? currentTheme.accent || currentTheme.text : currentTheme.secondaryText}`}>
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