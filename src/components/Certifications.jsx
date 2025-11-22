import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Star } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            name: "AWS Certified Cloud Practitioner",
            icon: Award,
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "Okta Certified Professional & Administrator",
            icon: Star,
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Google Python Development Certificate",
            icon: CheckCircle2,
            color: "from-pink-500 to-orange-500"
        }
    ];

    return (
        <section id="certifications" className="section">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {certs.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="glass rounded-2xl p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    <div className="relative z-10">
                                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                                            <Icon size={40} className="text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white leading-relaxed">{cert.name}</h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
