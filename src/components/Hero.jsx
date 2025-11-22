import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Mail, Sparkles, Code2 } from 'lucide-react';

import avatar from '../assets/avatar_animated.png';

const Hero = () => {
    const roles = ["Software Engineer", "System Development Engineer", "Cloud Architect", "Full Stack Developer", "DevOps Engineer"];
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[currentRole];

            if (isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
        }
    };

    return (
        <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
            {/* Enhanced Animated Background Orbs - Contained */}
            <motion.div
                className="absolute top-0 left-0 w-[min(400px,60vw)] h-[min(400px,60vw)] rounded-full blur-[80px] sm:blur-[100px] opacity-20 sm:opacity-30 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899)' }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[min(500px,70vw)] h-[min(500px,70vw)] rounded-full blur-[80px] sm:blur-[100px] opacity-20 sm:opacity-30 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center w-full"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-xs sm:text-sm font-medium font-mono bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            🟢 Available for opportunities | Ex- Amazon | Ex- Lucid Motors
                        </span>
                    </motion.div>

                    {/* Greeting */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-lg sm:text-xl md:text-2xl text-purple-400 font-medium mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
                            <Code2 size={20} className="inline-block flex-shrink-0" />
                            Hello, I'm
                        </h2>
                    </motion.div>

                    {/* Avatar */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 sm:mb-8 relative inline-block"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto">
                            <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 relative group">
                                <img
                                    src={avatar}
                                    alt="Sidhdharth Pandya"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                        <motion.div
                            className="absolute bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-[#0A0E27] z-20"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 tracking-tight font-display leading-tight px-4"
                    >
                        <span className="gradient-text break-words">Sidhdharth Pandya</span>
                    </motion.h1>

                    {/* Role Title (Replaces Typing Animation) */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 sm:mb-8 px-4"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold break-words max-w-full">
                            <span className="text-neutral-900 dark:text-white">{displayText}</span>
                            <motion.span
                                className="text-purple-400 ml-1"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            >
                                |
                            </motion.span>
                        </h2>
                    </motion.div>

                    {/* Description / Sub-Headline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-6 leading-relaxed px-4"
                    >
                        I build high-performance applications and the scalable infrastructure that powers them.
                    </motion.p>

                    {/* Tagline */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 sm:mb-12 px-4"
                    >
                        <p className="text-purple-400 font-mono text-xs sm:text-sm md:text-base font-medium tracking-wide">
                            Distributed Systems • Software Development • DevOps & Automation
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
                    >
                        <motion.a
                            href="#projects"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm sm:text-base"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View My Work
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass border border-white/20 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm sm:text-base"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Download Resume
                            <Download className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-3 sm:gap-4 px-4"
                    >
                        <motion.a
                            href="https://linkedin.com/in/sidhdharth-pandya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass hover:bg-white/10 flex items-center justify-center group transition-all"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/sid-pandya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass hover:bg-white/10 flex items-center justify-center group transition-all"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={20} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </motion.a>
                        <motion.a
                            href="mailto:sidhdharth19pandya@gmail.com"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass hover:bg-white/10 flex items-center justify-center group transition-all"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={20} className="text-pink-400 group-hover:text-pink-300 transition-colors" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.div
                    className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.div
                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
