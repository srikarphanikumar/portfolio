import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Navigation />
            <main className="flex-grow  pt-16">{children}</main>
            <footer className="bg-gray-800 text-white text-center py-4">
                © {new Date().getFullYear()} Srikar Phani Kumar Marti. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;

