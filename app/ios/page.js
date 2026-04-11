'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const HomeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const PersonIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const CodeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const FolderIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
);

const MessageIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

// ─── App data ─────────────────────────────────────────────────────────────────

const APP_ICONS = [
    { id: 'home',       label: 'Home',       Icon: HomeIcon,      gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E53)', badge: null },
    { id: 'about',      label: 'About',      Icon: PersonIcon,    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)', badge: null },
    { id: 'skills',     label: 'Skills',     Icon: CodeIcon,      gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)', badge: 6 },
    { id: 'experience', label: 'Experience', Icon: BriefcaseIcon, gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', badge: 5 },
    { id: 'projects',   label: 'Projects',   Icon: FolderIcon,    gradient: 'linear-gradient(135deg, #4facfe, #a18cd1)', badge: 7 },
    { id: 'contact',    label: 'Contact',    Icon: MessageIcon,   gradient: 'linear-gradient(135deg, #fda085, #f6d365)', badge: null },
];

const DOCK_ICONS = ['home', 'skills', 'projects', 'contact'];

// ─── Content components ───────────────────────────────────────────────────────

const StatCard = ({ value, label }) => (
    <div style={{
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 16,
        padding: '16px 20px',
        textAlign: 'center',
        flex: 1,
    }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#4facfe', marginBottom: 4 }}>{value}</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.3 }}>{label}</div>
    </div>
);

const HomeContent = () => (
    <div style={{ padding: '0 4px' }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: 'white', marginBottom: 8, lineHeight: 1.2 }}>
            Hi, I&apos;m Srikar 👋
        </div>
        <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 6, lineHeight: 1.5 }}>
            Senior Frontend Engineer with 6+ years building scalable web applications
        </div>
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(79,172,254,0.15)',
            border: '1px solid rgba(79,172,254,0.3)',
            borderRadius: 20,
            padding: '6px 14px',
            marginBottom: 28,
        }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#43e97b', boxShadow: '0 0 6px #43e97b' }} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>Currently at Raymond James Financial</span>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
            <StatCard value="35%" label="User Engagement Boost" />
            <StatCard value="40%" label="Faster Load Times" />
            <StatCard value="6+" label="Years Experience" />
        </div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
            Passionate about crafting exceptional user experiences through clean architecture, performance optimization, and modern frontend technologies. Tap the icons above to explore my journey.
        </div>
    </div>
);

const InfoRow = ({ label, value }) => (
    <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', minWidth: 90 }}>{label}</span>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{value}</span>
    </div>
);

const EduCard = ({ degree, school, year }) => (
    <div style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14,
        padding: '14px 16px',
        marginBottom: 10,
    }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 4 }}>{degree}</div>
        <div style={{ fontSize: 12, color: '#4facfe', marginBottom: 2 }}>{school}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{year}</div>
    </div>
);

const PhilosophyBullet = ({ icon, text }) => (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{text}</span>
    </div>
);

const AboutContent = () => (
    <div>
        <div style={{
            background: 'linear-gradient(135deg, rgba(79,172,254,0.15), rgba(0,242,254,0.05))',
            border: '1px solid rgba(79,172,254,0.2)',
            borderRadius: 16,
            padding: '18px 20px',
            marginBottom: 20,
        }}>
            <InfoRow label="Name" value="Srikar Phani Kumar Marti" />
            <InfoRow label="Role" value="Senior Frontend Engineer" />
            <InfoRow label="Location" value="Tampa, FL" />
        </div>

        <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Education</div>
        <EduCard degree="MBA — Information Technology" school="Campbellsville University" year="2023" />
        <EduCard degree="MS — Electrical Engineering" school="University of New Haven" year="2018" />
        <EduCard degree="BS — Electronics & Communication" school="J.N.T.U. Hyderabad" year="2015" />

        <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12, marginTop: 20 }}>Philosophy</div>
        <PhilosophyBullet icon="🎯" text="User-Centric — every decision serves the user" />
        <PhilosophyBullet icon="⚡" text="Performance First — speed is a feature" />
        <PhilosophyBullet icon="🏗️" text="Clean Architecture — maintainable by design" />
        <PhilosophyBullet icon="📚" text="Continuous Learning — always evolving" />
    </div>
);

const SkillBar = ({ name, value, color, animate }) => (
    <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{name}</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{value}%</span>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: animate ? `${value}%` : 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                style={{ height: '100%', borderRadius: 3, background: color }}
            />
        </div>
    </div>
);

const SkillGroup = ({ title, skills, color, animate }) => (
    <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{title}</div>
        {skills.map(s => <SkillBar key={s.name} name={s.name} value={s.value} color={color} animate={animate} />)}
    </div>
);

