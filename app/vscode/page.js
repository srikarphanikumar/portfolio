'use client';

import { useState } from 'react';

// ─── VS Code colour palette ───────────────────────────────────────────────────
const C = {
    bg:         '#1e1e1e',
    sidebar:    '#252526',
    activityBg: '#333333',
    tabBar:     '#2d2d2d',
    tabActive:  '#1e1e1e',
    tabInactive:'#2d2d2d',
    statusBar:  '#007acc',
    lineNum:    '#858585',
    text:       '#d4d4d4',
    keyword:    '#569cd6',
    string:     '#ce9178',
    comment:    '#6a9955',
    prop:       '#9cdcfe',
    number:     '#b5cea8',
    type:       '#4ec9b0',
    punct:      '#d4d4d4',
    fn:         '#dcdcaa',
    border:     '#404040',
    hoverBg:    '#2a2d2e',
    activeBg:   '#37373d',
};

// ─── Tiny tagged-span helpers ─────────────────────────────────────────────────
const Kw  = ({ c }) => <span style={{ color: C.keyword  }}>{c}</span>;
const Str = ({ c }) => <span style={{ color: C.string   }}>{c}</span>;
const Cm  = ({ c }) => <span style={{ color: C.comment  }}>{c}</span>;
const Pr  = ({ c }) => <span style={{ color: C.prop     }}>{c}</span>;
const Nm  = ({ c }) => <span style={{ color: C.number   }}>{c}</span>;
const Ty  = ({ c }) => <span style={{ color: C.type     }}>{c}</span>;
const Fn  = ({ c }) => <span style={{ color: C.fn       }}>{c}</span>;
const Tx  = ({ c }) => <span style={{ color: C.text     }}>{c}</span>;

