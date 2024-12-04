import Contact from '@/components/Contact';

export default function ContactPage() {
    return (
        <main className='overflow-hidden'> {/* Add padding-top to account for fixed header */}
            <Contact />
        </main>
    );
}