import dynamic from 'next/dynamic';

const HeroContent = dynamic(() => import('./HeroContent'), { ssr: false });

const Hero = () => {
    return (
        <section className="flex items-center justify-center h-full w-full relative">
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />
            <HeroContent />
        </section>
    );
};

export default Hero;