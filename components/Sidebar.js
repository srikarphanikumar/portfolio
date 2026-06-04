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

export const Sidebar = ({ items, activeItem, onItemClick, isExpanded }) => {
    const { currentTheme } = useTheme();

    return (
        <nav
            aria-label="Portfolio sections"
            className={`
                h-full ${currentTheme.sidebar}
                transition-all duration-200 ease-in-out
                ${isExpanded ? 'w-64' : 'w-16'}
                flex flex-col shadow-lg
                border-r ${currentTheme.border}
            `}
        >
            <ul className="p-2 flex-1 list-none m-0">
                {items.map((item) => {
                    const IconComponent = iconMap[item.icon];
                    const isActive = activeItem === item.id;

                    return (
                        <li key={item.id}>
                            <button
                                onClick={() => onItemClick(item.id)}
                                aria-current={isActive ? 'page' : undefined}
                                aria-label={!isExpanded ? item.label : undefined}
                                className={`
                                    w-full flex items-center
                                    ${isExpanded ? 'px-4' : 'justify-center'}
                                    py-2 my-1
                                    rounded-lg cursor-pointer
                                    transition-all duration-150 ease-in-out
                                    focus:outline-none focus:ring-2 focus:ring-offset-1
                                    ${isActive ? currentTheme.active : currentTheme.hover}
                                `}
                            >
                                {IconComponent && (
                                    <IconComponent
                                        aria-hidden="true"
                                        className={`
                                            w-5 h-5 min-w-[20px]
                                            ${!isExpanded && 'mx-auto'}
                                            transition-colors
                                            ${isActive ? currentTheme.text : currentTheme.text}
                                        `}
                                    />
                                )}

                                <div className={`
                                    ${isExpanded
                                        ? 'opacity-100 ml-3 flex-1'
                                        : 'opacity-0 w-0 overflow-hidden'
                                    }
                                    transition-all duration-200
                                    whitespace-nowrap
                                `}>
                                    <span className={currentTheme.text}>
                                        {item.label}
                                    </span>
                                    {item.count && (
                                        <span className={`ml-2 text-sm ${isActive ? currentTheme.text : currentTheme.secondaryText}`}>
                                            {item.count}
                                        </span>
                                    )}
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};