const SkillsContent = ({ animate }) => (
    <div>
        <SkillGroup title="Frontend" color="linear-gradient(90deg, #4facfe, #00f2fe)" animate={animate} skills={[
            { name: 'React', value: 92 }, { name: 'JavaScript', value: 88 }, { name: 'TypeScript', value: 85 },
            { name: 'Redux', value: 84 }, { name: 'Angular', value: 80 }, { name: 'Next.js', value: 78 },
        ]} />
        <SkillGroup title="Styling" color="linear-gradient(90deg, #f093fb, #f5576c)" animate={animate} skills={[
            { name: 'Tailwind CSS', value: 88 }, { name: 'Bootstrap', value: 85 }, { name: 'UI/UX', value: 86 }, { name: 'SASS', value: 80 },
        ]} />
        <SkillGroup title="Backend" color="linear-gradient(90deg, #43e97b, #38f9d7)" animate={animate} skills={[
            { name: 'Node.js', value: 85 }, { name: 'SQL', value: 82 }, { name: 'Firebase', value: 80 }, { name: 'MongoDB', value: 78 },
        ]} />
        <SkillGroup title="DevOps" color="linear-gradient(90deg, #fda085, #f6d365)" animate={animate} skills={[
            { name: 'Git', value: 88 }, { name: 'Jenkins', value: 78 }, { name: 'Docker', value: 75 }, { name: 'AWS', value: 75 },
        ]} />
    </div>
);

const ExpCard = ({ company, role, period, bullets }) => (
    <div style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 16,
        padding: '16px 18px',
        marginBottom: 12,
    }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 2 }}>{company}</div>
        <div style={{ fontSize: 13, color: '#f093fb', marginBottom: 2 }}>{role}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>{period}</div>
        {bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', fontSize: 12, marginTop: 1, flexShrink: 0 }}>›</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{b}</span>
            </div>
        ))}
    </div>
);

const ExperienceContent = () => (
    <div>
        <ExpCard
            company="Raymond James Financial"
            role="Sr. Engineer — Apps Development"
            period="Oct 2023 – Present"
            bullets={[
                'Led React/TypeScript migration boosting performance by 40% across enterprise dashboards.',
                'Built real-time data visualization tools reducing analyst workflow time by 35%.',
                'Architected micro-frontend solutions with modular component libraries.',
            ]}
        />
        <ExpCard
            company="Deloitte"
            role="Project Delivery Specialist"
            period="Jan 2022 – Oct 2023"
            bullets={[
                'Delivered large-scale Angular applications for Fortune 500 financial clients.',
                'Drove 35% improvement in user engagement through UX-focused redesigns.',
                'Mentored junior developers and established front-end best practices.',
            ]}
        />
        <ExpCard
            company="Virtusa"
            role="Senior Frontend Developer"
            period="Nov 2019 – Dec 2021"
            bullets={[
                'Built React component libraries used across 10+ internal projects.',
                'Implemented CI/CD pipelines reducing deployment time by 50%.',
            ]}
        />
        <ExpCard
            company="Exadata Inc"
            role="Frontend Developer — Angular"
            period="Dec 2018 – Nov 2019"
            bullets={[
                'Developed responsive Angular SPA for enterprise resource management.',
                'Integrated RESTful APIs and optimized state management with NgRx.',
            ]}
        />
        <ExpCard
            company="Exadata Inc"
            role="Frontend Developer — ReactJS"
            period="Jun 2018 – Dec 2018"
            bullets={[
                'Built core React UI components and established the initial design system.',
                'Collaborated with UX team to implement pixel-perfect interfaces.',
            ]}
        />
    </div>
);

const ProjectTag = ({ text, color }) => (
    <span style={{
        display: 'inline-block',
        background: color || 'rgba(79,172,254,0.15)',
        border: `1px solid ${color ? color.replace('0.15', '0.3') : 'rgba(79,172,254,0.3)'}`,
        borderRadius: 20,
        padding: '3px 10px',
        fontSize: 11,
        color: 'rgba(255,255,255,0.8)',
        marginRight: 6,
        marginBottom: 6,
    }}>{text}</span>
);

const ProjectSection = ({ title, items, itemColor }) => (
    <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {items.map((item, i) => <ProjectTag key={i} text={item} color={itemColor} />)}
        </div>
    </div>
);

const ProjectCard = ({ title, description, type }) => (
    <div style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14,
        padding: '14px 16px',
        marginBottom: 10,
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{title}</div>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: 10 }}>{type}</span>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{description}</div>
    </div>
);

