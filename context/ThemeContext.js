// context/ThemeContext.js
'use client';
import React, { createContext, useContext, useState } from 'react';

export const themes = {
    light: {
        name: 'light',
        bg: 'bg-white',
        text: 'text-gray-800',
        sidebar: 'bg-gray-50',
        hover: 'hover:bg-gray-100',
        border: 'border-gray-200',
        input: 'bg-gray-50'
    },
    dark: {
        name: 'dark',
        bg: 'bg-gray-900',
        text: 'text-white',
        sidebar: 'bg-gray-800',
        hover: 'hover:bg-gray-800',
        border: 'border-gray-700',
        input: 'bg-gray-800'
    },
    neonGreen: {
        name: 'neonGreen',
        bg: 'bg-green-900',
        text: 'text-green-100',
        sidebar: 'bg-green-800',
        hover: 'hover:bg-green-800',
        border: 'border-green-600',
        input: 'bg-green-800'
    },
    neonPink: {
        name: 'neonPink',
        bg: 'bg-pink-900',
        text: 'text-pink-100',
        sidebar: 'bg-pink-800',
        hover: 'hover:bg-pink-800',
        border: 'border-pink-600',
        input: 'bg-pink-800'
    }
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

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