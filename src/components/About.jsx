import React from "react";

function About() {
    return (
        <div id="about" className="min-h-screen bg-[#DDD5CE] flex flex-col justify-center px-8 md:px-24 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-xl text-gray-600 font-medium">Hi, my name is</p>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Casey Kimamo</h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-700">A Software Engineer</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            I specialize in creating exceptional digital experiences that blend creativity, technology, and user-centric design. 
                            My current focus is on crafting accessible, human-centered products that not only meet user needs but also elevate 
                            their everyday experiences. I'm passionate about leveraging innovative solutions to make technology more intuitive, 
                            inclusive, and engaging for everyone.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="photo.jpg"
                            alt="a portfolio photo"
                            className="rounded-lg shadow-xl max-w-md w-full object-cover h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;