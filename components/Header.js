'use client';
import React from 'react';
import { Search, Menu } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

export const Header = ({ onMenuClick, showMenuButton }) => {
    const { currentTheme } = useTheme();

    return (
        <header
            className={`
                ${currentTheme.secondaryBg} w-full p-4
                flex items-center space-x-4
                border-b ${currentTheme.border}
                sticky top-0 z-40
                shadow-sm backdrop-blur-sm
            `}
        >
            {showMenuButton && (
                <button
                    onClick={onMenuClick}
                    className={`
                        p-2 rounded-lg
                        ${currentTheme.button} ${currentTheme.buttonHover}
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                    `}
                    aria-label="Toggle menu"
                >
                    <Menu aria-hidden="true" className={`w-6 h-6 ${currentTheme.text}`} />
                </button>
            )}

            <div className="flex-1 flex items-center space-x-4 max-w-3xl">
                <form role="search" aria-label="Portfolio search" className="flex-1" onSubmit={e => e.preventDefault()}>
                <div
                    className={`
                        flex items-center flex-1
                        ${currentTheme.input}
                        rounded-lg px-4 py-2.5
                        ring-1 ${currentTheme.border}
                        focus-within:ring-2 focus-within:ring-opacity-50
                        ${currentTheme.accent ? `focus-within:ring-${currentTheme.accent}` : 'focus-within:ring-blue-500'}
                        transition-shadow duration-200
                    `}
                >
                    <Search
                        aria-hidden="true"
                        className={`
                            w-5 h-5
                            ${currentTheme.secondaryText}
                            flex-shrink-0
                        `}
                    />
                    <input
                        type="search"
                        placeholder="Search in portfolio"
                        className={`
                            border-none outline-none
                            ml-2 w-full
                            ${currentTheme.text}
                            placeholder:${currentTheme.secondaryText}
                            focus:outline-none
                            bg-transparent
                        `}
                        aria-label="Search in portfolio"
                    />
                </div>
                </form>
            </div>

            <div className="flex items-center space-x-2">
                <Link href="/select">
                    <span className={`flex items-center px-3 py-2 rounded-lg text-sm ${currentTheme.button} ${currentTheme.buttonHover} ${currentTheme.text} transition-colors duration-200`}>
                        <ArrowLeft aria-hidden="true" className="w-4 h-4 mr-1" />
                        Theme Switcher
                    </span>
                </Link>
                <ThemeSwitcher />
            </div>
        </header>
    );
};