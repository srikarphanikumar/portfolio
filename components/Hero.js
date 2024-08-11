import dynamic from 'next/dynamic';

const HeroContent = dynamic(() => import('./HeroContent'), { ssr: false });

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 10%)',
                        backgroundPosition: '0% 0%',
                        backgroundSize: '20px 20px',
                    }}
                />
            </div>

            <HeroContent />
        </section>
    );
};

export default Hero;