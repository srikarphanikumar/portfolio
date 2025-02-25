'use client';
import React, { createContext, useContext, useState } from 'react';

export const themes = {
    cream: {
        name: 'cream',
        bg: 'bg-amber-50',
        pattern: '[background:linear-gradient(45deg,#fef3c7_25%,transparent_25%,transparent_75%,#fef3c7_75%,#fef3c7),linear-gradient(45deg,#fef3c7_25%,transparent_25%,transparent_75%,#fef3c7_75%,#fef3c7)] [background-position:0_0,10px_10px] [background-size:20px_20px]',
        secondaryBg: 'bg-amber-50',
        text: 'text-amber-950',
        secondaryText: 'text-amber-800',
        sidebar: 'bg-amber-50',
        hover: 'hover:bg-amber-100',
        activeHover: 'hover:bg-amber-200',
        border: 'border-amber-200',
        input: 'bg-white',
        active: 'bg-amber-200 text-amber-950',
        button: 'bg-amber-100',
        buttonHover: 'hover:bg-amber-200',
        iconButton: 'text-amber-800',
        mailItem: 'hover:bg-amber-100 border-b border-amber-200',
        activeMailItem: 'bg-amber-200 border-l-4 border-l-amber-600 text-amber-950',
        activeTab: 'border-amber-600 text-amber-950 bg-amber-100'
    },
    neonGreen: {
        name: 'neonGreen',
        bg: 'bg-gray-950',
        pattern: '[background:radial-gradient(circle_at_center,#00ff0008_0,transparent_1px)] [background-size:24px_24px] [background-position:0_0,12px_12px]',
        secondaryBg: 'bg-gray-900',
        text: 'text-green-400',
        secondaryText: 'text-green-500',
        sidebar: 'bg-gray-900',
        hover: 'hover:bg-gray-800',
        activeHover: 'hover:bg-gray-700',
        border: 'border-green-900',
        input: 'bg-gray-800',
        active: 'bg-gray-800 text-green-400',
        button: 'bg-gray-800',
        buttonHover: 'hover:bg-gray-700',
        iconButton: 'text-green-400',
        mailItem: 'hover:bg-gray-800 border-b border-green-900',
        activeMailItem: 'bg-gray-800 border-l-4 border-l-green-400 text-green-300',
        activeTab: 'border-green-400 text-green-300 bg-gray-800'
    },
    neonPink: {
        name: 'neonPink',
        bg: 'bg-gray-950',
        pattern: '[background:radial-gradient(circle_at_40%_40%,#ff69b410_0,transparent_2px),radial-gradient(circle_at_60%_60%,#ff69b410_0,transparent_2px)] [background-size:32px_32px]',
        secondaryBg: 'bg-gray-900',
        text: 'text-pink-400',
        secondaryText: 'text-pink-400',
        sidebar: 'bg-gray-900',
        hover: 'hover:bg-gray-800',
        activeHover: 'hover:bg-gray-700',
        border: 'border-pink-900',
        input: 'bg-gray-800',
        active: 'bg-gray-800 text-pink-400',
        button: 'bg-gray-800',
        buttonHover: 'hover:bg-gray-700',
        iconButton: 'text-pink-400',
        mailItem: 'hover:bg-gray-800 border-b border-pink-900',
        activeMailItem: 'bg-gray-800 border-l-4 border-l-pink-400 text-pink-300',
        activeTab: 'border-pink-400 text-pink-400 bg-gray-800'
    }
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(themes.neonGreen);

    const changeTheme = (themeName) => {
        setCurrentTheme(themes[themeName]);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}