import React from 'react';
import { motion } from 'framer-motion';

const StatusBadge = ({ status, className = "" }) => {
    const getStatusConfig = (status) => {
        const s = status.toLowerCase();
        if (s.includes('active') || s.includes('operational') || s.includes('success') || s.includes('deployed')) {
            return {
                color: '#10B981',
                bg: 'rgba(16, 185, 129, 0.1)',
                border: 'rgba(16, 185, 129, 0.3)',
                glow: '0 0 15px rgba(16, 185, 129, 0.3)'
            };
        }
        if (s.includes('processing') || s.includes('production')) {
            return {
                color: '#3B82F6',
                bg: 'rgba(59, 130, 246, 0.1)',
                border: 'rgba(59, 130, 246, 0.3)',
                glow: '0 0 15px rgba(59, 130, 246, 0.3)'
            };
        }
        if (s.includes('warning') || s.includes('archived')) {
            return {
                color: '#F59E0B',
                bg: 'rgba(245, 158, 11, 0.1)',
                border: 'rgba(245, 158, 11, 0.3)',
                glow: '0 0 15px rgba(245, 158, 11, 0.3)'
            };
        }
        return {
            color: '#94A3B8',
            bg: 'rgba(148, 163, 184, 0.1)',
            border: 'rgba(148, 163, 184, 0.3)',
            glow: 'none'
        };
    };

    const config = getStatusConfig(status);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            style={{
                background: config.bg,
                borderColor: config.border,
                color: config.color,
                boxShadow: config.glow
            }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono uppercase tracking-wider ${className}`}
        >
            <span className="relative flex h-2 w-2">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: config.color }}
                />
                <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: config.color }}
                />
            </span>
            {status}
        </motion.div>
    );
};

export default StatusBadge;
