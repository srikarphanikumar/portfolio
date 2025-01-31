'use client';
import React from 'react';
import { Mail, User, Code, Briefcase, FolderOpen, Phone } from 'lucide-react';

export const Sidebar = () => {
    const menuItems = [
        { icon: <Mail className="w-5 h-5" />, label: 'Home', count: 6 },
        { icon: <User className="w-5 h-5" />, label: 'About', count: 2 },
        { icon: <Code className="w-5 h-5" />, label: 'Skills', count: 8 },
        { icon: <Briefcase className="w-5 h-5" />, label: 'Experience', count: 4 },
        { icon: <FolderOpen className="w-5 h-5" />, label: 'Projects', count: 5 },
        { icon: <Phone className="w-5 h-5" />, label: 'Contact' }
    ];

    return (
        <div className="w-64 bg-white h-full p-4">
            <div className="space-y-2">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                    >
                        {item.icon}
                        <span className="flex-1">{item.label}</span>
                        {item.count && (
                            <span className="text-sm text-gray-500">{item.count}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
