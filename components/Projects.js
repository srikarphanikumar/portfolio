const Projects = () => {
    const projects = [
        { title: 'Project 1', description: 'Description of Project 1' },
        { title: 'Project 2', description: 'Description of Project 2' },
        { title: 'Project 3', description: 'Description of Project 3' },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.title} className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;