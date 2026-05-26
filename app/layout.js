import '../styles/globals.css';
import AppsFloat from '../components/AppsFloat';

export const metadata = {
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full m-0 p-0 overflow-hidden">
                {children}
                <AppsFloat />
            </body>
        </html>
    );
}