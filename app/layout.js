import '../styles/globals.css';

export const metadata = {
    icons: {
        icon: '/Srikar.jpeg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full m-0 p-0 overflow-hidden">
                {children}
            </body>
        </html>
    );
}