import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const journeyData = [
    {
        id: 1,
        type: "work",
        role: "System Development Engineer",
        org: "Amazon",
        period: "July 2024 - Present",
        description: "Architected Terraform-driven provisioning for EKS clusters and migrated caching layers to dedicated Redis clusters, reducing P99 API latency by 20% and improving service isolation.",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        id: 2,
        type: "work",
        role: "Software Engineer (DevOps & Build Infrastructure)",
        org: "Lucid Motors",
        period: "Oct 2023 - July 2024",
        description: "Spearheaded the migration of CI/CD pipelines to an internal Developer Platform using Docker and Kubernetes, reducing release cycles by 30% and enabling zero-downtime updates.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20"
    },
    {
        id: 3,
        type: "work",
        role: "Software Engineer (Platform Tools)",
        org: "DSK",
        period: "Feb 2023 - Sep 2023",
        description: "Built real-time monitoring dashboards with React and Node.js, integrating Okta for SSO and reducing response times by 25%.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        id: 4,
        type: "education",
        role: "M.S. in Computer Science",
        org: "California State University",
        period: "Jan 2021 - Dec 2022",
        description: "Specialized in Advanced Computing and Software Engineering.",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    },
    {
        id: 5,
        type: "work",
        role: "Software Engineer",
        org: "Arvaan Techno-Lab",
        period: "Aug 2019 - Nov 2020",
        description: "Engineered HIPAA-compliant healthcare microservices using Java Spring Boot, improving backend performance by 35%.",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        id: 6,
        type: "education",
        role: "B.E. in Computer Engineering",
        org: "LDRP-Institute of Technology and Research",
        period: "Aug 2015 - Aug 2019",
        description: "Foundation in Computer Science and Engineering principles.",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    }
];

const Experience = () => {
    return (
        <section className="relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                        A chronological timeline of my professional career and educational background.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Central Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent md:-ml-px"></div>

                    {journeyData.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative mb-12 md:mb-16 last:mb-0 md:flex items-center justify-between ${!isLeft ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-14 h-14 -ml-[0px] md:-ml-[28px] flex items-center justify-center z-10">
                                    <div className={`w-14 h-14 rounded-full border-4 border-white dark:border-[#030014] ${item.bg} backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                        {item.type === 'work' ? (
                                            <Briefcase size={20} className={item.color} />
                                        ) : (
                                            <GraduationCap size={20} className={item.color} />
                                        )}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="ml-20 md:ml-0 md:w-[45%] w-[calc(100%-5rem)]">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`glass p-6 md:p-8 rounded-2xl border ${item.border} hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 group relative overflow-hidden`}
                                    >
                                        {/* Hover Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                        <div className="relative z-10">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.bg} ${item.color} text-xs font-medium mb-4 font-mono`}>
                                                <Calendar size={12} />
                                                {item.period}
                                            </div>

                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1 font-mono">{item.role}</h3>
                                            <div className="text-neutral-600 dark:text-neutral-400 font-medium mb-4">{item.org}</div>

                                            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
