// app/gmail/page.js
'use client';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { MailTabs } from '../../components/MailTabs';
import { EmailLayout } from '../../components/EmailLayout';
import { useTheme } from '../../context/ThemeContext';

export default function GmailTheme() {
    const { currentTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('featured');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const emails = {
        featured: [
            {
                id: 1,
                subject: 'Welcome to My Portfolio',
                preview: 'Discover my journey in software development...',
                content: '<p>Welcome to my portfolio! I am a passionate software engineer...</p>',
                date: 'Jan 30',
                attachments: [{ name: 'resume.pdf' }]
            },
            // Add more featured emails...
        ],
        experience: [
            {
                id: 2,
                subject: 'Senior Software Engineer - Tech Corp',
                preview: 'Leading development of core platform features...',
                content: '<p>As a Senior Software Engineer at Tech Corp...</p>',
                date: 'Jan 29',
                attachments: [{ name: 'project-overview.pdf' }]
            },
            // Add more experience emails...
        ],
        // Add more categories...
    };

    return (
        <div className={`h-screen flex flex-col ${currentTheme.bg}`}>
            <Header onMenuClick={toggleSidebar} />
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar with overlay for mobile */}
                <div
                    className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } transform transition-transform duration-200 ease-in-out
          fixed md:relative left-0 z-30 h-full md:translate-x-0`}
                >
                    <Sidebar />
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <MailTabs activeTab={activeTab} onTabChange={setActiveTab} />
                    <EmailLayout
                        emails={emails[activeTab] || []}
                        activeTab={activeTab}
                    />
                </div>

                {/* Mobile sidebar overlay */}
                {isSidebarOpen && isMobile && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20"
                        onClick={toggleSidebar}
                    />
                )}
            </div>
        </div>
    );
}