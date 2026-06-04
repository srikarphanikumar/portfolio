import { ThemeProvider } from '../../context/ThemeContext';

export const metadata = { title: 'Gmail' };


export default function GmailLayout({ children }) {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                {children}
            </div>
        </ThemeProvider>
    );
}