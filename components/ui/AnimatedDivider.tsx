
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedDivider: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-12 pointer-events-none overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-champagne-500/5 rounded-full blur-[100px]" />

      {/* Left Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "30%", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-[1px] bg-gradient-to-l from-champagne-500/40 to-transparent"
      />

      {/* Center Piece */}
      <div className="relative mx-8">
        {/* Diamond */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "backOut" }}
          className="w-3 h-3 border border-champagne-500/60 bg-obsidian-950 relative z-10 box-border"
        />
        {/* Inner Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-champagne-400 rounded-full z-20"
        />
        {/* Pulse Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 2.5, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-3 h-3 border border-champagne-500/30 rotate-45"
        />
      </div>

      {/* Right Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "30%", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-[1px] bg-gradient-to-r from-champagne-500/40 to-transparent"
      />
    </div>
  );
};

export default AnimatedDivider;