// ─── Code block wrapper ───────────────────────────────────────────────────────
function CodeBlock({ lines }) {
    return (
        <pre style={{ margin: 0, padding: 0, fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace", fontSize: '13px', lineHeight: '21px' }}>
            {lines.map((lineContent, i) => (
                <div key={i} style={{ display: 'flex', minHeight: '21px' }}>
                    <span
                        style={{
                            color: C.lineNum,
                            minWidth: '48px',
                            paddingRight: '16px',
                            textAlign: 'right',
                            userSelect: 'none',
                            flexShrink: 0,
                        }}
                    >
                        {i + 1}
                    </span>
                    <span style={{ color: C.text }}>{lineContent}</span>
                </div>
            ))}
        </pre>
    );
}

// ─── File content renderers ───────────────────────────────────────────────────

function AboutContent() {
    const lines = [
        <><Kw c="export" /> <Kw c="const" /> <Pr c="developer" /> <Tx c="=" /> {'{'}</>,
        <>&nbsp;&nbsp;<Pr c="name" /><Tx c=": " /><Str c={`"Srikar Phani Kumar Marti"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="role" /><Tx c=": " /><Str c={`"Senior Frontend Engineer"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="location" /><Tx c=": " /><Str c={`"Tampa, FL 33559"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="email" /><Tx c=": " /><Str c={`"srikar.vamsi@gmail.com"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="education" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"MBA - Information Technology @ Campbellsville University (2023)"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"MS - Electrical Engineering @ University of New Haven (2018)"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"BS - Electronics & Communication @ J.N.T.U. Hyderabad (2015)"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Pr c="philosophy" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"User-Centric Design: every line of code improves UX"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Performance First: consistently achieving 20-40% improvements"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Clean Architecture: scalable micro-frontend solutions"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Continuous Learning: always staying ahead of the curve"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Tx c="]," /></>,
        <><Tx c="};" /></>,
    ];
    return <CodeBlock lines={lines} />;
}

function SkillsContent() {
    const skillData = {
        frontend: { React: 92, TypeScript: 85, JavaScript: 88, Angular: 80, 'Next.js': 78, Redux: 84, 'HTML5/CSS3': 90, 'a11y/WCAG': 82 },
        styling:  { Tailwind: 88, Bootstrap: 85, 'SASS/SCSS': 80, 'UI/UX Design': 86 },
        backend:  { 'Node.js': 85, SQL: 82, MongoDB: 78, Firebase: 80 },
        devops:   { Git: 88, Docker: 75, Jenkins: 78, AWS: 75 },
        mobile:   { 'React Native': 79 },
    };

    const codeLines = [
        <><Kw c="export" /> <Kw c="const" /> <Pr c="skills" /> <Tx c="=" /> {'{'}</>,
        <>&nbsp;&nbsp;<Pr c="frontend" /><Tx c=": {" /> <Pr c="React" /><Tx c=": " /><Nm c="92" /><Tx c=", " /><Pr c="TypeScript" /><Tx c=": " /><Nm c="85" /><Tx c=", " /><Pr c="JavaScript" /><Tx c=": " /><Nm c="88" /><Tx c=", " /><Pr c="Angular" /><Tx c=": " /><Nm c="80" /><Tx c=" }," /></>,
        <>&nbsp;&nbsp;<Pr c="styling" /><Tx c=": {" /> <Pr c="Tailwind" /><Tx c=": " /><Nm c="88" /><Tx c=", " /><Pr c="Bootstrap" /><Tx c=": " /><Nm c="85" /><Tx c=", " /><Pr c={`"SASS/SCSS"`} /><Tx c=": " /><Nm c="80" /><Tx c=" }," /></>,
        <>&nbsp;&nbsp;<Pr c="backend" /><Tx c=": {" /> <Pr c={`"Node.js"`} /><Tx c=": " /><Nm c="85" /><Tx c=", " /><Pr c="SQL" /><Tx c=": " /><Nm c="82" /><Tx c=", " /><Pr c="MongoDB" /><Tx c=": " /><Nm c="78" /><Tx c=" }," /></>,
        <>&nbsp;&nbsp;<Pr c="devops" /><Tx c=": {" /> <Pr c="Git" /><Tx c=": " /><Nm c="88" /><Tx c=", " /><Pr c="Docker" /><Tx c=": " /><Nm c="75" /><Tx c=", " /><Pr c="Jenkins" /><Tx c=": " /><Nm c="78" /><Tx c=", " /><Pr c="AWS" /><Tx c=": " /><Nm c="75" /><Tx c=" }," /></>,
        <>&nbsp;&nbsp;<Pr c="mobile" /><Tx c=": {" /> <Pr c={`"React Native"`} /><Tx c=": " /><Nm c="79" /><Tx c=" }," /></>,
        <><Tx c="};" /></>,
    ];

    const categoryColors = {
        frontend: '#569cd6',
        styling:  '#4ec9b0',
        backend:  '#ce9178',
        devops:   '#dcdcaa',
        mobile:   '#9cdcfe',
    };

    return (
        <div>
            <CodeBlock lines={codeLines} />
            <div style={{ marginTop: '32px', paddingLeft: '64px', paddingRight: '24px' }}>
                <div style={{ color: C.comment, fontFamily: 'monospace', fontSize: '13px', marginBottom: '16px' }}>
                    {'// ── Visual Skills Overview ──────────────────────────────'}
                </div>
                {Object.entries(skillData).map(([category, skills]) => (
                    <div key={category} style={{ marginBottom: '24px' }}>
                        <div style={{ color: categoryColors[category], fontFamily: 'monospace', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
                            {category}
                        </div>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            {Object.entries(skills).map(([skill, level]) => (
                                <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ color: C.prop, fontFamily: 'monospace', fontSize: '12px', minWidth: '120px', flexShrink: 0 }}>{skill}</span>
                                    <div style={{ flex: 1, height: '6px', backgroundColor: '#3e3e42', borderRadius: '3px', overflow: 'hidden', maxWidth: '300px' }}>
                                        <div style={{ width: `${level}%`, height: '100%', backgroundColor: categoryColors[category], borderRadius: '3px', transition: 'width 0.3s ease' }} />
                                    </div>
                                    <span style={{ color: C.number, fontFamily: 'monospace', fontSize: '12px', minWidth: '32px' }}>{level}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ExperienceContent() {
    const lines = [
        <><Kw c="export" /> <Kw c="const" /> <Pr c="experience" /> <Tx c="= [" /></>,
        <>&nbsp;&nbsp;<Tx c="  {" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="company" /><Tx c=": " /><Str c={`"Raymond James Financial"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="role" /><Tx c=": " /><Str c={`"Sr Engineer Apps Development"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="period" /><Tx c=": " /><Str c={`"Oct 2023 - Present"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="highlights" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Led team of 5 → 40% faster load times"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Reusable Angular components → 25% efficiency boost"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Implemented CI/CD workflows"`} /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Tx c="  }," /></>,
        <>&nbsp;&nbsp;<Tx c="  {" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="company" /><Tx c=": " /><Str c={`"Deloitte"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="role" /><Tx c=": " /><Str c={`"Project Delivery Specialist"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="period" /><Tx c=": " /><Str c={`"Jan 2022 - Oct 2023"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="highlights" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"API response 50% faster via caching"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"HTML → Angular Material → 50% web traffic boost"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"99.9% uptime"`} /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Tx c="  }," /></>,
        <>&nbsp;&nbsp;<Tx c="  {" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="company" /><Tx c=": " /><Str c={`"Virtusa"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="role" /><Tx c=": " /><Str c={`"Senior Frontend Developer"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="period" /><Tx c=": " /><Str c={`"Nov 2019 - Dec 2021"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="highlights" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Component library → reusability across apps"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"WCAG 2.0 → 20% accessibility boost"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"20% user engagement increase"`} /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Tx c="  }," /></>,
        <>&nbsp;&nbsp;<Tx c="  {" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="company" /><Tx c=": " /><Str c={`"Exadata Inc"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="role" /><Tx c=": " /><Str c={`"Frontend Developer (Angular)"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="period" /><Tx c=": " /><Str c={`"Dec 2018 - Nov 2019"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="highlights" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"SSO implementation"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"UI redesign → 25% fewer user errors"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"95% uptime"`} /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Tx c="  }," /></>,
        <>&nbsp;&nbsp;<Tx c="  {" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="company" /><Tx c=": " /><Str c={`"Exadata Inc"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="role" /><Tx c=": " /><Str c={`"Frontend Developer (ReactJS)"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="period" /><Tx c=": " /><Str c={`"Jun 2018 - Dec 2018"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Pr c="highlights" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"WCAG 2.0 in 1 month → 20% accessibility boost"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Analytics integration → 15% conversion increase"`} /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Tx c="  }," /></>,
        <><Tx c="];" /></>,
    ];
    return <CodeBlock lines={lines} />;
}

function ProjectsContent() {
    const lines = [
        <><Kw c="export" /> <Kw c="const" /> <Pr c="projects" /> <Tx c="= {" /></>,
        <>&nbsp;&nbsp;<Pr c="npm" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"typescript-utilitys"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"scss-utilitys"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"zapid"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"@parsekit/string-to-boolean"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"@poly-kit/number-utils"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Pr c="apps" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Tx c="{ " /><Pr c="name" /><Tx c=": " /><Str c={`"Snake Game"`} /><Tx c=", " /><Pr c="url" /><Tx c=": " /><Str c={`"snake-game-five-gamma.vercel.app"`} /><Tx c=" }," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Tx c="{ " /><Pr c="name" /><Tx c=": " /><Str c={`"Image Enhancer"`} /><Tx c=", " /><Pr c="url" /><Tx c=": " /><Str c={`"image-enhancer-blush.vercel.app"`} /><Tx c=" }," /></>,
        <>&nbsp;&nbsp;<Tx c="]," /></>,
        <>&nbsp;&nbsp;<Pr c="articles" /><Tx c=": [" /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Top 20 1-Liners in TypeScript"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"String to Boolean Conversion Guide"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Supercharge Apps with poly-kit/number-utils"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;&nbsp;&nbsp;<Str c={`"Zapid: ID Generation Reinvented"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Tx c="]," /></>,
        <><Tx c="};" /></>,
    ];
    return <CodeBlock lines={lines} />;
}

function ContactContent() {
    const lines = [
        <><Kw c="export" /> <Kw c="const" /> <Pr c="contact" /> <Tx c="= {" /></>,
        <>&nbsp;&nbsp;<Pr c="email" /><Tx c=": " /><Str c={`"srikar.vamsi@gmail.com"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="phone" /><Tx c=": " /><Str c={`"(203) 843-1589"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="location" /><Tx c=": " /><Str c={`"Tampa, FL 33559"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="portfolio" /><Tx c=": " /><Str c={`"www.mspk.me"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="linkedin" /><Tx c=": " /><Str c={`"linkedin.com/in/mspkumar"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="github" /><Tx c=": " /><Str c={`"github.com/srikarphanikumar"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="npm" /><Tx c=": " /><Str c={`"npmjs.com/~srikar497"`} /><Tx c="," /></>,
        <>&nbsp;&nbsp;<Pr c="medium" /><Tx c=": " /><Str c={`"medium.com/@srikar.vamsi"`} /><Tx c="," /></>,
        <><Tx c="};" /></>,
    ];
    return <CodeBlock lines={lines} />;
}

// ─── File registry ────────────────────────────────────────────────────────────
const FILES = [
    { name: 'about.js',      icon: '📄', component: AboutContent      },
    { name: 'skills.js',     icon: '📊', component: SkillsContent     },
    { name: 'experience.js', icon: '💼', component: ExperienceContent },
    { name: 'projects.js',   icon: '🚀', component: ProjectsContent   },
    { name: 'contact.js',    icon: '📬', component: ContactContent    },
];

// ─── SVG activity bar icons ───────────────────────────────────────────────────
const ExplorerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h8l2 2h8v14H3V3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);
const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16.5 16.5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);
const GitIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 6h6M6 8v8M8 18h4a4 4 0 004-4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);
const ExtensionsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function VSCodePage() {
    const [openTabs, setOpenTabs]         = useState(['about.js']);
    const [activeTab, setActiveTab]       = useState('about.js');
    const [activeActivity, setActiveActivity] = useState('explorer');

    const openFile = (filename) => {
        if (!openTabs.includes(filename)) {
            setOpenTabs(prev => [...prev, filename]);
        }
        setActiveTab(filename);
    };

    const closeTab = (e, filename) => {
        e.stopPropagation();
        const idx = openTabs.indexOf(filename);
        const next = openTabs.filter(t => t !== filename);
        setOpenTabs(next);
        if (activeTab === filename) {
            setActiveTab(next[Math.max(0, idx - 1)] || null);
        }
    };

    const ActiveContent = FILES.find(f => f.name === activeTab)?.component;

    const activityIcons = [
        { id: 'explorer',   Icon: ExplorerIcon,   title: 'Explorer'   },
        { id: 'search',     Icon: SearchIcon,     title: 'Search'     },
        { id: 'git',        Icon: GitIcon,        title: 'Source Control' },
        { id: 'extensions', Icon: ExtensionsIcon, title: 'Extensions' },
    ];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: C.bg,
                fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
        >
            {/* ── Title bar ── */}
            <div
                style={{
                    height: '30px',
                    backgroundColor: '#3c3c3c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    borderBottom: `1px solid ${C.border}`,
                }}
            >
                <span style={{ color: '#cccccc', fontSize: '12px', fontFamily: 'monospace' }}>
                    portfolio — VS Code
                </span>
            </div>

            {/* ── Main body ── */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                {/* ── Activity bar ── */}
                <div
                    style={{
                        width: '48px',
                        backgroundColor: C.activityBg,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: '8px',
                        gap: '4px',
                        flexShrink: 0,
                        borderRight: `1px solid ${C.border}`,
                    }}
                >
                    {activityIcons.map(({ id, Icon, title }) => (
                        <button
                            key={id}
                            title={title}
                            onClick={() => setActiveActivity(id === activeActivity ? null : id)}
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: activeActivity === id ? '#ffffff' : '#858585',
                                borderLeft: activeActivity === id ? `2px solid #ffffff` : '2px solid transparent',
                                padding: 0,
                                transition: 'color 0.15s',
                            }}
                        >
                            <Icon />
                        </button>
                    ))}
                </div>

                {/* ── File explorer sidebar ── */}
                {activeActivity === 'explorer' && (
                    <div
                        style={{
                            width: '220px',
                            backgroundColor: C.sidebar,
                            display: 'flex',
                            flexDirection: 'column',
                            flexShrink: 0,
                            borderRight: `1px solid ${C.border}`,
                            overflow: 'hidden',
                        }}
                    >
                        {/* Sidebar header */}
                        <div
                            style={{
                                padding: '8px 12px',
                                color: '#bbbbbb',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                borderBottom: `1px solid ${C.border}`,
                                flexShrink: 0,
                            }}
                        >
                            Explorer
                        </div>

                        {/* Folder label */}
                        <div
                            style={{
                                padding: '6px 12px',
                                color: '#e2e2e2',
                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                flexShrink: 0,
                            }}
                        >
                            <span style={{ color: C.lineNum, fontSize: '10px' }}>▼</span>
                            <span>PORTFOLIO</span>
                        </div>

                        {/* File list */}
                        <div style={{ overflowY: 'auto', flex: 1 }}>
                            {FILES.map(file => (
                                <div
                                    key={file.name}
                                    onClick={() => openFile(file.name)}
                                    style={{
                                        padding: '4px 12px 4px 28px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '13px',
                                        backgroundColor: activeTab === file.name ? C.activeBg : 'transparent',
                                        color: activeTab === file.name ? '#ffffff' : '#cccccc',
                                        transition: 'background 0.1s',
                                    }}
                                    onMouseEnter={e => { if (activeTab !== file.name) e.currentTarget.style.backgroundColor = C.hoverBg; }}
                                    onMouseLeave={e => { if (activeTab !== file.name) e.currentTarget.style.backgroundColor = 'transparent'; }}
                                >
                                    <span style={{ fontSize: '12px' }}>
                                        {/* JS file icon color */}
                                        <span style={{ color: '#f5de19' }}>JS</span>
                                    </span>
                                    <span>{file.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Editor area ── */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                    {/* Tab bar */}
                    <div
                        style={{
                            height: '35px',
                            backgroundColor: C.tabBar,
                            display: 'flex',
                            alignItems: 'stretch',
                            flexShrink: 0,
                            borderBottom: `1px solid ${C.border}`,
                            overflowX: 'auto',
                            overflowY: 'hidden',
                        }}
                    >
                        {openTabs.map(tab => {
                            const isActive = tab === activeTab;
                            return (
                                <div
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '0 14px',
                                        cursor: 'pointer',
                                        backgroundColor: isActive ? C.tabActive : C.tabInactive,
                                        color: isActive ? '#ffffff' : '#969696',
                                        fontSize: '13px',
                                        borderRight: `1px solid ${C.border}`,
                                        borderTop: isActive ? `1px solid ${C.statusBar}` : '1px solid transparent',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                        fontFamily: 'monospace',
                                        transition: 'background 0.1s',
                                        minWidth: 0,
                                    }}
                                >
                                    <span style={{ color: '#f5de19', fontSize: '10px', fontWeight: 'bold' }}>JS</span>
                                    <span>{tab}</span>
                                    <button
                                        onClick={e => closeTab(e, tab)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: isActive ? '#ffffff' : '#969696',
                                            padding: '0 2px',
                                            fontSize: '14px',
                                            lineHeight: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderRadius: '3px',
                                            transition: 'background 0.1s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#5a5a5a'; }}
                                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                                    >
                                        ×
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Breadcrumb */}
                    {activeTab && (
                        <div
                            style={{
                                height: '22px',
                                backgroundColor: C.bg,
                                display: 'flex',
                                alignItems: 'center',
                                paddingLeft: '12px',
                                gap: '4px',
                                flexShrink: 0,
                                borderBottom: `1px solid ${C.border}`,
                            }}
                        >
                            <span style={{ color: '#858585', fontSize: '12px' }}>portfolio</span>
                            <span style={{ color: '#858585', fontSize: '12px' }}>›</span>
                            <span style={{ color: '#cccccc', fontSize: '12px' }}>{activeTab}</span>
                        </div>
                    )}

                    {/* Editor content */}
                    <div
                        style={{
                            flex: 1,
                            backgroundColor: C.bg,
                            overflowY: 'auto',
                            overflowX: 'auto',
                            padding: '16px 0',
                        }}
                    >
                        {ActiveContent ? (
                            <ActiveContent />
                        ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    gap: '16px',
                                }}
                            >
                                <div style={{ color: '#3c3c3c', fontSize: '80px' }}>{'</>'}</div>
                                <div style={{ color: C.lineNum, fontSize: '18px', fontFamily: 'monospace' }}>
                                    No file open — select a file from the explorer
                                </div>
                                <div style={{ color: '#3c3c3c', fontSize: '13px', fontFamily: 'monospace' }}>
                                    Click any file in the sidebar to open it
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Status bar ── */}
            <div
                style={{
                    height: '22px',
                    backgroundColor: C.statusBar,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    flexShrink: 0,
                    color: '#ffffff',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>⎇ main</span>
                    {activeTab && <span>⚡ {activeTab}</span>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>JavaScript</span>
                    <span>UTF-8</span>
                    <span>Ln 1, Col 1</span>
                    <span>Spaces: 2</span>
                </div>
            </div>
        </div>
    );
}
