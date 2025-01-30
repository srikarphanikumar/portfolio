import Navigation from '../../components/Navigation';
import '../../styles/globals.css';

export default function TerminalLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Navigation />
            <main className="flex-grow flex">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center py-2 text-sm">
                © {new Date().getFullYear()} Srikar Phani Kumar Marti. All rights reserved.
            </footer>
        </div>
    );
}