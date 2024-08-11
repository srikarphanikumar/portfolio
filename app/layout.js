import '../styles/globals.css';
import Navigation from '../components/Navigation';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full">
                <div className="flex flex-col h-full">
                    <Navigation />
                    <main className="flex-grow overflow-auto">
                        {children}
                    </main>
                    <footer className="bg-gray-800 text-white text-center py-2 text-sm">
                        © {new Date().getFullYear()} Srikar Phani Kumar Marti. All rights reserved.
                    </footer>
                </div>
            </body>
        </html>
    );
}