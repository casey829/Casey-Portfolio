import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';

// Placeholder components for other routes
const Home = () => <div>Home Page</div>;
const Experience = () => <div>Experience Page</div>;
const Work = () => <div>Work Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
    return (
        <Router>
            <div className="App bg-[#DDD5CE]">
                <NavBar />
                <main className="mt-16"> {/* Add margin-top to account for navbar */}
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <About /> {/* About section will be shown on the home page */}
                                {/* Add other sections here as they're developed */}
                            </div>
                        } />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;