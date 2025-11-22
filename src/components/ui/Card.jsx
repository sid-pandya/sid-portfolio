import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', gradient = false, ...props }) => {
    return (
        <motion.div
            className={`glass rounded-2xl p-6 transition-all duration-300 ${className}`}
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {gradient && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