const ProjectsContent = () => (
    <div>
        <ProjectSection
            title="NPM Packages"
            itemColor="rgba(67,233,123,0.15)"
            items={['typescript-utilitys', 'scss-utilitys', 'zapid', '@parsekit/string-to-boolean', '@poly-kit/number-utils']}
        />
        <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Apps</div>
        <ProjectCard title="Snake Game" description="Classic Snake game built with React and Canvas API — smooth 60fps gameplay with high score tracking." type="Game" />
        <ProjectCard title="Image Enhancer" description="Browser-based image enhancement tool using WebGL filters and Canvas manipulations." type="Tool" />

        <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12, marginTop: 20 }}>Articles</div>
        <ProjectCard title="Top 20 TypeScript 1-Liners" description="A popular Medium article covering powerful single-line TypeScript utilities." type="Article" />
        <ProjectCard title="String to Boolean Guide" description="Deep-dive into parsing string values as booleans in JavaScript and TypeScript." type="Article" />
        <ProjectCard title="poly-kit Article" description="Introduction to the poly-kit utility library ecosystem for JavaScript developers." type="Article" />
        <ProjectCard title="Zapid Article" description="How to use Zapid for ultra-fast unique ID generation in Node.js applications." type="Article" />
    </div>
);

const ContactLink = ({ icon, label, value, href }) => (
    <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14,
            padding: '14px 16px',
            marginBottom: 10,
            textDecoration: 'none',
            transition: 'background 0.2s',
        }}
    >
        <span style={{ fontSize: 20 }}>{icon}</span>
        <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{label}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{value}</div>
        </div>
        <span style={{ marginLeft: 'auto', fontSize: 14, color: 'rgba(255,255,255,0.25)' }}>›</span>
    </a>
);

const ContactContent = () => (
    <div>
        <ContactLink icon="✉️" label="Email" value="srikar.vamsi@gmail.com" href="mailto:srikar.vamsi@gmail.com" />
        <ContactLink icon="📞" label="Phone" value="(203) 843-1589" href="tel:+12038431589" />
        <ContactLink icon="📍" label="Location" value="Tampa, FL" href="#" />
        <div style={{ height: 16 }} />
        <ContactLink icon="💼" label="LinkedIn" value="linkedin.com/in/srikarphanikumarmarti" href="https://linkedin.com/in/srikarphanikumarmarti" />
        <ContactLink icon="🐙" label="GitHub" value="github.com/srikarphanikumar" href="https://github.com/srikarphanikumar" />
        <ContactLink icon="🌐" label="Portfolio" value="www.mspk.me" href="https://www.mspk.me" />
        <ContactLink icon="📦" label="npm" value="npmjs.com/~srikarphanikumar" href="https://www.npmjs.com/~srikarphanikumar" />
        <ContactLink icon="📚" label="Stack Overflow" value="stackoverflow.com/users/srikarphanikumar" href="https://stackoverflow.com/users/srikarphanikumar" />
        <ContactLink icon="✍️" label="Medium" value="medium.com/@srikarphanikumar" href="https://medium.com/@srikarphanikumar" />
    </div>
);

// ─── App icon component ───────────────────────────────────────────────────────

const AppIcon = ({ app, onOpen, size = 'normal' }) => {
    const [pressed, setPressed] = useState(false);
    const iconSize = size === 'dock' ? 52 : 62;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                position: 'relative',
                width: size === 'dock' ? 60 : 80,
            }}
            onClick={() => onOpen(app.id)}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => { setPressed(false); onOpen(app.id); }}
        >
            <motion.div
                animate={{ scale: pressed ? 0.85 : 1 }}
                transition={{ duration: 0.1 }}
                style={{
                    width: iconSize,
                    height: iconSize,
                    borderRadius: '22%',
                    background: app.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    position: 'relative',
                }}
            >
                <app.Icon />
                {app.badge && (
                    <div style={{
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        background: '#FF3B30',
                        border: '2px solid rgba(15,15,30,0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 10,
                        fontWeight: 700,
                        color: 'white',
                    }}>{app.badge}</div>
                )}
            </motion.div>
            {size !== 'dock' && (
                <div style={{
                    marginTop: 6,
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.9)',
                    textAlign: 'center',
                    textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                    letterSpacing: '0.01em',
                }}>{app.label}</div>
            )}
        </div>
    );
};

// ─── Bottom Sheet ─────────────────────────────────────────────────────────────

