'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        id: 1,
        company: 'Raymond James Financial',
        role: 'Sr Engineer Apps Development',
        period: 'Oct 2023 - Current',
        description: 'Led a team of 5 developers to redesign the company website, improving load times by 40%. Developed reusable components in Angular, enhancing development efficiency by 25%. Mentored junior engineers, providing guidance and support in their career development.',
        achievements: ['40% improvement in load times', '25% increase in development efficiency'],
        skills: ['Angular', 'Team Leadership', 'Performance Optimization']
    },
    {
        id: 2,
        company: 'Deloitte',
        role: 'Project Delivery Specialist',
        period: 'Jan 2022 - Oct 2023',
        description: 'Accelerated API response time by 50% in 2 weeks by implementing caching and optimizing queries. Oversaw HTML to Angular Material & Ag-grid migration, implementing best practices and accessibility standards which resulted in improved navigation & 50% web traffic boost in 6 months. Resolved critical production issues with a turnaround time of less than 24 hours, maintaining a 99.9% uptime.',
        achievements: ['50% faster API response time', '50% increase in web traffic', '99.9% uptime'],
        skills: ['Angular Material', 'API Optimization', 'Accessibility', 'Issue Resolution']
    },
    {
        id: 3,
        company: 'Virtusa',
        role: 'Senior Frontend Developer',
        period: 'Nov 2019 - Dec 2021',
        description: 'Developed and integrated a comprehensive component library, boosting reusability and efficiency across multiple applications. Improved application accessibility compliance by implementing WCAG 2-0 standards, resulting in a 20% increase in user accessibility. Increased user engagement by 20% by implementing interactive UI elements with Angular.',
        achievements: ['Boosted reusability with component library', '20% increase in user accessibility', '20% increase in user engagement'],
        skills: ['Angular', 'Component Libraries', 'Accessibility', 'UI/UX']
    },
    {
        id: 4,
        company: 'Exadata Inc',
        role: 'Frontend Developer (Angular)',
        period: 'Dec 2018 - Nov 2019',
        description: 'Implemented SSO to streamline user experience and increase efficiency in data entry processes. Coordinated with the UX team to redesign the user interface, resulting in a 25% decrease in user errors and a 15% increase in user engagement. Managed a 95% uptime for all web applications through robust backend integration.',
        achievements: ['25% decrease in user errors', '15% increase in user engagement', '95% uptime'],
        skills: ['Angular', 'SSO Implementation', 'UI/UX', 'Backend Integration']
    },
    {
        id: 5,
        company: 'Exadata Inc',
        role: 'Frontend Developer (ReactJS)',
        period: 'Jun 2018 - Dec 2018',
        description: 'Improved app accessibility compliance by implementing WCAG 2.0 standards within 1 month, resulting in a 20% increase in user accessibility. Completed integration of a third-party analytics app in 2 weeks, providing insights that led to a 15% increase in conversion rates.',
        achievements: ['20% increase in user accessibility', '15% increase in conversion rates'],
        skills: ['ReactJS', 'Accessibility', 'Third-Party Integrations']
    },
    {
        id: 6,
        company: 'University of New Haven',
        role: 'Teaching Assistant',
        period: 'August 2016 - May 2018',
        description: 'Assisted professors in teaching, grading assignments, and providing support to students in understanding complex mathematical concepts.',
        achievements: ['Improved students', 'More interest in mathematics for a couple of students'],
        skills: ['Calculus', 'Algebra', 'Trigonometry']
    },
];


const TimelineItem = ({ experience, isSelected, onClick }) => (
    <motion.div
        className={`timeline-item ${isSelected ? 'selected' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        <motion.div className="timeline-point" />
        <motion.div className="timeline-content">
            <h3>{experience.company}</h3>
            <p>{experience.period}</p>
        </motion.div>
    </motion.div>
);

const ExperienceDetails = ({ experience }) => (
    <div className="experience-details">
        <h2>{experience.company}</h2>
        <h3>{experience.role}</h3>
        <p>{experience.period}</p>
        <div className="description-box">
            <ul>
                {experience.description.split('.').map((desc, index) =>
                    desc.trim() && <li key={index}>{desc.trim()}.</li>
                )}
            </ul>
        </div>
        <div className="achievements">
            <h4>Key Achievements:</h4>
            <ul>
                {experience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </div>
        <div className="skills">
            <h4>Skills Used:</h4>
            <div className="skill-tags">
                {experience.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    </div>
);


const CShapeTimeline = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0].id);

    useEffect(() => {
        // Ensure the timeline is fully visible on load
        const timeline = document.querySelector('.timeline-container');
        if (timeline) {
            timeline.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);

    return (
        <div className="c-shape-timeline">
            <div className="timeline-container">
                <div className="timeline-items">
                    {experiences.map((exp) => (
                        <TimelineItem
                            key={exp.id}
                            experience={exp}
                            isSelected={selectedExperience === exp.id}
                            onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                        />
                    ))}
                </div>
                <AnimatePresence>
                    {selectedExperience && (
                        <motion.div
                            className="timeline-details"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ExperienceDetails experience={experiences.find(exp => exp.id === selectedExperience)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CShapeTimeline;