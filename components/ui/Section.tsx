
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, badge, children, className = '' }) => {
  return (
    <section id={id} className={`py-32 relative overflow-hidden ${className}`}>
      {/* Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} 
      />
      
      {/* Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          {badge && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-gold-300 uppercase font-sans">
                {badge}
              </span>
            </motion.div>
          )}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-champagne-100/80 leading-relaxed font-serif italic">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex justify-center items-center gap-4 opacity-50">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-2 h-2 rotate-45 border border-gold-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export default Section;
