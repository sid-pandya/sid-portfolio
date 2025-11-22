import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Star, GitFork } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: "Intelligent Music Genre Classifier",
        description: "A deep learning system capable of classifying audio tracks into genres with high accuracy. Built using Convolutional Neural Networks (CNNs) and deployed as a containerized microservice for scalability.",
        tags: ["Python", "TensorFlow", "Docker"],
        github: "https://github.com/sid-pandya",
        demo: null,
        stars: 12,
        forks: 4,
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        id: 2,
        title: "Fleet Telemetry ETL Pipeline",
        description: "High-throughput data pipeline designed to ingest, process, and store telemetry data from thousands of IoT devices. Leverages Apache Airflow for orchestration and AWS services for storage and analysis.",
        tags: ["AWS", "Apache Airflow", "Time-Series Data"],
        github: "https://github.com/sid-pandya",
        demo: null,
        stars: 8,
        forks: 2,
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 3,
        title: "Secure OTA Update Platform",
        description: "Distributed microservices architecture for delivering secure firmware updates to edge devices. Features OAuth2 authentication, rate limiting, and rollback capabilities to ensure reliability.",
        tags: ["Microservices", "OAuth2", "Rate Limiting"],
        github: "https://github.com/sid-pandya",
        demo: null,
        stars: 15,
        forks: 6,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 4,
        title: "Multi-Language React Dictionary",
        description: "A comprehensive dictionary application supporting 12 languages. Features real-time translation, phonetics, and a responsive UI. Built with React and modern state management for a seamless user experience.",
        tags: ["React", "12-Languages", "API Integration"],
        github: "https://github.com/sid-pandya",
        demo: null,
        stars: 24,
        forks: 9,
        gradient: "from-pink-500 to-rose-500"
    }
];

const Projects = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="gradient-text">Work</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                        A selection of projects demonstrating my expertise in software development and problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group w-full"
                        >
                            <div className="glass rounded-3xl overflow-hidden h-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-500 border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 relative w-full">
                                {/* Decorative Gradient Blob */}
                                <div className={`absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br ${project.gradient} opacity-10 blur-[60px] sm:blur-[80px] group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

                                <div className="p-6 sm:p-8 h-full flex flex-col relative z-10 w-full">
                                    <div className="flex justify-between items-start mb-4 sm:mb-6 gap-3 flex-wrap">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                            <Folder className="text-white" size={20} />
                                        </div>
                                        <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                                    title="View Demo"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                                title="View Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-words">
                                        {project.title}
                                    </h3>

                                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed flex-grow text-sm sm:text-base break-words overflow-hidden">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 sm:px-3 py-1 text-xs font-medium font-mono rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-500 pt-4 sm:pt-6 border-t border-black/5 dark:border-white/5 font-mono">
                                        <div className="flex items-center gap-2">
                                            <Star size={16} />
                                            <span>{project.stars}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <GitFork size={16} />
                                            <span>{project.forks}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/sid-pandya?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 dark:bg-white/5 hover:bg-neutral-800 dark:hover:bg-white/10 border border-transparent dark:border-white/10 text-white font-medium transition-all hover:scale-105 shadow-lg dark:shadow-none"
                    >
                        <Github size={20} />
                        View All Repositories
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
