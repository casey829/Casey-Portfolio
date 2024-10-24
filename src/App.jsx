import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Placeholder components for other routes
const Home = () => <div>Home Page</div>;


function App() {
    return (
        <Router>
            <div className="App bg-[#DDD5CE]">
                <NavBar />
                <main className="mt-16"> 
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <About />
                                <Experience />
                                <Work />
                                <Contact />
                                <Footer />
                            </div>
                        } />
                        
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;