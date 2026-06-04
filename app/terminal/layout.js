import Navigation from '../../components/Navigation';
import '../../styles/globals.css';

export const metadata = {
    title: 'Terminal',
};

export default function TerminalLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-green-300 focus:text-gray-900 focus:rounded focus:font-bold">
                Skip to main content
            </a>
            <Navigation />
            <main id="main-content" className="flex-grow flex">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center py-2 text-sm">
                © {new Date().getFullYear()} Srikar Phani Kumar Marti. All rights reserved.
            </footer>
        </div>
    );
}