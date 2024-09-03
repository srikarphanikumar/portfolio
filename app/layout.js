import '../styles/globals.css';
import Navigation from '../components/Navigation';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body className="flex flex-col h-screen bg-gray-900">
                <Navigation />
                <main className="flex-grow flex">
                    {children}
                </main>
                <footer className="bg-gray-800 text-white text-center py-2 text-sm">
                    © {new Date().getFullYear()} Srikar Phani Kumar Marti. All rights reserved.
                </footer>
            </body>
        </html>
    );
}
