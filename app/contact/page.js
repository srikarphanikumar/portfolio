import Contact from '@/components/Contact';

export default function ContactPage() {
    return (
        <main className="pt-16"> {/* Add padding-top to account for fixed header */}
            <Contact />
        </main>
    );
}