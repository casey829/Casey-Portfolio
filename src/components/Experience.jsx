import React from "react";

function Experience() {
    const techStack = [
        { name: "HTML5", src: "/logohtml.jpg" },
        { name: "JavaScript", src: "/logojavascript.png" },
        { name: "React", src: "/logoreact.png" },
        { name: "Python", src: "/logopython.jpeg" },
        { name: "Flask", src: "/logoflask.jpeg" },
        { name: "SQL", src: "/logosql.jpeg" },
        { name: "Git", src: "/logogit.png" },
        { name: "Postman", src: "/logopostman.png" },
        { name: "Postgresql", src: "/logopost.png" },
        { name: "Figma", src: "/figma.png"}
    ];

    return (
        <div id="experience" className="min-h-screen bg-[#DDD5CE] flex flex-col items-center justify-start pt-20">
            <div className="max-w-4xl mx-auto px-8 md:px-24">
                <h1 className="text-4xl md:text-4xl font-bold text-center mb-4">Experience</h1>
                
                <div className="w-32 h-1 bg-black mx-auto mb-12"></div>
                
                <div className="space-y-8">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                        I'm a dedicated professional with a strong foundation in web development and backend technologies.
                        With expertise in HTML, CSS, and JavaScript (React), I craft responsive, user-friendly interfaces that provide seamless digital experiences. 
                        On the backend, I utilize Python (Flask) to develop robust server-side applications, complemented by solid skills in SQL for efficient database management.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                        I'm also experienced with tools like Postman for API testing, Git for version control, 
                        and the full deployment process, ensuring that projects move smoothly from development to production. 
                        My focus is always on delivering high-quality, maintainable code and efficient solutions, 
                        driven by a commitment to continuous learning and improvement.
                    </p>
                </div>
            </div>

            <div id="experience" className="w-full bg-white mt-16 py-16">
                <div className="max-w-4xl mx-auto px-8 md:px-24">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">Tech Stack</h3>
                    
                    {/* Tech Stack Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
                        {techStack.map((tech, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl shadow-md flex items-center justify-center p-4">
                                    <img
                                        src={tech.src}
                                        alt={`${tech.name} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="mt-2 text-sm font-medium text-gray-700">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;