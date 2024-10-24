import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
    return (
        <div id="contact" className="text-center mt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Let's Connect and Create Magic Together! ✨
            </h1>
            <p className="text-lg md:text-xl mb-4">
                Impressed with my portfolio? Let's create something amazing! 🌟
            </p>
            <p className="text-lg md:text-xl mb-6">
                Feel the excitement? Go ahead—reach out, and let's make it happen!
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
                <a href="mailto:caseykimamo@gmail.com" className="text-3xl text-gray-700 hover:text-blue-600">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://github.com/casey829" className="text-3xl text-gray-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/casey-mwangi-802006214/" className="text-3xl text-gray-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://wa.me/254757473128" className="text-2xl text-gray-700 hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i>
               <span className="text-lg ml-2">+254787278749</span>
                </a>
            </div>
            
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                <a href="/My Resume.pdf" download="Your_Resume.pdf">
                    Download My Resume
                </a>
            </button>
        </div>
    );
}

export default Contact;
