'use client';
import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
    const { currentTheme, changeTheme } = useTheme();

    const themeOptions = [
        {
            name: 'Cream',
            value: 'cream',
            color: 'bg-amber-100',
            textColor: 'text-gray-800'
        },
        {
            name: 'Neon Green',
            value: 'neonGreen',
            color: 'bg-gray-900',
            textColor: 'text-green-400',
            accent: 'border-r-4 border-green-400'
        },
        {
            name: 'Neon Pink',
            value: 'neonPink',
            color: 'bg-gray-900',
            textColor: 'text-pink-400',
            accent: 'border-r-4 border-pink-400'
        }
    ];

    return (
        <Menu as="div" className="relative">
            <Menu.Button
                className={`p-2 rounded-full ${currentTheme.button} ${currentTheme.buttonHover}`}
            >
                <Palette className={currentTheme.iconButton} />
            </Menu.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items
                    className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                >
                    <div className="py-1">
                        {themeOptions.map((theme) => (
                            <Menu.Item key={theme.value}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-100' : ''
                                            } flex items-center w-full px-4 py-2 text-sm ${theme.accent || ''}`}
                                        onClick={() => changeTheme(theme.value)}
                                    >
                                        <div className={`w-4 h-4 rounded-full mr-2 ${theme.color}`} />
                                        <span className={theme.textColor}>
                                            {theme.name}
                                        </span>
                                        {currentTheme.name === theme.value && (
                                            <span className={`ml-auto ${theme.value === 'neonGreen' ? 'text-green-400' :
                                                theme.value === 'neonPink' ? 'text-pink-400' :
                                                    'text-blue-500'
                                                }`}>✓</span>
                                        )}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};