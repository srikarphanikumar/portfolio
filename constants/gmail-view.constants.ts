export const EMAILS = {
    home: [
        {
            id: 'home-1',
            subject: 'Welcome to My Portfolio',
            preview: 'Senior Frontend Engineer with 6+ years of experience in Angular and React...',
            content: `
                <p>Welcome to my portfolio! I'm Srikar Phani Kumar Marti, a Senior Frontend Engineer with over 6 years of experience specializing in Angular and React.</p>
                <p>Throughout my career, I've:</p>
                <ul>
                    <li>Successfully delivered MVPs and implemented micro frontend architectures</li>
                    <li>Boosted team productivity by 30% through innovative solutions</li>
                    <li>Developed custom Angular Material libraries</li>
                    <li>Led cross-functional teams in delivering multiple major projects</li>
                </ul>
                <p>Feel free to explore my portfolio to learn more about my journey and achievements.</p>
            `,
            date: 'Jan 30',
            attachments: [{ name: 'Srikar-Phani-Kumar-M-Resume.pdf' }]
        },
        {
            id: 'home-2',
            subject: 'Recent Achievements at Raymond James',
            preview: 'Leading development and driving significant improvements in frontend development...',
            content: `
                <p>I'm excited to share some recent highlights from my current role at Raymond James:</p>
                <ul>
                    <li>Increased user engagement by 35% through highly interactive web applications</li>
                    <li>Led successful delivery of 4+ major projects</li>
                    <li>Optimized application performance by 20%</li>
                    <li>Implemented efficient CI/CD workflows</li>
                </ul>
                <p>These achievements reflect my commitment to delivering high-quality solutions and driving continuous improvement.</p>
            `,
            date: 'Jan 29'
        }
    ],
    about: [
        {
            id: 'about-1',
            subject: 'Meet Srikar - Senior Frontend Engineer',
            preview: 'A journey from Electronics Engineering to Frontend Development...',
            content: `
                <div style="margin-bottom: 20px;">
                    <img src="/Srikar.jpeg" alt="Srikar Phani Kumar Marti" style="max-width: 300px; border-radius: 8px;" />
                </div>
                <p>Hello! I'm Srikar, a Senior Frontend Engineer currently working at Raymond James in Saint Petersburg, FL.</p>
                <p>My journey began with a Bachelor's in Electronics and Communication, followed by a Master's in Electrical Engineering from the University of New Haven. I recently completed my MBA in Information Technology from Campbellsville University, combining technical expertise with business acumen.</p>
                <p>What drives me is the opportunity to build scalable, user-friendly applications that make a real difference. Throughout my career at companies like Raymond James, Deloitte, and Virtusa, I've consistently delivered solutions that enhance user experience and drive business growth.</p>
            `,
            date: 'Jan 28'
        },
        {
            id: 'about-2',
            subject: 'My Development Philosophy',
            preview: 'Committed to clean code, continuous learning, and impactful solutions...',
            content: `
                <p>My approach to software development is built on several key principles:</p>
                <ul>
                    <li>User-Centric Design: Every line of code should contribute to a better user experience</li>
                    <li>Performance First: Consistently achieving 20-40% performance improvements</li>
                    <li>Clean Architecture: Implementing scalable solutions like micro frontend architecture</li>
                    <li>Continuous Learning: Staying updated with the latest technologies and best practices</li>
                </ul>
                <p>These principles have helped me deliver successful projects and mentor team members throughout my career.</p>
            `,
            date: 'Jan 27'
        }
    ],
    skills: [
        {
            id: 'skills-1',
            subject: 'Technical Expertise Overview',
            preview: 'Comprehensive skillset in frontend development and beyond...',
            content: `
                <p>Core Technologies:</p>
                <ul>
                    <li>Frontend Development:
                        <ul>
                            <li>HTML5 / CSS3 / JavaScript / TypeScript</li>
                            <li>Angular with RXJS and NgRx</li>
                            <li>React JS with Redux Toolkit and Next JS</li>
                        </ul>
                    </li>
                    <li>Backend & Database:
                        <ul>
                            <li>Python with Django and Flask</li>
                            <li>Node.js</li>
                            <li>SQL and Oracle DB</li>
                        </ul>
                    </li>
                    <li>DevOps & Tools:
                        <ul>
                            <li>Jenkins / TFS</li>
                            <li>Git / Github / Bitbucket</li>
                            <li>JIRA for project management</li>
                        </ul>
                    </li>
                </ul>
            `,
            date: 'Jan 26'
        },
        {
            id: 'skills-2',
            subject: 'Architecture & Development Practices',
            preview: 'Expertise in micro frontend architecture and modern development practices...',
            content: `
                <p>Specialized Areas:</p>
                <ul>
                    <li>Micro Frontend Architecture Implementation
                        <ul>
                            <li>Module Federation</li>
                            <li>Independent deployment strategies</li>
                            <li>Scalable component design</li>
                        </ul>
                    </li>
                    <li>Performance Optimization
                        <ul>
                            <li>Lazy loading implementation</li>
                            <li>Bundle size optimization</li>
                            <li>Runtime performance tuning</li>
                        </ul>
                    </li>
                </ul>
            `,
            date: 'Jan 25'
        }
    ],
    experience: [
        {
            id: 'exp-1',
            subject: 'Current Role: Senior Application Engineer at Raymond James',
            preview: 'Leading frontend development and driving significant improvements...',
            content: `
                <p>At Raymond James (October 2023 - Present), I've achieved significant milestones:</p>
                <ul>
                    <li>Increased user engagement by 35% through interactive web applications</li>
                    <li>Led cross-functional teams in delivering 4+ major projects</li>
                    <li>Optimized application performance by 20%</li>
                    <li>Implemented CI/CD workflows for streamlined deployments</li>
                </ul>
                <p>Key Outcome: Increased team productivity by 30% and received positive feedback from 85% of users.</p>
            `,
            date: 'Jan 24',
            attachments: [{ name: 'Srikar-Phani-Kumar-M-Resume.pdf' }]
        },
        {
            id: 'exp-2',
            subject: 'Previous Role: Senior Frontend Developer at Deloitte',
            preview: 'Implementing innovative solutions and delivering rapid results...',
            content: `
                <p>During my time at Deloitte (January 2022 - October 2023):</p>
                <ul>
                    <li>Implemented seamless Angular-React transitions, increasing site traffic by 25%</li>
                    <li>Delivered MVP in React within one month, accelerating launch by 2 months</li>
                    <li>Improved data retrieval efficiency by 40%</li>
                </ul>
                <p>Key Outcome: Achieved 20% increase in application performance and 50% improvement in team efficiency.</p>
            `,
            date: 'Jan 23'
        }
    ],
    projects: [
        {
            id: 'proj-1',
            subject: 'Featured Projects & Publications',
            preview: 'Overview of key projects and published packages...',
            content: `
                <p>Notable Projects:</p>
                <ul>
                    <li>Custom Angular Material Library
                        <ul>
                            <li>Improved UI consistency across multiple projects</li>
                            <li>Reduced development time by 20%</li>
                        </ul>
                    </li>
                    <li>Micro Frontend Architecture Implementation
                        <ul>
                            <li>Enhanced scalability and maintainability</li>
                            <li>Increased team productivity by 30%</li>
                        </ul>
                    </li>
                </ul>
                <p>Published NPM Packages:</p>
                <ul>
                    <li>typescript-utilitys, scss-utilitys, zapid</li>
                    <li>@parsekit-string-to-boolean</li>
                    <li>@poly-kit/number-utils</li>
                </ul>
            `,
            date: 'Jan 22',
            attachments: [{ name: 'project-demos.pdf' }]
        }
    ],
    contact: [
        {
            id: 'contact-1',
            subject: "Let's Connect!",
            preview: 'Multiple ways to get in touch and follow my work...',
            content: `
                <p>I'm always open to discussing new opportunities and collaborations. Here's how you can reach me:</p>
                <ul>
                    <li>📧 Email: srikar.vamsi@gmail.com</li>
                    <li>📍 Location: Tampa, FL 33559</li>
                    <li>📱 Phone: (203) 843-1589</li>
                </ul>
                <p>Professional Profiles:</p>
                <ul>
                    <li>Portfolio: www.mspk.me</li>
                    <li>LinkedIn: www.linkedin.com/in/mspkumar</li>
                    <li>GitHub: github.com/srikarphanikumar</li>
                    <li>NPM: npmjs.com/~srikar497</li>
                    <li>Stack Overflow: stackoverflow.com/users/15034752/srikar-phani-kumar-m</li>
                </ul>
            `,
            date: 'Jan 21'
        }
    ]
};

export const NAVIGATION_ITEMS = [
    { id: 'home', label: 'Home', icon: 'Mail', count: 2 },
    { id: 'about', label: 'About', icon: 'User', count: 2 },
    { id: 'skills', label: 'Skills', icon: 'Code', count: 2 },
    { id: 'experience', label: 'Experience', icon: 'Briefcase', count: 2 },
    { id: 'projects', label: 'Projects', icon: 'FolderOpen', count: 1 },
    { id: 'contact', label: 'Contact', icon: 'Phone', count: 1 }
];