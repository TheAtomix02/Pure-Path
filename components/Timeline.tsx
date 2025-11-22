
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'revelation' | 'gap' | 'compilation';
}

const events: TimelineEvent[] = [
  {
    year: "610 CE",
    title: "The First Revelation",
    description: "Prophet Muhammad receives the first verses of the Qur'an. The divine message begins to descend, prioritizing strict monotheism and justice.",
    type: 'revelation'
  },
  {
    year: "632 CE",
    title: "The Completion",
    description: "\"Today I have perfected your religion for you.\" (Qur'an 5:3). The Prophet passes away leaving a complete, written Qur'an. No additional sources exist.",
    type: 'revelation'
  },
  {
    year: "632 - 700 CE",
    title: "The Era of Prohibition",
    description: "The Four Caliphs actively prohibit the writing of hadith to prevent confusion with the Qur'an. They burn private collections of sayings to maintain the purity of the Book.",
    type: 'gap'
  },
  {
    year: "700 - 800 CE",
    title: "The Oral Tradition",
    description: "Political schisms lead to the fabrication of stories to support various sects. Narrative chains (Isnad) begin to form, relying on memory over centuries.",
    type: 'gap'
  },
  {
    year: "846 CE",
    title: "The Canonization",
    description: "Over 200 years after the Prophet, Imam Bukhari compiles his collection, filtering ~600,000 narrations down to ~7,000. The secondary source is born.",
    type: 'compilation'
  }
];

const TimelineNode = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const isLeft = index % 2 === 0;
  
  const getColors = (type: string) => {
    switch (type) {
      case 'revelation': return 'from-emerald-400 to-emerald-600 shadow-emerald-500/50';
      case 'gap': return 'from-gray-400 to-gray-600 shadow-gray-500/50';
      case 'compilation': return 'from-rose-400 to-rose-600 shadow-rose-500/50';
      default: return 'from-champagne-400 to-champagne-600';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className={`relative flex items-center justify-between md:justify-center mb-24 w-full ${isLeft ? 'flex-row-reverse md:flex-row' : ''}`}
    >
      {/* Spacer for Desktop Layout */}
      <div className="hidden md:block w-5/12" />

      {/* Central Node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 + 0.2 }}
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${getColors(event.type)} shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10`} 
        />
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
          className={`absolute w-8 h-8 rounded-full bg-gradient-to-br ${getColors(event.type)} animate-pulse`} 
        />
      </div>

      {/* Content Card */}
      <div className={`w-[calc(100%-3rem)] md:w-5/12 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
        <SpotlightCard className="group hover:-translate-y-2 transition-transform duration-700 border-opacity-50">
          <span className={`inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full border bg-white/5 font-sans ${
            event.type === 'revelation' ? 'text-emerald-400 border-emerald-500/30' : 
            event.type === 'compilation' ? 'text-rose-400 border-rose-500/30' : 
            'text-gray-400 border-gray-500/30'
          }`}>
            {event.type}
          </span>
          <h3 className="text-4xl font-cinzel font-bold text-white mb-2 leading-none">{event.year}</h3>
          <h4 className="text-xl font-cinzel text-champagne-200 mb-4 tracking-wide">{event.title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
            {event.description}
          </p>
        </SpotlightCard>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Central Line Track */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
      
      {/* Animated Filling Line */}
      <motion.div 
        style={{ height }}
        className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-champagne-400 via-champagne-600 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(197,146,71,0.8)] z-0"
      />

      <div className="relative z-10">
        {events.map((event, index) => (
          <TimelineNode key={index} event={event} index={index} />
        ))}
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-obsidian-950 to-transparent z-20" />
    </div>
  );
};

export default Timeline;
