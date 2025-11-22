import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Cloud, Server, Database, Shield, Box, Terminal,
    Code2, Lock, Award, CheckCircle2
} from 'lucide-react';

const skillCategories = [
    {
        title: "Cloud & Infrastructure",
        icon: Cloud,
        color: "from-orange-400 to-red-500",
        skills: [
            { name: "AWS", details: "EKS, Lambda, S3, CloudWatch" },
            { name: "Kubernetes & Docker", details: "Orchestration & Containerization" },
            { name: "Terraform & Ansible", details: "Infrastructure as Code (IaC)" },
            { name: "Linux & Bash", details: "Shell Scripting & OS Internals" },
            { name: "CI/CD", details: "Jenkins, GitHub Actions, GitLab" }
        ]
    },
    {
        title: "Backend & Systems",
        icon: Server,
        color: "from-blue-400 to-indigo-500",
        skills: [
            { name: "Java & Spring Boot", details: "Microservices Architecture" },
            { name: "Python", details: "Flask, Django, Fast API" },
            { name: "Go (Golang)", details: "High-performance Systems" },
            { name: "Node.js & GraphQL", details: "Event-driven APIs" }
        ]
    },
    {
        title: "Frontend & UI",
        icon: Code2,
        color: "from-purple-400 to-pink-500",
        skills: [
            { name: "React.js", details: "Modern Hooks & Context" },
            { name: "Tailwind CSS", details: "Responsive Design System" },
            { name: "Framer Motion", details: "Advanced Animations" },
            { name: "TypeScript", details: "Type-safe Development" }
        ]
    },
    {
        title: "Data & Security",
        icon: Shield,
        color: "from-green-400 to-emerald-500",
        skills: [
            { name: "PostgreSQL & DynamoDB", details: "Relational & NoSQL" },
            { name: "Redis & Memcached", details: "Distributed Caching" },
            { name: "Okta & OAuth2", details: "Identity Management & Security" },
            { name: "Elasticsearch", details: "Log Analysis & Search" }
        ]
    }
];

const certifications = [
    "AWS Certified Cloud Practitioner",
    "Okta Certified Professional",
    "Okta Certified Administrator"
];

const SkillCategory = ({ category, index }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-mono">{category.title}</h3>
            </div>

            {/* Skills Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4"
            >
                {category.skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="group/skill relative"
                    >
                        <div className="flex items-start justify-between p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/5">
                            <div>
                                <div className="font-bold text-neutral-800 dark:text-neutral-200 mb-1 font-mono group-hover/skill:text-purple-600 dark:group-hover/skill:text-white transition-colors">
                                    {skill.name}
                                </div>
                                <div className="text-sm text-neutral-600 dark:text-neutral-500 font-mono group-hover/skill:text-neutral-500 dark:group-hover/skill:text-neutral-400 transition-colors">
                                    {skill.details}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="relative overflow-hidden w-full">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Technical Arsenal</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg px-4 font-mono">
                        Comprehensive toolset for building scalable, secure, and high-performance systems.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={category.title} category={category} index={index} />
                    ))}
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="glass rounded-3xl p-8 border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                                <Award size={16} className="text-yellow-400" />
                                <span className="text-sm font-medium text-yellow-400 font-mono">Professional Certifications</span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                                {certifications.map((cert, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-black/20 px-5 py-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                        <CheckCircle2 size={18} className="text-green-400" />
                                        <span className="font-medium text-neutral-200 font-mono text-sm sm:text-base">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
