import { ThemeProvider } from '../../context/ThemeContext';

export default function GmailLayout({ children }) {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                {children}
            </div>
        </ThemeProvider>
    );
}