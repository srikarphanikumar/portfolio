export const metadata = { title: 'VS Code' };

export default function VSCodeLayout({ children }) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}
