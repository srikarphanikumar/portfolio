// components/ThemeSwitcher.jsx
'use client';
import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { Palette } from 'lucide-react';
import { useTheme, themes } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
    const { currentTheme, changeTheme } = useTheme();

    const themeOptions = [
        { name: 'Light', value: 'light', color: 'bg-gray-100' },
        { name: 'Dark', value: 'dark', color: 'bg-gray-900' },
        { name: 'Neon Green', value: 'neonGreen', color: 'bg-green-500' },
        { name: 'Neon Pink', value: 'neonPink', color: 'bg-pink-500' }
    ];

    return (
        <Menu as="div" className="relative">
            <MenuButton className="p-2 rounded-full hover:bg-gray-100">
                <Palette className="w-5 h-5" />
            </MenuButton>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                        {themeOptions.map((theme) => (
                            <MenuItem key={theme.value}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-100' : ''
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        onClick={() => changeTheme(theme.value)}
                                    >
                                        <div className={`w-4 h-4 rounded-full mr-2 ${theme.color}`} />
                                        {theme.name}
                                        {currentTheme.name === theme.value && (
                                            <span className="ml-auto">✓</span>
                                        )}
                                    </button>
                                )}
                            </MenuItem>
                        ))}
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    );
};