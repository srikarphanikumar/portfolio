'use client';
import React, { createContext, useContext, useState } from 'react';

export const themes = {
    light: {
        name: 'light',
        bg: 'bg-white',
        secondaryBg: 'bg-gray-50',
        text: 'text-gray-800',
        secondaryText: 'text-gray-600',
        sidebar: 'bg-gray-50',
        hover: 'hover:bg-gray-100',
        activeHover: 'hover:bg-gray-200',
        border: 'border-gray-200',
        input: 'bg-gray-50',
        active: 'bg-blue-50 text-blue-600',
        button: 'bg-gray-100',
        buttonHover: 'hover:bg-gray-200',
        iconButton: 'text-gray-700 hover:bg-gray-200'
    },
    cream: {
        name: 'cream',
        bg: 'bg-amber-50',
        secondaryBg: 'bg-amber-100',
        text: 'text-gray-800',
        secondaryText: 'text-gray-600',
        sidebar: 'bg-amber-100',
        hover: 'hover:bg-amber-200',
        activeHover: 'hover:bg-amber-300',
        border: 'border-amber-200',
        input: 'bg-amber-100',
        active: 'bg-amber-200 text-amber-900',
        button: 'bg-amber-200',
        buttonHover: 'hover:bg-amber-300',
        iconButton: 'text-amber-900 hover:bg-amber-200'
    },
    dark: {
        name: 'dark',
        bg: 'bg-gray-900',
        secondaryBg: 'bg-gray-800',
        text: 'text-gray-100',
        secondaryText: 'text-gray-400',
        sidebar: 'bg-gray-800',
        hover: 'hover:bg-gray-800',
        activeHover: 'hover:bg-gray-700',
        border: 'border-gray-700',
        input: 'bg-gray-800',
        active: 'bg-gray-700 text-blue-400',
        button: 'bg-gray-700',
        buttonHover: 'hover:bg-gray-600',
        iconButton: 'text-gray-300 hover:bg-gray-700'
    },
    neonGreen: {
        name: 'neonGreen',
        bg: 'bg-gray-900',
        secondaryBg: 'bg-gray-800',
        text: 'text-green-400',
        secondaryText: 'text-green-500',
        sidebar: 'bg-gray-800',
        hover: 'hover:bg-gray-800',
        activeHover: 'hover:bg-gray-700',
        border: 'border-green-900',
        input: 'bg-gray-800',
        active: 'bg-gray-800 text-green-300',
        button: 'bg-gray-800',
        buttonHover: 'hover:bg-gray-700',
        iconButton: 'text-green-400 hover:bg-gray-800',
        accent: 'text-green-400',
        accentHover: 'hover:text-green-300',
        activeTab: 'border-green-400 text-green-400'
    },
    neonPink: {
        name: 'neonPink',
        bg: 'bg-gray-900',
        secondaryBg: 'bg-gray-800',
        text: 'text-pink-400',
        secondaryText: 'text-pink-400',
        sidebar: 'bg-gray-800',
        hover: 'hover:bg-gray-800',
        activeHover: 'hover:bg-gray-700',
        border: 'border-pink-900',
        input: 'bg-gray-800',
        active: 'bg-gray-800 text-pink-300',
        button: 'bg-gray-800',
        buttonHover: 'hover:bg-gray-700',
        iconButton: 'text-pink-400 hover:bg-gray-800',
        accent: 'text-pink-400',
        accentHover: 'hover:text-pink-300',
        activeTab: 'border-pink-400 text-pink-400'
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