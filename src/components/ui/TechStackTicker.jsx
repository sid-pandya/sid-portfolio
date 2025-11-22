import React from 'react';
import { motion } from 'framer-motion';

const TechStackTicker = ({ skills }) => {
    // Duplicate skills multiple times for seamless loop
    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <div className="w-full overflow-hidden rounded-lg border border-white/5 relative group">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0E27] via-[#0A0E27] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0E27] via-[#0A0E27] to-transparent z-10 pointer-events-none" />

            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />

            <motion.div
                className="flex gap-8 w-max py-4 px-4"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-sm font-mono whitespace-nowrap group/item"
                    >
                        <span className="text-accent-cyan group-hover/item:text-accent-purple transition-colors">
                            ./
                        </span>
                        <span className="text-secondary group-hover/item:text-primary transition-colors">
                            {skill.name}
                        </span>
                        <span className="text-tertiary text-xs">
                            [{skill.level}%]
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStackTicker;
