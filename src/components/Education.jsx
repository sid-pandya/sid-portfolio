import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Master of Science in Computer Science",
            school: "California State University, East Bay",
            location: "Hayward, CA, USA",
            period: "2021 - 2023",
            color: "from-purple-500 to-pink-500"
        },
        {
            degree: "Bachelor of Engineering in Computer Engineering",
            school: "LDRP Institute of Technology and Research",
            location: "Gujarat, India",
            period: "2015 - 2019",
            color: "from-blue-500 to-cyan-500"
        }
    ];

    return (
        <section id="education" className="section">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass rounded-2xl p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <GraduationCap size={32} className="text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                <h4 className="text-purple-400 font-medium mb-4">{edu.school}</h4>

                                <div className="space-y-2 text-neutral-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-pink-400" />
                                        <span>{edu.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-blue-400" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
