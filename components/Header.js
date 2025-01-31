'use client';
import React from 'react';
import { Search, Menu } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

export const Header = ({ onMenuClick }) => {
    const { currentTheme } = useTheme();

    return (
        <div className={`${currentTheme.bg} w-full p-4 flex items-center space-x-4 border-b ${currentTheme.border} sticky top-0 z-40`}>
            <button
                onClick={onMenuClick}
                className={`p-2 rounded-full ${currentTheme.hover}`}
            >
                <Menu className={`w-6 h-6 ${currentTheme.text}`} />
            </button>

            <div className="flex-1 flex items-center space-x-4 max-w-3xl">
                <div className={`flex items-center flex-1 ${currentTheme.input} rounded-lg px-4 py-2`}>
                    <Search className={`w-5 h-5 ${currentTheme.text} opacity-60`} />
                    <input
                        type="text"
                        placeholder="Search in portfolio"
                        className={`${currentTheme.input} border-none outline-none ml-2 w-full ${currentTheme.text} placeholder-gray-500`}
                    />
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <ThemeSwitcher />
            </div>
        </div>
    );
};