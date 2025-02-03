'use client';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { MailTabs } from '../../components/MailTabs';
import { EmailLayout } from '../../components/EmailLayout';
import { useTheme } from '../../context/ThemeContext';
import { EMAILS, NAVIGATION_ITEMS } from '../../constants/gmail-view.constants';

export default function GmailTheme() {
    const { currentTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('home');
    const [showSidebar, setShowSidebar] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [selectedEmailId, setSelectedEmailId] = useState(null);

    useEffect(() => {
        const checkMobile = () => {
            const isMobileView = window.innerWidth < 768;
            setIsMobile(isMobileView);
            setShowSidebar(!isMobileView);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="h-screen flex flex-col relative">
            {/* Background with pattern */}
            <div className={`fixed inset-0 ${currentTheme.bg}`} />
            <div className={`fixed inset-0 opacity-50 ${currentTheme.pattern}`} />

            {/* Content */}
            <div className="relative flex-1 flex flex-col z-10">
                <Header
                    onMenuClick={() => setShowSidebar(!showSidebar)}
                    showMenuButton={isMobile}
                />

                <div className="flex-1 flex overflow-hidden min-h-0">
                    {/* Sidebar */}
                    <div
                        onMouseEnter={() => !isMobile && setIsHovering(true)}
                        onMouseLeave={() => !isMobile && setIsHovering(false)}
                        className={`
                            ${isMobile ? 'absolute' : 'relative'}
                            ${isMobile && !showSidebar ? '-translate-x-full' : 'translate-x-0'}
                            transition-all duration-200 ease-in-out
                            h-full z-40 flex
                        `}
                    >
                        <Sidebar
                            items={NAVIGATION_ITEMS}
                            activeItem={activeTab}
                            onItemClick={(newTab) => {
                                setActiveTab(newTab);
                                setSelectedEmailId(null);
                                isMobile && setShowSidebar(false);
                            }}
                            isExpanded={isMobile ? showSidebar : isHovering}
                        />
                    </div>

                    {/* Main content */}
                    <div className={`
                        flex-1 flex flex-col min-h-0
                        ${currentTheme.secondaryBg}
                        backdrop-blur-sm bg-opacity-80
                    `}>
                        <MailTabs
                            tabs={NAVIGATION_ITEMS}
                            activeTab={activeTab}
                            onTabChange={(newTab) => {
                                setActiveTab(newTab);
                                setSelectedEmailId(null);
                            }}
                        />
                        <EmailLayout
                            emails={EMAILS[activeTab] || []}
                            activeTab={activeTab}
                            selectedEmailId={selectedEmailId}
                            onEmailSelect={setSelectedEmailId}
                        />
                    </div>

                    {/* Mobile overlay */}
                    {showSidebar && isMobile && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-30"
                            onClick={() => setShowSidebar(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}