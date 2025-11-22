import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ label, value, status = "neutral", delay = 0 }) => {
    const statusColors = {
        success: { border: '#10B981', glow: '0 0 20px rgba(16, 185, 129, 0.2)' },
        processing: { border: '#3B82F6', glow: '0 0 20px rgba(59, 130, 246, 0.2)' },
        warning: { border: '#F59E0B', glow: '0 0 20px rgba(245, 158, 11, 0.2)' },
        neutral: { border: '#64748B', glow: 'none' }
    };

    const config = statusColors[status];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-panel p-6 rounded-xl relative overflow-hidden group cursor-pointer"
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono text-secondary uppercase tracking-wider">
                        {label}
                    </span>
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{
                            backgroundColor: config.border,
                            boxShadow: config.glow
                        }}
                    />
                </div>

                <div className="text-3xl font-bold text-gradient mb-1 group-hover:scale-105 transition-transform">
                    {value}
                </div>

                {/* Subtle scan line effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                />
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-xl opacity-30" style={{ borderColor: config.border }} />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-xl opacity-30" style={{ borderColor: config.border }} />
        </motion.div>
    );
};

export default MetricCard;
