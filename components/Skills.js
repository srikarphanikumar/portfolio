const Skills = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'];

    return (
        <section className="min-h-screen bg-gray-100 py-20 flex items-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map((skill) => (
                        <div key={skill} className="bg-white p-4 rounded shadow text-center">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;