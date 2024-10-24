import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollWithOffset = (el) => {
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const navLinks = [
    { to: "/#about", text: "01.About" },
    { to: "/#experience", text: "02.Experience" },
    { to: "/#work", text: "03.Work" },
    { to: "/#contact", text: "04.Contact" },
  ];

  return (
    <nav className="bg-[#DDD5CE] w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" className="flex-shrink-0">
              <img
                src=""
                className="h-40 w-auto ml-10 lg:h-48"
                alt="logo"
              />
            </a>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:items-center space-x-4 mt-4 md:mt-0">
            {navLinks.map((link) => (
              <HashLink
                key={link.to}
                smooth
                to={link.to}
                scroll={el => scrollWithOffset(el)}
                className="text-black hover:text-white px-3 py-2 rounded-md text-2xl "
              >
                {link.text}
              </HashLink>
            ))}
            <a
              href="/My Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black border-2 border-black  hover:bg-cyan-800 hover:text-white px-4 py-2 rounded-md text-3xl font-medium transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <HashLink
                  key={link.to}
                  smooth
                  to={link.to}
                  scroll={el => scrollWithOffset(el)}
                  className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </HashLink>
              ))}
              <a
                href="/resume.pdf" // Update this path to your actual resume file
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                05.Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;