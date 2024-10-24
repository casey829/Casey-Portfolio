import React from "react";

function Work() {
    // Projects data array
    const projects = [
        {
            title: "Pannju Hardware",
            description: "Construction professionals can easily explore everything Pannjuhardware has to offer!",
            image: "./images/Pannju.png",
            githubLink: "https://github.com/casey829/Pannju",
            liveLink: "https://www.pannjuhardware.co.ke/",
            technologies: ["Javascript", "React", "TailwindCss"]
        },
        {
            title: "Project Two",
            description: "Description of your second project highlighting key features.",
            image: "/project2.jpg",
            githubLink: "https://github.com/yourusername/project2",
            liveLink: "https://www.pannjuhardware.co.ke/",
            technologies: ["Python", "Flask", "PostgreSQL"]
        },
        // Add more projects as needed
    ];

    return (
        <div id="work" className="min-h-screen bg-[#DDD5CE] pt-20 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                    Digital Storyteller: My Work in Building Intuitive and Scalable Web Solutions
                </h1>
                
                {/* Decorative line */}
                <div className="w-32 h-1 bg-black mx-auto mb-12"></div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 md:h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay with links */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                
                                {/* Technologies Used */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;