const BottomSheet = ({ appId, onClose }) => {
    const app = APP_ICONS.find(a => a.id === appId);
    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        if (appId === 'skills') {
            const t = setTimeout(() => setAnimateSkills(true), 300);
            return () => clearTimeout(t);
        } else {
            setAnimateSkills(false);
        }
    }, [appId]);

    const renderContent = () => {
        switch (appId) {
            case 'home':       return <HomeContent />;
            case 'about':      return <AboutContent />;
            case 'skills':     return <SkillsContent animate={animateSkills} />;
            case 'experience': return <ExperienceContent />;
            case 'projects':   return <ProjectsContent />;
            case 'contact':    return <ContactContent />;
            default:           return null;
        }
    };

    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '85%',
                background: 'rgba(15,15,30,0.97)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderTopLeftRadius: 28,
                borderTopRightRadius: 28,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 -10px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderBottom: 'none',
                zIndex: 100,
            }}
        >
            {/* Handle bar */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12, paddingBottom: 6, flexShrink: 0 }}>
                <div style={{ width: 40, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.2)' }} />
            </div>

            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '10px 20px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                flexShrink: 0,
            }}>
                <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '22%',
                    background: app?.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    {app && <app.Icon />}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'white', flex: 1 }}>{app?.label}</div>
                <button
                    onClick={onClose}
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.6)',
                        flexShrink: 0,
                    }}
                >
                    <CloseIcon />
                </button>
            </div>

            {/* Scrollable content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 40px', scrollbarWidth: 'none' }}>
                {renderContent()}
            </div>
        </motion.div>
    );
};

// ─── Status Bar ───────────────────────────────────────────────────────────────

const StatusBar = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px 8px',
            flexShrink: 0,
            zIndex: 10,
        }}>
            {/* Left: back button + time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 20,
                    padding: '5px 12px 5px 8px',
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 500,
                }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Themes
                </Link>
                <span style={{ fontSize: 16, fontWeight: 600, color: 'white' }}>{time}</span>
            </div>

            {/* Right: signal, wifi, battery */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {/* Signal bars */}
                <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
                    <rect x="0" y="8" width="3" height="4" rx="0.5" />
                    <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
                    <rect x="9" y="3" width="3" height="9" rx="0.5" />
                    <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
                </svg>
                {/* Wifi */}
                <svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M1 7c3-3 7-5 11-5s8 2 11 5" />
                    <path d="M4.5 10.5c2-2 4.5-3.5 7.5-3.5s5.5 1.5 7.5 3.5" />
                    <path d="M8 14c1-1 2.5-2 4-2s3 1 4 2" />
                    <circle cx="12" cy="17" r="1.5" fill="white" stroke="none" />
                </svg>
                {/* Battery */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <div style={{
                        width: 22,
                        height: 11,
                        border: '1.5px solid rgba(255,255,255,0.8)',
                        borderRadius: 3,
                        padding: '1.5px',
                        position: 'relative',
                    }}>
                        <div style={{ width: '80%', height: '100%', background: 'white', borderRadius: 1 }} />
                    </div>
                    <div style={{ width: 2, height: 5, background: 'rgba(255,255,255,0.6)', borderRadius: '0 1px 1px 0' }} />
                </div>
            </div>
        </div>
    );
};

// ─── Dock ─────────────────────────────────────────────────────────────────────

const Dock = ({ onOpen }) => {
    const dockApps = APP_ICONS.filter(a => DOCK_ICONS.includes(a.id));

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '12px 0 20px',
            flexShrink: 0,
            zIndex: 10,
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 36,
                padding: '12px 24px',
            }}>
                {dockApps.map(app => (
                    <AppIcon key={app.id} app={app} onOpen={onOpen} size="dock" />
                ))}
            </div>
        </div>
    );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function IOSPage() {
    const [activeApp, setActiveApp] = useState(null);

    const handleOpen = (id) => setActiveApp(id);
    const handleClose = () => setActiveApp(null);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
                position: 'relative',
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
            }}
        >
            {/* Status Bar */}
            <StatusBar />

            {/* App Grid */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px 20px',
                    padding: '20px 40px',
                    justifyItems: 'center',
                }}>
                    {APP_ICONS.map(app => (
                        <AppIcon key={app.id} app={app} onOpen={handleOpen} />
                    ))}
                </div>
            </div>

            {/* Dock */}
            <Dock onOpen={handleOpen} />

            {/* Bottom Sheet Overlay */}
            <AnimatePresence>
                {activeApp && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0,0,0,0.5)',
                                zIndex: 99,
                            }}
                        />
                        <BottomSheet key="sheet" appId={activeApp} onClose={handleClose} />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
