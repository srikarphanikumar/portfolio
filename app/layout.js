import '../styles/globals.css';
import AppsFloat from '../components/AppsFloat';

export const metadata = {
    title: {
        default: 'Srikar Phani Kumar Marti | Frontend Developer',
        template: '%s | Srikar Phani Kumar Marti',
    },
    description: 'Portfolio of Srikar Phani Kumar Marti — Senior Frontend Engineer specialising in React, Next.js, TypeScript and scalable web applications.',
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