import React from "react";

function Experience() {
    return (
        <div id="experience" className="min-h-screen bg-[#DDD5CE] flex flex-col items-center justify-start pt-20 px-8 md:px-24">
            {/* Changed justify-center to justify-start and added specific top padding (pt-24) */}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">Experience</h1>
                
                {/* Decorative line under the heading */}
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
        </div>
    );
}

export default Experience;