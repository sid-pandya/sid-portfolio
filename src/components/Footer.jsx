import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12 mt-0 relative z-10 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm font-mono">
                        © {new Date().getFullYear()} Sidhdharth Pandya. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/sid-pandya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/sidhdharth-pandya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:sidhdharth19pandya@gmail.com"
                            className="text-neutral-500 dark:text-neutral-400 hover:text-red-500 dark:hover:text-white transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
