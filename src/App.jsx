import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Code2, User, Briefcase, FolderGit2, Mail, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 300;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { id: 'home', icon: Code2, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'skills', icon: FolderGit2, label: 'Skills' },
        { id: 'experience', icon: Briefcase, label: 'Exp' },
        { id: 'projects', icon: FolderGit2, label: 'Work' },
        { id: 'contact', icon: Mail, label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen text-neutral-900 dark:text-white transition-colors duration-300 cursor-none relative overflow-hidden">


            {/* Custom Mouse Follower */}
            <motion.div
                className="fixed w-8 h-8 bg-purple-500/30 rounded-full pointer-events-none z-50 blur-sm hidden md:block"
                style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
            />
            <motion.div
                className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 hidden md:block"
                style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
            />

            {/* Floating Navbar */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
                <div className="glass rounded-full p-2 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl bg-white/10 dark:bg-black/20">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`relative p-3 rounded-full transition-all duration-300 ${activeSection === link.id
                                ? 'text-white'
                                : 'text-neutral-500 dark:text-neutral-400 hover:text-purple-500'
                                }`}
                        >
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">
                                <link.icon size={20} />
                            </span>
                        </button>
                    ))}

                    {/* Theme Toggle */}
                    <div className="w-px h-6 bg-neutral-200 dark:bg-white/10 mx-1"></div>
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main>
                <section id="home">
                    <Hero />
                </section>

                <section id="about" className="section">
                    <About />
                </section>

                <section id="skills" className="section">
                    <Skills />
                </section>

                <section id="experience" className="section">
                    <Experience />
                </section>

                <section id="projects" className="section">
                    <Projects />
                </section>

                <section id="contact" className="section">
                    <Contact />
                </section>
            </main>


            <Footer />
        </div>
    );
};

export default App;
